(function () {
  'use strict';

  var mediaBrowser = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/media-browser.tpl.html',
      scope: {
        token: '='
      },
      controllerAs: 'mediaBroserCtrl',
      controller: function ($scope, $timeout, $compile, voicebaseTokensApi, keywordsSpottingApi, voicebasePlayerService) {
        var me = this;

        me.groupsPerPage = 5;
        me.currentPage = 1;

        var tokenData;
        me.mediaLoaded = false;
        me.media = [];

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          getMedia();
        });

        $scope.$watch(function () {
          return voicebasePlayerService.getRemovedMediaId();
        }, function (mediaId) {
          if (mediaId) {
            removeMedia(mediaId);
          }
        });

        var removeMedia = function (mediaId) {
          me.media = me.media.filter(function (media) {
            return media.mediaId !== mediaId;
          });
        };

        var getMedia = function () {
          if(!me.isLogin) {
            return false;
          }
          me.media = [];
          me.errorMessage = '';
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

        me.getMediaTitle = function (media) {
          var title = media.mediaId;
          var _metadata = media.metadata;
          if(_metadata && _metadata.external && _metadata.external.id) {
            title = _metadata.external.id;
          }
          if(_metadata && _metadata.title) {
            title = _metadata.title;
          }
          return title;
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

