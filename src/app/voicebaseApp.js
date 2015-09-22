(function () {
  'use strict';

  angular.module('voicebaseVendorsModule', [
    'ngRoute',
    'RAML.Directives',
    'RAML.Services',
    'RAML.Security',
    'hc.marked',
    'ui.codemirror',
    'hljs',
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

  angular.module('ramlVoicebaseConsoleApp', [
    'voicebaseVendorsModule',
    'ramlConsoleApp',
    'voicebaseTokensModule',
    'voicebasePlayerModule',
    'vbsKeywordGroupWidget'
  ]).config(function ($provide, $routeProvider) {
    //RAML.Decorators.ramlConsole($provide);
    RAML.Decorators.ramlSidebar($provide);
    RAML.Decorators.ramlField($provide);
    RAML.Decorators.namedParameters($provide); // custom headers can't be empty

    // for support custom scheme x-OAuth 2 Bearer
    RAML.Decorators.AuthStrategies();

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
