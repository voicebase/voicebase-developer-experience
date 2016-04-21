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
      controller: function($scope, voicebaseTokensApi, auth0Api) {
        var me = this;

        me.isLogin = false;
        me.tokenPending = false;
        me.token = '';
        me.isCopied = false;

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          if (!me.token) {
            generateToken();
          }
        });

        var generateToken = function () {
          me.tokenPending = true;
          auth0Api.createAuth0ApiKey().then(generateTokenSuccess, generateTokenError)
        };

        var generateTokenSuccess = function (token) {
          me.tokenPending = false;
          me.token = token;
          voicebaseTokensApi.setToken(token);
        };

        var generateTokenError = function (error) {
          me.tokenPending = false;
          me.errorMessage = error;
        };

        me.onCopy = function () {
          me.isCopied = true;
        };

        me.onCopyError = function (error) {
          console.log('Copy error: ', error);
        };

        me.downloadKey = function () {
          var blob = new Blob([me.token], {type: 'text/plain;charset=utf-8'});
          saveAs(blob, 'voicebase-api-key.txt');
        };

      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyManager', auth0KeyManager);

})();
