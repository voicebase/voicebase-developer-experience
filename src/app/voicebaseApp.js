(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp', [
    'RAML.Directives',
    'RAML.Services',
    'RAML.Security',
    'hc.marked',
    'ui.codemirror',
    'hljs',
    'ramlConsoleApp'
  ]).config(function ($provide) {
    RAML.Decorators.ramlConsole($provide);
    RAML.Decorators.ramlField($provide);
    RAML.Decorators.ramlSidebar($provide);
    RAML.Decorators.namedParameters($provide); // custom headers can't be empty

    // for support custom scheme x-OAuth 2 Bearer
    RAML.Decorators.AuthStrategies();

    // debug
    //RAML.Decorators.ramlInitializer($provide);

  });


})();
