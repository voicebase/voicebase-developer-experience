(function () {
  'use strict';

  var voicebaseAccordion = function ($timeout, $compile, voicebasePlayerService) {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/voicebase-accordion.tpl.html',
      scope: {
        uploadedData: '=',
        isShow: '='
      },
      controller: function ($scope) {
        $scope.showHasSpottedWords = function (uploadedInfo) {
          var res = '';
          if(uploadedInfo.hasSpottedWords !== null) {
            res = (uploadedInfo.hasSpottedWords) ? '(Keywords Spotted)' : '(No Keywords Spotted)';
          }
          return res;
        };

      },
      link: function (scope) {
        scope.toggleAccordionPane = function (event, uploadedInfo) {
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = jQuery('#files-accordion').find('.panel-collapse');
          $panels.removeClass('in');
          voicebasePlayerService.destroyVoicebase();
          $panels.find('.panel-body').empty();
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
            $timeout(function () {
              var player = $compile('<voicebase-media-player ' +
              'token="' + uploadedInfo.token + '"' +
              'player-type="jwplayer"' +
              'media-id="' + uploadedInfo.uploadedMedia.mediaId + '"' +
              'media-url="' + uploadedInfo.mediaUrl + '"' +
              'media-type="' + uploadedInfo.mediaType + '">' +
              '</voicebase-media-player>')(scope);
              $panel.find('.panel-body').append(player);
              voicebasePlayerService.setMediaReady(true);
            }, 0);
          }
        };

      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseAccordion', voicebaseAccordion);

})();

