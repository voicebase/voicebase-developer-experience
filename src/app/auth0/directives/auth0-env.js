(function () {
  'use strict';

  angular.module('voicebaseAuth0Module').directive('auth0Env', [
    'auth0Api',
    function (auth0Api) {
      return {
        restrict: 'E',
        scope: {
          domain: '@',
          clientId: '@'
        },
        link: function (scope) {
          auth0Api.setEnv(scope.domain, scope.clientId);
        }
      };
    }
  ]);

})();
