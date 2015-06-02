(function () {
  "use strict";

  var keywordsSpottingWidget = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keywords-spotting-widget.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keywordsSpottingCtrl',
      controller: function() {

      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
