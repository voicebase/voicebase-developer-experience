(function () {
  'use strict';

  var Auth0Login = function() {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-login.tpl.html',
      replace: false,
      controller: function($scope, $http, $location, $timeout, store, auth0Api, voicebaseTokensApi) {
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
            updateHubSpot(response);

            $timeout(function () {
              $location.path('/confirm');
            }, 100);
          }
        };

        var updateHubSpot = function (response) {
          var url = 'https://forms.hubspot.com/uploads/form/v2/1701619/';
          var hubSpotFormId = '94e0187f-8000-44a2-922a-f11f815def1f';
          var location = window.location.toString();
          var companyPrefix = getCompanyPrefix(location);
          var urlHubSpot = url.concat(hubSpotFormId,
            '?account_status=', 'pending', 
            '&email=', encodeURIComponent(response.profile.email),
            '&company=', encodeURIComponent(companyPrefix+response.profile.user_metadata.account) 
          );

          // Post user's account information to HubSpot
          $http({
            method: 'POST',
            url: urlHubSpot,
            header: 'Content-Type: application/x-www-form-urlencoded'
          });
        }

        var getCompanyPrefix = function (location) {
          var envs = ['localhost', 'dev', 'qa', 'preprod'];
          var length = envs.length;
          for (var i=0;i<length;i++) {
            var index = location.search(envs[i]);
            if (index>=0) {
              return envs[i]+'_';
            }
          }
          return '';
        }

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
          auth0Api.createAuth0ApiKey(auth0Token, true).then(setToken, loginError);
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
