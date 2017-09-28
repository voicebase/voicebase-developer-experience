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
          showComingSoon: '@'
        },
        controller: function($scope) {
          function isInLegacyHybridMode() {
            return voicebaseTokensApi.isInLegacyHybridMode();
          }

          $scope.isSignedIn = function() {
            return voicebaseTokensApi.isSignedIn();
          };

          $scope.isSignedOut = function() {
            return ! $scope.isSignedIn();
          };

          $scope.showNativeKeyManager = function() {
            return ! isInLegacyHybridMode() && $scope.showKeyManager;
          };

          $scope.showLegacyHybridKeyManager = function() {
            return isInLegacyHybridMode() && $scope.showKeyManager;
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
            $window.open('http://support.voicebase.com/');
          };

          $scope.loadConsole = function() {
            $location.path('/console');
          };

          $scope.loadConsoleV3 = function() {
            $window.open('http://v3-console.voicebase.com');
          };

          $scope.loadDoc = function() {
            $window.open('http://voicebase.readthedocs.io/en/v2-beta/');
            //$window.location.href = 'http://voicebase.readthedocs.io/en/v2-beta/';
          };

          $scope.loadDocV3 = function() {
            $window.open('http://voicebase.readthedocs.io/en/v3/');
            //$window.location.href = 'http://voicebase.readthedocs.io/en/v3/';
          };
        }
      };
    }
  ]);

})();
