(function () {
  'use strict';

  var keywordGroupForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-form.tpl.html',
      replace: true,
      scope: {
        keywordGroup: '='
      },
      controller: function($scope) {
        $scope.addKeyword = function() {
          $scope.keywordGroup.keywords.push('');
        };

        $scope.removeKeyword = function(index) {
          $scope.keywordGroup.keywords.splice(index, 1);
        };
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupForm', keywordGroupForm);

})();
