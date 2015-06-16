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
      controller: function($scope, $interval, voicebaseTokensApi, formValidate, keywordsSpottingApi) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;
        me.isLoaded = false;
        me.pingProcess = false;
        me.uploadedMedia = null;

        me.detectGroups = [];

        me.addDetectGroup = function () {
          me.detectGroups.push('');
        };

        me.removeDetectGroup = function (index) {
          me.detectGroups.splice(index, 1);
        };

        me.validBeforeUpload = function () {
          var form = me.detectingGroupsForm;
          formValidate.validateAndDirtyForm(form);
          return !!(!form.$invalid && me.files && me.files.length);
        };

        me.upload = function () {
          var isValid = me.validBeforeUpload();
          if (isValid) {
            me.isLoaded = true;
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
          var checker = $interval(function () {
            keywordsSpottingApi.checkMediaFinish(tokenData.token, mediaId)
              .then(function (data) {
                if (data.media && data.media.status === 'finished') {
                  me.pingProcess = false;
                  me.uploadedMedia = data.media;
                  $interval.cancel(checker);
                }
              }, function () {
                me.errorMessage = 'Error of getting file!';
              });
          }, 5000);
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
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
