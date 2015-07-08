(function () {
  'use strict';

  var keywordsSpottingWidget = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keywords-spotting-widget.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keywordsSpottingCtrl',
      controller: function($scope, $interval, voicebaseTokensApi, formValidate, keywordsSpottingApi, keywordGroupApi, ModalService) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;
        me.isLoaded = false;
        me.pingProcess = false;
        me.isLoadedGroups = true;
        me.acceptFileFormats = ['.wav', '.mp4', '.mp3', '.flv', '.wmv', '.avi', '.mov', '.mpeg', '.mpg', '.aac', '.3gp', '.aiff', '.au', '.ogg', '.flac', '.ra', '.m4a', '.wma', '.m4v', '.caf', '.amr-nb', '.asf', '.webm', '.amr'];
        me.finishedUpload = keywordsSpottingApi.getMediaReady();
        me.uploadedData = {};

        me.keywordGroups = [];
        me.detectGroups = [];

        var getKeywordGroups = function() {
          if(tokenData) {
            me.isLoadedGroups = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoadedGroups = false;
              me.keywordGroups = data.groups;
            }, function() {
              me.isLoadedGroups = false;
              me.errorMessage = 'Can\'t getting groups!';
            });
          }
        };
        getKeywordGroups();

        me.validateFormat = function (file) {
          if(Object.prototype.toString.call(file) === '[object File]') {
            var format = file.name.substring(file.name.lastIndexOf('.'));
            var isFileAllow = me.acceptFileFormats.filter(function (_format) {
              return _format === format;
            });
            if(isFileAllow.length === 0) {
              me.errorMessage = 'Media in ' + format + ' format is not yet supported. Please try uploading media in one of these formats: \n' + me.acceptFileFormats.join(', ');
            }
            else {
              me.errorMessage = '';
            }
          }
          return me.acceptFileFormats.join(',');
        };

        me.validBeforeUpload = function () {
          return !!(me.files && me.files.length);
        };

        me.upload = function () {
          var isValid = me.validBeforeUpload();
          if (isValid) {
            me.isLoaded = true;

            me.finishedUpload = false;
            keywordsSpottingApi.setMediaReady(false);

            keywordsSpottingApi.postMedia(tokenData.token, me.files[0], me.detectGroups)
              .then(function (mediaStatus) {
                me.isLoaded = false;
                if (mediaStatus.mediaId) {
                  me.checkMediaFinish(mediaStatus.mediaId);
                }
              }, function () {
                me.isLoaded = false;
                me.errorMessage = 'Can\'t upload media file!';
              });
          }
        };

        me.checkMediaFinish = function (mediaId) {
          me.pingProcess = true;
          var url = window.URL.createObjectURL(me.files[0]);
          var checker = $interval(function () {
            keywordsSpottingApi.checkMediaFinish(tokenData.token, mediaId)
              .then(function (data) {
                if (data.media && data.media.status === 'finished') {
                  me.pingProcess = false;
                  me.finishedUpload = true;
                  keywordsSpottingApi.setMediaReady(true);
                  me.uploadedData.uploadedMedia = data.media;
                  me.uploadedData.uploadedMediaGroups = data.media.keywords.latest.groups;
                  me.uploadedData.token = tokenData.token;
                  me.uploadedData.mediaUrl = url;
                  me.uploadedData.mediaType = me.files[0].type;
                  $interval.cancel(checker);

                }
              }, function () {
                me.errorMessage = 'Error of getting file!';
              });
          }, 5000);

          keywordsSpottingApi.getMediaUrl(tokenData.token, mediaId)
            .then(function (_url) {
              url = _url;
            });


        };

        me.isAudio = function () {
          if(me.files && me.files.length) {
            return me.files[0].type.indexOf('audio') > -1;
          }
          return false;
        };

        me.isVideo = function () {
          if(me.files && me.files.length) {
            return me.files[0].type.indexOf('video') > -1;
          }
          return false;
        };

        me.createLoading = false;
        me.createGroup = function(group) {
          me.createLoading = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, group).then(function() {
            me.keywordGroups.push(group);
            me.createLoading = false;
          }, function() {
            me.createLoading = false;
            me.errorMessage = 'Can\'t create group!';
          });
        };


      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
