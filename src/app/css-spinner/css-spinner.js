(function () {
  'use strict';

  var cssSpinner = function() {
    return {
      restrict: 'E',
      templateUrl: 'css-spinner/css-spinner.tpl.html',
      replace: false
    };
  };

  angular.module('cssSpinnerModule')
    .directive('cssSpinner', cssSpinner);

})();
