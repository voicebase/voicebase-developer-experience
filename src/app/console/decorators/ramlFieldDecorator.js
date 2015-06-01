RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlField = function ($provide) {

    $provide.decorator('ramlFieldDirective', function ($delegate, $controller) {
      var directive = $delegate[0];

      directive.templateUrl = 'console/directives/voicebase-raml-field.tpl.html'; // replce template

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope) {
        angular.extend(this, $controller(controllerOrigin, {$scope: $scope})); //extend orginal controller
        var bodyContent = $scope.$parent.context.bodyContent;
        var context = $scope.$parent.context[$scope.$parent.type];
        if (bodyContent) {
          var definitions = bodyContent.definitions[bodyContent.selected];
          context = context || definitions;

          // remove example values for input with type=file
          for (var key in definitions.plain) {
            if(definitions.plain[key].selected === 'file') {
              for (var i = 0; i < definitions.plain[key].definitions.length; i++) {
                var definition = definitions.plain[key].definitions[i];
                definition.key = key;
                if(definition.type === 'file' && typeof definition.example !== 'undefined') {
                  definition.example = '';
                  definitions.values[key] = [];
                }
              }
            }
          }

        }

        $scope.mediaSamples = [
          {sample: '', name: '--Select media sample--'},
          {sample: 'https://s3.amazonaws.com/voicebase-developer-test-content-dev/mpthreetest.mp3', name: 'https://s3.amazonaws.com/voicebase-developer-test-content-dev/mpthreetest.mp3'},
          {sample: 'https://s3.amazonaws.com/voicebase-developer-test-content-dev/recording.mp3', name: 'https://s3.amazonaws.com/voicebase-developer-test-content-dev/recording.mp3'}
        ];

        $scope.selectedMediaSample = $scope.mediaSamples[0].sample;

        $scope.selectMediaSample = function (mediaSample) {
          $scope.model[0] = mediaSample;
        };

        $scope.getPlaceholder = function (definition) {
            return ($scope.isMediaUrl(definition)) ? 'Enter media url' : '';
        };

        $scope.parameter = context.plain[$scope.param.id];

        $scope.isFile = function (definition) {
          return definition.type === 'file';
        };

        $scope.isMediaUrl = function (definition) {
          return (definition.key === 'media' && definition.type === 'string');
        };

        $scope.isDefault = function (definition) {
          return typeof definition.enum === 'undefined' && definition.type !== 'boolean' && !$scope.isFile(definition);
        };

      };

      return $delegate;
    });

  };

  return Decorators;

})(RAML.Decorators || {});
