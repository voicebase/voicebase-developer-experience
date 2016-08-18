(function () {
  'use strict';

  angular.module('voicebaseTokensModule').service('voicebaseUrl', [
    '$location',
    function ($location) {

      var url = 'https://apis.voicebase.com/v2-beta';

      var setBaseUrl = function (environment) {
        var queryEnvironment = null;

        if ($location.absUrl().includes('environment=dev')) {
          queryEnvironment = 'dev';
        } else if ($location.absUrl().includes('environment=qa')) {
          queryEnvironment = 'qa';
        } else if ($location.absUrl().includes('environment=preprod')) {
          queryEnvironment = 'preprod';
        } else if ($location.absUrl().includes('environment=prod')) {
          queryEnvironment = 'prod';
        }

        if(queryEnvironment) {
            _setUrl(queryEnvironment);
        }
        else {
          var productEnvironment = '';
          if ($location.host() === 'localhost') {
            productEnvironment = 'dev';
          } else if ($location.host() === 'apis.dev.voicebase.com') {
            productEnvironment = 'dev';
          } else if ($location.host() === 'apis.qa.voicebase.com') {
            productEnvironment = 'qa';
          } else if ($location.host() === 'apis.preprod.voicebase.com') {
            productEnvironment = 'preprod';
          } else if ($location.host() === 'apis.prod.voicebase.com') {
            productEnvironment = 'prod';
          }

          _setUrl(productEnvironment);
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
        } else {
	  if ($location.host() === 'localhost') {
            url = 'https://apis.dev.voicebase.com/v2-beta';
	  } else if ($location.host() === 'apis.dev.voicebase.com') {
            url = 'https://apis.dev.voicebase.com/v2-beta';
	  } else if ($location.host() === 'apis.qa.voicebase.com') {
            url = 'https://apis.qa.voicebase.com/v2-beta';
	  } else if ($location.host() === 'apis.preprod.voicebase.com') {
            url = 'https://apis.preprod.voicebase.com/v2-beta';
	  } else if ($location.host() === 'apis.voicebase.com') {
            url = 'https://apis.voicebase.com/v2-beta';
          }
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
