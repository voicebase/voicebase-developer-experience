(function () {
  'use strict';

  RAML.Directives.cssSpinner = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/css-spinner.tpl.html',
      replace: false
    };
  };

  angular.module('RAML.Directives')
    .directive('cssSpinner', RAML.Directives.cssSpinner);

})();
