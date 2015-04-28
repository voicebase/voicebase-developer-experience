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

    var validateAndDirtyForm = function(form) {
      var errors = form.$error;
      Object.keys(errors).map(function (key) {
        for (var i = 0; i < errors[key].length; i++) {
          var field = errors[key][i];
          if(field.$error && jQuery.isArray(field.$error[key])) {
            validateAndDirtyForm(field);
          }
          else {
            field.$setViewValue(field.$viewValue);
          }
          form.isValid = false;
        }
      });
      return form.isValid;
    };

    return {
      validateForm: validateForm,
      validateAndDirtyForm: validateAndDirtyForm
    };

  };

  angular.module('RAML.Services')
    .service('formValidate', RAML.Services.FormValidate);

})();
