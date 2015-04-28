(function () {
  'use strict';

  RAML.Directives.waitListForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'console/directives/wait-list-form.tpl.html',
      replace: false,
      controller: function($scope, formValidate, waitList) {
        $scope.credentials = {};
        $scope.formError = '';
        $scope.successMessage = '';

        $scope.isLoaded = false;
        var url = 'https://apis.voicebase.com/v2-beta';

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.addEmail = function($event) {
          var isValid = formValidate.validateForm($scope.waitListForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').addClass('checkDirty').find('.ng-invalid').first().focus();
          }
          else {
            $scope.isLoaded = true;
            waitList.addEmailToWaitList(url, $scope.credentials).then(function() {
              $scope.isLoaded = false;
              $scope.successMessage = 'Your email has been added to wait list.';
            }, function(error){
              $scope.isLoaded = false;
              $scope.formError = error;
            });
          }
          return false;
        };

      }
    };
  };

  angular.module('RAML.Directives')
    .directive('waitListForm', RAML.Directives.waitListForm);

})();
