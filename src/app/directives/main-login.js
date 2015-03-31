(function () {
  'use strict';

  RAML.Directives.mainLogin = function($location, $timeout, voicebaseTokensApi) {
    return {
      restrict: 'E',
      templateUrl: 'directives/main-login.tpl.html',
      replace: false,
      controller: function($scope, formValidate) {
        $scope.credentials = {};
        $scope.isRemember = voicebaseTokensApi.getNeedRemember();
        $scope.formError = '';
        $scope.isInit = true;
        $scope.isLoaded = false;
        var url = 'https://apis.voicebase.com/v2-beta';

        $scope.changeRemember = function() {
          $scope.isRemember = !$scope.isRemember;
          voicebaseTokensApi.setNeedRemember($scope.isRemember);
        };

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').addClass('checkDirty').find('.ng-invalid').first().focus();
          }
          else {
            $scope.isLoaded = true;
            voicebaseTokensApi.getTokens(url, $scope.credentials).then(function() {
              $scope.loadConsole();
            }, function(error){
              $scope.isLoaded = false;
              $scope.formError = error;
            });
          }
          return false;
        };

        $scope.loadConsole = function() {
          $location.path('/console');
        };


      },
      link:  function ($scope) {
        $timeout(function() {
          var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
          if(tokenFromStorage) {
            $scope.loadConsole();
          }
          else {
            $scope.isInit = false;
          }
        }, 100);
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('mainLogin', RAML.Directives.mainLogin);

})();
