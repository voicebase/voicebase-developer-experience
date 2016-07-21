(function () {
  'use strict';

  var ajaxError = function($location) {

    var handleError = function () {
      jQuery(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
        if (jqxhr.status === 403) {
          $location.path('/approve');
        }
        else if (jqxhr.status === 401) {
          $location.path('/login');
        }
      });
    };

    return {
      handleError: handleError
    };

  };

  angular.module('ramlVoicebaseConsoleApp')
    .service('ajaxError', ajaxError);
})();

