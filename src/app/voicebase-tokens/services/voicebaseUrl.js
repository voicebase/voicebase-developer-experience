(function () {
  'use strict';

  angular.module('voicebaseTokensModule').service('voicebaseUrl', [
    '$location',
    function ($location) {

      var url = 'https://apis.voicebase.com/v2-beta';

      var setBaseUrl = function (environment) {
        var queryEnvironment = $location.search().environment;
          if(queryEnvironment) {
            _setUrl(queryEnvironment);
        }
        else {
          _setUrl(environment);
        }
      };

      var _setUrl = function (environment) {
        if (environment === 'dev') {
          url = 'https://apis.dev.voicebase.com/v2-beta';
        }
        else if (environment === 'qa') {
          url = 'https://apis.qa.voicebase.com/v2-beta';
        }
        else if (environment === 'preprod') {
          url = 'https://apis.preprod.voicebase.com/v2-beta';
        }
        else {
          url = 'https://apis.voicebase.com/v2-beta';
        }
      };

      var getBaseUrl = function () {
        var queryEnvironment = $location.search().environment;
        if(queryEnvironment) {
          _setUrl(queryEnvironment);
        }
        return url;
      };

      return {
        setBaseUrl: setBaseUrl,
        getBaseUrl: getBaseUrl
      };

    }
  ]);

})();
