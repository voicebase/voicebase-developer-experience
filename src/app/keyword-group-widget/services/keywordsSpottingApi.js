(function () {
  'use strict';

  var keywordsSpottingApi = function ($q, $timeout, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var mediaReady = false;

    var uploadedState = 0;

    var getUploadedState = function () {
      return uploadedState;
    };

    var postMedia = function (token, file, groups, models, vocabulary) {
      var deferred = $q.defer();

      var data = new FormData();
      data.append('media', file);

      var jobConf = {executor: 'v2'};
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
      }

      var predictionsConf = {};
      if (models && models.length > 0) {
        console.log('Mixing in models', models);

        var modelsArray = models.map(function (model) {
          return { model : model.modelId };
        });
        predictionsConf = {
          predictions: modelsArray
        };

        jobConf = { }; // prediction not yet support on v2 executor
      }

      var transcriptConf = {
        transcripts: {
          // formatNumbers: true
        }
      };
      if (vocabulary && vocabulary.length > 0) {
        jQuery.extend(transcriptConf.transcripts, {
          vocabularies: [{
            terms: vocabulary
          }]
        });
      }

      var sumConf = jQuery.extend(jobConf, groupsConf, predictionsConf, transcriptConf);

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
        xhr: function () {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener('progress', function (evt) {
            if (evt.lengthComputable) {
              $timeout(function () {
                uploadedState = evt.loaded * 100 / evt.total;
              }, 0);
            }
          }, false);
          return xhr;
        },
        success: function (mediaStatus) {
          uploadedState = 0;
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
        url: url + '/media/' + mediaId + '/streams',
        headers: {
          'Authorization': 'Bearer ' + token
        },
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

    var deleteMedia = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'DELETE',
        url: url + '/media/' + mediaId,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data, textStatus, request) {
          if (request.status === 204) {
            deferred.resolve();
          }
          else {
            deferred.reject('Can\'t remove!');
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Can\'t remove!');
        }
      });

      return deferred.promise;
    };

    return {
      getUploadedState: getUploadedState,
      getMedia: getMedia,
      postMedia: postMedia,
      deleteMedia: deleteMedia,
      checkMediaFinish: checkMediaFinish,
      getMediaUrl: getMediaUrl
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .service('keywordsSpottingApi', keywordsSpottingApi);

})();
