(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget', []);

  angular.module('ramlVoicebaseConsoleApp', [
    'ngRoute',
    'RAML.Directives',
    'RAML.Services',
    'RAML.Security',
    'hc.marked',
    'ui.codemirror',
    'hljs',
    'ramlConsoleApp',
    'angularUtils.directives.dirPagination',
    'vbsKeywordGroupWidget'
  ]).config(function ($provide, $routeProvider) {
    RAML.Decorators.ramlConsole($provide);
    RAML.Decorators.ramlField($provide);
    RAML.Decorators.ramlSidebar($provide);
    RAML.Decorators.namedParameters($provide); // custom headers can't be empty

    // for support custom scheme x-OAuth 2 Bearer
    RAML.Decorators.AuthStrategies();

    $routeProvider
      .when('/', {
        templateUrl: 'pages/loginPage.html',
        reloadOnSearch: false
      })
      .when('/console', {
        templateUrl: 'pages/consolePage.html',
        reloadOnSearch: false
      })
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      });
  });


})();
