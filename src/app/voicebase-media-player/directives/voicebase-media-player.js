(function () {
  'use strict';

  var voicebaseMediaPlayer = function ($timeout) {
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

        var $player = jQuery('#player');
        //$player.voicebase('destroy');
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

      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseMediaPlayer', voicebaseMediaPlayer);

})();

