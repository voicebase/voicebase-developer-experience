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
        mediaType: '@',
        playerType: '@' // 'jwplayer' or 'video_js'
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

          var $player = jQuery('#vbs-console-player-wrap');
          if(scope.playerType === 'video_js') {
            createVideoJsPlayer();
          }
          else if(scope.playerType === 'jwplayer') {
            createJwPlayer();
          }

          $player.voicebase({
            playerId: 'player',
            playerType: scope.playerType,
            apiUrl: 'https://apis.voicebase.com/v2-beta/',
            mediaID: scope.mediaId,
            token: scope.token,
            apiVersion: '2.0',
            localSearch: true,
            localSearchHelperUrl: 'voicebase-player-lib/js/workers/',
            keywordsGroups: true,

            actionFlag: {
              downloadMedia: false,
              downloadTranscript: false
            }
          });
        };

        var createVideoJsPlayer = function () {
          var playerDir = $compile('<videojs media-url="{{ mediaUrl }}" media-type="{{ mediaType }}"></videojs>')(scope);
          jQuery('#vbs-console-player-wrap').append(playerDir);
        };

        var createJwPlayer = function () {
          jQuery('#vbs-console-player-wrap').append('<div id="player"></div>');

          jwplayer('player').setup({
            file: scope.mediaUrl,
            primary: 'html5',
            width: '100%',
            height: '264'
          });
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

