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
      controller: function($scope, $interval, voicebaseTokensApi, keywordsSpottingApi) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;
        me.isLoaded = false;
        me.pingProcess = false;

        $scope.$watch(function () {
          return me.files;
        }, function () {
          me.upload(me.files);
        });

        me.upload = function (files) {
            if(files && files.length) {
              me.isLoaded = true;
              keywordsSpottingApi.postMedia(tokenData.token, files[0])
                .then(function (mediaStatus) {
                  me.isLoaded = false;
                  if(mediaStatus.mediaId) {
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
                  $interval.cancel(checker);
                }
              }, function () {
                me.errorMessage = 'Error of getting file!';
              });
          }, 2000);
        }
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

})();
