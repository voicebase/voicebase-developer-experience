(function() {
  'use strict';

  var toggleButton = function () {
    return {
      restrict: 'A',
      scope: {
        onValue: '@',
        offValue: '@'
      },
      link: function (scope, elem) {
        elem.addClass('toggleable-button');
        window.ToggleableButton.init({
          onStateValue  : scope.onValue,
          offStateValue : scope.offValue
        });
      }
    };
  };

  angular.module('ramlVoicebaseConsoleApp')
    .directive('toggleButton', toggleButton);

})();
