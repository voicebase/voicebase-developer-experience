(function () {
  'use strict';

  angular.module('voicebaseTokensModule').directive('voicebaseUrl', [
    'voicebaseUrl',
    function (voicebaseUrl) {
      return {
        restrict: 'E',
        scope: {
          url: '@'
        },
        compile: function (element, attrs) {
          voicebaseUrl.setBaseUrl(attrs.url);
          voicebaseUrl.setRamlUrl(attrs.ramlUrl);
        }
      };
    }
  ]);

})();
