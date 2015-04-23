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
        me.newGroup = {};
        me.showCreateForm = false;

        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;

        me.removeGroup = function(groupName) {
          keywordGroupApi.removeKeywordGroup(tokenData.token, groupName).then(function(data) {
            console.log(data);
          }, function() {
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.startCreateGroup = function() {
          me.newGroup = {
            name: '',
            description: '',
            keywords: []
          };
          me.showCreateForm = true;
        };

        me.createGroup = function() {
          keywordGroupApi.createKeywordGroup(tokenData.token, me.newGroup).then(function(data) {
            console.log(data);
          }, function() {
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.editGroup = function(group) {
          keywordGroupApi.createKeywordGroup(tokenData.token, group).then(function(data) {
            console.log(data);
          }, function() {
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.toggleGroupForm = function(group) {
          group.expanded = !group.expanded;
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
          me.showCreateForm = false;

          var tokenData = voicebaseTokensApi.getCurrentToken();
          if(tokenData) {
            me.isLogin = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoaded = false;
              me.keywordGroups = data;
              me.keywordGroups.groups.forEach(function(group) {
                group.expanded = false;
              });
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
