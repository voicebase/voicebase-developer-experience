(function () {
  'use strict';

  var scrollToTop = function () {
    return {
      restrict: 'A',
      scope: {
        trigger: '=scrollToTop'
      },
      link: function (scope, elem) {
        scope.$watch('trigger', function () {
          elem[0].scrollTop = 0;
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('scrollToTop', scrollToTop);

})();
