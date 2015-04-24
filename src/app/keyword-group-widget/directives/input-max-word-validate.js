(function () {
  'use strict';

  var inputMaxWordValidate = function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, elem, attr, ngModel) {
        elem.change(function() {
          var words = elem.val().split(' ');
          var valid = (words.length <= 3);
          ngModel.$setValidity('many-words', valid);
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('inputMaxWordValidate', inputMaxWordValidate);

})();
