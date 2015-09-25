(function () {
  'use strict';

  angular.module('voicebaseTokensModule').directive('voicebaseUrl', [
    'voicebaseUrl',
    function (voicebaseUrl) {
      return {
        restrict: 'E',
        scope: {
          environment: '@'
        },
        link: function (scope) {
          voicebaseUrl.setBaseUrl(scope.environment);
        }
      };
    }
  ]);

})();
