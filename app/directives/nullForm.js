(function () {
  'use strict';

  RAML.Directives.nullForm = function() {
    return {
      restrict: 'A',
      require: '?form',
      link: function link(scope, element, iAttrs, formController) {
        if (! formController) {
          return;
        }

        // Remove this form from parent controller
        var parentFormController = element.parent().controller('form');
        if(parentFormController) {
          parentFormController.$removeControl(formController);

          // Replace form controller with a "null-controller"
          var nullFormCtrl = {
            $addControl: angular.noop,
            $removeControl: angular.noop,
            $setValidity: angular.noop,
            $setDirty: angular.noop,
            $setPristine: angular.noop
          };

          angular.extend(formController, nullFormCtrl);
        }
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('nullForm', RAML.Directives.nullForm);
})();
