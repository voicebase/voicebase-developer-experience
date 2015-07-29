(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('documentationPageCtrl', ['$scope', '$timeout', 'ramlParserWrapper', function($scope, $timeout, ramlParserWrapper) {

      var firstReady = true;
      ramlParserWrapper.onParseSuccess(function(raml) {
        if(firstReady) {
          firstReady = false;
          $timeout(function () {
            if(jQuery('#getting_started').length > 0) {
              jQuery('#getting_started').find('.raml-console-document-heading').click();
            }
          }, 100);

        }
      });

    }]);
})();
