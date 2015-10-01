(function () {
  'use strict';

  var voicebaseTokens = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/voicebase-tokens.tpl.html',
      replace: true,
      scope: {
        token: '='
      },
      controller: function($scope, voicebaseTokensApi) {

        $scope.isLoaded = false;
        $scope.tokens = [];
        $scope.selectedToken = null;

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function() {
          return voicebaseTokensApi.getTokensObj();
        }, function(tokensData) {
            initTokens(tokensData);
        });

        $scope.$watch(function() {
          return voicebaseTokensApi.getCurrentToken();
        }, function(currentToken) {
            $scope.selectedToken = currentToken;
        });

        var initTokens = function(tokensData) {
          $scope.isLoaded = false;
          if(tokensData) {
            $scope.tokens = tokensData.tokens;
          }
          else {
            $scope.tokens = [];
          }
        };

        $scope.tokenChange = function(_selectedToken) {
          voicebaseTokensApi.setCurrentToken(_selectedToken);
        };

      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('voicebaseTokens', voicebaseTokens);
})();
