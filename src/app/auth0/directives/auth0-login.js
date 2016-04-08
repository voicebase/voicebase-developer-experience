(function () {
  'use strict';

  var Auth0Login = function() {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-login.tpl.html',
      replace: false,
      controller: function($scope, $location, store, auth, auth0Api, voicebaseTokensApi) {
        $scope.isLoaded = false;

        $scope.auth0SignIn = function () {
          $scope.isLoaded = true;
          auth0Api.signIn().then(loginSuccess, loginError);
        };

        var loginSuccess = function (response) {
          auth0Api.createAuth0ApiKey(response.token)
            .then(function (voicebaseToken) {
              voicebaseTokensApi.setNeedRemember(true);
              voicebaseTokensApi.setToken(voicebaseToken);
              $scope.isLoaded = false;
              loadPortal();
            }, loginError);
        };

        var loginError = function (error) {
          $scope.isLoaded = false;
          console.log(error);
        };

        var loadPortal = function() {
          $location.path('/portal');
        };

      }

    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0Login', Auth0Login);

})();
