(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('portalNavbarCtrl', ['$scope', '$location', function($scope, $location) {

      $scope.loadMain = function(event) {
        event.preventDefault();
        $location.path('/portal');
      };

    }]);
})();
