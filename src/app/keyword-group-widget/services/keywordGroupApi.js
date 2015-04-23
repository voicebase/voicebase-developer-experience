(function () {
  'use strict';

  var keywordGroupApi = function($http, $q) {

    var url = 'https://apis.voicebase.com/v2-beta';

    var getKeywordGroups = function(token) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/keywords/groups',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(keywordGroups) {
          deferred.resolve(keywordGroups);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var removeKeywordGroup = function(token, groupName) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/keywords/groups/' + groupName,
        type: 'DELETE',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function() {
          deferred.resolve();
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var createKeywordGroup = function(token, newGroup) {
      var deferred = $q.defer();
      delete newGroup.description;
      jQuery.ajax({
        url: url + '/definitions/keywords/groups/' + newGroup.name,
        type: 'PUT',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(newGroup),
        success: function() {
          deferred.resolve();
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    return {
      getKeywordGroups: getKeywordGroups,
      removeKeywordGroup: removeKeywordGroup,
      createKeywordGroup: createKeywordGroup
    };

  };

  angular.module('vbsKeywordGroupWidget')
    .service('keywordGroupApi', keywordGroupApi);

})();
