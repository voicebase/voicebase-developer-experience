(function () {
  'use strict';

  var auth0KeyManager = function () {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-key-manager.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyManagerCtrl',
      controller: function($scope, voicebaseTokensApi, formValidate) {
        var me = this;

        me.isLogin = false;
        me.token = '';
        me.isCopied = false;

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          me.token = _tokenData.token;
        });

        me.onCopy = function () {
          me.isCopied = true;
        };

        me.onCopyError = function (error) {
          console.log('Copy error: ', error);
        };

        me.downloadKey = function () {
          var blob = new Blob([me.token], {type: "text/plain;charset=utf-8"});
          saveAs(blob, "voicebase-api-key.txt");
        };

      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyManager', auth0KeyManager);

})();
