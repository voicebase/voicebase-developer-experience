(function () {
  'use strict';

  var keywordsSpottingApi = function ($q, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var mediaReady = false;

    var postMedia = function (token, file, groups) {
      var deferred = $q.defer();

      var data = new FormData();
      data.append('media', file);

      var groupsConf = {};
      if (groups.length > 0) {
        var groupNames = groups.map(function (group) {
          return group.name;
        });
        groupsConf = {
          keywords: {
            groups: groupNames
          }
        };
        var groupsData = {
          configuration: {
            keywords: {
              groups: groupNames
            }
          }
        };
      }

      var jobConf = {executor: 'v2'};
      var sumConf = jQuery.extend(jobConf, groupsConf);
      var conf = {
        configuration: sumConf
      };
      data.append('configuration', JSON.stringify(conf));

      jQuery.ajax({
        url: url + '/media',
        type: 'POST',
        contentType: false,
        processData: false,
        data: data,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (mediaStatus) {
          deferred.resolve(mediaStatus);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getMedia = function (token) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media?include=metadata',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data) {
          deferred.resolve(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var checkMediaFinish = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media/' + mediaId,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data) {
          deferred.resolve(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getMediaUrl = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media/' + mediaId + '/streams?access_token=' + token,
        success: function (data, textStatus, request) {
          var mediaUrl = data.streams.original;
          deferred.resolve(mediaUrl);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    return {
      getMedia: getMedia,
      postMedia: postMedia,
      checkMediaFinish: checkMediaFinish,
      getMediaUrl: getMediaUrl
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .service('keywordsSpottingApi', keywordsSpottingApi);

})();
