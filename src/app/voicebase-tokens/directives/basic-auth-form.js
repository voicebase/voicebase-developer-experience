(function () {
  'use strict';

  var basicAuthForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/basic-auth-form.tpl.html',
      scope: {
        needRemember: '@',
        canHideForm: '@',
        hideForm: '&'
      },
      controllerAs: 'basicAuthCtrl',
      controller: function($scope, formValidate, voicebaseTokensApi) {
        var me = this;
        me.isLoaded = false;
        me.formError = null;
        me.credentials = {};

        if($scope.needRemember) {
          me.isRemember = voicebaseTokensApi.getNeedRemember();

          me.changeRemember = function() {
            me.isRemember = !me.isRemember;
            voicebaseTokensApi.setNeedRemember(me.isRemember);
          };
        }

        me.hideForm = function() {
          if($scope.hideForm) {
            $scope.hideForm();
          }
        };

        me.hideError = function(){
          me.formError = '';
        };

        me.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').find('.ng-invalid').first().focus();
          }
          else {
            me.hideForm();
            me.auth(me.credentials);
          }
          return false;
        };

        me.auth = function(credentials) {
          me.isLoaded = true;
          var baseUri = 'https://apis.voicebase.com/v2-beta';

          voicebaseTokensApi.basicAuth(credentials).then(function() {
            me.isLoaded = false;
          }, function(error){
            me.isLoaded = false;
            me.formError = error;
          });
        };

      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('basicAuthForm', basicAuthForm);

})();
