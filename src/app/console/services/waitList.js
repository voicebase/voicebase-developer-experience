(function () {
  'use strict';

  RAML.Services.waitList = function($http, $q, voicebaseUrl) {

    var baseUrl = voicebaseUrl.getBaseUrl();

    var addEmailToWaitList = function(credentials) {
      var deferred = $q.defer();

      var email = credentials.email;

      setTimeout(function() {
        console.log(baseUrl + '/' + email);
        deferred.resolve();
      }, 1000);

      return deferred.promise;
    };

    return {
      addEmailToWaitList: addEmailToWaitList
    };

  };

  angular.module('RAML.Services')
    .service('waitList', RAML.Services.waitList);

})();

