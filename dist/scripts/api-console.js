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
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      });
  });


})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('loginPageCtrl', ['$scope', '$timeout', '$location', function($scope, $timeout, $location) {
      $scope.isSkipping = false;

      $scope.skip = function(event) {
        event.preventDefault();
        $scope.isSkipping = true;
        $timeout(function() {
          $location.path('/portal');
        }, 100);
      };
    }]);
})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('portalPageCtrl', ['$scope', '$timeout', '$location', 'voicebaseTokensApi', function($scope, $timeout, $location, voicebaseTokensApi) {
      $scope.isSkipping = false;

      var tokenData = voicebaseTokensApi.getCurrentToken();
      $scope.isLogin = (tokenData) ? true : false;


      $scope.loadConsole = function() {
        $location.path('/console');
      };

      $scope.loadKeywordsGroupApp = function() {
        $location.path('/keywords-groups');
      };

    }]);
})();

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

      directive.templateUrl = 'console/directives/voicebase-named-parameters.tpl.html'; // replace template

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
              var $container = jQuery('<div class="raml-console-left-toolbar"></div>');
              jQuery('.raml-console-title').before($container);
              var el = $compile('<voicebase-sign></voicebase-sign>')($scope);
              $container.append(el);

              //el = $compile('<keyword-group-widget is-popup="true"></keyword-group-widget>')($scope);
              //$container.append(el);
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

(function() {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp').directive('toggle', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        if (attrs.toggle === 'tooltip'){
          jQuery(element).tooltip();
        }
        if (attrs.toggle === 'popover'){
          jQuery(element).popover();
        }
      }
    };

  });

})();

(function () {
  'use strict';

  RAML.Directives.mainLogin = function($location, $timeout, voicebaseTokensApi) {
    return {
      restrict: 'E',
      templateUrl: 'console/directives/main-login.tpl.html',
      replace: false,
      controller: function($scope, formValidate) {
        $scope.credentials = {};
        $scope.isRemember = voicebaseTokensApi.getNeedRemember();
        $scope.formError = '';
        $scope.isInit = true;
        $scope.isLoaded = false;
        var url = 'https://apis.voicebase.com/v2-beta';

        $scope.changeRemember = function() {
          $scope.isRemember = !$scope.isRemember;
          voicebaseTokensApi.setNeedRemember($scope.isRemember);
        };

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').addClass('checkDirty').find('.ng-invalid').first().focus();
          }
          else {
            $scope.isLoaded = true;
            voicebaseTokensApi.getToken(url, $scope.credentials).then(function() {
              $scope.loadPortal();
            }, function(error){
              $scope.isLoaded = false;
              $scope.formError = error;
            });
          }
          return false;
        };

        $scope.loadPortal = function() {
          $location.path('/portal');
        };


      },
      link:  function ($scope) {
        $timeout(function() {
          var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
          if(tokenFromStorage) {
            $scope.loadPortal();
          }
          else {
            $scope.isInit = false;
          }
        }, 100);
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('mainLogin', RAML.Directives.mainLogin);

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

  RAML.Directives.waitListForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'console/directives/wait-list-form.tpl.html',
      replace: false,
      controller: function($scope, formValidate, waitList) {
        $scope.credentials = {};
        $scope.formError = '';
        $scope.successMessage = '';

        $scope.isLoaded = false;
        var url = 'https://apis.voicebase.com/v2-beta';

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.addEmail = function($event) {
          var isValid = formValidate.validateForm($scope.waitListForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').addClass('checkDirty').find('.ng-invalid').first().focus();
          }
          else {
            $scope.isLoaded = true;
            waitList.addEmailToWaitList(url, $scope.credentials).then(function() {
              $scope.isLoaded = false;
              $scope.successMessage = 'Your email has been added to wait list.';
            }, function(error){
              $scope.isLoaded = false;
              $scope.formError = error;
            });
          }
          return false;
        };

      }
    };
  };

  angular.module('RAML.Directives')
    .directive('waitListForm', RAML.Directives.waitListForm);

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

  RAML.Services.waitList = function($http, $q) {

    var addEmailToWaitList = function(url, credentials) {
      var deferred = $q.defer();

      var email = credentials.email;

      setTimeout(function() {
        console.log(url + email);
        deferred.resolve();
      }, 1000);

      return deferred.promise;
    };

    return {
      addEmailToWaitList: addEmailToWaitList
    };

  };

  angular.module('RAML.Services')
    .service('waitList', RAML.Services.waitList);

})();


(function () {
  'use strict';

  angular.module('cssSpinnerModule', []);

})();

(function () {
  'use strict';

  var cssSpinner = function() {
    return {
      restrict: 'E',
      templateUrl: 'css-spinner/css-spinner.tpl.html',
      replace: false
    };
  };

  angular.module('cssSpinnerModule')
    .directive('cssSpinner', cssSpinner);

})();

(function () {
  'use strict';

  angular.module('formValidateModule', []);

})();

(function () {
  'use strict';

  var formValidate = function() {

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

    var validateAndDirtyForm = function(form) {
      var errors = form.$error;
      Object.keys(errors).map(function (key) {
        for (var i = 0; i < errors[key].length; i++) {
          var field = errors[key][i];
          if(field.$error && jQuery.isArray(field.$error[key])) {
            validateAndDirtyForm(field);
          }
          else {
            field.$setViewValue(field.$viewValue);
          }
          form.isValid = false;
        }
      });
      return form.isValid;
    };

    return {
      validateForm: validateForm,
      validateAndDirtyForm: validateAndDirtyForm
    };

  };

  angular.module('formValidateModule')
    .service('formValidate', formValidate);

})();

(function () {
  'use strict';

  var focusForm = function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        elem.submit(function () {
          jQuery(elem).find('.ng-invalid:not("ng-form")').first().focus();
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('focusForm', focusForm);

})();

(function () {
  'use strict';

  var inputMaxWordValidate = function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, elem, attr, ngModel) {
        elem.change(function() {
          var words = elem.val().split(' ');
          var valid = (words.length <= 10);
          ngModel.$setValidity('many-words', valid);
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('inputMaxWordValidate', inputMaxWordValidate);

})();

(function () {
  'use strict';

  var keywordGroupForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-form.tpl.html',
      replace: true,
      scope: {
        keywordGroup: '='
      },
      controller: function($scope) {
        $scope.addKeyword = function() {
          $scope.keywordGroup.keywords.push('');
        };

        $scope.removeKeyword = function(index) {
          $scope.keywordGroup.keywords.splice(index, 1);
        };
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupForm', keywordGroupForm);

})();

(function () {
  'use strict';

  var keywordGroupWidget = function() {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keyword-group-widget.tpl.html',
      replace: true,
      scope: {
        isPopup: '@'
      },
      controllerAs: 'keywordWidgetCtrl',
      controller: function($scope, voicebaseTokensApi, formValidate, keywordGroupApi, ModalService) {
        var me = this;
        me.isShowWidget = false;
        me.isLoaded = true;
        me.errorMessage = '';
        me.keywordGroups = null;
        me.newGroup = {};
        me.editedGroup = {};
        me.groupsPerPage = 5;
        me.currentPage = 1;
        me.isPopup = ($scope.isPopup === 'true');

        var tokenFromStorage = voicebaseTokensApi.getTokenFromStorage();
        var tokenData = voicebaseTokensApi.getCurrentToken();
        me.isLogin = (tokenData) ? true : false;

        me.startRemovingGroup = function(group, event) {
          event.stopPropagation();
          event.preventDefault();
          ModalService.showModal({
            templateUrl: 'removeKeywordGroupModal.html',
            controller: 'removeModalController',
            inputs: {
              removeCallback: function() {
                me.removeGroup(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });

        };

        me.removeGroup = function(group) {
          group.startDelete = true;
          keywordGroupApi.removeKeywordGroup(tokenData.token, group.name).then(function() {
            me.keywordGroups.groups = me.keywordGroups.groups.filter(function(_group) {
                return _group.name !== group.name;
            });
          }, function() {
            group.startDelete = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.startCreateGroup = function() {
          me.newGroup = {
            name: '',
            description: '',
            keywords: ['']
          };
          ModalService.showModal({
            templateUrl: 'editKeywordGroupModal.html',
            controller: 'ModalController',
            inputs: {
              $keywordGroup: me.newGroup,
              mode: 'create',
              groupCallback: function(group) {
                me.newGroup = group;
                me.createGroup(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });
        };

        me.createLoading = false;
        me.createGroup = function() {
          me.createLoading = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, me.newGroup).then(function() {
            me.keywordGroups.groups.push(me.newGroup);
            me.createLoading = false;
            me.currentPage = Math.floor(me.keywordGroups.groups.length / me.groupsPerPage) + 1;
          }, function() {
            me.createLoading = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.startEditGroup = function(group) {
          ModalService.showModal({
            templateUrl: 'editKeywordGroupModal.html',
            controller: 'ModalController',
            inputs: {
              $keywordGroup: group,
              mode: 'edit',
              groupCallback: function(_group) {
                angular.copy(_group, me.editedGroup);
                me.editGroup(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });

        };

        me.editGroup = function(oldGroup) {
          oldGroup.startEdit = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, me.editedGroup).then(function() {
            oldGroup.startEdit = false;
            angular.copy(me.editedGroup, oldGroup);
          }, function() {
            oldGroup.startEdit = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.toggleWidget = function() {
          if(!me.isShowWidget) {
            me.showWidget();
          }
          else {
            me.hideWidget();
          }
        };

        me.showWidget = function() {
          me.firstInitVars();
          var tokenData = voicebaseTokensApi.getCurrentToken();
          if(tokenData) {
            me.isLogin = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoaded = false;
              me.keywordGroups = data;
              me.keywordGroups.groups.forEach(function(group) {
                group.startDelete = false;
                group.startEdit = false;
              });
            }, function() {
              me.isLoaded = false;
              me.errorMessage = 'Something going wrong!';
            });
          }
          else {
            me.isLoaded = false;
          }
        };

        me.hideWidget = function() {
          me.isShowWidget = false;
        };

        me.firstInitVars = function() {
          me.isShowWidget = true;
          me.isLoaded = true;
          me.errorMessage = '';
          me.keywordGroups = null;
          me.createLoading = false;
          me.currentPage = 1;
        };

        if(!me.isPopup) {
          me.isShowWidget = true;
          me.showWidget();
        }

      }
    };
  };

  angular.module('vbsKeywordGroupWidget').controller('ModalController', function($scope, $element, formValidate, $keywordGroup, mode, groupCallback) {

    $scope.mode = mode;

    $scope.keywordGroup = jQuery.extend(true, {}, $keywordGroup);

    if($scope.keywordGroupForm) {
      $scope.keywordGroupForm.$setPristine();
    }

    $scope.groupSave = function() {
      var form = $scope.keywordGroupForm;
      formValidate.validateAndDirtyForm(form);
      if(!form.$invalid) {
        groupCallback($scope.keywordGroup);
        $element.modal('hide');
      }
      return false;
    };

  });

  angular.module('vbsKeywordGroupWidget').controller('removeModalController', function($scope, $element, removeCallback) {

    $scope.removeGroup = function() {
      $element.modal('hide');
      removeCallback();
      return false;
    };

  });

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupWidget', keywordGroupWidget);

})();

(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget').directive('placeholder', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.focus(function(){
          jQuery(this).data('placeholder',jQuery(this).attr('placeholder'));
          jQuery(this).attr('placeholder','');
        });
        element.blur(function(){
          jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
        });
      }
    };

  });


})();

(function () {
  'use strict';

  var scrollToBottom = function () {
    return {
      restrict: 'A',
      scope: {
        trigger: '=scrollToBottom'
      },
      link: function (scope, elem) {
        scope.$watch('trigger', function () {
          elem.scrollTop(elem[0].scrollHeight);
        });
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('scrollToBottom', scrollToBottom);

})();

(function() {
  'use strict';

  var keywordsFilter = function() {
    return function(keywords) {
      var etc = (keywords.length > 5) ? '...' : '';
      var _keywords = keywords.slice(0, 5);
      _keywords = _keywords.join(', ') + etc;
      return _keywords;
    };

  };

  angular.module('vbsKeywordGroupWidget')
    .filter('keywordsFilter', keywordsFilter);

})();

(function () {
  'use strict';

  var keywordGroupApi = function($http, $q) {

    var url = 'https://apis.voicebase.com/v2-beta';

    var getKeywordGroups = function(token) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/keywords/groups',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(keywordGroups) {
          deferred.resolve(keywordGroups);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var removeKeywordGroup = function(token, groupName) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/keywords/groups/' + groupName,
        type: 'DELETE',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function() {
          deferred.resolve();
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var createKeywordGroup = function(token, newGroup) {
      var deferred = $q.defer();
      delete newGroup.description;
      jQuery.ajax({
        url: url + '/definitions/keywords/groups/' + newGroup.name,
        type: 'PUT',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(newGroup),
        success: function() {
          deferred.resolve();
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    return {
      getKeywordGroups: getKeywordGroups,
      removeKeywordGroup: removeKeywordGroup,
      createKeywordGroup: createKeywordGroup
    };

  };

  angular.module('vbsKeywordGroupWidget')
    .service('keywordGroupApi', keywordGroupApi);

})();

(function() {
  'use strict';

  var toggleButton = function () {
    return {
      restrict: 'A',
      scope: {
        onValue: '@',
        offValue: '@'
      },
      link: function (scope, elem) {
        elem.addClass('toggleable-button');
        window.ToggleableButton.init({
          onStateValue  : scope.onValue,
          offStateValue : scope.offValue
        });
      }
    };
  };

  angular.module('ramlVoicebaseConsoleApp')
    .directive('toggleButton', toggleButton);

})();

var ToggleableButton = (function() {
  'use strict';

  var buttonOuterIdPrefix     = 'toggleable-button';
  var buttonInnerIdPrefix     = 'toggleable-button-inner';
  var buttonInnerTextIdPrefix = 'toggleable-button-inner-text';
  var buttonHandleIdPrefix    = 'toggleable-button-handle';
  var innerCheckboxIdPrefix   = 'toggleable-button-checkbox';
  var inputIds                = [];
  var buttonNodes             = [];
  var buttonStates            = [];
  var defaultButtonState      = true;
  var instanceCount           = 0;
  var onStateValue            = 'on';
  var offStateValue           = 'off';

  /**
   * Initializes the library
   */
  var init = function(options) {
    if (options !== undefined) {
      onStateValue  = (options.onStateValue  !== undefined) ? options.onStateValue  : onStateValue;
      offStateValue = (options.offStateValue !== undefined) ? options.offStateValue : offStateValue;
    }

    var buttonOuter;
    var buttonInner;
    var buttonInnerText;
    var buttonHandle;

    buttonNodes = document.querySelectorAll('.toggleable-button');

    instanceCount = buttonNodes.length;

    for (var i = 0; i < instanceCount; ++i) {
      buttonOuter = document.createElement('div');
      buttonOuter.setAttribute('id', buttonOuterIdPrefix + '_' + i);

      if (buttonNodes[i].className.search('tb-2x') > -1) {
        buttonOuter.setAttribute('class', 'toggleable-button-outer zoom-2');
      }
      else if (buttonNodes[i].className.search('tb-3x') > -1) {
        buttonOuter.setAttribute('class', 'toggleable-button-outer zoom-3');
      }
      else {
        buttonOuter.setAttribute('class', 'toggleable-button-outer');
      }

      buttonOuter.setAttribute('onclick', 'ToggleableButton.toggle("' + i + '")');

      buttonInner = document.createElement('div');
      buttonInner.setAttribute('id', buttonInnerIdPrefix + '_' + i);
      buttonInner.setAttribute('class', 'toggleable-button-inner');

      buttonInnerText = document.createElement('div');
      buttonInnerText.setAttribute('id', buttonInnerTextIdPrefix + '_' + i);
      buttonInnerText.setAttribute('class', 'toggleable-button-inner-text');

      buttonHandle = document.createElement('div');
      buttonHandle.setAttribute('id', buttonHandleIdPrefix + '_' + i);
      buttonHandle.setAttribute('class', 'toggleable-button-handle');

      buttonNodes[i].parentNode.insertBefore(buttonOuter, buttonNodes[i].nextSibling);
      document.getElementById(buttonOuterIdPrefix + '_' + i).appendChild(buttonInner);
      document.getElementById(buttonInnerIdPrefix + '_' + i).appendChild(buttonHandle);
      document.getElementById(buttonInnerIdPrefix + '_' + i).appendChild(buttonInnerText);

      if (buttonNodes[i].id === '') {
        buttonNodes[i].setAttribute('id', 'toggleable-button' + '_' + i);
      }

      inputIds[i] = buttonNodes[i].id;

      loadCurrentButtonState(i);
    }
  };

  /**
   * Loads current button state
   */
  var loadCurrentButtonState = function(instanceId) {
    var inputCheckbox = document.getElementById(inputIds[instanceId]);

    buttonStates[instanceId] = (inputCheckbox.checked !== false);

    setButtonPosition(buttonStates[instanceId], instanceId);
  };

  /**
   * Sets button position
   */
  var setButtonPosition = function(status, instanceId) {
    var buttonHandle    = document.getElementById(buttonHandleIdPrefix    + '_' + instanceId);
    var buttonInner     = document.getElementById(buttonInnerIdPrefix     + '_' + instanceId);
    var buttonInnerText = document.getElementById(buttonInnerTextIdPrefix + '_' + instanceId);
    var inputCheckbox   = document.getElementById(inputIds[instanceId]);

    if (status) {
      buttonInner.classList.remove('toggleable-button-off');
      buttonInner.classList.add('toggleable-button-on');
      buttonInnerText.innerHTML = onStateValue;
      inputCheckbox.click();
    } else {
      buttonInner.classList.remove('toggleable-button-on');
      buttonInner.classList.add('toggleable-button-off');
      buttonInnerText.innerHTML = offStateValue;
      inputCheckbox.click();
    }
  };

  /**
   * Toggles
   */
  var toggle = function(instanceId) {
    // Turn on
    buttonStates[instanceId] = (!buttonStates[instanceId]);

    setButtonPosition(buttonStates[instanceId], instanceId);
  };

  return {
    init   : function(options) { return init(options); },
    toggle : function(id) { return toggle(id); }
  };
})();

(function () {
  'use strict';

  var nullForm = function() {
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

          if ( !parentFormController )
          {
            return; // root form, no need to isolate
          }

          // Do a copy of the controller
          var originalCtrl = {};
          angular.copy( formController, originalCtrl );

          // Replace form controller with a "null-controller"
          var nullFormCtrl = {
            $setValidity   : function ( validationToken, isValid, control ) {
              originalCtrl.$setValidity( validationToken, isValid, control );
              parentFormController.$setValidity( validationToken, true, formController );
            },
            $setDirty      : function () {
              element.removeClass( 'ng-pristine' ).addClass( 'ng-dirty' );
              formController.$dirty = true;
              formController.$pristine = false;
            },
            $setPristine   : function () {
              element.addClass( 'ng-pristine' ).removeClass( 'ng-dirty' );
              formController.$dirty = false;
              formController.$pristine = true;
            }
          };

          angular.extend(formController, nullFormCtrl);
        }
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('nullForm', nullForm);
})();

(function () {
  'use strict';

  var voicebaseAuthForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/voicebase-auth-form.tpl.html',
      controller: function($scope, formValidate, voicebaseTokensApi) {
        $scope.credentials = {};
        $scope.showAuthForm = false;
        $scope.formError = '';

        $scope.isRemember = voicebaseTokensApi.getNeedRemember();

        $scope.changeRemember = function() {
          $scope.isRemember = !$scope.isRemember;
          voicebaseTokensApi.setNeedRemember($scope.isRemember);
        };

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
          return false;
        };

        $scope.auth = function(credentials, errorCallback) {
          $scope.isLoaded = true;
          var baseUri = 'https://apis.voicebase.com/v2-beta';
          if(RAML.Client && $scope.raml) {
            var client = RAML.Client.create($scope.raml);
            baseUri = client.baseUri;
          }

          voicebaseTokensApi.getTokens(baseUri, credentials).then(function() {
            $scope.isLoaded = false;
          }, function(error){
            $scope.isLoaded = false;
            if(errorCallback) {
              errorCallback(error);
            }
          });
        };

      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('voicebaseAuthForm', voicebaseAuthForm);

})();

(function () {
  'use strict';

  var voicebaseSign = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/voicebase-sign.tpl.html',
      replace: true,
      controller: function($scope, $location, voicebaseTokensApi) {

        $scope.signed = false;
        $scope.isLoaded = false;

        $scope.signIn = function() {
          if(!$scope.isLoaded) {
            $scope.showForm(); // method of voicebase-auth-form
          }
        };

        $scope.signOut = function() {
          voicebaseTokensApi.setTokensObj(null);
          $location.path('/');
        };

        $scope.$watch(function() {
          return voicebaseTokensApi.getTokensObj();
        }, function(tokensObj) {
          $scope.signed = !!tokensObj;
        });

        var tokenFromLocation = voicebaseTokensApi.getTokenFromLocation();
        if(!tokenFromLocation) {
          voicebaseTokensApi.getTokenFromStorage();
        }

        $scope.consoleView = false;
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('voicebaseSign', voicebaseSign);

})();

(function () {
  'use strict';

  var voicebaseTokens = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/voicebase-tokens.tpl.html',
      replace: true,
      controller: function($scope, voicebaseTokensApi) {

        $scope.isLoaded = false;
        $scope.tokens = [];
        $scope.selectedToken = null;

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

  angular.module('voicebaseTokensModule')
    .directive('voicebaseTokens', voicebaseTokens);
})();

(function () {
  'use strict';

  var voicebaseTokensApi = function($http, $q) {
    var tokens = null;
    var currentToken = null;
    var needRemember = localStorage.getItem('needRemember') || false;

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

    var getToken = function(url, credentials) {
      var deferred = $q.defer();

      var username = credentials.username;
      var password = credentials.password;

      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: {
          apikey: username,
          password: password
        },
        success: function(_tokenData) {
          if(!_tokenData.success) {
            deferred.reject('Something goes wrong!');
          }
          else {
            var _tokens = {
              tokens: [{
                token: _tokenData.token
              }]
            };
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
      var _tokensObj = (!tokensObj) ? null : tokensObj.tokens[0];
      setCurrentToken(_tokensObj);

      if(needRemember && _tokensObj && _tokensObj.token) {
        localStorage.setItem('voicebaseToken', _tokensObj.token);
      }
      else {
        localStorage.removeItem('voicebaseToken');
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

      return getCurrentToken();
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

    var getTokenFromStorage = function() {
      var tokenFromStorage = localStorage.getItem('voicebaseToken');
      if(tokenFromStorage) {
        setTokensObj({
          tokens: [{
            token: tokenFromStorage,
            type: 'Bearer'
          }]
        });
      }
      return tokenFromStorage;
    };

    var getNeedRemember = function() {
      return needRemember;
    };

    var setNeedRemember = function(value) {
      needRemember = value;
      if(needRemember) {
        localStorage.setItem('needRemember', needRemember);
      }
      else {
        localStorage.removeItem('needRemember');
      }
    };

    return {
      getTokens: getTokens,
      getToken: getToken,
      setTokensObj: setTokensObj,
      getTokensObj: getTokensObj,
      getCurrentToken: getCurrentToken,
      setCurrentToken: setCurrentToken,
      getTokenFromLocation: getTokenFromLocation,
      getNeedRemember: getNeedRemember,
      setNeedRemember: setNeedRemember,
      getTokenFromStorage: getTokenFromStorage
    };

  };

  angular.module('voicebaseTokensModule')
    .service('voicebaseTokensApi', voicebaseTokensApi);

})();

angular.module('ramlConsoleApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('console/directives/main-login.tpl.html',
    "<div class=\"raml-console-main-login-form\">\n" +
    "  <css-spinner ng-show=\"isInit\"></css-spinner>\n" +
    "  <div ng-hide=\"isInit\">\n" +
    "    <form name=\"authForm\" action=\"\" class=\"raml-console-login-form\" novalidate ng-submit=\"startAuth($event)\">\n" +
    "      <div class=\"raml-console-main-login-error\" ng-show=\"formError\">\n" +
    "        {{ formError }}\n" +
    "      </div>\n" +
    "      <div class=\"raml-console-vbs-validation-error raml-console-vbs-validation-required-error\">\n" +
    "        API Key and Password are required.\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input type=\"text\"\n" +
    "               required=\"true\"\n" +
    "               name=\"username\"\n" +
    "               placeholder=\"API Key\"\n" +
    "               class=\"raml-console-sidebar-input raml-console-sidebar-security-field raml-console-login-input\"\n" +
    "               ng-model=\"credentials.username\"/>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <input type=\"password\"\n" +
    "               required=\"true\"\n" +
    "               name=\"password\"\n" +
    "               placeholder=\"Password\"\n" +
    "               class=\"raml-console-sidebar-input raml-console-sidebar-security-field raml-console-login-input\"\n" +
    "               ng-model=\"credentials.password\"/>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <div class=\"raml-console-remember-toggle\">\n" +
    "          <input type=\"checkbox\"\n" +
    "                 toggle-button on-value=\"yes\" off-value=\"no\"\n" +
    "                 ng-checked=\"isRemember\"\n" +
    "                 ng-click=\"changeRemember()\"/>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <label class=\"raml-console-login-label\">\n" +
    "            Remember Me\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <button type=\"submit\" class=\"raml-console-login-submit raml-console-margin-top-input\">\n" +
    "          <span ng-show=\"!isLoaded\">Sign In</span>\n" +
    "          <span ng-show=\"isLoaded\">Signing In...</span>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('console/directives/voicebase-named-parameters.tpl.html',
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


  $templateCache.put('console/directives/voicebase-raml-field.tpl.html',
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


  $templateCache.put('console/directives/wait-list-form.tpl.html',
    "<div>\n" +
    "  <form name=\"waitListForm\" action=\"\" class=\"raml-console-login-form\" novalidate ng-submit=\"addEmail($event)\">\n" +
    "    <div class=\"raml-console-main-login-error\" ng-show=\"formError\">\n" +
    "      {{ formError }}\n" +
    "    </div>\n" +
    "    <div class=\"raml-console-vbs-validation-error raml-console-vbs-validation-required-error\">\n" +
    "      Email Address is required.\n" +
    "    </div>\n" +
    "    <div class=\"raml-console-vbs-validation-error raml-console-vbs-validation-wrong-email-error\">\n" +
    "      Invalid Email Address.\n" +
    "    </div>\n" +
    "    <div class=\"raml-console-vbs-success-message\" ng-show=\"successMessage\">\n" +
    "      {{ successMessage }}\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "      <input type=\"email\"\n" +
    "             required=\"true\"\n" +
    "             name=\"email\"\n" +
    "             placeholder=\"Email Address\"\n" +
    "             class=\"raml-console-sidebar-input raml-console-sidebar-security-field raml-console-login-input\"\n" +
    "             ng-model=\"credentials.email\"/>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <button type=\"submit\" class=\"raml-console-login-submit\">\n" +
    "        <span ng-show=\"!isLoaded\">Add me to the wait list</span>\n" +
    "        <span ng-show=\"isLoaded\">Adding...</span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "\n" +
    "  </form>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('console/templates/landing-brand.tpl.html',
    "<div class=\"raml-console-voicebase-brand\">\n" +
    "  <img src=\"img/logo.png\"/>\n" +
    "</div>\n" +
    "<div class=\"raml-console-brand-label\">\n" +
    "  DEVELOPER PORTAL\n" +
    "</div>\n"
  );


  $templateCache.put('console/templates/portal-navbar.tpl.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top vbs-portal-navbar\">\n" +
    "  <div class=\"container\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#/portal\" >\n" +
    "        <img alt=\"VoiceBase Developer Portal\" src=\"img/logo-portal.png\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\">\n" +
    "      <voicebase-sign></voicebase-sign>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div><!-- /.container -->\n" +
    "</nav>\n"
  );


  $templateCache.put('console/templates/skip-toolbar.tpl.html',
    "<a href=\"#\" class=\"raml-console-login-header-btn raml-console-skip-console-btn\" ng-click=\"skip($event);\"\n" +
    "   data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Explore a subnet of the Voicebase API prior to creating your developer account\">\n" +
    "  <span ng-hide=\"isSkipping\">Explore the API</span>\n" +
    "  <css-spinner ng-show=\"isSkipping\"></css-spinner>\n" +
    "</a>\n"
  );


  $templateCache.put('css-spinner/css-spinner.tpl.html',
    "<div class=\"raml-console-spinner\">\n" +
    "  <div class=\"raml-console-rect1\"></div>\n" +
    "  <div class=\"raml-console-rect2\"></div>\n" +
    "  <div class=\"raml-console-rect3\"></div>\n" +
    "  <div class=\"raml-console-rect4\"></div>\n" +
    "  <div class=\"raml-console-rect5\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('keyword-group-widget/directives/keyword-group-form.tpl.html',
    "<div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"control-label col-sm-4 raml-console-keyword-label\">\n" +
    "      Group Name\n" +
    "      <span class=\"raml-console-side-bar-required-field\">*</span>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"col-sm-8\">\n" +
    "      <input class=\"form-control\" type=\"text\" placeholder=\"Name\" name=\"groupName\" required=\"true\" maxlength=\"64\"\n" +
    "             ng-model=\"keywordGroup.name\">\n" +
    "      <span class=\"raml-console-bootstrap-error raml-console-field-validation-error col-sm-12\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"control-label col-sm-4 raml-console-keyword-label\">Description</label>\n" +
    "\n" +
    "    <div class=\"col-sm-8\">\n" +
    "      <textarea class=\"form-control\" placeholder=\"Description\" name=\"description\" maxlength=\"1000\"\n" +
    "                ng-model=\"keywordGroup.description\"></textarea>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <hr/>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"control-label col-sm-4 raml-console-keyword-label\">\n" +
    "      Word/Phase to Detect\n" +
    "      <span class=\"raml-console-side-bar-required-field\">*</span>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"col-sm-6\">\n" +
    "      <div class=\"raml-console-keywords-list-container\" data-scroll-to-bottom='keywordGroup.keywords.length'>\n" +
    "        <div ng-repeat=\"keyword in keywordGroup.keywords track by $index\">\n" +
    "          <ng-form name=\"keywordForm\" class=\"input-group raml-console-input-group\">\n" +
    "            <input class=\"form-control\" type=\"text\" placeholder=\"Word/Phrase\" name=\"keyword\" maxlength=\"64\" required=\"true\"\n" +
    "                   ng-model=\"keywordGroup.keywords[$index]\"\n" +
    "                   input-max-word-validate>\n" +
    "            <span class=\"raml-console-multi-errors col-sm-12\">\n" +
    "              <span class=\"raml-console-vbs-validation-error raml-console-vbs-validation-required\">Required</span>\n" +
    "              <span class=\"raml-console-vbs-validation-error raml-console-vbs-validation-many-words-error\">Maximum 10 words</span>\n" +
    "            </span>\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default raml-console-keyword-remove\" type=\"button\"\n" +
    "                      title=\"Remove word/phrase\"\n" +
    "                      ng-click=\"removeKeyword($index)\" ng-if=\"keywordGroup.keywords.length > 1\">\n" +
    "                <i class=\"fa fa-times-circle\"></i>\n" +
    "              </button>\n" +
    "            </span>\n" +
    "          </ng-form>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <button type=\"button\" class=\"btn btn-link add-keyword\"\n" +
    "              ng-click=\"addKeyword()\" ng-show=\"keywordGroup.keywords.length < 32\">\n" +
    "        <i class=\"fa fa-plus-circle\"></i>\n" +
    "        Add another Word/Phrase\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('keyword-group-widget/directives/keyword-group-widget.tpl.html',
    "<div class=\"raml-console-vbs-keyword-group-widget-container\">\n" +
    "  <a class=\"raml-console-meta-button\" ng-click=\"keywordWidgetCtrl.toggleWidget()\" ng-if=\"keywordWidgetCtrl.isPopup\">\n" +
    "    <span>Keywords spotting widget</span>\n" +
    "  </a>\n" +
    "\n" +
    "  <div class=\"raml-console-vbs-popup\" ng-show=\"keywordWidgetCtrl.isShowWidget\">\n" +
    "    <div class=\"raml-console-vbs-popup-header\" ng-if=\"keywordWidgetCtrl.isPopup\">\n" +
    "      <h3 class=\"raml-console-vbs-popup-title\">Keyword Spotting Groups</h3>\n" +
    "      <div class=\"raml-console-vbs-popup-close\" ng-click=\"keywordWidgetCtrl.hideWidget()\">\n" +
    "        <i class=\"fa fa-remove\"></i>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"raml-console-vbs-popup-body\">\n" +
    "      <div class=\"panel panel-default raml-console-panel\">\n" +
    "        <!--Toolbar-->\n" +
    "        <div class=\"list-group raml-console-keyword-group-toolbar\" ng-if=\"keywordWidgetCtrl.isLogin\">\n" +
    "          <a class=\"list-group-item raml-console-add-group\"\n" +
    "             data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add Keyword Spotting Group\"\n" +
    "             ng-click=\"keywordWidgetCtrl.startCreateGroup()\"\n" +
    "             ng-show=\"!keywordWidgetCtrl.createLoading\">\n" +
    "\n" +
    "            <h4 class=\"list-group-item-heading raml-console-item-heading\">\n" +
    "              <i class=\"fa fa-plus-circle\"></i>\n" +
    "              Add Keyword Spotting Group\n" +
    "            </h4>\n" +
    "\n" +
    "          </a>\n" +
    "          <css-spinner ng-show=\"keywordWidgetCtrl.createLoading\"></css-spinner>\n" +
    "        </div>\n" +
    "\n" +
    "        <css-spinner ng-if=\"keywordWidgetCtrl.isLoaded\"></css-spinner>\n" +
    "        <div ng-if=\"!keywordWidgetCtrl.isLogin && !keywordWidgetCtrl.isLoaded\" class=\"raml-console-error-message\">Please sign in</div>\n" +
    "        <div ng-if=\"keywordWidgetCtrl.errorMessage && !keywordWidgetCtrl.isLoaded\" class=\"raml-console-error-message\">{{ keywordWidgetCtrl.errorMessage }}</div>\n" +
    "\n" +
    "        <div class=\"panel-heading\" ng-if=\"!keywordWidgetCtrl.isLoaded && keywordWidgetCtrl.isLogin\">\n" +
    "          <h3 class=\"panel-title\">Your Groups</h3>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"list-group raml-console-keywords-group-list\">\n" +
    "          <a class=\"list-group-item raml-console-keywords-group-list-item\"\n" +
    "             dir-paginate=\"keywordGroup in keywordWidgetCtrl.keywordGroups.groups | itemsPerPage: keywordWidgetCtrl.groupsPerPage\"\n" +
    "             current-page=\"keywordWidgetCtrl.currentPage\"\n" +
    "             ng-click=\"keywordWidgetCtrl.startEditGroup(keywordGroup)\">\n" +
    "\n" +
    "            <h4 class=\"list-group-item-heading raml-console-keywords-group-name\">{{ keywordGroup.name }}</h4>\n" +
    "            <small class=\"list-group-item-text\">{{ keywordGroup.keywords | keywordsFilter }}</small>\n" +
    "            <i class=\"fa fa-times-circle raml-console-keywords-group-remove\"\n" +
    "               data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete group\"\n" +
    "               ng-click=\"keywordWidgetCtrl.startRemovingGroup(keywordGroup, $event)\"\n" +
    "               ng-show=\"!keywordGroup.startDelete && !keywordGroup.startEdit\">\n" +
    "            </i>\n" +
    "\n" +
    "            <css-spinner ng-if=\"keywordGroup.startDelete || keywordGroup.startEdit\"></css-spinner>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"raml-console-keywords-pagination\" >\n" +
    "          <dir-pagination-controls\n" +
    "            template-url=\"pagination/dirPagination.tpl.html\">\n" +
    "          </dir-pagination-controls>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <script type=\"text/ng-template\" id=\"editKeywordGroupModal.html\">\n" +
    "    <div class=\"modal fade\" data-backdrop=\"static\">\n" +
    "      <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content raml-console-modal\">\n" +
    "          <div class=\"modal-header raml-console-modal-header\">\n" +
    "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "            <h4 class=\"modal-title raml-console-modal-title\">{{ mode === 'create' ? 'Add' : 'Edit' }} Keyword Spotting Group</h4>\n" +
    "          </div>\n" +
    "          <div class=\"modal-body\">\n" +
    "            <form class=\"form-horizontal\" name=\"keywordGroupForm\" novalidate focus-form>\n" +
    "              <keyword-group-form keyword-group=\"keywordGroup\"></keyword-group-form>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"modal-footer raml-console-modal-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-success\" ng-click=\"groupSave()\">\n" +
    "              <i class=\"fa fa-check\"></i>\n" +
    "              Save\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n" +
    "              <i class=\"fa fa-times\"></i>\n" +
    "              Cancel\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </script>\n" +
    "\n" +
    "  <script type=\"text/ng-template\" id=\"removeKeywordGroupModal.html\">\n" +
    "    <div class=\"modal fade\" data-backdrop=\"static\">\n" +
    "      <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content raml-console-modal\">\n" +
    "          <div class=\"modal-header raml-console-modal-header\">\n" +
    "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "            <h4 class=\"modal-title raml-console-modal-title\">Remove Keyword Spotting Group</h4>\n" +
    "          </div>\n" +
    "          <div class=\"modal-body\">\n" +
    "            <p class=\"raml-console-confirmation-message\">Are you sure you want to delete keyword group?</p>\n" +
    "          </div>\n" +
    "          <div class=\"modal-footer raml-console-modal-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-success\" ng-click=\"removeGroup()\">\n" +
    "              <i class=\"fa fa-check\"></i>\n" +
    "              Remove\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n" +
    "              <i class=\"fa fa-times\"></i>\n" +
    "              Cancel\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </script>\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('pagination/dirPagination.tpl.html',
    "<ul class=\"pagination\" ng-if=\"1 < pages.length\">\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"pageNumber in pages track by $index\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a>\n" +
    "    </li>\n" +
    "\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\">\n" +
    "        <a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a>\n" +
    "    </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('voicebase-tokens/directives/voicebase-auth-form.tpl.html',
    "<div class=\"raml-console-auth-form-container\">\n" +
    "  <div class=\"raml-console-vbs-token-auth-form\" ng-show=\"showAuthForm\">\n" +
    "    <form name=\"authForm\" novalidate null-form ng-submit=\"startAuth($event)\">\n" +
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
    "\n" +
    "        <p>\n" +
    "          <label class=\"raml-console-sidebar-label raml-console-pull-right\">\n" +
    "            <input type=\"checkbox\" class=\"raml-console-rememberVoicebaseToken\" ng-checked=\"isRemember\" ng-click=\"changeRemember()\"/>\n" +
    "            Remember me\n" +
    "          </label>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"raml-console-vbs-auth-form-btns\">\n" +
    "        <button type=\"submit\" class=\"raml-console-sidebar-action raml-console-sidebar-action-get\">Sign In</button>\n" +
    "        <button type=\"button\" ng-click=\"hideForm()\" class=\"raml-console-sidebar-action raml-console-sidebar-action-reset\">Cancel</button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"raml-console-vbs-tokens-error\" ng-show=\"formError\">\n" +
    "    <span class=\"raml-console-vbs-close\" ng-click=\"hideError()\"><span>x</span></span>\n" +
    "    {{ formError }}\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-tokens/directives/voicebase-sign.tpl.html',
    "<div class=\"raml-console-vbs-sign-container\">\n" +
    "  <div ng-if=\"consoleView\">\n" +
    "    <a class=\"raml-console-meta-button\" ng-if=\"!signed\" ng-click=\"signIn()\">\n" +
    "      <span ng-show=\"!isLoaded\">Sign In</span>\n" +
    "      <span ng-show=\"isLoaded\">Signing In...</span>\n" +
    "    </a>\n" +
    "    <a class=\"raml-console-meta-button\" ng-if=\"signed\" ng-click=\"signOut()\">\n" +
    "      Sign Out\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"!consoleView\">\n" +
    "    <button type=\"button\" class=\"btn btn-danger navbar-btn navbar-right\" ng-if=\"!signed\" ng-click=\"signIn()\">\n" +
    "      <span ng-show=\"!isLoaded\">Sign In</span>\n" +
    "      <span ng-show=\"isLoaded\">Signing In...</span>\n" +
    "    </button>\n" +
    "    <button type=\"button\" class=\"btn btn-danger navbar-btn navbar-right\" ng-if=\"signed\" ng-click=\"signOut()\">\n" +
    "      Sign Out\n" +
    "    </button>\n" +
    "  </div>\n" +
    "\n" +
    "  <voicebase-auth-form></voicebase-auth-form>\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-tokens/directives/voicebase-tokens.tpl.html',
    "<div class=\"raml-console-vbs-tokens-container\">\n" +
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
