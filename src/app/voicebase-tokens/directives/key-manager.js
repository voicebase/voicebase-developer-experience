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

        var credentials = {
          username: '',
          password: ''
        };

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;

        me.users = [];

        me.getUsers = function () {
            voicebaseTokensApi.getUsers(credentials).then(function (users) {

              me.users = users;

            }, function () {
              me.errorMessage = 'Can\'t getting users!';
            });
        };

        me.showUserTokens = function (user) {
          if(!user.tokens) {
            user.isLoadTokens = true;
            voicebaseTokensApi.getUserTokens(credentials, user.userId).then(function (tokens) {
              user.isLoadTokens = false;
              user.tokens = tokens;
            }, function () {
              user.isLoadTokens = false;
              me.errorMessage = 'Can\'t getting tokens!';
            });

          }
        };

        me.getUsers();
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('keyManager', keyManager);

})();
