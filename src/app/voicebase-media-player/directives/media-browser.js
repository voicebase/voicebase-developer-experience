(function () {
  'use strict';

  var mediaBrowser = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/media-browser.tpl.html',
      scope: {
      },
      controllerAs: 'mediaBroserCtrl',
      controller: function ($scope, $timeout, $compile, voicebaseTokensApi, keywordsSpottingApi, voicebasePlayerService) {
        var me = this;

        me.groupsPerPage = 5;
        me.currentPage = 1;

        var tokenData;
        me.mediaLoaded = false;
        me.media = [];

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          getMedia();
        });

        var getMedia = function () {
          if(!me.isLogin) {
            return false;
          }
          me.mediaLoaded = true;
          keywordsSpottingApi.getMedia(tokenData.token)
            .then(function (_media) {
              me.mediaLoaded = false;
              me.media = _media.media;
            }, function () {
              me.mediaLoaded = false;
              me.errorMessage = 'Can\'t getting media!';
            });
        };

        me.loadMedia = function (event, media) {
          if(!media.mediaUrl) {
            keywordsSpottingApi.getMediaUrl(tokenData.token, media.mediaId)
              .then(function (_url) {
                media.mediaUrl = _url;
                me.toggleAccordionPane(event, media);
              });
          }
          else {
            me.toggleAccordionPane(event, media);
          }
        };

        me.toggleAccordionPane = function (event, media) {
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = jQuery('#media-browser-list').find('.panel-collapse');
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
              'token="' + tokenData.token + '"' +
              'player-type="jwplayer"' +
              'media-id="' + media.mediaId + '"' +
              'media-url="' + media.mediaUrl + '"' +
              'media-type="video">' +
              '</voicebase-media-player>')($scope);
              $panel.find('.panel-body').append(player);
              voicebasePlayerService.setMediaReady(true);
            }, 0);
          }
        };

        me.changePage = function () {
          voicebasePlayerService.destroyVoicebase();
        };
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('mediaBrowser', mediaBrowser);

})();

