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
      controller: function($scope, $location, voicebaseTokensApi, auth0Api, months) {
        var me = this;

        me.isLogin = false;
        me.errorMessage = '';
        me.keysPending = false;
        me.showGeneratedKey = false;
        me.keys = [];
        me.sortType = 'issued';
        me.sortReverse = true;

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          if (me.isLogin) {
            me.token = _tokenData.token;
            getKeys();
          }
        });

        var getKeys = function () {
          me.keysPending = true;
          auth0Api.getApiKeys().then(getKeysSuccess, getKeysError);
        };

        var getKeysSuccess = function (keys) {
          me.keysPending = false;
          me.keys = keys;
        };

        var getKeysError = function (error) {
          me.keysPending = false;
          me.errorMessage = error;
        };

        me.formatDate = function (key) {
          var dateLabel = '-';
          if (key.issued) {
            var dateObj = new Date(key.issued);
            var day = dateObj.getDate();
            var month = months.getMonthById(dateObj.getMonth() + 1).short;
            var year = dateObj.getFullYear();
            var hours = dateObj.getHours();
            var minutes = dateObj.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = padLeft(minutes.toString(), 2);
            dateLabel = month + ' ' + day + ', ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;
          }
          return dateLabel;
        };

        var padLeft = function (string, total) {
          if (typeof string !== 'string') {
            throw new Error('First parameter must be a string');
          }
          if (typeof total !== 'number') {
            throw new Error('Second parameter must be a integer');
          }
          return new Array(total - string.length + 1).join('0') + string;
        };

        me.onGenerateApiKey = function () {
          me.showGeneratedKey = true;
        };

        me.done = function () {
          me.showGeneratedKey = false;
        };

        me.changeSortReverse = function () {
          me.sortReverse = !me.sortReverse;
        };
      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyList', auth0KeyList);

})();
