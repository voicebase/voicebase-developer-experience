(function () {
  'use strict';

  angular.module('voicebaseTokensModule').service('voicebaseUrl', [
    '$location',
    function ($location) {

      var url = 'https://apis.voicebase.com/v2-beta';
      var ramlUrl = 'https://apis.voicebase.com/console/';

      var setBaseUrl = function (_url) {
        // setting url from parameter
        if (_url) {
          url = _url;
          return false;
        }

        // setting url from location query
        var queryEnvironment = getQueryEnvironment();
        if(queryEnvironment) {
          _setUrl(queryEnvironment);
          return false;
        }

        // setting url from host
        var productEnvironment = getUrlEnvironment();
        if (productEnvironment) {
          _setUrl(productEnvironment);
          return false;
        }        
      };

      var getQueryEnvironment = function () {
        var queryEnvironment = null;

        if ($location.absUrl().includes('environment=dev')) {
          queryEnvironment = 'dev';
        } 
        else if ($location.absUrl().includes('environment=qa')) {
          queryEnvironment = 'qa';
        } 
        else if ($location.absUrl().includes('environment=preprod')) {
          queryEnvironment = 'preprod';
        } 
        else if ($location.absUrl().includes('environment=prod')) {
          queryEnvironment = 'prod';
        }
        return queryEnvironment;
      };

      var getUrlEnvironment = function () {
        var productEnvironment = '';
        if ($location.host() === 'localhost') {
          productEnvironment = 'dev';
        } 
        else if ($location.host() === 'apis.dev.voicebase.com') {
          productEnvironment = 'dev';
        } 
        else if ($location.host() === 'apis.qa.voicebase.com') {
          productEnvironment = 'qa';
        } 
        else if ($location.host() === 'apis.preprod.voicebase.com') {
          productEnvironment = 'preprod';
        } 
        else if ($location.host() === 'apis.prod.voicebase.com') {
          productEnvironment = 'prod';
        }
        return productEnvironment;
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
        return url;
      };
      
      var setRamlUrl = function (_url) {
        ramlUrl = _url;    
      };
      
      var getRamlUrl = function () {
        return ramlUrl;  
      };

      return {
        setBaseUrl: setBaseUrl,
        getBaseUrl: getBaseUrl,
        setRamlUrl: setRamlUrl,
        getRamlUrl: getRamlUrl
      };

    }
  ]);

})();
