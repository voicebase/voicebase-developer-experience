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
    'formValidateModule'
  ]);

  angular.module('voicebaseTokensModule', []);

  angular.module('voicebasePlayerModule', []);

  angular.module('vbsKeywordGroupWidget', [
    'voicebaseVendorsModule',
    'voicebasePlayerModule'
  ]);

  var voicebaseConsoleModules = [
    'voicebaseVendorsModule',
    'voicebaseTokensModule',
    'voicebasePlayerModule',
    'vbsKeywordGroupWidget'
  ];

  if(typeof RAML !== 'undefined') {
    voicebaseConsoleModules.push('ramlConsoleApp');
  }

  angular.module('ramlVoicebaseConsoleApp', voicebaseConsoleModules).config(function ($provide, $routeProvider) {
    if(typeof RAML !== 'undefined') {
      //voicebasePortal.Decorators.ramlConsole($provide);
      voicebasePortal.Decorators.ramlSidebar($provide);
      voicebasePortal.Decorators.ramlField($provide);
      voicebasePortal.Decorators.namedParameters($provide); // custom headers can't be empty

      // for support custom scheme x-OAuth 2 Bearer
      voicebasePortal.Decorators.AuthStrategies();
    }

    $routeProvider
      .when('/', {
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
      .when('/media-browser', {
        templateUrl: 'pages/mediaBrowserPage.html',
        reloadOnSearch: false
      })
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      })
      .otherwise({redirectTo: '/'});

  });


})();
