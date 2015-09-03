(function () {
  'use strict';

  var predictions = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/predictions.tpl.html',
      scope: {
        predictionsList: '='
      },
      controllerAs: 'predictionsCtrl',
      controller: function ($scope) {
        var me = this;

        if($scope.predictionsList && $scope.predictionsList.latest && $scope.predictionsList.latest.predictions) {
          me.predictions = $scope.predictionsList.latest.predictions;
        }
        else {
          me.predictions = [];
        }
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('predictionsTable', predictions);

})();

