(function () {
  'use strict';

  var Auth0Injector = function(auth0Api) {
    return {
      restrict: 'E',
      link: function() {

        var findAuth0Mutation = function (mutations) {
          var aut0Container = null;
          for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];
            if (mutation.type === 'childList') {
              var addedNodes = mutation.addedNodes;
              for (var j = 0; j < addedNodes.length; j++) {
                var node = addedNodes[j];
                if (node.classList && node.classList.contains('auth0-lock-container')) {
                  aut0Container = node;
                  break;
                }
              }
            }
            if (aut0Container) {
              break;
            }
          }
          return aut0Container;
        };

        var runAuth0Injector = function () {
          var observer = new MutationObserver(function(mutations, observer) {
            console.log(mutations);
            var aut0Container = findAuth0Mutation(mutations);
            if(aut0Container) {
              injectLoginLink(aut0Container);
              observer.disconnect();
            }
          });

          observer.observe(document, {
            subtree: true,
            childList: true,
            attributes: false
          });
        };

        var injectLoginLink = function (aut0Container) {
          var link = '<div><a href="#login" class="alternate-login-link">Alternate API Key Log in</a></div>';

          jQuery(aut0Container)
            .find('.auth0-lock-badge-bottom')
            .prepend(link);

          jQuery('.auth0-lock-badge-bottom').off('click').on('click', function () {
            auth0Api.hideLock();
          });
        };

        runAuth0Injector();
      }

    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0Injector', Auth0Injector);

})();
