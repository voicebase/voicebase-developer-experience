(function () {
  'use strict';

  var auth0KeyList = function () {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/autho-keys-list.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyListCtrl',
      controller: function($scope, $location, voicebaseTokensApi, auth0Api) {
        var me = this;

        me.isLogin = false;
        me.errorMessage = '';
        me.keysPending = false;
        me.keys = [];

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          me.token = _tokenData.token;
          getKeys();
        });

        var getKeys = function () {
          me.keysPending = true;
          auth0Api.getApiKeys().then(getKeysSuccess, getKeysError)
        };

        var getKeysSuccess = function (keys) {
          me.keysPending = false;
          me.keys = keys;
        };

        var getKeysError = function (error) {
          me.keysPending = false;
          me.errorMessage = error;
        };

        me.onGenerateApiKey = function () {
          $location.path('/generate-api-key');
        };

      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyList', auth0KeyList);

})();
