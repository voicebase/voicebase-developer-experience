(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp').directive('widgetList', [
    '$window',
    '$location',
    function ($window, $location) {
      return {
        restrict: 'E',
        templateUrl: 'console/directives/widget-list.tpl.html',
        replace: false,
        scope: {
          showConsole: '@',
          showDoc: '@',
          showKeywordsGroups: '@',
          showKeywordsSpotting: '@',
          showSupport: '@',
          showMediaBrowser: '@',
          showKeyManager: '@',
          showComingSoon: '@'
        },
        controller: function($scope) {
          $scope.loadConsole = function() {
            $location.path('/console');
          };

          $scope.loadKeywordsGroupApp = function() {
            $location.path('/keywords-groups');
          };

          $scope.loadKeyManager = function() {
            $location.path('/key-manager');
          };

          $scope.loadMediaBrowser = function() {
            $location.path('/media-browser');
          };

          $scope.loadKeywordsSpottingApp = function() {
            $location.path('/keywords-spotting');
          };

          $scope.redirectToSupport = function() {
            $window.open('http://www.voicebase.com/developers/');
          };

          $scope.loadDoc = function() {
            $location.path('/documentation');
          };
        }
      };
    }
  ]);

})();

