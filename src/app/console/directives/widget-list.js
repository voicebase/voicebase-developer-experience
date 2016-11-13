(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp').directive('widgetList', [
    '$window',
    '$location',
    'voicebaseTokensApi',
    function ($window, $location, voicebaseTokensApi) {
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
          showDag: '@',
          showComingSoon: '@'
        },
        controller: function($scope) {
          function isInLegacyHybridMode() {
            var result = voicebaseTokensApi.isInLegacyHybridMode();
            console.log('isInLegacyHybridMode', result);
            return result;
          }

          $scope.showNativeKeyManager = function() {
            return ! isInLegacyHybridMode() && $scope.showKeyManager;
          }

          $scope.showLegacyHybridKeyManager = function() {
            return isInLegacyHybridMode() && $scope.showKeyManager;
          }

          $scope.loadConsole = function() {
            $location.path('/console');
          };

          $scope.loadKeywordsGroupApp = function() {
            $location.path('/keywords-groups');
          };

          $scope.loadKeyManager = function() {
            $location.path('/key-manager');
          };

          $scope.loadLegacyKeyManager = function() {
            $location.path('/legacy-key-manager');
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

          $scope.loadDag = function() {
            $location.path('/dag');
          };
        }
      };
    }
  ]);

})();

