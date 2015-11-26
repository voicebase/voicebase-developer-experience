(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget').controller('removeModalController', function ($scope, $element, groupName, removeCallback) {

    $scope.groupName= groupName;

    $scope.removeGroup = function () {
      $element.modal('hide');
      removeCallback();
      return false;
    };

  });

})();
