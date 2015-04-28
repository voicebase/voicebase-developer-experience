(function () {
  'use strict';

  var scrollToBottom = function () {
    return {
      restrict: 'A',
      scope: {
        trigger: '=scrollToBottom'
      },
      link: function (scope, elem) {
        scope.$watch('trigger', function () {
          elem.scrollTop(elem[0].scrollHeight);
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('scrollToBottom', scrollToBottom);

})();
