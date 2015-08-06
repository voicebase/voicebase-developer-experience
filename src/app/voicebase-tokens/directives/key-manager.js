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

        me.isLogin = false;
        me.highlightToken = null;

        $scope.$watch(function () {
          return voicebaseTokensApi.getBasicToken();
        }, function (newToken) {
            if(newToken) {
              me.isLogin = true;
              me.getUsers();
            }
        });

        me.isLoadUsers = false;
        me.users = [];

        me.getUsers = function () {
          me.isLoadUsers = true;
          voicebaseTokensApi.getUsers().then(function (users) {
            me.isLoadUsers = false;
            me.users = users;
          }, function () {
            me.isLoadUsers = false;
            me.errorMessage = 'Can\'t getting users!';
          });
        };

        me.showUserTokens = function (user) {
          if(!user.tokens) {
            user.isLoadTokens = true;
            voicebaseTokensApi.getUserTokens(user.userId).then(function (tokens) {
              user.isLoadTokens = false;
              user.tokens = tokens;
            }, function () {
              user.isLoadTokens = false;
              me.errorMessage = 'Can\'t getting tokens!';
            });

          }
        };

        me.addToken = function (user) {
          user.isCreatingToken = true;
          me.highlightToken = '';
          voicebaseTokensApi.addUserToken(user.userId).then(function (_token) {
            user.isCreatingToken = false;
            if(user.tokens) {
              me.highlightToken = _token;
              user.tokens.unshift(_token);
            }
          }, function () {
            user.isCreatingToken = false;
            me.errorMessage = 'Can\'t creating token!';
          });
        };
      },
      link: function (scope, element) {
        element.on('click', function (event) {
          if(jQuery(event.target).hasClass('add-user-token')) {
            var $panel = jQuery(event.target).closest('.panel');
            var $panelBody = $panel.find('.panel-collapse');
            var $userName = $panel.find('.panel-title .user-name');
            if(!$panelBody.hasClass('in')) {
              $userName.click();
            }
          }
        });
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('keyManager', keyManager);

})();
