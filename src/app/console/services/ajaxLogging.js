(function () {
  'use strict';

  var ajaxLogging = function() {
    jQuery.ajaxSetup({
      beforeSend: function() {
        console.log('***');
        console.log('Calling api url: ', this.url);
        console.log('More info about request: ', this);
      }
    });
  };

  ajaxLogging();

})();

