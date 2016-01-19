(function () {
  'use strict';

  var predictionModelApi = function($http, $q, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var getPredictionModels = function(token) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/predictions/models',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(predictionModels) {
          deferred.resolve(predictionModels);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Failed to retrieve prediction models!');
        }
      });

      return deferred.promise;
    };

    return {
      getPredictionModels: getPredictionModels
    };

  };

  angular.module('vbsKeywordGroupWidget')
    .service('predictionModelApi', predictionModelApi);

})();
