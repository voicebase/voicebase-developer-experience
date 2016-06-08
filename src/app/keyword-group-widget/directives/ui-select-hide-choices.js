(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget')
    .directive('hideChoices', function() {
      return {
        link: function(scope, element) {
          element.find('.ui-select-choices').hide();
        }
      };
    });

})();
