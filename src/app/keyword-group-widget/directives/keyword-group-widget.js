(function () {
  'use strict';

  var keywordGroupWidget = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-widget.tpl.html',
      replace: true,
      controller: function($scope) {
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupWidget', keywordGroupWidget);

})();
