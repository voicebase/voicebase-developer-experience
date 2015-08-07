(function () {
  'use strict';

  var mediaBrowser = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/media-browser.tpl.html',
      scope: {
      },
      controllerAs: 'mediaBroserCtrl',
      controller: function ($scope, voicebaseTokensApi, keywordsSpottingApi) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;
        me.mediaLoaded = false;
        me.media = [];

        var getMedia = function () {
          me.mediaLoaded = true;
          keywordsSpottingApi.getMedia(tokenData.token)
            .then(function (_media) {
              me.mediaLoaded = false;
              me.media = _media;
            }, function () {
              me.mediaLoaded = false;
              me.errorMessage = 'Can\'t getting media!';
            });
        };

        getMedia();
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('mediaBrowser', mediaBrowser);

})();

