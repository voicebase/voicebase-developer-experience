(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('portalPageCtrl', ['$scope', '$timeout', '$location', 'voicebaseTokensApi', function($scope, $timeout, $location, voicebaseTokensApi) {
      $scope.isSkipping = false;

      var tokenData = voicebaseTokensApi.getCurrentToken();
      $scope.isLogin = (tokenData) ? true : false;


      $scope.loadConsole = function() {
        $location.path('/console');
      };

      $scope.loadKeywordsGroupApp = function() {
        $location.path('/keywords-groups');
      };

    }]);
})();
