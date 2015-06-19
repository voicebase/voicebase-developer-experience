(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget').controller('removeModalController', function ($scope, $element, removeCallback) {

    $scope.removeGroup = function () {
      $element.modal('hide');
      removeCallback();
      return false;
    };

  });

})();
