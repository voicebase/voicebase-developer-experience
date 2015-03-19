(function () {
  'use strict';

  RAML.Services.resourceHelper = function () {

    var findResourceByUrl = function (raml, url) {
      var resource = null;
      var res = raml.resources.filter(function(resource) {
        return resource.toString() === url;
      });
      if(res.length > 0) {
        resource = angular.copy(res[0]);
        delete resource.uriParametersForDocumentation.userId;
        toUIModel(resource.uriParametersForDocumentation);
      }
      return resource;
    };

    function toUIModel (collection) {
      if(collection) {
        Object.keys(collection).map(function (key) {
          collection[key][0].id = key;
        });
      }
    }

    return {
      findResourceByUrl: findResourceByUrl
    };
  };

  angular.module('RAML.Services')
    .service('resourceHelper', RAML.Services.resourceHelper);

})();
