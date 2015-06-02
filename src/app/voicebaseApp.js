(function () {
  'use strict';

  angular.module('voicebaseTokensModule', []);

  angular.module('vbsKeywordGroupWidget', [
    'angularModalService',
    'formValidateModule',
    'cssSpinnerModule',
    'angularUtils.directives.dirPagination'
  ]);

  angular.module('ramlVoicebaseConsoleApp', [
    'ngRoute',
    'RAML.Directives',
    'RAML.Services',
    'RAML.Security',
    'hc.marked',
    'ui.codemirror',
    'hljs',
    'frapontillo.bootstrap-switch',
    'formValidateModule',
    'cssSpinnerModule',
    'ramlConsoleApp',
    'voicebaseTokensModule',
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
      .when('/keywords-groups', {
        templateUrl: 'pages/keywordsGroups.html',
        reloadOnSearch: false
      })
      .when('/keywords-spotting', {
        templateUrl: 'pages/keywordsSpottingPage.html',
        reloadOnSearch: false
      })
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      });
  });


})();
