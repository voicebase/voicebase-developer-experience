(function () {
  'use strict';

  var focusForm = function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attr, ngModel) {
        elem.submit(function () {
          jQuery(elem).find('.ng-invalid:not("ng-form")').first().focus();
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('focusForm', focusForm);

})();
