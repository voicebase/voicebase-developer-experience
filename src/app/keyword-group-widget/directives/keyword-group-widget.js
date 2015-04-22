(function () {
  'use strict';

  var keywordGroupWidget = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-widget.tpl.html',
      replace: true,
      controllerAs: 'keywordWidgetCtrl',
      controller: function(voicebaseTokensApi, keywordGroupApi) {
        var me = this;
        me.isShowWidget = false;
        me.isLoaded = true;
        me.errorMessage = '';
        me.keywordGroups = null;

        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;

        me.removeGroup = function(groupName) {
          keywordGroupApi.removeKeywordGroup(tokenData.token, groupName).then(function(data) {
            console.log(data);
          }, function() {
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.toggleWidget = function() {
          if(!me.isShowWidget) {
            me.showWidget();
          }
          else {
            me.hideWidget();
          }
        };

        me.showWidget = function() {
          me.isShowWidget = true;
          me.isLoaded = true;
          me.errorMessage = '';
          me.keywordGroups = null;

          var tokenData = voicebaseTokensApi.getCurrentToken();
          if(tokenData) {
            me.isLogin = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoaded = false;
              me.keywordGroups = data;
              console.log(data);
            }, function() {
              me.isLoaded = false;
              me.errorMessage = 'Something going wrong!';
            });
          }
          else {
            me.isLoaded = false;
          }
        };

        me.hideWidget = function() {
          me.isShowWidget = false;
        };
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupWidget', keywordGroupWidget);

})();
