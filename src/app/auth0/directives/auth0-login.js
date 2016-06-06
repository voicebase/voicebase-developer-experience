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
            getApiKey(response);
          }
          else {
            $timeout(function () {
              $location.path('/confirm');
            }, 100);
          }
        };

        var getApiKey = function (response) {
          auth0Api.createAuth0ApiKey(response.token)
            .then(function (voicebaseToken) {
              voicebaseTokensApi.setNeedRemember(true);
              voicebaseTokensApi.setToken(voicebaseToken);
              loadPortal();
            }, loginError);
        };

        var loginError = function (error) {
          console.log(error);
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
