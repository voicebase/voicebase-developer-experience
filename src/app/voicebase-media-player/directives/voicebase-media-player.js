(function () {
  'use strict';

  var voicebaseMediaPlayer = function ($timeout, $compile, keywordsSpottingApi) {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/voicebase-media-player.tpl.html',
      scope: {
        token: '@',
        mediaId: '@',
        mediaUrl: '@',
        mediaType: '@'
      },
      link: function (scope) {

        scope.$watch(function () {
          return keywordsSpottingApi.getMediaReady();
        }, function (newValue, oldValue) {
          if (newValue === true) {
            initPlayer();
          }
          else {
            destroyPlayer();
          }
        });

        var initPlayer = function () {
          destroyPlayer();
          jQuery('.vbs-media-player').append('<div id="vbs-console-player-wrap"></div>');
          var playerDir = $compile('<videojs media-url="{{ mediaUrl }}" media-type="{{ mediaType }}"></videojs>')(scope);
          var $player = jQuery('#vbs-console-player-wrap');
          $player.append(playerDir);

          $player.voicebase({
            playerId: 'player',
            playerType: 'video_js',
            apiUrl: 'https://apis.voicebase.com/v2-beta/',
            mediaID: scope.mediaId,
            token: scope.token,
            apiVersion: '2.0',
            localSearch: true,
            localSearchHelperUrl: 'voicebase-player-lib/js/workers/',
            keywordsGroups: true
          });

          /*
           jwplayer('jwplayer').setup({
           file: '',
           primary: 'html5',
           width: '792',
           height: '480'
           });
           */

        };

        var destroyPlayer = function () {
          jQuery('#vbs-console-player-wrap').voicebase('destroy');
        };
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseMediaPlayer', voicebaseMediaPlayer);

})();

