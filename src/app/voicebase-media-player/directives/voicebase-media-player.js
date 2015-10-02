(function () {
  'use strict';

  var voicebaseMediaPlayer = function ($timeout, $compile, voicebasePlayerService, voicebaseUrl) {
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
          return voicebasePlayerService.getMediaReady();
        }, function (newValue) {
          if (newValue === true) {
            initPlayer();
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
            apiUrl: voicebaseUrl.getBaseUrl() + '/',
            mediaID: scope.mediaId,
            token: scope.token,
            apiVersion: '2.0',
            mediaTypeOverride: checkType(),
            localSearch: true,
            localSearchHelperUrl: voicebasePortal.localSearchUrl,
            keywordsGroups: true,
            showPredictionsBlock: true,
            actionFlag: {
              downloadMedia: false,
              downloadTranscript: false
            }
          });
        };

        var checkType = function () {
          var type = 'video';
          if(scope.mediaType.indexOf('video') > -1) {
            type = 'video';
          }
          else if (scope.mediaType.indexOf('audio') > -1) {
            type = 'audio';
          }
          return type;
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
          voicebasePlayerService.destroyVoicebase();
        };
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseMediaPlayer', voicebaseMediaPlayer);

})();

