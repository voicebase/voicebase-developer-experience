voicebasePortal.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlSidebar = function ($provide) {
    $provide.decorator('sidebarDirective', function ($delegate, $controller, $compile, voicebaseTokensApi, store) {
      var directive = $delegate[0];

      directive.compile = function () {
        return {
          pre: function (scope, element) {
            var tokensTemplate = $compile('<voicebase-tokens ng-if="currentSchemeType === \'x-OAuth 2 Bearer\'"></voicebase-tokens>')(scope);
            element.find('.raml-console-sidebar-securty').append(tokensTemplate);
          }
        };
      };

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope, $location, $anchorScroll) {
        angular.extend(this, $controller(controllerOrigin, {
          $scope: $scope,
          $location: $location,
          $anchorScroll: $anchorScroll
        })); //extend orginal controller

        // add Authorization Bearer header for selected token
        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (currentToken) {
          addTokenHeader(currentToken);
        });

        $scope.$on('resetData', function() {
          var currentToken = voicebaseTokensApi.getCurrentToken();
          addTokenHeader(currentToken);
        });

        var addTokenHeader = function(currentToken) {
          if($scope.currentSchemeType === 'x-OAuth 2 Bearer') {
            if (currentToken) {
              pushTokenHeader(currentToken.token);
            }
            else {
              $scope.context.customParameters.headers = $scope.context.customParameters.headers.filter(function (header) {
                return (header.name !== 'Authorization');
              });
            }
          }
          else if ($scope.currentSchemeType === 'x-jwt') {
            var auth0Token = store.get('auth0Token') || '';
            pushTokenHeader(auth0Token);
          }
        };

        var pushTokenHeader = function (token) {
          $scope.context.customParameters.headers.push({
            name: 'Authorization',
            value: 'Bearer ' + token
          });

          if($scope.context.queryParameters.values && $scope.context.queryParameters.values.access_token) {
            $scope.context.queryParameters.values.access_token = [];
          }
        };

      };

      return $delegate;
    });

  };

  return Decorators;

})(voicebasePortal.Decorators || {});
