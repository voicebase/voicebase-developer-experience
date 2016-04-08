voicebasePortal.Decorators = (function (Decorators) {
  'use strict';

  Decorators.voicebaseSignAuth0 = function ($provide) {
    $provide.decorator('voicebaseSignDirective', function ($delegate, $controller, $compile, voicebaseTokensApi, auth0Api) {
      var directive = $delegate[0];

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope, $location, $anchorScroll) {
        angular.extend(this, $controller(controllerOrigin, {
          $scope: $scope,
          $location: $location,
          voicebaseTokensApi: voicebaseTokensApi,
          auth0Api: auth0Api
        }));

        var _signOut = $scope.signOut;
        $scope.signOut = function() {
          _signOut.apply(this);
          auth0Api.signOut();
        };

      };

      return $delegate;
    });

  };

  return Decorators;

})(voicebasePortal.Decorators || {});
