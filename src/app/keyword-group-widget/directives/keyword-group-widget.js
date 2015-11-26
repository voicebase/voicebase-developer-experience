(function () {
  'use strict';

  var keywordGroupWidget = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-widget.tpl.html',
      replace: true,
      scope: {
        token: '=',
        isPopup: '@'
      },
      controllerAs: 'keywordWidgetCtrl',
      controller: function($scope, voicebaseTokensApi, formValidate, keywordGroupApi, ModalService) {
        var me = this;
        me.isShowWidget = false;
        me.isLoaded = true;
        me.errorMessage = '';
        me.keywordGroups = null;
        me.newGroup = {};
        me.editedGroup = {};
        me.groupsPerPage = 7;
        me.currentPage = 1;
        me.isPopup = ($scope.isPopup === 'true');

        var tokenData;

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          me.showWidget();
        });

        me.startRemovingGroup = function(group, event) {
          event.stopPropagation();
          event.preventDefault();
          ModalService.showModal({
            templateUrl: 'keyword-group-widget/templates/removeKeywordGroupModal.tpl.html',
            controller: 'removeModalController',
            inputs: {
              groupName: group.name,
              removeCallback: function() {
                me.removeGroup(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });

        };

        me.removeGroup = function(group) {
          group.startDelete = true;
          keywordGroupApi.removeKeywordGroup(tokenData.token, group.name).then(function() {
            me.keywordGroups.groups = me.keywordGroups.groups.filter(function(_group) {
                return _group.name !== group.name;
            });
          }, function() {
            group.startDelete = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.createLoading = false;
        me.createGroup = function(group) {
          me.createLoading = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, group).then(function() {
            me.keywordGroups.groups.push(group);
            me.createLoading = false;
            me.currentPage = Math.floor(me.keywordGroups.groups.length / me.groupsPerPage) + 1;
          }, function() {
            me.createLoading = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.startEditGroup = function(group) {
          ModalService.showModal({
            templateUrl: 'keyword-group-widget/templates/editKeywordGroupModal.tpl.html',
            controller: 'ModalController',
            inputs: {
              $keywordGroup: group,
              mode: 'edit',
              groupCallback: function(_group) {
                angular.copy(_group, me.editedGroup);
                me.editGroup(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });

        };

        me.editGroup = function(oldGroup) {
          oldGroup.startEdit = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, me.editedGroup).then(function() {
            oldGroup.startEdit = false;
            angular.copy(me.editedGroup, oldGroup);
          }, function() {
            oldGroup.startEdit = false;
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
          me.firstInitVars();
          var tokenData = voicebaseTokensApi.getCurrentToken();
          if(tokenData) {
            me.isLogin = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoaded = false;
              me.keywordGroups = data;
              me.keywordGroups.groups.forEach(function(group) {
                group.startDelete = false;
                group.startEdit = false;
              });
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

        me.firstInitVars = function() {
          me.isShowWidget = true;
          me.isLoaded = true;
          me.errorMessage = '';
          me.keywordGroups = null;
          me.createLoading = false;
          me.currentPage = 1;
        };

        if(!me.isPopup) {
          me.isShowWidget = true;
          me.showWidget();
        }

      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupWidget', keywordGroupWidget);

})();
