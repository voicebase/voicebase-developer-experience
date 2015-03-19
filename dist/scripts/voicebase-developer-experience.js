RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.AuthStrategies = function () {
    RAML.Client.AuthStrategies.for = function(scheme, credentials) {
      if (!scheme) {
        return RAML.Client.AuthStrategies.anonymous();
      }

      switch(scheme.type) {
        case 'Basic Authentication':
          return new RAML.Client.AuthStrategies.Basic(scheme, credentials);
        case 'OAuth 2.0':
          return new RAML.Client.AuthStrategies.Oauth2(scheme, credentials);
        case 'OAuth 1.0':
          return new RAML.Client.AuthStrategies.Oauth1(scheme, credentials);
        case 'x-custom':
          return RAML.Client.AuthStrategies.anonymous();
        case 'Anonymous':
          return RAML.Client.AuthStrategies.anonymous();
        default:
          return RAML.Client.AuthStrategies.anonymous();
      }
    };
  };

  return Decorators;

})(RAML.Decorators || {});

RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.namedParameters = function ($provide) {
    $provide.decorator('namedParametersDirective', function ($delegate) {
      var directive = $delegate[0];

      directive.templateUrl = 'directives/voicebase-named-parameters.tpl.html'; // replace template

      return $delegate;
    });

  };

  return Decorators;

})(RAML.Decorators || {});

RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlConsole = function ($provide) {
    $provide.decorator('ramlConsoleDirective', function ($delegate, $controller, $timeout, $compile) {
      var directive = $delegate[0];

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope, $window, $attrs) {
        angular.extend(this, $controller(controllerOrigin, {$scope: $scope, $window: $window, $attrs: $attrs})); //extend orginal controller
        $scope.$watch('loaded', function () {
          if ($scope.loaded) {
            $timeout(function () {
              var el = $compile('<voicebase-sign></voicebase-sign>')($scope);
              jQuery('.raml-console-title').before(el);
            }, 0);
          }
        });
      };

      return $delegate;
    });

  };

  return Decorators;

})(RAML.Decorators || {});

RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlField = function ($provide) {

    $provide.decorator('ramlFieldDirective', function ($delegate, $controller) {
      var directive = $delegate[0];

      directive.templateUrl = 'directives/voicebase-raml-field.tpl.html'; // replce template

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
                if(definition.type === 'file' && typeof definition.example !== 'undefined') {
                  definition.example = '';
                  definitions.values[key] = [];
                }
              }
            }
          }

        }

        $scope.parameter = context.plain[$scope.param.id];

        $scope.isFile = function (definition) {
          return definition.type === 'file';
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

RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlInitializer = function ($provide) {
    $provide.decorator('ramlInitializerDirective', function ($delegate, $controller) {
      var directive = $delegate[0];

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope, $window) {
        angular.extend(this, $controller(controllerOrigin, {$scope: $scope, $window: $window})); //extend orginal controller

        $scope.ramlUrl    = 'https://apis.voicebase.com/console/';
      };

      return $delegate;
    });

  };

  return Decorators;

})(RAML.Decorators || {});

RAML.Decorators = (function (Decorators) {
  'use strict';

  Decorators.ramlSidebar = function ($provide) {
    $provide.decorator('sidebarDirective', function ($delegate, $controller, $compile, voicebaseTokensApi) {
      var directive = $delegate[0];

      directive.compile = function () {
        return {
          pre: function (scope, element) {
            var tokensTemplate = $compile('<voicebase-tokens></voicebase-tokens>')(scope);
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
              $scope.context.customParameters.headers.push({
                name: 'Authorization',
                value: 'Bearer ' + currentToken.token
              });

              if($scope.context.queryParameters.values && $scope.context.queryParameters.values.access_token) {
                $scope.context.queryParameters.values.access_token = [];
              }
            }
            else {
              $scope.context.customParameters.headers = $scope.context.customParameters.headers.filter(function (header) {
                return (header.name !== 'Authorization');
              });
            }
          }
        };

      };

      return $delegate;
    });

  };

  return Decorators;

})(RAML.Decorators || {});

(function () {
  'use strict';

  RAML.Directives.nullForm = function() {
    return {
      restrict: 'A',
      require: '?form',
      link: function link(scope, element, iAttrs, formController) {
        if (! formController) {
          return;
        }

        // Remove this form from parent controller
        var parentFormController = element.parent().controller('form');
        if(parentFormController) {
          parentFormController.$removeControl(formController);

          // Replace form controller with a "null-controller"
          var nullFormCtrl = {
            $addControl: angular.noop,
            $removeControl: angular.noop,
            $setValidity: angular.noop,
            $setDirty: angular.noop,
            $setPristine: angular.noop
          };

          angular.extend(formController, nullFormCtrl);
        }
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('nullForm', RAML.Directives.nullForm);
})();

(function () {
  'use strict';

  angular.module('RAML.Directives').directive('validInputFile', function () {
    return {
      require: 'ngModel',
      link: function (scope, el, attrs, ngModel) {
        el.bind('change', function () {
          var element = el.get(0);
          var inputValue = (element.files.length > 0) ? element.files[0] : '';
          scope.$apply(function () {
            ngModel.$setViewValue(inputValue);
            ngModel.$render();
          });

          scope.$watch(function() {
              return ngModel.$modelValue;
          }, function (modelValue) {
            if (!modelValue) {
              el.val('');
            }
          });
        });
      }
    };
  });
})();

(function () {
  'use strict';

  RAML.Directives.voicebaseAuthForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/voicebase-auth-form.tpl.html',
      controller: function($scope, formValidate) {
        $scope.credentials = {};
        $scope.showAuthForm = false;
        $scope.formError = '';

        $scope.showForm = function() {
          $scope.formError = '';
          $scope.showAuthForm = !$scope.showAuthForm;
        };

        $scope.hideForm = function() {
          $scope.showAuthForm = false;
        };

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').find('.ng-invalid').first().focus();
          }
          else {
            $scope.hideForm();
            $scope.auth($scope.credentials, function(_formError) {
                $scope.formError = _formError;
            });
          }

        };

      }
    };
  };

  angular.module('RAML.Directives')
    .directive('voicebaseAuthForm', RAML.Directives.voicebaseAuthForm);

})();

(function () {
  'use strict';

  RAML.Directives.voicebaseSign = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/voicebase-sign.tpl.html',
      replace: true,
      controller: function($scope, resourceHelper, voicebaseTokensApi) {
        $scope.resource = resourceHelper.findResourceByUrl($scope.raml, '/access/users/{userId}/tokens');
        if($scope.resource) {
          $scope.methodInfo = $scope.resource.methods[0];
          $scope.context = new RAML.Services.TryIt.Context($scope.raml.baseUriParameters, $scope.resource, $scope.methodInfo);
        }

        $scope.signed = false;
        $scope.isLoaded = false;

        $scope.signIn = function() {
          if(!$scope.isLoaded) {
            $scope.showForm(); // method of voicebase-auth-form
          }
        };

        $scope.signOut = function() {
            voicebaseTokensApi.setTokensObj(null);
        };

        $scope.auth = function(credentials, errorCallback) {
          $scope.isLoaded = true;
          var client = RAML.Client.create($scope.raml);
          voicebaseTokensApi.getTokens(client.baseUri, credentials).then(function() {
            $scope.isLoaded = false;
          }, function(error){
            $scope.isLoaded = false;
            if(errorCallback) {
              errorCallback(error);
            }
          });
        };

        $scope.$watch(function() {
          return voicebaseTokensApi.getTokensObj();
        }, function(tokensObj) {
          $scope.signed = !!tokensObj;
        });

        voicebaseTokensApi.getTokenFromLocation();
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('voicebaseSign', RAML.Directives.voicebaseSign);

})();

(function () {
  'use strict';

  RAML.Directives.voicebaseTokens = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/voicebase-tokens.tpl.html',
      replace: true,
      controller: function($scope, voicebaseTokensApi) {

        $scope.isLoaded = false;
        $scope.tokens = [];
        $scope.selectedToken = null;

        $scope.auth = function(credentials, errorCallback) {
          $scope.isLoaded = true;
          var client = RAML.Client.create($scope.raml);
          voicebaseTokensApi.getTokens(client.baseUri, credentials).then(function() {
          }, function(error){
            $scope.isLoaded = false;
            if(errorCallback) {
              errorCallback(error);
            }
          });
        };

        $scope.$watch(function() {
          return voicebaseTokensApi.getTokensObj();
        }, function(tokensData) {
            initTokens(tokensData);
        });

        $scope.$watch(function() {
          return voicebaseTokensApi.getCurrentToken();
        }, function(currentToken) {
            $scope.selectedToken = currentToken;
        });

        var initTokens = function(tokensData) {
          $scope.isLoaded = false;
          if(tokensData) {
            $scope.tokens = tokensData.tokens;
          }
          else {
            $scope.tokens = [];
          }
        };

        $scope.tokenChange = function(_selectedToken) {
          voicebaseTokensApi.setCurrentToken(_selectedToken);
        };

      }
    };
  };

  angular.module('RAML.Directives')
    .directive('voicebaseTokens', RAML.Directives.voicebaseTokens);
})();

(function () {
  'use strict';

  RAML.Services.FormValidate = function() {
    var validateForm = function(form) {
      var errors = form.$error;
      var isValid = true;

      Object.keys(form.$error).map(function (key) {
        for (var i = 0; i < errors[key].length; i++) {
          var fieldName = errors[key][i].$name;
          form[fieldName].$setViewValue(form[fieldName].$viewValue);
          isValid = false;
        }
      });
      return isValid;
    };

    return {
      validateForm: validateForm
    };

  };

  angular.module('RAML.Services')
    .service('formValidate', RAML.Services.FormValidate);

})();

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

(function () {
  'use strict';

  RAML.Services.VoicebaseTokensApi = function($http, $q) {
    var tokens = null;
    var currentToken = null;

    var setCurrentToken = function(_currentToken){
        currentToken = _currentToken;
    };

    var getCurrentToken = function(){
        return currentToken;
    };

    var getTokens = function(url, credentials) {
      var deferred = $q.defer();

      var username = credentials.username;
      var password = credentials.password;

      jQuery.ajax({
        url: url + '/access/users/+' + username.toLowerCase() + '/tokens',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        },
        success: function(_tokens) {
          if(!_tokens.tokens.length) {
            deferred.reject('There are no tokens!');
          }
          else {
            setTokensObj(_tokens);
            deferred.resolve(_tokens);
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var setTokensObj = function(tokensObj) {
      if(!tokensObj) {
        setCurrentToken(null);
      }
      else if(tokensObj.tokens.length > 0) {
        setCurrentToken(tokensObj.tokens[0]);
      }

      tokens = tokensObj;
    };

    var getTokensObj = function() {
        return tokens;
    };

    var getTokenFromLocation = function() {
      var params = getParametersFromLocation();
      if(params.access_token) {
        setTokensObj({
          tokens: [{
            token: params.access_token,
            type: 'Bearer'
          }]
        });
      }
    };

    var getParametersFromLocation = function() {
      var urlSearch = location.search.substr(1);
      var params = urlSearch.split('&');
      var values = {};
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        if(param && param !== '') {
          var pair = param.split('=');
          values[pair[0]] = pair[1];
        }
      }
      return values;
    };

    return {
      getTokens: getTokens,
      setTokensObj: setTokensObj,
      getTokensObj: getTokensObj,
      getCurrentToken: getCurrentToken,
      setCurrentToken: setCurrentToken,
      getTokenFromLocation: getTokenFromLocation
    };

  };

  angular.module('RAML.Services')
    .service('voicebaseTokensApi', RAML.Services.VoicebaseTokensApi);

})();

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

angular.module('ramlConsoleApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/voicebase-auth-form.tpl.html',
    "<div class=\"raml-console-auth-form-container\">\n" +
    "  <div class=\"raml-console-vbs-token-auth-form\" ng-show=\"showAuthForm\">\n" +
    "    <ng-form name=\"authForm\" novalidate null-form>\n" +
    "      <div class=\"raml-console-sidebar-row\">\n" +
    "        <p class=\"raml-console-sidebar-input-container\">\n" +
    "          <label for=\"username\" class=\"raml-console-sidebar-label\">API Key <span class=\"raml-console-side-bar-required-field\">*</span></label>\n" +
    "          <input required=\"true\" type=\"text\" name=\"username\" class=\"raml-console-sidebar-input raml-console-sidebar-security-field\" ng-model=\"credentials.username\" ng-change=\"onChange()\"/>\n" +
    "          <span class=\"raml-console-field-validation-error\"></span>\n" +
    "        </p>\n" +
    "\n" +
    "        <p class=\"raml-console-sidebar-input-container\">\n" +
    "          <label for=\"password\" class=\"raml-console-sidebar-label\">Password <span class=\"raml-console-side-bar-required-field\">*</span></label>\n" +
    "          <input required=\"true\" type=\"password\" name=\"password\" class=\"raml-console-sidebar-input raml-console-sidebar-security-field\" ng-model=\"credentials.password\" ng-change=\"onChange()\"/>\n" +
    "          <span class=\"raml-console-field-validation-error\"></span>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"raml-console-vbs-auth-form-btns\">\n" +
    "        <button type=\"button\" ng-click=\"startAuth($event)\" class=\"raml-console-sidebar-action raml-console-sidebar-action-get\">Sign In</button>\n" +
    "        <button type=\"button\" ng-click=\"hideForm()\" class=\"raml-console-sidebar-action raml-console-sidebar-action-reset\">Cancel</button>\n" +
    "      </div>\n" +
    "    </ng-form>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"raml-console-vbs-tokens-error\" ng-show=\"formError\">\n" +
    "    <span class=\"raml-console-vbs-close\" ng-click=\"hideError()\"><span>x</span></span>\n" +
    "    {{ formError }}\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('directives/voicebase-named-parameters.tpl.html',
    "<section>\n" +
    "  <header class=\"raml-console-sidebar-row raml-console-sidebar-subheader\">\n" +
    "    <h4 class=\"raml-console-sidebar-subhead\">{{title}}</h4>\n" +
    "    <button class=\"raml-console-sidebar-add-btn\" ng-click=\"addCustomParameter()\" ng-if=\"enableCustomParameters\"></button>\n" +
    "  </header>\n" +
    "\n" +
    "  <div class=\"raml-console-sidebar-row\">\n" +
    "    <p class=\"raml-console-sidebar-input-container raml-console-sidebar-input-container-custom\" ng-repeat=\"customParam in context.customParameters[type]\">\n" +
    "      <button class=\"raml-console-sidebar-input-delete\" ng-click=\"removeCutomParam(customParam)\"></button>\n" +
    "\n" +
    "      <!-- Start change. Custom header must be required! -->\n" +
    "      <label for=\"custom-header\" class=\"raml-console-sidebar-label raml-console-sidebar-label-custom\">\n" +
    "        <input name=\"custom-key\" class=\"raml-console-sidebar-custom-input-for-label\" ng-model=\"customParam.name\" placeholder=\"custom key\" required>\n" +
    "      </label>\n" +
    "      <input name=\"custom-header\" class=\"raml-console-sidebar-input raml-console-sidebar-input-custom\" placeholder=\"custom value\" ng-model=\"customParam.value\" required>\n" +
    "      <span class=\"raml-console-field-validation-error\"></span>\n" +
    "      <!-- End change -->\n" +
    "\n" +
    "    </p>\n" +
    "\n" +
    "    <p ng-show=\"showBaseUrl\" class=\"raml-console-sidebar-method\">{{$parent.methodInfo.method.toUpperCase()}}</p>\n" +
    "    <div ng-show=\"showBaseUrl\" class=\"raml-console-sidebar-method-content\">\n" +
    "      <div class=\"raml-console-sidebar-url\" ng-repeat=\"segment in segments\">\n" +
    "        <div ng-hide=\"segment.templated\">{{segment.name}}</div>\n" +
    "        <div ng-show=\"segment.templated\" ng-if=\"context[type].values[segment.name][0]\" class=\"raml-console-sidebar-url-segment\">{{context[type].values[segment.name][0]}}</div>\n" +
    "        <div ng-show=\"segment.templated\" ng-if=\"!context[type].values[segment.name][0]\" class=\"raml-console-sidebar-url-segment\"><span ng-non-bindable>&#123;</span>{{segment.name}}<span ng-non-bindable>&#125;</span></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <p class=\"raml-console-sidebar-input-container\" ng-repeat=\"param in context[type].plain\">\n" +
    "      <span class=\"raml-console-sidebar-input-tooltip-container\" ng-if=\"param.definitions[0].description\">\n" +
    "        <button tabindex=\"-1\" class=\"raml-console-sidebar-input-tooltip\"><span class=\"raml-console-visuallyhidden\">Show documentation</span></button>\n" +
    "        <span class=\"raml-console-sidebar-tooltip-flyout\">\n" +
    "          <span marked=\"param.definitions[0].description\" opts=\"markedOptions\"></span>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "\n" +
    "      <raml-field param=\"param.definitions[0]\" model=\"context[type].values[param.definitions[0].id]\"></raml-field>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</section>\n"
  );


  $templateCache.put('directives/voicebase-raml-field.tpl.html',
    "<div>\n" +
    "  <div ng-repeat=\"param in parameter.definitions\" ng-if=\"param.type === parameter.selected\">\n" +
    "    <label for=\"{{param.id}}\" class=\"raml-console-sidebar-label\">{{param.displayName}}\n" +
    "      <a class=\"raml-console-sidebar-override\" ng-if=\"canOverride(param)\" ng-click=\"overrideField($event, param)\">Override</a>\n" +
    "      <span class=\"raml-console-side-bar-required-field\" ng-if=\"param.required\">*</span>\n" +
    "      <label ng-if=\"param.isFromSecurityScheme\" class=\"raml-console-sidebar-security-label\">from security scheme</label>\n" +
    "\n" +
    "      <span class=\"raml-console-vbs-param-type\" ng-if=\"parameter.definitions.length > 1\">\n" +
    "        as\n" +
    "        <select class=\"form-control\" ng-model=\"parameter.selected\" ng-options=\"param.type as param.type for param in parameter.definitions\"></select>\n" +
    "      </span>\n" +
    "    </label>\n" +
    "\n" +
    "    <span class=\"raml-console-sidebar-input-tooltip-container raml-console-sidebar-input-left\" ng-if=\"hasExampleValue(param) && !isFile(param)\">\n" +
    "      <button tabindex=\"-1\" class=\"raml-console-sidebar-input-reset\" ng-click=\"reset(param)\"><span class=\"raml-console-visuallyhidden\">Reset field</span></button>\n" +
    "      <span class=\"raml-console-sidebar-tooltip-flyout-left\">\n" +
    "        <span>Use example value</span>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "\n" +
    "    <select id=\"select_{{param.id}}\" ng-if=\"isEnum(param)\" name=\"param.id\" class=\"raml-console-sidebar-input\" ng-model=\"model[0]\" style=\"margin-bottom: 0;\" ng-change=\"onChange()\">\n" +
    "      <option ng-repeat=\"enum in unique(param.enum)\" value=\"{{enum}}\">{{enum}}</option>\n" +
    "    </select>\n" +
    "\n" +
    "    <input id=\"{{param.id}}\" ng-if=\"isDefault(param)\" class=\"raml-console-sidebar-input\" ng-model=\"model[0]\" ng-class=\"{'raml-console-sidebar-field-no-default': !hasExampleValue(param)}\" validate=\"param\" dynamic-name=\"param.id\" ng-change=\"onChange()\"/>\n" +
    "\n" +
    "    <input id=\"checkbox_{{param.id}}\" ng-if=\"isBoolean(param)\" class=\"raml-console-sidebar-input\" type=\"checkbox\" ng-model=\"model[0]\" dynamic-name=\"param.id\" ng-change=\"onChange()\" />\n" +
    "\n" +
    "    <input type=\"file\" id=\"file_{{param.id}}\" ng-if=\"isFile(param)\" class=\"raml-console-vbs-sidebar-input-file\" ng-model=\"model[0]\" ng-required=\"param.required\" dynamic-name=\"param.id\" valid-input-file ng-change=\"onChange()\"/>\n" +
    "\n" +
    "    <span class=\"raml-console-field-validation-error\"></span>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('directives/voicebase-sign.tpl.html',
    "<div class=\"raml-console-vbs-sign-container\">\n" +
    "  <a class=\"raml-console-meta-button\" ng-if=\"!signed\" ng-click=\"signIn()\">\n" +
    "    <span ng-show=\"!isLoaded\">Sign In</span>\n" +
    "    <span ng-show=\"isLoaded\">Signing In...</span>\n" +
    "  </a>\n" +
    "  <a class=\"raml-console-meta-button\" ng-if=\"signed\" ng-click=\"signOut()\">\n" +
    "    Sign Out\n" +
    "  </a>\n" +
    "\n" +
    "  <voicebase-auth-form></voicebase-auth-form>\n" +
    "</div>\n"
  );


  $templateCache.put('directives/voicebase-tokens.tpl.html',
    "<div class=\"raml-console-vbs-tokens-container\" ng-if=\"currentSchemeType === 'x-OAuth 2 Bearer'\">\n" +
    "  <button type=\"button\" ng-click=\"showForm()\" class=\"raml-console-vbs-get-tokens raml-console-sidebar-action raml-console-sidebar-action-get\" ng-show=\"!tokens.length\">\n" +
    "    <span ng-show=\"!isLoaded\">Sign in to select token</span>\n" +
    "    <span ng-show=\"isLoaded\">Getting tokens...</span>\n" +
    "  </button>\n" +
    "\n" +
    "  <div ng-if=\"tokens.length > 0\" class=\"raml-console-vbs-tokens-dropdown-container\">\n" +
    "    <span class=\"raml-console-sidebar-label\">Tokens</span>\n" +
    "    <select class=\"raml-console-sidebar-input raml-console-dropdown\"\n" +
    "            ng-model=\"selectedToken\"\n" +
    "            ng-options=\"tokenObj as tokenObj.token for tokenObj in tokens\"\n" +
    "            ng-change=\"tokenChange(selectedToken)\">\n" +
    "      <option></option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "\n" +
    "  <voicebase-auth-form></voicebase-auth-form>\n" +
    "</div>\n"
  );

}]);
