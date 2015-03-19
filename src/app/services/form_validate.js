(function () {
  'use strict';

  RAML.Services.FormValidate = function() {
    var validateForm = function(form) {
      var errors = form.$error;
      var isValid = true;

      Object.keys(form.$error).map(function (key) {
        for (var i = 0; i < errors[key].length; i++) {
          var fieldName = errors[key][i].$name;
          form[fieldName].$setViewValue(form[fieldName].$viewValue);
          isValid = false;
        }
      });
      return isValid;
    };

    return {
      validateForm: validateForm
    };

  };

  angular.module('RAML.Services')
    .service('formValidate', RAML.Services.FormValidate);

})();
