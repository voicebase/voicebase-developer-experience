(function () {
  'use strict';

  RAML.Directives.voicebaseAuthForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase/directives/voicebase-auth-form.tpl.html',
      controller: function($scope, formValidate) {
        $scope.credentials = {};
        $scope.showAuthForm = false;
        $scope.formError = '';

        $scope.showForm = function() {
          $scope.formError = '';
          $scope.showAuthForm = !$scope.showAuthForm;
        };

        $scope.hideForm = function() {
          $scope.showAuthForm = false;
        };

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').find('.ng-invalid').first().focus();
          }
          else {
            $scope.hideForm();
            $scope.auth($scope.credentials, function(_formError) {
                $scope.formError = _formError;
            });
          }

        };

      }
    };
  };

  angular.module('RAML.Directives')
    .directive('voicebaseAuthForm', RAML.Directives.voicebaseAuthForm);

})();
