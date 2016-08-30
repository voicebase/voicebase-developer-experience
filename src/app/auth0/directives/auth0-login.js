(function () {
  'use strict';

  var Auth0Login = function() {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-login.tpl.html',
      replace: false,
      controller: function($scope, $location, $timeout, store, auth0Api, voicebaseTokensApi) {
        $scope.$on('auth0SignIn', function(e, credentials) {
          if (credentials.token && credentials.profile) {
            loginSuccess(credentials);
          }
          else if (credentials.error) {
            loginError(credentials.error);
          }
        });

        var loginSuccess = function (response) {
          if (response.profile.email_verified) {
            // getApiKey(response);
            createToken(response.token);
          }
          else {
            $timeout(function () {
              $location.path('/confirm');
            }, 100);
          }
        };

        var getApiKey = function (response) {
          auth0Api.getApiKeys(response.token)
            .then(function (voicebaseTokens) {
              if (voicebaseTokens.length > 0) {
                setToken(voicebaseTokens[0]);
              }
              else {
                createToken(response.token);
              }
            }, loginError);
        };

        var createToken = function (auth0Token) {
          auth0Api.createAuth0ApiKey(auth0Token).then(setToken, loginError);
        };

        var setToken = function (token) {
          voicebaseTokensApi.setNeedRemember(true);
          voicebaseTokensApi.setToken(token);
          loadPortal();
        };

        var loginError = function (error) {
          console.error(error);
        };

        var loadPortal = function() {
          $location.path('/portal');
        };

        auth0Api.signIn();
      }

    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0Login', Auth0Login);

})();
