(function () {
  'use strict';

  angular.module('dagModule').directive('d3DagGraph', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'dag/directives/dag-graph.tpl.html',
        scope: {},
        controllerAs: 'dagCtrl',
        controller: function ($scope, $timeout, jobApi) {
          var me = this;

          me.job = null;
          me.graph = null;

          $scope.$watch(function () {
            return jobApi.getActiveJob();
          }, function (job) {
            me.job = job;
            $timeout(function () {
              me.renderJob();
            }, 0);
          });

          me.renderJob = function () {
            if(!me.job) {
              return false;
            }

            me.graph = new dagreD3.graphlib.Graph({compound:true})
              .setGraph({})
              .setDefaultEdgeLabel(function() { return {}; });

            var tasks = me.job.tasks;
            var phases = initNodesAndPhases(tasks);
            initEdges(tasks);
            initClusters(phases);

            var svg = d3.select('svg');
            var svgGroup = svg.append('g');
            DagreFlow.init(svg, me.graph);
            DagreFlow.render();
          };

          var initNodesAndPhases = function (tasks) {
            var phases = {};
            for (var taskId in tasks) {
              if(tasks.hasOwnProperty(taskId)) {
                var task = tasks[taskId];
                createNode(taskId, getStatus(task));
                if(!phases[task.phase]) {
                  phases[task.phase] = {name: '', contents: []};
                }
                phases[task.phase].name = task.display;
                phases[task.phase].contents.push(taskId);
              }
            }
            return phases;
          };

          var initEdges = function (tasks) {
            for (var taskId in tasks) {
              if(tasks.hasOwnProperty(taskId)) {
                var task = tasks[taskId];
                for (var i = 0; i < task.dependents.length; i++) {
                  var childId = task.dependents[i];
                  var child = me.job.tasks[childId];
                  if (child) {
                    me.graph.setEdge(taskId, childId);
                  }
                }
              }
            }
          };

          var initClusters = function (phases) {
            for (var phaseId in phases) {
              if(phases.hasOwnProperty(phaseId)) {
                var phase = phases[phaseId];
                me.graph.setNode(phaseId, {
                  label: phase.name
                });
                for (var i = 0; i < phase.contents.length; i++) {
                  var childId = phase.contents[i];
                  me.graph.setParent(childId, phaseId);
                }
              }
            }
          };

          var createNode = function (taskId, status) {
            me.graph.setNode(taskId, {
              label: taskId,
              status: status
            });
          };

          var getStatus = function (task) {
            var status = 'PENDING';
            if(task.status === 'finished') {
              status = 'SUCCESS';
            }
            else if(task.status === 'running') {
              status = 'RUNNING';
            }
            else if(task.status === 'failed') {
              status = 'FAILED';
            }
            else {
              status = 'PENDING';
            }
            return status;
          };

        }

      };
    }
  ]);

})();

