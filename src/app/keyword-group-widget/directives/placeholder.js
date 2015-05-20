(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget').directive('placeholder', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.focus(function(){
          jQuery(this).data('placeholder',jQuery(this).attr('placeholder'));
          jQuery(this).attr('placeholder','');
        });
        element.blur(function(){
          jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
        });
      }
    };

  });


})();
