(function () {
  'use strict';

  angular.module('dagModule').directive('d3DagGraph', [
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
            var g = new dagreD3.graphlib.Graph({compound:true})
              .setGraph({})
              .setDefaultEdgeLabel(function() { return {}; });

// Here we're setting the nodes
            g.setNode('a', {label: 'A'});
            g.setNode('b', {label: 'B'});
            g.setNode('c', {label: 'C'});
            g.setNode('d', {label: 'D'});
            g.setNode('e', {label: 'E'});
            g.setNode('f', {label: 'F'});
            g.setNode('g', {label: 'G'});
            g.setNode('group', {label: 'Group', clusterLabelPos: 'top', style: 'fill: #d3d7e8'});
            g.setNode('top_group', {label: 'Top Group', clusterLabelPos: 'bottom', style: 'fill: #ffd47f'});
            g.setNode('bottom_group', {label: 'Bottom Group', style: 'fill: #5f9488'});

// Set the parents to define which nodes belong to which cluster
            g.setParent('top_group', 'group');
            g.setParent('bottom_group', 'group');
            g.setParent('b', 'top_group');
            g.setParent('c', 'bottom_group');
            g.setParent('d', 'bottom_group');
            g.setParent('e', 'bottom_group');
            g.setParent('f', 'bottom_group');

// Set up edges, no special attributes.
            g.setEdge('a', 'b');
            g.setEdge('b', 'c');
            g.setEdge('b', 'd');
            g.setEdge('b', 'e');
            g.setEdge('b', 'f');
            g.setEdge('b', 'g');

            g.nodes().forEach(function(v) {
              var node = g.node(v);
              // Round the corners of the nodes
              node.rx = node.ry = 5;
            });


// Create the renderer
            var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
            var svg = d3.select('svg'),
              svgGroup = svg.append('g');

// Run the renderer. This is what draws the final graph.
            render(d3.select('svg g'), g);

// Center the graph
            var xCenterOffset = (jQuery(svg[0]).width() - g.graph().width) / 2;
            svgGroup.attr('transform', 'translate(' + xCenterOffset + ', 20)');
            svg.attr('height', g.graph().height + 40);

            d3.selectAll('.cluster').on('click', function() {
                console.log('selected cluster');
            });
          };

          init();
        }

      };
    }
  ]);

})();

