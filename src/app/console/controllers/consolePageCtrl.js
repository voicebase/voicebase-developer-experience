(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('consolePageCtrl', ['$scope', '$sce', 'voicebaseUrl', function($scope, $sce, voicebaseUrl) {
      $scope.ramlUrl = $sce.trustAsResourceUrl(voicebaseUrl.getRamlUrl());
    }]);
})();
