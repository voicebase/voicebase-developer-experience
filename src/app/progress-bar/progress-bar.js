(function () {
  'use strict';

  var progressBar = function() {
    return {
      restrict: 'E',
      scope: {
        loaded: '=loaded',
        barClass: '@barClass',
        completedClass: '=?'
      },
      transclude: true,
      link: function (scope, elem, attrs) {

        scope.completedClass = (scope.completedClass) || 'progress-bar-success';
        var total = 100;
        scope.$watch('loaded', function () {
          var progress = scope.loaded / total;
          if (progress >= 1) {
            jQuery(elem).find('.progress-bar').removeClass(scope.barClass).addClass(scope.completedClass);
          }
          else if (progress < 1) {
            jQuery(elem).find('.progress-bar').removeClass(scope.completedClass);
          }

        });

      },
      template:
      '<div class="progress">'+
      '   <div class="progress-bar {{barClass}}" title="{{loaded | number:0 }}%" style="width:{{loaded}}%;">{{loaded | number:0}} %</div>' +
      '</div>'
    };
  };

  angular.module('progressBarModule', []);

  angular.module('progressBarModule')
    .directive('progressBar', progressBar);

})();
