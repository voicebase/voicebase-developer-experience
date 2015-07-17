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
      controller: function($scope, $interval, $compile, voicebaseTokensApi, formValidate, keywordsSpottingApi, keywordGroupApi, ModalService) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;
        me.isLoaded = false;
        me.pingProcess = false;
        me.isLoadedGroups = true;
        me.acceptFileFormats = ['.wav', '.mp4', '.mp3', '.flv', '.wmv', '.avi', '.mov', '.mpeg', '.mpg', '.aac', '.3gp', '.aiff', '.au', '.ogg', '.flac', '.ra', '.m4a', '.wma', '.m4v', '.caf', '.amr-nb', '.asf', '.webm', '.amr'];
        me.finishedUpload = keywordsSpottingApi.getMediaReady();
        me.uploadedData = [];

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
            me.uploadedData = [];
            for (var i = 0; i < me.files.length; i++) {
              var file = me.files[i];
              postMedia(file);
            }
          }
        };

        var postMedia = function (file) {
          keywordsSpottingApi.postMedia(tokenData.token, file, me.detectGroups)
            .then(function (mediaStatus) {
              me.isLoaded = false;
              if (mediaStatus.mediaId) {
                me.checkMediaFinish(mediaStatus.mediaId, file);
              }
            }, function () {
              me.isLoaded = false;
              me.errorMessage = 'Can\'t upload media file!';
            });

        };

        me.checkMediaFinish = function (mediaId, file) {
          me.pingProcess = true;
          var url = window.URL.createObjectURL(file);
          var checker = $interval(function () {
            keywordsSpottingApi.checkMediaFinish(tokenData.token, mediaId)
              .then(function (data) {
                if (data.media && data.media.status === 'finished') {
                  me.pingProcess = false;
                  me.finishedUpload = true;
                  keywordsSpottingApi.setMediaReady(true);
                  me.uploadedData.push({
                    uploadedMedia: data.media,
                    uploadedMediaGroups: data.media.keywords.latest.groups,
                    token: tokenData.token,
                    mediaUrl: url,
                    mediaType: file.type,
                    mediaName: file.name,
                    hasSpottedWords: getHasSpottedWords(data.media.keywords.latest.groups)
                  });
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

        var getHasSpottedWords = function (groups) {
          var hasSpotted = false;
          if(groups && groups.length > 0) {
            for (var i = 0; i < groups.length; i++) {
              var group = groups[i];
              if(group.keywords.length > 0) {
                hasSpotted = true;
                break;
              }
            }
          }
          return hasSpotted;
        };

        me.showHasSpottedWords = function (uploadedInfo) {
          var res = '';
          if(uploadedInfo.hasSpottedWords !== null) {
            res = (uploadedInfo.hasSpottedWords) ? '(Keywords Spotted)' : '(No Keywords Spotted)';
          }
          return res;
        };

        me.isAudio = function (file) {
          if(file) {
            return file.type.indexOf('audio') > -1;
          }
          return false;
        };

        me.isVideo = function (file) {
          if(file) {
            return file.type.indexOf('video') > -1;
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

        me.toggleAccordionPane = function (event) {
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var index = parseInt(jQuery(event.target).attr('data-index'));
          var isOpen = $panel.hasClass('in');
          jQuery('#files-accordion').find('.panel-collapse').removeClass('in').find('.panel-body').empty();
          keywordsSpottingApi.setMediaReady(false);
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
            setTimeout(function () {
              var player = $compile('<voicebase-media-player ' +
              'token="' + me.uploadedData[index].token + '"' +
              'player-type="jwplayer"' +
              'media-id="' + me.uploadedData[index].uploadedMedia.mediaId + '"' +
              'media-url="' + me.uploadedData[index].mediaUrl + '"' +
              'media-type="' + me.uploadedData[index].mediaType + '">' +
              '</voicebase-media-player>')($scope);
              $panel.find('.panel-body').append(player);
              keywordsSpottingApi.setMediaReady(true);
            }, 0);
          }
        };
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
