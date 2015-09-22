(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('portalPageCtrl', ['$scope', '$timeout', '$location', '$window', 'voicebaseTokensApi', function($scope, $timeout, $location, $window, voicebaseTokensApi) {
      $scope.isSkipping = false;

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

    }]);
})();
