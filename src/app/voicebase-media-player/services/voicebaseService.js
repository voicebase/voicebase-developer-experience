(function () {
  'use strict';

  var voicebasePlayerService = function (keywordsSpottingApi) {

    var mediaReady = false;
    var removedMediaId = null;

    var getMediaReady = function () {
      return mediaReady;
    };

    var getRemovedMediaId = function () {
      return removedMediaId;
    };

    var setMediaReady = function (_mediaReady) {
      mediaReady = _mediaReady;
    };

    var destroyVoicebase = function () {
      jQuery('#vbs-console-player-wrap').voicebase('destroy');
    };

    var removeMedia = function (token, mediaId) {
      keywordsSpottingApi.deleteMedia(token, mediaId)
        .then(function () {
          destroyVoicebase();
          removedMediaId = mediaId;
        });
    };

    return {
      getRemovedMediaId: getRemovedMediaId,
      getMediaReady: getMediaReady,
      setMediaReady: setMediaReady,
      removeMedia: removeMedia,
      destroyVoicebase: destroyVoicebase
    };
  };

  angular.module('voicebasePlayerModule')
    .service('voicebasePlayerService', voicebasePlayerService);

})();
