(function () {
  'use strict';

  var nullForm = function() {
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

          if ( !parentFormController )
          {
            return; // root form, no need to isolate
          }

          // Do a copy of the controller
          var originalCtrl = {};
          angular.copy( formController, originalCtrl );

          // Replace form controller with a "null-controller"
          var nullFormCtrl = {
            $setValidity   : function ( validationToken, isValid, control ) {
              originalCtrl.$setValidity( validationToken, isValid, control );
              parentFormController.$setValidity( validationToken, true, formController );
            },
            $setDirty      : function () {
              element.removeClass( 'ng-pristine' ).addClass( 'ng-dirty' );
              formController.$dirty = true;
              formController.$pristine = false;
            },
            $setPristine   : function () {
              element.addClass( 'ng-pristine' ).removeClass( 'ng-dirty' );
              formController.$dirty = false;
              formController.$pristine = true;
            }
          };

          angular.extend(formController, nullFormCtrl);
        }
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('nullForm', nullForm);
})();
