(function () {
  'use strict';

  var voicebasePlayerService = function ($q) {

    var mediaReady = false;

    var getMediaReady = function () {
      return mediaReady;
    };

    var setMediaReady = function (_mediaReady) {
      mediaReady = _mediaReady;
    };

    var destroyVoicebase = function () {
      jQuery('#vbs-console-player-wrap').voicebase('destroy');
    };

    return {
      getMediaReady: getMediaReady,
      setMediaReady: setMediaReady,
      destroyVoicebase: destroyVoicebase
    };
  };

  angular.module('voicebasePlayerModule')
    .service('voicebasePlayerService', voicebasePlayerService);

})();
