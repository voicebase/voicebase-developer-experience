(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('loginPageCtrl', ['$scope', '$timeout', '$location', 'auth0Api', function($scope, $timeout, $location, auth0Api) {
console.log('loginPageCtrl' + $location.path())
      $scope.isSkipping = false;
      if (String($location.path()).startsWith('/login')) {
        auth0Api.dropLock()
      }

      $scope.skip = function(event) {
        event.preventDefault();
        $scope.isSkipping = true;
        $timeout(function() {
          $location.path('/portal');
        }, 100);
      };
    }]);
})();
