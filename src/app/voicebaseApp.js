(function () {
  'use strict';

  window.voicebasePortal = {
    localSearchUrl: 'voicebase-player-lib/js/workers/'
  };

  angular.module('voicebaseVendorsModule', [
    'ngRoute',
    'frapontillo.bootstrap-switch',
    'angularModalService',
    'angularUtils.directives.dirPagination',
    'ngFileUpload',
    'ui.select',
    'ngSanitize',
    'cssSpinnerModule',
    'progressBarModule',
    'formValidateModule'
  ]);

  angular.module('voicebaseAuth0Module', [
    'env-config',
    'angular-storage',
    'angular-jwt',
    'angular-clipboard'
  ]);

  angular.module('voicebaseTokensModule', []);

  angular.module('voicebasePlayerModule', []);

  angular.module('dagModule', []);

  angular.module('vbsKeywordGroupWidget', [
    'voicebaseVendorsModule',
    'voicebasePlayerModule'
  ]);

  var voicebaseConsoleModules = [
    'voicebaseVendorsModule',
    'voicebaseTokensModule',
    'voicebaseAuth0Module',
    'voicebasePlayerModule',
    'vbsKeywordGroupWidget',
    'dagModule'
  ];

  if(typeof RAML !== 'undefined') {
    voicebaseConsoleModules.push('ramlConsoleApp');
  }

  angular.module('ramlVoicebaseConsoleApp', voicebaseConsoleModules).config(
    function ($provide, $routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    if(typeof RAML !== 'undefined') {
      //voicebasePortal.Decorators.ramlConsole($provide);
      voicebasePortal.Decorators.ramlSidebar($provide);
      voicebasePortal.Decorators.ramlField($provide);
      voicebasePortal.Decorators.namedParameters($provide); // custom headers can't be empty

      // for support custom scheme x-OAuth 2 Bearer
      voicebasePortal.Decorators.AuthStrategies();
    }

    if (voicebaseConsoleModules.indexOf('voicebaseAuth0Module') !== -1 && typeof Auth0Lock !== 'undefined') {
      voicebasePortal.Decorators.voicebaseSignAuth0($provide);
    }

    $routeProvider
      .when('/', {
        templateUrl: 'pages/auth0LoginPage.html',
        reloadOnSearch: false
      })
      .when('/login', {
        templateUrl: 'pages/loginPage.html',
        reloadOnSearch: false
      })
      .when('/portal', {
        templateUrl: 'pages/portalPage.html',
        reloadOnSearch: false
      })
      .when('/console', {
        templateUrl: 'pages/consolePage.html',
        reloadOnSearch: false
      })
      .when('/documentation', {
        templateUrl: 'pages/documentationPage.html',
        reloadOnSearch: false
      })
      .when('/keywords-groups', {
        templateUrl: 'pages/keywordsGroups.html',
        reloadOnSearch: false
      })
      .when('/keywords-spotting', {
        templateUrl: 'pages/keywordsSpottingPage.html',
        reloadOnSearch: false
      })
      .when('/key-manager', {
        templateUrl: 'pages/keyManagerPage.html',
        reloadOnSearch: false
      })
      .when('/generate-api-key', {
        templateUrl: 'pages/generateKeyPage.html',
        reloadOnSearch: false
      })
      .when('/media-browser', {
        templateUrl: 'pages/mediaBrowserPage.html',
        reloadOnSearch: false
      })
      .when('/dag', {
        templateUrl: 'pages/dagPage.html',
        reloadOnSearch: false
      })
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      })
      .when('/confirm', {
        templateUrl: 'pages/confirmEmailPage.html',
        reloadOnSearch: false
      })
      .when('/approve', {
        templateUrl: 'pages/approvalPage.html',
        reloadOnSearch: false
      })
      .otherwise({redirectTo: '/'});

  })
    .run(function ($rootScope, $location, ajaxError) {
      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (next + '#/' === current) {
          event.preventDefault();
        }
      });
      ajaxError.handleError();
    });
})();
