(function() {
  "use strict";

  angular.module('ramlVoicebaseConsoleApp').directive('toggle', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        if (attrs.toggle=="tooltip"){
          jQuery(element).tooltip();
        }
        if (attrs.toggle=="popover"){
          jQuery(element).popover();
        }
      }
    };

  });

})();
