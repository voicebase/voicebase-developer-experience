(function () {
  'use strict';

  var keyManager = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/key-manager.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyManagerCtrl',
      controller: function($scope, voicebaseTokensApi, formValidate) {
        var me = this;

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;


      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('keyManager', keyManager);

})();
