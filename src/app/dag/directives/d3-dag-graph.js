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
          }, function (newJob, oldJob) {
            me.compareJobs(newJob, oldJob);
          });

          me.compareJobs = function (newJob, oldJob) {
            // if jobs are equal - not render
            if(angular.equals(newJob, oldJob)) {
              return false;
            }

            // render first time
            if(newJob && !oldJob) {
              me.renderGraph(newJob);
              return false;
            }

            // if jobs structures are different - rerender
            var newJobKeys = Object.keys(newJob.tasks);
            var oldJobKeys = Object.keys(oldJob.tasks);
            if(!angular.equals(newJobKeys, oldJobKeys)) {
              me.renderGraph(newJob);
              return false;
            }

            // if structures are equal and tasks have different statuses - update statuses
            var changedTasks = [];
            newJobKeys.forEach(function (key) {
              if(newJob.tasks[key].status !== oldJob.tasks[key].status) {
                changedTasks.push(key);
              }
            });

            changedTasks.forEach(function (taskKey) {
              var status = getStatus(newJob.tasks[taskKey]);
              DagreFlow.setNodeStatus(taskKey, status);
            });
            return false;
          };

          me.renderGraph = function (job) {
            me.job = job;
            $timeout(function () {
              me.renderJob();
            }, 0);
          };

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
            DagreFlow.init(svg, me.graph, {
              shortLabels: true
            });
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
            else if(task.status === 'completed') {
              status = 'SUCCESS';
            }
            else if(task.status === 'started') {
              status = 'RUNNING';
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

