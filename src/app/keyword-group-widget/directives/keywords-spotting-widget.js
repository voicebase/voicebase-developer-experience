(function () {
  'use strict';

  var keywordsSpottingWidget = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keywords-spotting-widget.tpl.html',
      replace: true,
      scope: {
        token: '='
      },
      controllerAs: 'keywordsSpottingCtrl',
      controller: function($scope, $interval, $timeout, $compile, voicebaseTokensApi, formValidate, keywordsSpottingApi, keywordGroupApi, voicebasePlayerService, ModalService, jobApi) {
        var me = this;

        var tokenData;
        me.isLoaded = false;
        me.pingProcess = false;
        me.isLoadedGroups = true;
        me.acceptFileFormats = ['.wav', '.mp4', '.mp3', '.flv', '.wmv', '.avi', '.mov', '.mpeg', '.mpg', '.aac', '.3gp', '.aiff', '.au', '.ogg', '.flac', '.ra', '.m4a', '.wma', '.m4v', '.caf', '.amr-nb', '.asf', '.webm', '.amr'];
        me.finishedUpload = false;
        me.uploadedData = [];
        me.uploadedState = [];
        me.isEnableFileSelect = true;
        me.showStartOverBtn = false;

        me.keywordGroups = [];
        me.detectGroups = [];

        me.uploadFiles = [];

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          getKeywordGroups();
        });

        $scope.$watch(function () {
          return keywordsSpottingApi.getUploadedState();
        }, function (_uploadedState) {
          me.uploadedState = _uploadedState;
        }, true);

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

        me.changeFiles = function (files, event) {
          if(files.length > 0) {
            files.forEach(function (_file) {
              me.uploadFiles.push(_file);
            });
          }
        };

        me.removeFile = function (file, event) {
          event.preventDefault();
          event.stopPropagation();
          me.uploadFiles = me.uploadFiles.filter(function (uploadFile) {
              return uploadFile.$$hashKey !== file.$$hashKey;
          });
        };

        me.removeAllFiles = function (event) {
          event.preventDefault();
          event.stopPropagation();
          me.uploadFiles = [];
          me.files = [];
          me.isEnableFileSelect = true;
        };

        me.startOver = function (event) {
          me.removeAllFiles(event);
          me.detectGroups = [];
          me.uploadedData = [];
          me.finishedUpload = false;
          me.showStartOverBtn = false;
        };

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

        me.validBeforeUpload = function (files) {
          return !!(files && files.length);
        };

        var countUploadedFiles = 0;
        me.upload = function () {
          var isValid = me.validBeforeUpload(me.uploadFiles);
          if (isValid) {
            me.isEnableFileSelect = false;
            me.isLoaded = true;

            me.finishedUpload = false;
            countUploadedFiles = me.uploadFiles.length;
            voicebasePlayerService.destroyVoicebase();
            me.uploadedData = [];
            for (var i = 0; i < countUploadedFiles; i++) {
              var file = me.uploadFiles[i];
              postMedia(file);
            }
          }
        };

        var postMedia = function (file) {
          me.errorMessage = '';
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
          var checker = $interval(function () {
            checkMediaHandler(checker, mediaId, file);
          }, 3000);
        };

        var checkMediaHandler = function (checker, mediaId, file) {
          keywordsSpottingApi.checkMediaFinish(tokenData.token, mediaId)
            .then(function (data) {
              if(!data.media) {
                return false;
              }
              if (data.media.status === 'finished') {
                finishMedia(data, file);
                $interval.cancel(checker);
              }
              else if (data.media.status !== 'failed' && data.media.job) {
                var job = data.media.job.progress;
                jobApi.setActiveJob(job);

              }
              else if(data.media.status === 'failed') {
                me.pingProcess = false;
                me.showStartOverBtn = true;
                me.errorMessage = 'Upload failed!';
                $interval.cancel(checker);
              }
            }, function () {
              me.errorMessage = 'Error of getting file!';
            });
        };

        var finishMedia = function (data, file) {
          getMediaUrl(data.media.mediaId)
            .then(function (url) {
              me.finishedUpload = true;
              me.uploadedData.push({
                uploadedMedia: data.media,
                uploadedMediaGroups: data.media.keywords.latest.groups,
                token: tokenData.token,
                mediaUrl: url,
                mediaType: file.type,
                mediaName: file.name,
                hasSpottedWords: getHasSpottedWords(data.media.keywords.latest.groups)
              });
              if(me.uploadedData.length === countUploadedFiles) {
                me.pingProcess = false;
                me.showStartOverBtn = true;
              }
            });
        };

        var getMediaUrl = function (mediaId) {
          return keywordsSpottingApi.getMediaUrl(tokenData.token, mediaId);
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

      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
