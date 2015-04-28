(function () {
  'use strict';

  angular.module('RAML.Directives').directive('validInputFile', function () {
    return {
      require: 'ngModel',
      link: function (scope, el, attrs, ngModel) {
        el.bind('change', function () {
          var element = el.get(0);
          var inputValue = (element.files.length > 0) ? element.files[0] : '';
          scope.$apply(function () {
            ngModel.$setViewValue(inputValue);
            ngModel.$render();
          });

          scope.$watch(function() {
              return ngModel.$modelValue;
          }, function (modelValue) {
            if (!modelValue) {
              el.val('');
            }
          });
        });
      }
    };
  });
})();
