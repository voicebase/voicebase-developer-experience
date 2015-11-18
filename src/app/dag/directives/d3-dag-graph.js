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
            parseTasks(tasks);
            var phases = initNodesAndPhases(tasks);
            initEdges(tasks);
            initClusters(phases);

            var svg = d3.select('svg');
            var svgGroup = svg.append('g');
            DagreFlow.init({
              svg: svg,
              graph: me.graph,
              shortLabels: true
            });
            DagreFlow.render();
          };

          var parseTasks = function (tasks) {
            /*jshint loopfunc: true */
            console.log(tasks);
            var levels = getLevels(tasks);

            levels.forEach(function (level, num) {
              var completedTasks = 0;
              var boxTask = jQuery.extend(true, {}, tasks[level[0]]);
              boxTask.longLabel = true;
              var firstBoxTask = jQuery.extend(true, {}, boxTask);
              var lastBoxTask = jQuery.extend(true, {}, boxTask);
              firstBoxTask.taskId = 'box-level' + num + '-0';
              boxTask.taskId = 'box-level' + num + '-1';
              lastBoxTask.taskId = 'box-level' + num + '-2';
              boxTask.status = 'running';

              for (var i = 0; i < level.length; i++) {
                var levelTaskId = level[i];
                var levelTask = tasks[levelTaskId];
                if(levelTask.status === 'completed') {
                  completedTasks++;
                }
                var index;
                boxTask.dependents.forEach(function (parentId) {
                  var parent = tasks[parentId];
                  index = parent.dependencies.indexOf(levelTaskId);
                  parent.dependencies.splice(index, 1);
                });
                boxTask.dependencies.forEach(function (dependencyId) {
                  var child = tasks[dependencyId];
                  index = child.dependents.indexOf(levelTaskId);
                  child.dependents.splice(index, 1);
                });
                delete tasks[levelTaskId];
              }

              boxTask.dependents.forEach(function (parentId) {
                tasks[parentId].dependencies.push(firstBoxTask.taskId, boxTask.taskId, lastBoxTask.taskId);
              });
              boxTask.dependencies.forEach(function (dependencyId) {
                tasks[dependencyId].dependents.push(firstBoxTask.taskId, boxTask.taskId, lastBoxTask.taskId);
              });
              firstBoxTask.label = 'First';
              lastBoxTask.label = 'Last';
              boxTask.label = '' + completedTasks + '/' + level.length + ' complete';
              firstBoxTask.status = (completedTasks > 0) ? 'completed' : 'pending';
              lastBoxTask.status = (completedTasks === level.length) ? 'completed' : 'pending';

              tasks[firstBoxTask.taskId] = firstBoxTask;
              tasks[boxTask.taskId] = boxTask;
              tasks[lastBoxTask.taskId] = lastBoxTask;
            });

            return tasks;
          };

          var getLevels = function (tasks) {
            /*jshint loopfunc: true */
            var levelLength = 5;
            var levels = [];
            for (var taskId in tasks) {
              var task = tasks[taskId];

              var filterLevel = Object.keys(tasks).filter(function (nodeId) {
                return angular.equals(tasks[nodeId].dependencies, task.dependencies) && angular.equals(tasks[nodeId].dependents, task.dependents);
              });

              var matchLevel = levels.filter(function (level) {
                return angular.equals(filterLevel, level);
              });

              if(matchLevel.length === 0 && filterLevel.length > levelLength - 1) {
                levels.push(filterLevel);
              }
            }
            return levels;
          };

          var initNodesAndPhases = function (tasks) {
            var phases = {};
            for (var taskId in tasks) {
              if(tasks.hasOwnProperty(taskId)) {
                var task = tasks[taskId];
                var label = task.label || taskId;
                me.graph.setNode(taskId, {
                  label: label,
                  status: getStatus(task),
                  shortLabel: (task.longLabel) ? false : true
                });

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

