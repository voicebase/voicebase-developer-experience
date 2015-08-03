(function () {
  'use strict';

  var toggleBootstrapAccordion = function() {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element) {
        element.click(function (event) {
          var $accordion = jQuery(event.target).closest('.panel-group');
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = $accordion.find('.panel-collapse');
          $panels.removeClass('in');
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
          }
        });
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('toggleBootstrapAccordion', toggleBootstrapAccordion);

})();
