(function () {
  'use strict';

  angular.module('dagModule').directive('dagGraph', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'dag/directives/dag-graph.tpl.html',
        scope: {
        },
        controller: function ($scope) {
          $scope.nodes = [];
          $scope.edges = [];

          var init = function () {
            $scope.clusters = [
              {id: 1},
              {id: 2},
              {id: 3}
            ];

            $scope.nodes = [
              {id: 1, label: 'Task 1'},
              {id: 2, label: 'Task 2'},
              {id: 3, label: 'Task 3', clusterIds: [1]},
              {id: 4, label: 'Task 4', clusterIds: [1]},
              {id: 5, label: 'Task 5', clusterIds: [1, 3]},
              {id: 6, label: 'Task 6', clusterIds: [1, 3]},
              {id: 7, label: 'Task 7', clusterIds: [1, 3]},
              {id: 8, label: 'Task 8', clusterIds: [2]},
              {id: 9, label: 'Task 9', clusterIds: [2]},
              {id: 10, label: 'Task 10', clusterIds: [2]},
              {id: 11, label: 'Task 11'}
            ];

            $scope.edges = [
              {from: 1, to: 2},
              {from: 2, to: 3},
              {from: 3, to: 4},
              {from: 4, to: 5},
              {from: 4, to: 6},
              {from: 5, to: 7},
              {from: 6, to: 7},
              {from: 2, to: 8},
              {from: 2, to: 9},
              {from: 8, to: 10},
              {from: 9, to: 10},
              {from: 10, to: 11},
              {from: 7, to: 11}
            ];

            $scope.nodes.forEach(function (node) {
              node.shape = 'box';
              node.font = '18px';
              node.fixed = true;
            });

            drawGraph();
          };

          var drawGraph = function () {
            var nodes = new vis.DataSet($scope.nodes);
            var edges = new vis.DataSet($scope.edges);

            var container = jQuery('.graph-network')[0];
            var data = {
              nodes: nodes,
              edges: edges
            };
            var options = {
              width: '100%',
              height: '500px',
              physics: {
                enabled: false
              },
              edges: {
                arrows: 'to'
              },
              layout: {
                randomSeed: 1,
                hierarchical: {
                  enabled: true,
                  sortMethod: 'directed',
                  direction: 'UD'
                }
              }
            };
            var network = new vis.Network(container, data, options);
            network.on('selectNode', function(params) {
              if (params.nodes.length === 1) {
                if (network.isCluster(params.nodes[0]) === true) {
                  network.openCluster(params.nodes[0]);
                }
              }
            });

            network.on('context', function (params) {
              //a = 0;
            });

            $scope.clusters.forEach(function (cluster) {
              var clusterOptionsByData = {
                joinCondition: function (nodeOptions) {
                  return nodeOptions.clusterIds && nodeOptions.clusterIds.indexOf(cluster.id) !== -1;
                },
                processProperties: function (clusterOptions, childNodes) {
                  clusterOptions.label = '[ Cluster #' + cluster.id + ']';
                  return clusterOptions;
                },
                clusterNodeProperties: {borderWidth: 3, shape: 'box', font: {size: 30}}
              };
              network.cluster(clusterOptionsByData);
            });
          };

          init();
        }

      };
    }
  ]);

})();

