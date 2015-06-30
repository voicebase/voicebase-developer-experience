(function () {
  'use strict';

  var videojsPlayer = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/videojs.tpl.html',
      scope: {
        mediaUrl: '@'
      },
      link: function link(scope, element) {
        element.find('source').attr('src', scope.mediaUrl);
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('videojs', videojsPlayer);

})();

