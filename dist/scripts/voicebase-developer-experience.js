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
    'progressBarModule',
    'formValidateModule'
  ]);

  angular.module('voicebaseAuth0Module', [
    'angular-storage',
    'angular-jwt',
    'angular-clipboard'
  ]);

  angular.module('voicebaseTokensModule', []);

  angular.module('voicebasePlayerModule', []);

  angular.module('dagModule', []);

  angular.module('vbsKeywordGroupWidget', [
    'voicebaseVendorsModule',
    'voicebasePlayerModule'
  ]);

  var voicebaseConsoleModules = [
    'voicebaseVendorsModule',
    'voicebaseTokensModule',
    'voicebaseAuth0Module',
    'voicebasePlayerModule',
    'vbsKeywordGroupWidget',
    'dagModule'
  ];

  if(typeof RAML !== 'undefined') {
    voicebaseConsoleModules.push('ramlConsoleApp');
  }

  angular.module('ramlVoicebaseConsoleApp', voicebaseConsoleModules).config(
    function ($provide, $routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    if(typeof RAML !== 'undefined') {
      //voicebasePortal.Decorators.ramlConsole($provide);
      voicebasePortal.Decorators.ramlSidebar($provide);
      voicebasePortal.Decorators.ramlField($provide);
      voicebasePortal.Decorators.namedParameters($provide); // custom headers can't be empty

      // for support custom scheme x-OAuth 2 Bearer
      voicebasePortal.Decorators.AuthStrategies();
    }

    if (voicebaseConsoleModules.indexOf('voicebaseAuth0Module') !== -1 && typeof Auth0Lock !== 'undefined') {
      voicebasePortal.Decorators.voicebaseSignAuth0($provide);
    }

    $routeProvider
      .when('/', {
        templateUrl: 'pages/auth0LoginPage.html',
        reloadOnSearch: false
      })
      .when('/login', {
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
      .when('/legacy-key-manager', {
        templateUrl: 'pages/legacyKeyManagerPage.html',
        reloadOnSearch: false
      })
      .when('/generate-api-key', {
        templateUrl: 'pages/generateKeyPage.html',
        reloadOnSearch: false
      })
      .when('/media-browser', {
        templateUrl: 'pages/mediaBrowserPage.html',
        reloadOnSearch: false
      })
      .when('/dag', {
        templateUrl: 'pages/dagPage.html',
        reloadOnSearch: false
      })
      .when('/wait', {
        templateUrl: 'pages/addToWaitListPage.html',
        reloadOnSearch: false
      })
      .when('/confirm', {
        templateUrl: 'pages/confirmEmailPage.html',
        reloadOnSearch: false
      })
      .when('/approve', {
        templateUrl: 'pages/approvalPage.html',
        reloadOnSearch: false
      })
      .otherwise({redirectTo: '/'});

  })
    .run(function ($rootScope, $location, ajaxError) {
      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if (next + '#/' === current) {
          event.preventDefault();
        }
      });
      ajaxError.handleError();
    });
})();

voicebasePortal.Decorators = (function (Decorators) {
  'use strict';

  Decorators.voicebaseSignAuth0 = function ($provide) {
    $provide.decorator('voicebaseSignDirective', function ($delegate, $controller, $compile, voicebaseTokensApi, auth0Api) {
      var directive = $delegate[0];

      var controllerOrigin = directive.controller; // save original controller
      directive.controller = function ($scope, $location, $anchorScroll) {
        angular.extend(this, $controller(controllerOrigin, {
          $scope: $scope,
          $location: $location,
          voicebaseTokensApi: voicebaseTokensApi,
          auth0Api: auth0Api
        }));

        var _signOut = $scope.signOut;
        $scope.signOut = function() {
          _signOut.apply(this);
          auth0Api.signOut();
        };

      };

      return $delegate;
    });

  };

  return Decorators;

})(voicebasePortal.Decorators || {});

(function () {
  'use strict';

  angular.module('voicebaseAuth0Module').directive('auth0Env', [
    'auth0Api',
    function (auth0Api) {
      return {
        restrict: 'E',
        scope: {
          domain: '@',
          clientId: '@'
        },
        link: function (scope) {
          auth0Api.setEnv(scope.domain, scope.clientId);
        }
      };
    }
  ]);

})();

(function () {
  'use strict';

  var auth0KeyManager = function () {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-key-manager.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyManagerCtrl',
      controller: function($scope, voicebaseTokensApi, auth0Api) {
        var me = this;

        me.isLogin = false;
        me.tokenPending = false;
        me.token = '';
        me.isCopied = false;
        me.showTokenForm = false;

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          if (!me.token) {
            generateToken();
          }
        });

        var generateToken = function () {
          me.tokenPending = true;
          auth0Api.createAuth0ApiKey().then(generateTokenSuccess, generateTokenError);
        };

        var generateTokenSuccess = function (token) {
          me.tokenPending = false;
          me.token = token;
          voicebaseTokensApi.setToken(token);
        };

        var generateTokenError = function (error) {
          me.tokenPending = false;
          me.errorMessage = error;
        };

        me.onCopy = function () {
          me.isCopied = true;
        };

        me.onCopyError = function (error) {
          console.log('Copy error: ', error);
        };

        me.downloadKey = function () {
          var blob = new Blob([me.token], {type: 'text/plain;charset=utf-8'});
          saveAs(blob, 'voicebase-api-key.txt');
        };

        me.changeActive = function () {
          me.showTokenForm = !me.showTokenForm;
        };

      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyManager', auth0KeyManager);

})();

(function () {
  'use strict';

  var Auth0Login = function() {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/auth0-login.tpl.html',
      replace: false,
      controller: function($scope, $http, $location, $timeout, store, auth0Api, voicebaseTokensApi) {
        $scope.$on('auth0SignIn', function(e, credentials) {
          if (credentials.token && credentials.profile) {
            loginSuccess(credentials);
          }
          else if (credentials.error) {
            loginError(credentials.error);
          }
        });

        var loginSuccess = function (response) {
          if (response.profile.email_verified) {
            // getApiKey(response);
            createToken(response.token);
          }
          else {
            updateHubSpot(response);

            $timeout(function () {
              $location.path('/confirm');
            }, 100);
          }
        };

        var updateHubSpot = function (response) {
          var url = 'https://forms.hubspot.com/uploads/form/v2/1701619/';
          var hubSpotFormId = '94e0187f-8000-44a2-922a-f11f815def1f';
          var location = window.location.toString();
          var companyPrefix = getCompanyPrefix(location);
          var urlHubSpot = url.concat(hubSpotFormId,
            '?account_status=', 'pending',
            '&email=', encodeURIComponent(response.profile.email),
            '&company=', encodeURIComponent(companyPrefix+response.profile.user_metadata.account)
          );

          // Post user's account information to HubSpot
          $http({
            method: 'POST',
            url: urlHubSpot,
            header: 'Content-Type: application/x-www-form-urlencoded'
          });
        };

        var getCompanyPrefix = function (location) {
          var envs = ['localhost', '.dev.', '.qa.', '.preprod.'];
          var length = envs.length;
          for (var i=0; i<length; i++) {
            var index = location.indexOf(envs[i]);
            if (index>=0) {
              return envs[i].replace(/\./g,'')+'_';
            }
          }
          return '';
        };

        var getApiKey = function (response) {
          auth0Api.getApiKeys(response.token)
            .then(function (voicebaseTokens) {
              if (voicebaseTokens.length > 0) {
                setToken(voicebaseTokens[0]);
              }
              else {
                createToken(response.token);
              }
            }, loginError);
        };

        var createToken = function (auth0Token) {
          auth0Api.createAuth0ApiKey(auth0Token, true).then(setToken, loginError);
        };

        var setToken = function (token) {
          voicebaseTokensApi.setNeedRemember(true);
          voicebaseTokensApi.setToken(token);
          auth0Api.runUpdatingTokenInterval();
          loadPortal();
        };

        var loginError = function (error) {
          console.error(error);
        };

        var loadPortal = function() {
          $location.path('/portal');
        };

        auth0Api.signIn();
      }

    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0Login', Auth0Login);

})();

(function () {
  'use strict';

  var auth0KeyList = function () {
    return {
      restrict: 'E',
      templateUrl: 'auth0/directives/autho-keys-list.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyListCtrl',
      controller: function($scope, $location, voicebaseTokensApi, auth0Api, months) {
        var me = this;

        me.isLogin = false;
        me.errorMessage = '';
        me.keysPending = false;
        me.showGeneratedKey = false;
        me.keys = [];
        me.sortType = 'issued';
        me.sortReverse = true;

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          me.isLogin = (_tokenData) ? true : false;
          if (me.isLogin) {
            me.token = _tokenData.token;
            getKeys();
          }
        });

        var getKeys = function () {
          me.keysPending = true;
          auth0Api.getApiKeys().then(getKeysSuccess, getKeysError);
        };

        var getKeysSuccess = function (keys) {
          me.keysPending = false;
          me.keys = keys;
        };

        var getKeysError = function (error) {
          me.keysPending = false;
          me.errorMessage = error;
        };

        me.formatDate = function (key) {
          var dateLabel = '-';
          if (key.issued) {
            var dateObj = new Date(key.issued);
            var day = dateObj.getDate();
            var month = months.getMonthById(dateObj.getMonth() + 1).short;
            var year = dateObj.getFullYear();
            var hours = dateObj.getHours();
            var minutes = dateObj.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = padLeft(minutes.toString(), 2);
            dateLabel = month + ' ' + day + ', ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;
          }
          return dateLabel;
        };

        var padLeft = function (string, total) {
          if (typeof string !== 'string') {
            throw new Error('First parameter must be a string');
          }
          if (typeof total !== 'number') {
            throw new Error('Second parameter must be a integer');
          }
          return new Array(total - string.length + 1).join('0') + string;
        };

        me.onGenerateApiKey = function () {
          me.showGeneratedKey = true;
        };

        me.done = function () {
          me.showGeneratedKey = false;
        };

        me.changeSortReverse = function () {
          me.sortReverse = !me.sortReverse;
        };
      }
    };
  };

  angular.module('voicebaseAuth0Module')
    .directive('auth0KeyList', auth0KeyList);

})();

(function () {
  'use strict';

  var Auth0Api = function($rootScope, $http, $q, voicebaseUrl, store, voicebaseTokensApi) {
    var baseUrl = voicebaseUrl.getBaseUrl();

    var AUTH0_CLIENT_ID = null;
    var AUTH0_DOMAIN = null;

    var AUTH0_OPTIONS = {
      theme: {
        logo: 'img/voicebase-logo.png',
        primaryColor: '#95e05a'
      },
      auth: {
        redirect: false,
        sso: false,
        params: {
          scope: 'openid app_metadata'
        }
      },
      avatar: null,
      additionalSignUpFields: [{
        name: 'account',
        placeholder: 'your account name'
      }],
      languageDictionary: {
        title: 'DEVELOPER PORTAL',
        emailInputPlaceholder: 'someone@yourcompany.com',
        signUpTerms: 'I accept the <a href="https://www.voicebase.com/terms-of-use/" target="_new">Terms of Service</a>.'
      },
      mustAcceptTerms: true,
      closable: false,
      container: 'auth0lock-explicit-container' // TODO (john@): this feels like hack
    };

    var lock = $rootScope.savedLock;

    var createAuth0ApiKey = function (auth0Token, ephemeral) {
      var deferred = $q.defer();
      if (!auth0Token) {
        auth0Token = store.get('auth0Token');
      }

      var data = {key: {}};
      if (ephemeral) {
        data = {
          key: {
            ttlMillis: 7200000,
            ephemeral: true
          }
        };
      }

      jQuery.ajax({
        url: baseUrl + '/profile/keys',
        type: 'POST',
        headers: {
          'Authorization': 'Bearer ' + auth0Token
        },
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
          deferred.resolve(response.key.bearerToken);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var signIn = function () {
      if (!AUTH0_CLIENT_ID || !AUTH0_DOMAIN) {
        setCredentialsError('Wrong Auth0 Config!');
        return false;
      }
      if (!lock) {
        lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_OPTIONS);
        lock.on('authenticated', function(result) {
          var token = result.idToken;
          lock.getProfile(token, function (error, profile) {
            if (error) {
              setCredentialsError(error);
            }
            hideLock();
            saveCredentials(profile, token);
            $rootScope.$broadcast('auth0SignIn', {profile: profile, token: token});
          });
        });
        $rootScope.savedLock = lock;
      }

      lock.show();
    };

    var hideLock = function () {
      lock.hide();
    };

    var dropLock = function () {
      $rootScope.savedLock = lock = null;
    };

    var setCredentialsError = function (error) {
      $rootScope.$broadcast('auth0SignIn', {error: error});
    };

    var saveCredentials = function (profile, token) {
      store.set('voicebase-profile', profile);
      store.set('auth0Token', token);
    };

    var signOut = function () {
      store.remove('voicebase-profile');
      store.remove('auth0Token');
    };

    var getApiKeys = function(auth0Token) {
      var deferred = $q.defer();
      if (!auth0Token) {
        auth0Token = store.get('auth0Token');
      }

      jQuery.ajax({
        url: baseUrl + '/profile/keys',
        type: 'GET',
        headers: {
          'Authorization': 'Bearer ' + auth0Token
        },
        success: function(response) {
          deferred.resolve(response.keys);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var setEnv = function (domain, clientId) {
      AUTH0_DOMAIN = domain;
      AUTH0_CLIENT_ID = clientId;
    };

    var runUpdatingTokenInterval = function () {
      var ONE_HOUR = 60 * 60 * 1000;
      var intervalId = setInterval(function () {
        createAuth0ApiKey(null, true)
          .then(function (token) {
            voicebaseTokensApi.setNeedRemember(true);
            voicebaseTokensApi.setToken(token);
          })
          .catch(function (error) {
            clearInterval(intervalId);
            console.log(error);
          });
      }, ONE_HOUR);
    };

    if (store.get('auth0Token')) {
      runUpdatingTokenInterval();
    }

    return {
      createAuth0ApiKey: createAuth0ApiKey,
      runUpdatingTokenInterval: runUpdatingTokenInterval,
      getApiKeys: getApiKeys,
      signIn: signIn,
      dropLock: dropLock,
      hideLock: hideLock,
      saveCredentials: saveCredentials,
      signOut: signOut,
      setEnv: setEnv
    };
  };

  angular.module('voicebaseAuth0Module')
    .service('auth0Api', Auth0Api);

})();

(function () {
  'use strict';

  var Months = function($http, $q, voicebaseUrl, store) {
    var months = {
      1: {
        num: 1,
        name: 'January',
        short: 'Jan'
      },
      2: {
        num: 2,
        name: 'February',
        short: 'Feb'
      },
      3: {
        num: 3,
        name: 'March',
        short: 'Mar'
      },
      4: {
        num: 4,
        name: 'April',
        short: 'Apr'
      },
      5: {
        num: 5,
        name: 'May',
        short: 'May'
      },
      6: {
        num: 6,
        name: 'June',
        short: 'Jun'
      },
      7: {
        num: 7,
        name: 'July',
        short: 'Jul'
      },
      8: {
        num: 8,
        name: 'August',
        short: 'Aug'
      },
      9: {
        num: 9,
        name: 'September',
        short: 'Sep'
      },
      10: {
        num: 10,
        name: 'October',
        short: 'Oct'
      },
      11: {
        num: 11,
        name: 'November',
        short: 'Nov'
      },
      12: {
        num: 12,
        name: 'December',
        short: 'Dec'
      }
    };

    var getMonths = function () {
      return months;
    };

    var getMonthById = function (monthId) {
      return months[monthId];
    };

    return {
      getMonths: getMonths,
      getMonthById: getMonthById
    };
  };

  angular.module('voicebaseAuth0Module')
    .service('months', Months);

})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('consolePageCtrl', ['$scope', '$sce', 'voicebaseUrl', function($scope, $sce, voicebaseUrl) {
      $scope.ramlUrl = $sce.trustAsResourceUrl(voicebaseUrl.getRamlUrl());
    }]);
})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('documentationPageCtrl', ['$scope', '$timeout', 'ramlParserWrapper', '$sce', 'voicebaseUrl', function($scope, $timeout, ramlParserWrapper, $sce, voicebaseUrl) {
      $scope.ramlUrl = $sce.trustAsResourceUrl(voicebaseUrl.getRamlUrl());

      var firstReady = true;
      ramlParserWrapper.onParseSuccess(function(raml) {
        if(firstReady) {
          firstReady = false;
          $timeout(function () {
            if(jQuery('#getting_started').length > 0) {
              jQuery('#getting_started').find('.raml-console-document-heading').click();
            }
          }, 100);

        }
      });

    }]);
})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp')
    .controller('loginPageCtrl', ['$scope', '$timeout', '$location', 'auth0Api', function($scope, $timeout, $location, auth0Api) {

      $scope.isSkipping = false;
      if (String($location.path()).startsWith('/login')) {
        auth0Api.dropLock();
      }

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
    .controller('portalNavbarCtrl', ['$scope', '$location', function($scope, $location) {

      $scope.loadMain = function(event) {
        event.preventDefault();
        $location.path('/portal');
      };

    }]);
})();

voicebasePortal.Decorators = (function (Decorators) {
  'use strict';

  Decorators.AuthStrategies = function () {
    if(RAML && RAML.Client &&  RAML.Client.AuthStrategies) {
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
    }
  };

  return Decorators;

})(voicebasePortal.Decorators || {});

voicebasePortal.Decorators = (function (Decorators) {
  'use strict';

  Decorators.namedParameters = function ($provide) {
    $provide.decorator('namedParametersDirective', function ($delegate) {
      var directive = $delegate[0];

      directive.templateUrl = 'console/directives/voicebase-named-parameters.tpl.html'; // replace template

      return $delegate;
    });

  };

  return Decorators;

})(voicebasePortal.Decorators || {});

voicebasePortal.Decorators = (function (Decorators) {
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

})(voicebasePortal.Decorators || {});

voicebasePortal.Decorators = (function (Decorators) {
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

})(voicebasePortal.Decorators || {});

voicebasePortal.Decorators = (function (Decorators) {
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

})(voicebasePortal.Decorators || {});

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

  var MainLogin = function($location, $timeout, voicebaseTokensApi) {
    return {
      restrict: 'E',
      templateUrl: 'console/directives/main-login.tpl.html',
      replace: false,
      controller: function($scope, formValidate) {
        $scope.credentials = {};
        $scope.isRemember = Boolean(voicebaseTokensApi.getNeedRemember());
        $scope.formError = '';
        $scope.isInit = true;
        $scope.isLoaded = false;

        $scope.$watch('isRemember', function(newValue, oldValue) {
          if(newValue !== oldValue) {
            $scope.changeRemember();
          }
        });

        $scope.changeRemember = function() {
          voicebaseTokensApi.setNeedRemember($scope.isRemember);
        };

        $scope.hideError = function(){
          $scope.formError = '';
        };

        $scope.startAuth = function($event) {
          $event.preventDefault()
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').addClass('checkDirty').find('.ng-invalid').first().focus();
          }
          else {
            $scope.isLoaded = true;
            voicebaseTokensApi.getToken($scope.credentials).then(function() {
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

  angular.module('ramlVoicebaseConsoleApp')
    .directive('mainLogin', MainLogin);

})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp').directive('validInputFile', function () {
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

  var waitListForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'console/directives/wait-list-form.tpl.html',
      replace: false,
      controller: function($scope, formValidate, waitList) {
        $scope.credentials = {};
        $scope.formError = '';
        $scope.successMessage = '';

        $scope.isLoaded = false;

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
            waitList.addEmailToWaitList($scope.credentials).then(function() {
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

  angular.module('ramlVoicebaseConsoleApp')
    .directive('waitListForm', waitListForm);

})();

(function () {
  'use strict';

  angular.module('ramlVoicebaseConsoleApp').directive('widgetList', [
    '$window',
    '$location',
    'voicebaseTokensApi',
    function ($window, $location, voicebaseTokensApi) {
      return {
        restrict: 'E',
        templateUrl: 'console/directives/widget-list.tpl.html',
        replace: false,
        scope: {
          showConsole: '@',
          showDoc: '@',
          showKeywordsGroups: '@',
          showKeywordsSpotting: '@',
          showSupport: '@',
          showMediaBrowser: '@',
          showKeyManager: '@',
          showDag: '@',
          showComingSoon: '@'
        },
        controller: function($scope) {
          function isInLegacyHybridMode() {
            return voicebaseTokensApi.isInLegacyHybridMode();
          }

          $scope.isSignedIn = function() {
            return voicebaseTokensApi.isSignedIn();
          };

          $scope.isSignedOut = function() {
            return ! $scope.isSignedIn();
          };

          $scope.showNativeKeyManager = function() {
            return ! isInLegacyHybridMode() && $scope.showKeyManager;
          };

          $scope.showLegacyHybridKeyManager = function() {
            return isInLegacyHybridMode() && $scope.showKeyManager;
          };

          $scope.loadConsole = function() {
            $location.path('/console');
          };

          $scope.loadKeywordsGroupApp = function() {
            $location.path('/keywords-groups');
          };

          $scope.loadKeyManager = function() {
            $location.path('/key-manager');
          };

          $scope.loadLegacyKeyManager = function() {
            $location.path('/legacy-key-manager');
          };

          $scope.loadMediaBrowser = function() {
            $location.path('/media-browser');
          };

          $scope.loadKeywordsSpottingApp = function() {
            $location.path('/keywords-spotting');
          };

          $scope.redirectToSupport = function() {
            $window.open('http://support.voicebase.com/');
          };

          $scope.loadDoc = function() {
            $window.location.href = 'http://voicebase.readthedocs.io/en/v2-beta/';
          };

          $scope.loadDocV3 = function() {
            $window.location.href = 'http://voicebase.readthedocs.io/en/v3/';
          };

          $scope.loadDag = function() {
            $location.path('/dag');
          };
        }
      };
    }
  ]);

})();

(function () {
  'use strict';

  var ajaxError = function($location) {

    var handleError = function () {
      jQuery(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
        if (jqxhr.status === 403) {
          $location.path('/approve');
        }
        else if (jqxhr.status === 401) {
          $location.path('/login');
        }
      });
    };

    return {
      handleError: handleError
    };

  };

  angular.module('ramlVoicebaseConsoleApp')
    .service('ajaxError', ajaxError);
})();


(function () {
  'use strict';

  var ajaxLogging = function() {
    jQuery.ajaxSetup({
      beforeSend: function() {
        console.log('***');
        console.log('Calling api url: ', this.url);
        console.log('More info about request: ', this);
      }
    });
  };

  ajaxLogging();

})();


(function () {
  'use strict';

  var resourceHelper = function () {

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

  angular.module('ramlVoicebaseConsoleApp')
    .service('resourceHelper', resourceHelper);

})();

(function () {
  'use strict';

  var waitList = function($http, $q, voicebaseUrl) {

    var baseUrl = voicebaseUrl.getBaseUrl();

    var addEmailToWaitList = function(credentials) {
      var deferred = $q.defer();

      var email = credentials.email;

      setTimeout(function() {
        console.log(baseUrl + '/' + email);
        deferred.resolve();
      }, 1000);

      return deferred.promise;
    };

    return {
      addEmailToWaitList: addEmailToWaitList
    };

  };

  angular.module('ramlVoicebaseConsoleApp')
    .service('waitList', waitList);

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

  angular.module('dagModule').directive('d3DagGraph', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'dag/directives/dag-graph.tpl.html',
        scope: {},
        controllerAs: 'dagCtrl',
        controller: function ($scope, $timeout, jobApi) {
          var me = this;

          me.job = null;
          me.graph = null;

          $scope.$watch(function () {
            return jobApi.getActiveJob();
          }, function (newJob, oldJob) {
            me.checkJobs(newJob, oldJob);
          });

          me.checkJobs = function (newJob, oldJob) {
            // if jobs are equal - not render
            if(angular.equals(newJob, oldJob)) {
              return false;
            }

            // render first time
            if(newJob) {
              me.job = newJob;
              $timeout(function () {
                var _newJob = jQuery.extend(true, {}, newJob);
                var _oldJob = jQuery.extend(true, {}, oldJob);
                me.renderJob(_newJob, _oldJob);
              }, 0);
            }

            return false;
          };

          me.renderJob = function (job, oldJob) {
            if(!job) {
              return false;
            }

            me.graph = new dagreD3.graphlib.Graph({compound:true})
              .setGraph({})
              .setDefaultEdgeLabel(function() { return {}; });

            var tasks = job.tasks;

            if( oldJob && oldJob.tasks && angular.equals(Object.keys(tasks), Object.keys(oldJob.tasks)) ) {
              var levels = getLevels(tasks);

              var changedTasks = [];
              var changedTasksInLevel = [];
              Object.keys(tasks).filter(function (key) {
                if(tasks[key].status !== oldJob.tasks[key].status) {
                  var inLevels = levels.filter(function (level) {
                    return level.indexOf(key) !== -1;
                  }).length;

                  if(inLevels > 0) {
                    changedTasksInLevel.push(key);
                  }
                  else {
                    changedTasks.push(key);
                  }
                }
              });

              if(changedTasksInLevel.length > 0) {
                levels.forEach(function (level, num) {
                  var completedTasks = 0;
                  for (var i = 0; i < level.length; i++) {
                    var levelTaskId = level[i];
                    var levelTask = tasks[levelTaskId];
                    if (levelTask.status === 'completed') {
                      completedTasks++;
                    }
                  }
                  var label = '' + completedTasks + '/' + level.length + ' complete';
                  var levelNodeId = 'box-level' + num + '-1';
                  DagreFlow.setNodeLabel(levelNodeId, label);
                });
              }

              changedTasks.forEach(function (taskKey) {
                var status = getStatus(tasks[taskKey]);
                DagreFlow.setNodeStatus(taskKey, status);
              });

            }
            else {
              tasks = parseTasks(tasks);
              var phases = initNodesAndPhases(tasks);
              initEdges(tasks);
              initClusters(phases);

              var svg = d3.select('svg');
              var svgGroup = svg.append('g');
              DagreFlow.init({
                svg: svg,
                graph: me.graph,
                shortLabels: true
              });
              DagreFlow.render();
            }
          };

          var parseTasks = function (tasks) {
            /*jshint loopfunc: true */
            console.log(tasks);
            var levels = getLevels(tasks);

            levels.forEach(function (level, num) {
              var completedTasks = 0;
              var boxTask = jQuery.extend(true, {}, tasks[level[0]]);
              boxTask.longLabel = true;
              var firstBoxTask = jQuery.extend(true, {}, boxTask);
              var lastBoxTask = jQuery.extend(true, {}, boxTask);
              firstBoxTask.taskId = 'box-level' + num + '-0';
              boxTask.taskId = 'box-level' + num + '-1';
              lastBoxTask.taskId = 'box-level' + num + '-2';
              boxTask.status = 'running';

              for (var i = 0; i < level.length; i++) {
                var levelTaskId = level[i];
                var levelTask = tasks[levelTaskId];
                if(levelTask.status === 'completed') {
                  completedTasks++;
                }
                var index;
                boxTask.dependents.forEach(function (parentId) {
                  var parent = tasks[parentId];
                  index = parent.dependencies.indexOf(levelTaskId);
                  parent.dependencies.splice(index, 1);
                });
                boxTask.dependencies.forEach(function (dependencyId) {
                  var child = tasks[dependencyId];
                  index = child.dependents.indexOf(levelTaskId);
                  child.dependents.splice(index, 1);
                });
                delete tasks[levelTaskId];
              }

              boxTask.dependents.forEach(function (parentId) {
                tasks[parentId].dependencies.push(firstBoxTask.taskId, boxTask.taskId, lastBoxTask.taskId);
              });
              boxTask.dependencies.forEach(function (dependencyId) {
                tasks[dependencyId].dependents.push(firstBoxTask.taskId, boxTask.taskId, lastBoxTask.taskId);
              });
              firstBoxTask.label = 'First';
              lastBoxTask.label = 'Last';
              boxTask.label = '' + completedTasks + '/' + level.length + ' complete';
              firstBoxTask.status = (completedTasks > 0) ? 'completed' : 'pending';
              lastBoxTask.status = (completedTasks === level.length) ? 'completed' : 'pending';

              tasks[firstBoxTask.taskId] = firstBoxTask;
              tasks[boxTask.taskId] = boxTask;
              tasks[lastBoxTask.taskId] = lastBoxTask;
            });

            return tasks;
          };

          var getLevels = function (tasks) {
            /*jshint loopfunc: true */
            var levelLength = 5;
            var levels = [];
            for (var taskId in tasks) {
              var task = tasks[taskId];

              var filterLevel = Object.keys(tasks).filter(function (nodeId) {
                return angular.equals(tasks[nodeId].dependencies, task.dependencies) && angular.equals(tasks[nodeId].dependents, task.dependents);
              });

              var matchLevel = levels.filter(function (level) {
                return angular.equals(filterLevel, level);
              });

              if(matchLevel.length === 0 && filterLevel.length > levelLength - 1) {
                levels.push(filterLevel);
              }
            }
            return levels;
          };

          var initNodesAndPhases = function (tasks) {
            var phases = {};
            for (var taskId in tasks) {
              if(tasks.hasOwnProperty(taskId)) {
                var task = tasks[taskId];
                var label = task.label || taskId;
                me.graph.setNode(taskId, {
                  label: label,
                  status: getStatus(task),
                  shortLabel: (task.longLabel) ? false : true
                });

                if(!phases[task.phase]) {
                  phases[task.phase] = {name: '', contents: []};
                }
                phases[task.phase].name = task.display;
                phases[task.phase].contents.push(taskId);
              }
            }
            return phases;
          };

          var initEdges = function (tasks) {
            for (var taskId in tasks) {
              if(tasks.hasOwnProperty(taskId)) {
                var task = tasks[taskId];
                for (var i = 0; i < task.dependents.length; i++) {
                  var childId = task.dependents[i];
                  var child = me.job.tasks[childId];
                  if (child) {
                    me.graph.setEdge(taskId, childId);
                  }
                }
              }
            }
          };

          var initClusters = function (phases) {
            for (var phaseId in phases) {
              if(phases.hasOwnProperty(phaseId)) {
                var phase = phases[phaseId];
                me.graph.setNode(phaseId, {
                  label: phase.name
                });
                for (var i = 0; i < phase.contents.length; i++) {
                  var childId = phase.contents[i];
                  me.graph.setParent(childId, phaseId);
                }
              }
            }
          };

          var getStatus = function (task) {
            var status = 'PENDING';
            if(task.status === 'finished') {
              status = 'SUCCESS';
            }
            else if(task.status === 'completed') {
              status = 'SUCCESS';
            }
            else if(task.status === 'started') {
              status = 'RUNNING';
            }
            else if(task.status === 'running') {
              status = 'RUNNING';
            }
            else if(task.status === 'failed') {
              status = 'FAILED';
            }
            else {
              status = 'PENDING';
            }
            return status;
          };

        }

      };
    }
  ]);

})();


(function () {
  'use strict';

  angular.module('dagModule').directive('voicebaseJobs', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'dag/directives/voicebase-jobs.tpl.html',
        scope: {},
        controllerAs: 'jobCtrl',
        controller: function ($scope, jobApi) {
          var me = this;
          me.jobs = [];
          me.selectedJob = null;

          var getJobs = function () {
            jobApi.getJobs()
              .then(function (jobs) {
                me.jobs = jobs;
                if(me.jobs.length > 0) {
                  me.selectedJob = me.jobs[0];
                  me.changeJob(me.jobs[0]);
                }
              });
          };

          me.changeJob = function (job) {
            jobApi.setActiveJob(job);
          };

          getJobs();
        }

      };
    }
  ]);

})();


(function () {
  'use strict';

  var testJobs = [
    {
      'jobId' : '954ced1a-3882-4c9e-ba15-bc15e8079cc6',
      'status' : 'running',
      'start' : 'ec7967aa-0e6b-4691-be99-d5e015f5abbf',
      'finish' : '9100ad59-e35f-4b83-9134-7534fbbd1d51',
      'tasks' : {
        'ec7967aa-0e6b-4691-be99-d5e015f5abbf' : {
          'taskId' : 'ec7967aa-0e6b-4691-be99-d5e015f5abbf',
          'display' : 'Ingest',
          'phase' : 'ingest',
          'status' : 'finished',
          'dependencies' : [],
          'dependents' : [
            '1cf6aaee-599a-4a9f-9546-984136f3fd6c',
            '99ad7676-3578-4236-b278-4ac58398a59c',
            'a6e0addd-e262-4493-84d1-c27379bb0166'
          ]
        },
        '1cf6aaee-599a-4a9f-9546-984136f3fd6c' : {
          'taskId' : '1cf6aaee-599a-4a9f-9546-984136f3fd6c',
          'display' : 'Transcripts',
          'phase' : 'transcripts',
          'status' : 'finished',
          'generator' : 'a628bc5b-9cdf-4bd7-a543-398d7d26adbd',
          'dependencies' : [
            'ec7967aa-0e6b-4691-be99-d5e015f5abbf'
          ],
          'dependents' : [
            '556464be-710c-46a1-9638-63f047b80fe0'
          ]
        },
        '99ad7676-3578-4236-b278-4ac58398a59c' : {
          'taskId' : '1cf6aaee-599a-4a9f-9546-984136f3fd6c',
          'display' : 'Transcripts',
          'phase' : 'transcripts',
          'status' : 'running',
          'generator' : 'a628bc5b-9cdf-4bd7-a543-398d7d26adbd',
          'dependencies' : [
            'ec7967aa-0e6b-4691-be99-d5e015f5abbf'
          ],
          'dependents' : [
            '556464be-710c-46a1-9638-63f047b80fe0'
          ]
        },
        'a6e0addd-e262-4493-84d1-c27379bb0166' : {
          'taskId' : '1cf6aaee-599a-4a9f-9546-984136f3fd6c',
          'display' : 'Transcripts',
          'phase' : 'transcripts',
          'status' : 'pending',
          'generator' : 'a628bc5b-9cdf-4bd7-a543-398d7d26adbd',
          'dependencies' : [
            'ec7967aa-0e6b-4691-be99-d5e015f5abbf'
          ],
          'dependents' : [
            '556464be-710c-46a1-9638-63f047b80fe0'
          ]
        },
        '556464be-710c-46a1-9638-63f047b80fe0' : {
          'taskId' : '556464be-710c-46a1-9638-63f047b80fe0',
          'display' : 'Transcripts',
          'phase' : 'transcripts',
          'status' : 'pending',
          'dependencies' : [
            '1cf6aaee-599a-4a9f-9546-984136f3fd6c',
            '99ad7676-3578-4236-b278-4ac58398a59c',
            'a6e0addd-e262-4493-84d1-c27379bb0166'
          ],
          'dependents' : [
            'f90eb66b-2fc3-4521-a132-183313e5bc4f'
          ]
        },
        'f90eb66b-2fc3-4521-a132-183313e5bc4f' : {
          'taskId' : 'f90eb66b-2fc3-4521-a132-183313e5bc4f',
          'display' : 'Transcripts',
          'phase' : 'transcripts',
          'transactionId' : '954ced1a-3882-4c9e-ba15-bc15e8079cc6',
          'dependencies' : [
            '556464be-710c-46a1-9638-63f047b80fe0'
          ],
          'dependents' : [
            '9100ad59-e35f-4b83-9134-7534fbbd1d51'
          ]
        },
        '9100ad59-e35f-4b83-9134-7534fbbd1d51' : {
          'taskId' : '9100ad59-e35f-4b83-9134-7534fbbd1d51',
          'display' : 'Keywords',
          'phase' : 'keywords',
          'dependencies' : [
            'f90eb66b-2fc3-4521-a132-183313e5bc4f'
          ],
          'dependents' : []
        }
      }
    },
    {
      'finish': 'b82b29e7-6282-498f-bdac-4c203531f117',
      'jobId': '78c3959e-7f4d-4942-adbd-2733ae56bc24',
      'status': 'started',
      'start': '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550',
      'tasks': {
        '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550': {
          'taskId': '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550',
          'dependents': [
            '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
            '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
            '3268fc01-27ba-4d99-a2ba-d36999d6879b',
            'da818fd8-ac9a-444d-a0c1-01f6352a9985',
            '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
            '3be558b4-8263-4333-897f-17996622f910',
            'a1643d01-11ab-44f5-83fd-851cc9993556',
            '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
            '094934ee-10ce-4a9b-9729-2fb8a4bb9328'
          ],
          'status': 'completed',
          'dependencies': [],
          'display': 'Ingest',
          'phase': 'ingest'
        },
        '74323d31-a068-4cf2-91ee-5c67e5bc6232': {
          'taskId': '74323d31-a068-4cf2-91ee-5c67e5bc6232',
          'dependents': ['d9fcb867-625e-4bf3-b2bc-ecbae5573922'],
          'status': 'pending',
          'dependencies': [
            '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
            '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
            '3268fc01-27ba-4d99-a2ba-d36999d6879b',
            'da818fd8-ac9a-444d-a0c1-01f6352a9985',
            '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
            '3be558b4-8263-4333-897f-17996622f910',
            'a1643d01-11ab-44f5-83fd-851cc9993556',
            '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
            '094934ee-10ce-4a9b-9729-2fb8a4bb9328'
          ],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'd9fcb867-625e-4bf3-b2bc-ecbae5573922': {
          'taskId': 'd9fcb867-625e-4bf3-b2bc-ecbae5573922',
          'dependents': ['9fac53f8-933e-4bdd-9ef3-bb7eceb25a82'],
          'status': 'pending',
          'dependencies': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '9fac53f8-933e-4bdd-9ef3-bb7eceb25a82': {
          'taskId': '9fac53f8-933e-4bdd-9ef3-bb7eceb25a82',
          'dependents': ['81583263-23d9-48a2-a85a-78ff41bc6723'],
          'status': 'pending',
          'dependencies': ['d9fcb867-625e-4bf3-b2bc-ecbae5573922'],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '81583263-23d9-48a2-a85a-78ff41bc6723': {
          'taskId': '81583263-23d9-48a2-a85a-78ff41bc6723',
          'dependents': ['b82b29e7-6282-498f-bdac-4c203531f117'],
          'status': 'pending',
          'dependencies': ['9fac53f8-933e-4bdd-9ef3-bb7eceb25a82'],
          'display': 'Keywords',
          'phase': 'keywords'
        },
        'b82b29e7-6282-498f-bdac-4c203531f117': {
          'taskId': 'b82b29e7-6282-498f-bdac-4c203531f117',
          'dependents': [],
          'status': 'pending',
          'dependencies': ['81583263-23d9-48a2-a85a-78ff41bc6723'],
          'display': 'Keywords',
          'phase': 'keywords'
        },
        '96f8e609-dfc2-4584-adc8-4c1addf22c4f': {
          'taskId': '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9': {
          'taskId': '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '3268fc01-27ba-4d99-a2ba-d36999d6879b': {
          'taskId': '3268fc01-27ba-4d99-a2ba-d36999d6879b',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'da818fd8-ac9a-444d-a0c1-01f6352a9985': {
          'taskId': 'da818fd8-ac9a-444d-a0c1-01f6352a9985',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '34a60073-68d4-4993-ad8a-a3dbaa2b51b2': {
          'taskId': '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '3be558b4-8263-4333-897f-17996622f910': {
          'taskId': '3be558b4-8263-4333-897f-17996622f910',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'a1643d01-11ab-44f5-83fd-851cc9993556': {
          'taskId': 'a1643d01-11ab-44f5-83fd-851cc9993556',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '1ffbb791-b1ce-4879-a5e7-aad093e8272a': {
          'taskId': '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '094934ee-10ce-4a9b-9729-2fb8a4bb9328': {
          'taskId': '094934ee-10ce-4a9b-9729-2fb8a4bb9328',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        }
      }
    }
  ];

  var jobApi = function($http, $q, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var activeJob = null;

    var setActiveJob = function (_activeJob) {
      activeJob = _activeJob;
    };

    var getActiveJob = function() {
      return activeJob;
    };

    var getJobs = function() {
      var deferred = $q.defer();

      setTimeout(function () {
        deferred.resolve(testJobs);
      }, 0);

      return deferred.promise;
    };

    return {
      getJobs: getJobs,
      setActiveJob: setActiveJob,
      getActiveJob: getActiveJob
    };

  };

  angular.module('dagModule')
    .service('jobApi', jobApi);

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

})();

(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget').controller('removeModalController', function ($scope, $element, groupName, removeCallback) {

    $scope.groupName= groupName;

    $scope.removeGroup = function () {
      $element.modal('hide');
      removeCallback();
      return false;
    };

  });

})();

(function () {
  'use strict';

  var changeKeywordGroup = function (ModalService) {
    return {
      restrict: 'A',
      scope: {
        modalKeywordGroupMode: '@',
        changeGroupCallback: '='
      },
      link: function (scope, elem) {
        var newGroup;

        elem.click(function () {
          scope.startChangeGroup();
        });

        scope.startChangeGroup = function() {
          newGroup = {
            name: '',
            description: '',
            keywords: ['']
          };
          ModalService.showModal({
            templateUrl: 'keyword-group-widget/templates/editKeywordGroupModal.tpl.html',
            controller: 'ModalController',
            inputs: {
              $keywordGroup: newGroup,
              mode: scope.modalKeywordGroupMode,
              groupCallback: function(group) {
                newGroup = group;
                scope.changeGroupCallback(group);
              }
            }
          }).then(function(modal) {
            modal.element.modal();
          });
        };
      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('changeKeywordGroup', changeKeywordGroup);

})();

(function () {
  'use strict';

  var customVocabulary = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/custom-vocabulary.tpl.html',
      replace: true,
      scope: {
        vocabulary: '='
      },
      controllerAs: 'ctrl',
      controller: function($scope) {
        var me = this;

        $scope.vocabulary = {
          terms: [],
          termsFiles: [],
          isExpanded: false
        };
        
        me.files = [];
        me.acceptFileFormats = ['.txt'];
        me.isEnableFileSelect = true;

        me.toggleAccordionPane = function () {
          $scope.vocabulary.isExpanded = !$scope.vocabulary.isExpanded;
        };

        me.validateFormat = function (file) {
          if(Object.prototype.toString.call(file) === '[object File]') {
            var format = file.name.substring(file.name.lastIndexOf('.'));
            var isFileAllow = me.acceptFileFormats.filter(function (_format) {
              return _format === format;
            });
            if(isFileAllow.length === 0) {
              me.errorMessage = 'Media in ' + format + ' format is not yet supported. Please try uploading media in one of these formats: \n' + me.acceptFileFormats.join(', ');
            }
            else {
              me.errorMessage = '';
            }
          }
          return me.acceptFileFormats.join(',');
        };

        me.changeFiles = function (files) {
          if(files.length > 0) {
            files.forEach(function (_file) {
              $scope.vocabulary.termsFiles.push(_file);
            });
          }
        };

        me.removeFile = function (file, event) {
          event.preventDefault();
          event.stopPropagation();
          $scope.vocabulary.termsFiles = $scope.vocabulary.termsFiles.filter(function (uploadFile) {
            return uploadFile.$$hashKey !== file.$$hashKey;
          });
        };

        me.removeAllFiles = function (event) {
          event.preventDefault();
          event.stopPropagation();
          $scope.vocabulary.termsFiles = [];
          me.files = [];
        };


      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('customVocabulary', customVocabulary);

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
        token: '=',
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
        me.groupsPerPage = 7;
        me.currentPage = 1;
        me.isPopup = ($scope.isPopup === 'true');

        var tokenData;

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          me.showWidget();
        });

        me.startRemovingGroup = function(group, event) {
          event.stopPropagation();
          event.preventDefault();
          ModalService.showModal({
            templateUrl: 'keyword-group-widget/templates/removeKeywordGroupModal.tpl.html',
            controller: 'removeModalController',
            inputs: {
              groupName: group.name,
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

        me.createLoading = false;
        me.createGroup = function(group) {
          me.createLoading = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, group).then(function() {
            me.keywordGroups.groups.push(group);
            me.createLoading = false;
            me.currentPage = Math.floor(me.keywordGroups.groups.length / me.groupsPerPage) + 1;
          }, function() {
            me.createLoading = false;
            me.errorMessage = 'Something going wrong!';
          });
        };

        me.startEditGroup = function(group) {
          ModalService.showModal({
            templateUrl: 'keyword-group-widget/templates/editKeywordGroupModal.tpl.html',
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

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordGroupWidget', keywordGroupWidget);

})();

(function () {
  'use strict';

  var keywordsSpottingWidget = function () {
    return {
      restrict: 'E',
      templateUrl: 'keyword-group-widget/directives/keywords-spotting-widget.tpl.html',
      replace: true,
      scope: {
        token: '='
      },
      controllerAs: 'keywordsSpottingCtrl',
      controller: function($scope, $interval, $timeout, $compile, voicebaseTokensApi, formValidate, keywordsSpottingApi, keywordGroupApi, predictionModelApi, voicebasePlayerService, ModalService, jobApi, $vocabulary) {
        var me = this;

        var tokenData;
        me.isLoaded = false;
        me.pingProcess = false;
        me.isLoadedGroups = true;
        me.acceptFileFormats = ['.wav', '.mp4', '.mp3', '.flv', '.wmv', '.avi', '.mov', '.mpeg', '.mpg', '.aac', '.3gp', '.aiff', '.au', '.ogg', '.flac', '.ra', '.m4a', '.wma', '.m4v', '.caf', '.amr-nb', '.asf', '.webm', '.amr'];
        me.finishedUpload = false;
        me.uploadedData = [];
        me.uploadedState = [];
        me.isEnableFileSelect = true;
        me.showStartOverBtn = false;

        me.keywordGroups = [];
        me.detectGroups = [];

        me.predictionModels = [];
        me.runModels = [];

        me.uploadFiles = [];

        me.vocabulary = {};

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          getKeywordGroups();
          getPredictionModels();
        });

        $scope.$watch(function () {
          return keywordsSpottingApi.getUploadedState();
        }, function (_uploadedState) {
          me.uploadedState = _uploadedState;
        }, true);

        $scope.$watch(function () {
          return voicebasePlayerService.getRemovedMediaId();
        }, function (mediaId) {
          if (mediaId) {
            me.startOver();
          }
        });

        var getKeywordGroups = function() {
          if(tokenData) {
            me.isLoadedGroups = true;
            keywordGroupApi.getKeywordGroups(tokenData.token).then(function(data) {
              me.isLoadedGroups = false;
              me.keywordGroups = data.groups;
            }, function() {
              me.isLoadedGroups = false;
              me.errorMessage = 'Failed to retrieve phrase spotting groups!';
            });
          }
        };

        var getPredictionModels = function() {
          if(tokenData) {
            me.isLoadedModels = true;
            predictionModelApi.getPredictionModels(tokenData.token).then(function(data) {
              me.isLoadedModels = false;
              me.predictionModels = data.models;
            }, function() {
              me.isLoadedModels = false;
              me.errorMessage = 'Failed to retrieve prediction models!';
            });
          }
        };

        me.changeFiles = function (files, event) {
          if(files.length > 0) {
            files.forEach(function (_file) {
              me.uploadFiles.push(_file);
            });
          }
        };

        me.removeFile = function (file, event) {
          event.preventDefault();
          event.stopPropagation();
          me.uploadFiles = me.uploadFiles.filter(function (uploadFile) {
              return uploadFile.$$hashKey !== file.$$hashKey;
          });
        };

        me.removeAllFiles = function (event) {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }
          me.uploadFiles = [];
          me.files = [];
          me.isEnableFileSelect = true;
        };

        me.startOver = function (event) {
          me.removeAllFiles(event);
          me.detectGroups = [];
          me.runModels = [];
          me.uploadedData = [];
          me.finishedUpload = false;
          me.showStartOverBtn = false;
        };

        me.validateFormat = function (file) {
          if(Object.prototype.toString.call(file) === '[object File]') {
            var format = file.name.substring(file.name.lastIndexOf('.'));
            var isFileAllow = me.acceptFileFormats.filter(function (_format) {
              return _format === format;
            });
            if(isFileAllow.length === 0) {
              me.errorMessage = 'Media in ' + format + ' format is not yet supported. Please try uploading media in one of these formats: \n' + me.acceptFileFormats.join(', ');
            }
            else {
              me.errorMessage = '';
            }
          }
          return me.acceptFileFormats.join(',');
        };

        me.validBeforeUpload = function (files) {
          return !!(files && files.length);
        };

        var countUploadedFiles = 0;
        me.upload = function () {
          var isValid = me.validBeforeUpload(me.uploadFiles);
          if (isValid) {
            me.isEnableFileSelect = false;
            me.isLoaded = true;

            me.finishedUpload = false;
            countUploadedFiles = me.uploadFiles.length;
            voicebasePlayerService.destroyVoicebase();
            me.uploadedData = [];
            for (var i = 0; i < countUploadedFiles; i++) {
              var file = me.uploadFiles[i];
              postMedia(file);
            }
          }
        };

        var postMedia = function (file) {
          me.errorMessage = '';
          $vocabulary.parseVocabulary(me.vocabulary)
            .then(function (vocabulary) {
              keywordsSpottingApi.postMedia(tokenData.token, file, me.detectGroups, me.runModels, vocabulary)
                .then(function (mediaStatus) {
                  me.isLoaded = false;
                  if (mediaStatus.mediaId) {
                    me.checkMediaFinish(mediaStatus.mediaId, file);
                  }
                }, function () {
                  me.isLoaded = false;
                  me.errorMessage = 'Can\'t upload media file!';
                });
            });
        };

        me.checkMediaFinish = function (mediaId, file) {
          me.pingProcess = true;
          var checker = $interval(function () {
            checkMediaHandler(checker, mediaId, file);
          }, 3000);
        };

        var checkMediaHandler = function (checker, mediaId, file) {
          keywordsSpottingApi.checkMediaFinish(tokenData.token, mediaId)
            .then(function (data) {
              if(!data.media) {
                return false;
              }
              if (data.media.status === 'finished') {
                finishMedia(data, file);
                $interval.cancel(checker);
              }
              else if (data.media.status !== 'failed' && data.media.job) {
                var job = data.media.job.progress;
                jobApi.setActiveJob(job);

              }
              else if(data.media.status === 'failed') {
                me.pingProcess = false;
                me.showStartOverBtn = true;
                me.errorMessage = 'Upload failed!';
                $interval.cancel(checker);
              }
            }, function () {
              me.errorMessage = 'Error of getting file!';
            });
        };

        var finishMedia = function (data, file) {
          getMediaUrl(data.media.mediaId)
            .then(function (url) {
              me.finishedUpload = true;
              me.uploadedData.push({
                uploadedMedia: data.media,
                uploadedMediaGroups: data.media.keywords.latest.groups,
                token: tokenData.token,
                mediaUrl: url,
                mediaType: file.type,
                mediaName: file.name,
                hasSpottedWords: getHasSpottedWords(data.media.keywords.latest.groups)
              });
              if(me.uploadedData.length === countUploadedFiles) {
                me.pingProcess = false;
                me.showStartOverBtn = true;
              }
            });
        };

        var getMediaUrl = function (mediaId) {
          return keywordsSpottingApi.getMediaUrl(tokenData.token, mediaId);
        };

        var getHasSpottedWords = function (groups) {
          var hasSpotted = false;
          if(groups && groups.length > 0) {
            for (var i = 0; i < groups.length; i++) {
              var group = groups[i];
              if(group.keywords.length > 0) {
                hasSpotted = true;
                break;
              }
            }
          }
          return hasSpotted;
        };

        me.isAudio = function (file) {
          if(file) {
            return file.type.indexOf('audio') > -1;
          }
          return false;
        };

        me.isVideo = function (file) {
          if(file) {
            return file.type.indexOf('video') > -1;
          }
          return false;
        };

        me.createLoading = false;
        me.createGroup = function(group) {
          me.createLoading = true;
          keywordGroupApi.createKeywordGroup(tokenData.token, group).then(function() {
            me.keywordGroups.push(group);
            me.createLoading = false;
          }, function() {
            me.createLoading = false;
            me.errorMessage = 'Can\'t create group!';
          });
        };

        me.checkDropdownVisibility = function (model) {
          return !(!me.isEnableFileSelect && model.length === 0);
        };

      }
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .directive('keywordsSpottingWidget', keywordsSpottingWidget);

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

(function () {
  'use strict';

  angular.module('vbsKeywordGroupWidget')
    .directive('hideChoices', function() {
      return {
        link: function(scope, element) {
          element.find('.ui-select-choices').hide();
        }
      };
    });

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

  var keywordGroupApi = function($http, $q, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

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

(function () {
  'use strict';

  var keywordsSpottingApi = function ($q, $timeout, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var mediaReady = false;

    var uploadedState = 0;

    var getUploadedState = function () {
      return uploadedState;
    };

    var postMedia = function (token, file, groups, models, vocabulary) {
      var deferred = $q.defer();

      var data = new FormData();
      data.append('media', file);

      var jobConf = {executor: 'v2'};
      var groupsConf = {};
      if (groups.length > 0) {
        var groupNames = groups.map(function (group) {
          return group.name;
        });
        groupsConf = {
          keywords: {
            groups: groupNames
          }
        };
      }

      var predictionsConf = {};
      if (models && models.length > 0) {
        console.log('Mixing in models', models);

        var modelsArray = models.map(function (model) {
          return { model : model.modelId };
        });
        predictionsConf = {
          predictions: modelsArray
        };

        jobConf = { }; // prediction not yet support on v2 executor
      }

      var transcriptConf = {
        transcripts: {
          // formatNumbers: true
        }
      };
      if (vocabulary && vocabulary.length > 0) {
        jQuery.extend(transcriptConf.transcripts, {
          vocabularies: [{
            terms: vocabulary
          }]
        });
      }

      var sumConf = jQuery.extend(jobConf, groupsConf, predictionsConf, transcriptConf);

      var conf = {
        configuration: sumConf
      };

      data.append('configuration', JSON.stringify(conf));

      jQuery.ajax({
        url: url + '/media',
        type: 'POST',
        contentType: false,
        processData: false,
        data: data,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        xhr: function () {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener('progress', function (evt) {
            if (evt.lengthComputable) {
              $timeout(function () {
                uploadedState = evt.loaded * 100 / evt.total;
              }, 0);
            }
          }, false);
          return xhr;
        },
        success: function (mediaStatus) {
          uploadedState = 0;
          deferred.resolve(mediaStatus);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getMedia = function (token) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media?include=metadata',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data) {
          deferred.resolve(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var checkMediaFinish = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media/' + mediaId,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data) {
          deferred.resolve(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getMediaUrl = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'GET',
        url: url + '/media/' + mediaId + '/streams',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data, textStatus, request) {
          var mediaUrl = data.streams.original;
          deferred.resolve(mediaUrl);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var deleteMedia = function (token, mediaId) {
      var deferred = $q.defer();

      jQuery.ajax({
        type: 'DELETE',
        url: url + '/media/' + mediaId,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function (data, textStatus, request) {
          if (request.status === 204) {
            deferred.resolve();
          }
          else {
            deferred.reject('Can\'t remove!');
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Can\'t remove!');
        }
      });

      return deferred.promise;
    };

    return {
      getUploadedState: getUploadedState,
      getMedia: getMedia,
      postMedia: postMedia,
      deleteMedia: deleteMedia,
      checkMediaFinish: checkMediaFinish,
      getMediaUrl: getMediaUrl
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .service('keywordsSpottingApi', keywordsSpottingApi);

})();

(function () {
  'use strict';

  var predictionModelApi = function($http, $q, voicebaseUrl) {

    var url = voicebaseUrl.getBaseUrl();

    var getPredictionModels = function(token) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: url + '/definitions/predictions/models',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        success: function(predictionModels) {
          deferred.resolve(predictionModels);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Failed to retrieve prediction models!');
        }
      });

      return deferred.promise;
    };

    return {
      getPredictionModels: getPredictionModels
    };

  };

  angular.module('vbsKeywordGroupWidget')
    .service('predictionModelApi', predictionModelApi);

})();

(function () {
  'use strict';

  var vocabularyService = function ($q) {

    var files = {};

    var parseVocabularyText = function (file) {
      var deferred = $q.defer();

      var reader = new FileReader();
      reader.onload = function(){
        var parsedResult = [];
        var lines = reader.result.split('\n');
        lines.forEach(function (line) {
          line = line.trim();
          if (line) {
            parsedResult.push(line);
          }
        });

        files[file.$$hashKey] = [].concat(parsedResult);

        deferred.resolve(reader.result);
      };
      reader.readAsText(file);

      return deferred.promise;
    };

    var parseVocabulary = function (vocabulary) {
      var deferred = $q.defer();

      setTimeout(function () {
        if (!vocabulary.isExpanded) {
          deferred.resolve(null);
        }
        else {
          var promises = [];
          vocabulary.termsFiles.forEach(function (file) {
            var _promise = parseVocabularyText(file);
            promises.push(_promise);
          });
          $q.all(promises).then(function () {
            var terms = [].concat(vocabulary.terms);
            Object.keys(files).forEach(function (key) {
              var parsedFile = files[key];
              terms = terms.concat(parsedFile);
            });
            deferred.resolve(terms);
          });
        }
      }, 0);

      return deferred.promise;
    };


    return {
      parseVocabulary: parseVocabulary
    };
  };

  angular.module('vbsKeywordGroupWidget')
    .service('$vocabulary', vocabularyService);

})();

(function () {
  'use strict';

  var progressBar = function() {
    return {
      restrict: 'E',
      scope: {
        loaded: '=loaded',
        barClass: '@barClass',
        completedClass: '=?'
      },
      transclude: true,
      link: function (scope, elem, attrs) {

        scope.completedClass = (scope.completedClass) || 'progress-bar-success';
        var total = 100;
        scope.$watch('loaded', function () {
          var progress = scope.loaded / total;
          if (progress >= 1) {
            jQuery(elem).find('.progress-bar').removeClass(scope.barClass).addClass(scope.completedClass);
          }
          else if (progress < 1) {
            jQuery(elem).find('.progress-bar').removeClass(scope.completedClass);
          }

        });

      },
      template:
      '<div class="progress">'+
      '   <div class="progress-bar {{barClass}}" title="{{loaded | number:0 }}%" style="width:{{loaded}}%;">{{loaded | number:0}} %</div>' +
      '</div>'
    };
  };

  angular.module('progressBarModule', []);

  angular.module('progressBarModule')
    .directive('progressBar', progressBar);

})();

(function () {
  'use strict';

  var mediaBrowser = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/media-browser.tpl.html',
      scope: {
        token: '='
      },
      controllerAs: 'mediaBroserCtrl',
      controller: function ($scope, $timeout, $compile, voicebaseTokensApi, keywordsSpottingApi, voicebasePlayerService) {
        var me = this;

        me.groupsPerPage = 5;
        me.currentPage = 1;

        var tokenData;
        me.mediaLoaded = false;
        me.media = [];

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.$watch(function () {
          return voicebaseTokensApi.getCurrentToken();
        }, function (_tokenData) {
          tokenData = _tokenData;
          me.isLogin = (tokenData) ? true : false;
          getMedia();
        });

        $scope.$watch(function () {
          return voicebasePlayerService.getRemovedMediaId();
        }, function (mediaId) {
          if (mediaId) {
            removeMedia(mediaId);
          }
        });

        var removeMedia = function (mediaId) {
          me.media = me.media.filter(function (media) {
            return media.mediaId !== mediaId;
          });
        };

        var getMedia = function () {
          if(!me.isLogin) {
            return false;
          }
          me.media = [];
          me.errorMessage = '';
          me.mediaLoaded = true;
          keywordsSpottingApi.getMedia(tokenData.token)
            .then(function (_media) {
              me.mediaLoaded = false;
              me.media = _media.media;
            }, function () {
              me.mediaLoaded = false;
              me.errorMessage = 'Can\'t getting media!';
            });
        };

        me.loadMedia = function (event, media) {
          if(!media.mediaUrl) {
            keywordsSpottingApi.getMediaUrl(tokenData.token, media.mediaId)
              .then(function (_url) {
                media.mediaUrl = _url;
                me.toggleAccordionPane(event, media);
              });
          }
          else {
            me.toggleAccordionPane(event, media);
          }
        };

        me.getMediaTitle = function (media) {
          var title = media.mediaId;
          var _metadata = media.metadata;
          if(_metadata && _metadata.external && _metadata.external.id) {
            title = _metadata.external.id;
          }
          if(_metadata && _metadata.title) {
            title = _metadata.title;
          }
          return title;
        };

        me.toggleAccordionPane = function (event, media) {
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = jQuery('#media-browser-list').find('.panel-collapse');
          $panels.removeClass('in');
          voicebasePlayerService.destroyVoicebase();
          $panels.find('.panel-body').empty();
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
            $timeout(function () {
              var player = $compile('<voicebase-media-player ' +
              'token="' + tokenData.token + '"' +
              'player-type="jwplayer"' +
              'media-id="' + media.mediaId + '"' +
              'media-url="' + media.mediaUrl + '"' +
              'media-type="video">' +
              '</voicebase-media-player>')($scope);
              $panel.find('.panel-body').append(player);
              voicebasePlayerService.setMediaReady(true);
            }, 0);
          }
        };

        me.changePage = function () {
          voicebasePlayerService.destroyVoicebase();
        };
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('mediaBrowser', mediaBrowser);

})();


(function () {
  'use strict';

  var videojsPlayer = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/videojs.tpl.html',
      scope: {
        mediaUrl: '@',
        mediaType: '@'
      },
      link: function link(scope, element) {
        element.find('source').attr('src', scope.mediaUrl).attr('type', scope.mediaType);
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('videojs', videojsPlayer);

})();


(function () {
  'use strict';

  var voicebaseAccordion = function ($timeout, $compile, voicebasePlayerService) {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/voicebase-accordion.tpl.html',
      scope: {
        uploadedData: '=',
        isShow: '='
      },
      controller: function ($scope) {
        $scope.showHasSpottedWords = function (uploadedInfo) {
          var res = '';
          if(uploadedInfo.hasSpottedWords !== null) {
            res = (uploadedInfo.hasSpottedWords) ? '(Keywords Spotted)' : '(No Keywords Spotted)';
          }
          return res;
        };

      },
      link: function (scope) {
        scope.toggleAccordionPane = function (event, uploadedInfo) {
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = jQuery('#files-accordion').find('.panel-collapse');
          $panels.removeClass('in');
          voicebasePlayerService.destroyVoicebase();
          $panels.find('.panel-player-container').empty();
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
            $timeout(function () {
              var player = $compile('<voicebase-media-player ' +
              'token="' + uploadedInfo.token + '"' +
              'player-type="jwplayer"' +
              'media-id="' + uploadedInfo.uploadedMedia.mediaId + '"' +
              'media-url="' + uploadedInfo.mediaUrl + '"' +
              'media-type="' + uploadedInfo.mediaType + '">' +
              '</voicebase-media-player>')(scope);
              $panel.find('.panel-player-container').append(player);
              voicebasePlayerService.setMediaReady(true);
            }, 0);
          }
        };

      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseAccordion', voicebaseAccordion);

})();


(function () {
  'use strict';

  var voicebaseMediaPlayer = function ($timeout, $compile, voicebasePlayerService, voicebaseUrl) {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-media-player/directives/voicebase-media-player.tpl.html',
      scope: {
        token: '@',
        mediaId: '@',
        mediaUrl: '@',
        mediaType: '@',
        playerType: '@' // 'jwplayer' or 'video_js'
      },
      link: function (scope) {

        scope.$watch(function () {
          return voicebasePlayerService.getMediaReady();
        }, function (newValue) {
          if (newValue === true) {
            initPlayer();
          }
        });

        var initPlayer = function () {
          destroyPlayer();
          jQuery('.vbs-media-player').append('<div id="vbs-console-player-wrap"></div>');

          var $player = jQuery('#vbs-console-player-wrap');
          if(scope.playerType === 'video_js') {
            createVideoJsPlayer();
          }
          else if(scope.playerType === 'jwplayer') {
            createJwPlayer();
          }

          $player.voicebase({
            playerId: 'player',
            playerType: scope.playerType,
            apiUrl: voicebaseUrl.getBaseUrl() + '/',
            mediaID: scope.mediaId,
            token: scope.token,
            apiVersion: '2.0',
            mediaTypeOverride: checkType(),
            localSearch: true,
            localSearchHelperUrl: voicebasePortal.localSearchUrl,
            keywordsGroups: true,
            showPredictionsBlock: true,
            actionFlag: {
              downloadMedia: false,
              downloadTranscript: false,
              orderTranscript: false,
              share: false,
              favorite: false
            },
            webHooks: {
              remove: function () {
                voicebasePlayerService.removeMedia(scope.token, scope.mediaId);
              }
            }
          });
        };

        var checkType = function () {
          var type = 'video';
          if(scope.mediaType.indexOf('video') > -1) {
            type = 'video';
          }
          else if (scope.mediaType.indexOf('audio') > -1) {
            type = 'audio';
          }
          return type;
        };

        var createVideoJsPlayer = function () {
          var playerDir = $compile('<videojs media-url="{{ mediaUrl }}" media-type="{{ mediaType }}"></videojs>')(scope);
          jQuery('#vbs-console-player-wrap').append(playerDir);
        };

        var createJwPlayer = function () {
          jQuery('#vbs-console-player-wrap').append('<div id="player"></div>');

          jwplayer('player').setup({
            file: scope.mediaUrl,
            primary: 'html5',
            width: '100%',
            height: '264'
          });
        };

        var destroyPlayer = function () {
          voicebasePlayerService.destroyVoicebase();
        };
      }
    };
  };

  angular.module('voicebasePlayerModule')
    .directive('voicebaseMediaPlayer', voicebaseMediaPlayer);

})();


(function () {
  'use strict';

  var voicebasePlayerService = function (keywordsSpottingApi) {

    var mediaReady = false;
    var removedMediaId = null;

    var getMediaReady = function () {
      return mediaReady;
    };

    var getRemovedMediaId = function () {
      return removedMediaId;
    };

    var setMediaReady = function (_mediaReady) {
      mediaReady = _mediaReady;
    };

    var destroyVoicebase = function () {
      jQuery('#vbs-console-player-wrap').voicebase('destroy');
    };

    var removeMedia = function (token, mediaId) {
      keywordsSpottingApi.deleteMedia(token, mediaId)
        .then(function () {
          destroyVoicebase();
          removedMediaId = mediaId;
        });
    };

    return {
      getRemovedMediaId: getRemovedMediaId,
      getMediaReady: getMediaReady,
      setMediaReady: setMediaReady,
      removeMedia: removeMedia,
      destroyVoicebase: destroyVoicebase
    };
  };

  angular.module('voicebasePlayerModule')
    .service('voicebasePlayerService', voicebasePlayerService);

})();

(function () {
  'use strict';

  var basicAuthForm = function() {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/basic-auth-form.tpl.html',
      scope: {
        needRemember: '@',
        canHideForm: '@',
        hideForm: '&'
      },
      controllerAs: 'basicAuthCtrl',
      controller: function($scope, formValidate, voicebaseTokensApi) {
        var me = this;
        me.isLoaded = false;
        me.formError = null;
        me.credentials = {};
        me.noUsernameInput = false;

        me.credentials.username = voicebaseTokensApi.getApiKey() || '';
        if(me.credentials.username) {
          me.noUsernameInput = true;
        }

        if($scope.needRemember) {
          me.isRemember = voicebaseTokensApi.getNeedRemember();

          me.changeRemember = function() {
            me.isRemember = !me.isRemember;
            voicebaseTokensApi.setNeedRemember(me.isRemember);
          };
        }

        me.hideForm = function() {
          if($scope.hideForm) {
            $scope.hideForm();
          }
        };

        me.hideError = function(){
          me.formError = '';
        };

        me.startAuth = function($event) {
          var isValid = formValidate.validateForm($scope.authForm);
          if(!isValid) {
            jQuery($event.currentTarget).closest('form').find('.ng-invalid').first().focus();
          }
          else {
            me.hideForm();
            me.auth(me.credentials);
          }
          return false;
        };

        me.auth = function(credentials) {
          me.isLoaded = true;

          voicebaseTokensApi.basicAuth(credentials).then(function() {
            me.isLoaded = false;
          }, function(error){
            me.isLoaded = false;
            me.formError = error;
          });
        };

      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('basicAuthForm', basicAuthForm);

})();

(function () {
  'use strict';

  var keyManager = function () {
    return {
      restrict: 'E',
      templateUrl: 'voicebase-tokens/directives/key-manager.tpl.html',
      replace: true,
      scope: {
      },
      controllerAs: 'keyManagerCtrl',
      controller: function($scope, voicebaseTokensApi, formValidate) {
        var me = this;

        me.isLogin = false;
        me.highlightToken = null;

        $scope.$watch(function () {
          return voicebaseTokensApi.getBasicToken();
        }, function (newToken) {
            if(newToken) {
              me.isLogin = true;
              me.getUsers();
            }
        });

        me.isLoadUsers = false;
        me.users = [];

        me.getUsers = function () {
          me.isLoadUsers = true;
          voicebaseTokensApi.getUsers().then(function (users) {
            me.isLoadUsers = false;
            me.users = users;
          }, function () {
            me.isLoadUsers = false;
            me.errorMessage = 'Can\'t getting users!';
          });
        };

        me.showUserTokens = function (user) {
          if(!user.tokens) {
            user.isLoadTokens = true;
            voicebaseTokensApi.getUserTokens(user.userId).then(function (tokens) {
              user.isLoadTokens = false;
              user.tokens = tokens;
            }, function () {
              user.isLoadTokens = false;
              me.errorMessage = 'Can\'t getting tokens!';
            });

          }
        };

        me.addToken = function (user) {
          user.isCreatingToken = true;
          me.highlightToken = '';
          voicebaseTokensApi.addUserToken(user.userId).then(function (_token) {
            user.isCreatingToken = false;
            if(user.tokens) {
              me.highlightToken = _token;
              user.tokens.unshift(_token);
            }
          }, function () {
            user.isCreatingToken = false;
            me.errorMessage = 'Can\'t creating token!';
          });
        };

        me.removeToken = function (user, _token) {
          _token.isRemoving = true;
          voicebaseTokensApi.deleteUserToken(user.userId, _token.token).then(function () {
            _token.isRemoving = false;
            user.tokens = user.tokens.filter(function (userToken) {
              return userToken.token !== _token.token;
            });
          }, function () {
            _token.isRemoving = false;
            me.errorMessage = 'Can\'t removing token!';
          });
        };
      },
      link: function (scope, element) {
        element.on('click', function (event) {
          if(jQuery(event.target).hasClass('add-user-token')) {
            var $panel = jQuery(event.target).closest('.panel');
            var $panelBody = $panel.find('.panel-collapse');
            var $userName = $panel.find('.panel-title .user-name');
            if(!$panelBody.hasClass('in')) {
              $userName.click();
            }
          }
        });
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('keyManager', keyManager);

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

  var toggleBootstrapAccordion = function() {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element) {
        element.click(function (event) {
          var $accordion = jQuery(event.target).closest('.panel-group');
          var $panel = jQuery(event.target).closest('.panel').find('.panel-collapse');
          var isOpen = $panel.hasClass('in');
          var $panels = $accordion.find('.panel-collapse');
          $panels.removeClass('in');
          if(isOpen) {
            $panel.removeClass('in');
          }
          else {
            $panel.addClass('in');
          }
        });
      }
    };
  };

  angular.module('voicebaseTokensModule')
    .directive('toggleBootstrapAccordion', toggleBootstrapAccordion);

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

          voicebaseTokensApi.getTokens(credentials).then(function() {
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
      scope: {
        token: '='
      },
      controller: function($scope, $location, voicebaseTokensApi) {

        $scope.signed = false;
        $scope.isLoaded = false;

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

        $scope.signIn = function() {
          $location.path('/');
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
      scope: {
        token: '='
      },
      controller: function($scope, voicebaseTokensApi) {

        $scope.isLoaded = false;
        $scope.tokens = [];
        $scope.selectedToken = null;

        if($scope.token) {
          voicebaseTokensApi.setToken($scope.token);
        }

        $scope.$watch('token', function (token) {
          if(token) {
            voicebaseTokensApi.setToken($scope.token);
          }
        });

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

  angular.module('voicebaseTokensModule').directive('voicebaseUrl', [
    'voicebaseUrl',
    function (voicebaseUrl) {
      return {
        restrict: 'E',
        scope: {
          url: '@'
        },
        compile: function (element, attrs) {
          voicebaseUrl.setBaseUrl(attrs.url);
          voicebaseUrl.setRamlUrl(attrs.ramlUrl);
        }
      };
    }
  ]);

})();

(function () {
  'use strict';

  var voicebaseTokensApi = function($http, $q, voicebaseUrl) {
    var baseUrl = voicebaseUrl.getBaseUrl();

    var tokens = null;
    var currentToken = null;
    var needRemember = localStorage.getItem('needRemember') || false;

    var setCurrentToken = function(_currentToken){
        currentToken = _currentToken;
    };

    var getCurrentToken = function(){
        return currentToken;
    };

    var isInLegacyHybridMode = function(){
        // currentToken does not contain a "." => isInLegacyHybridMode
        return ( !! currentToken ) &&
          ( !! currentToken.token ) &&
          ( 0 > currentToken.token.indexOf('.') );
    };

    var isSignedIn = function(){
      return !! currentToken;
    };

    var getTokens = function(credentials) {
      var deferred = $q.defer();

      var username = credentials.username;
      var password = credentials.password;

      jQuery.ajax({
        url: baseUrl + '/access/users/+' + username.toLowerCase() + '/tokens',
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

    var getToken = function(credentials) {
      var deferred = $q.defer();

      var username = credentials.username;
      var password = credentials.password;

      jQuery.ajax({
        url: baseUrl,
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
            saveApiKey(username);
            deferred.resolve(_tokens);
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('The API Key or Password you entered are incorrect. Please try again (make sure your caps lock is off).');
        }
      });

      return deferred.promise;
    };

    var saveApiKey = function (username) {
      if(needRemember && username) {
        localStorage.setItem('voicebaseApiKey', username);
      }
      else {
        localStorage.removeItem('voicebaseApiKey');
      }
    };

    var getApiKey = function () {
      return localStorage.getItem('voicebaseApiKey');
    };

    var setTokensObj = function(tokensObj) {
      var _tokensObj = (!tokensObj) ? null : tokensObj.tokens[0];
      setCurrentToken(_tokensObj);

      if(needRemember && _tokensObj && _tokensObj.token) {
        localStorage.setItem('voicebaseToken', _tokensObj.token);
      }
      else {
        localStorage.removeItem('voicebaseToken');
        saveApiKey(null);
      }

      tokens = tokensObj;
    };

    var setToken = function (_token) {
      setTokensObj({
        tokens: [{
          token: _token,
          type: 'Bearer'
        }]
      });
    };

    var getTokensObj = function() {
        return tokens;
    };

    var getTokenFromLocation = function() {
      var params = getParametersFromLocation();
      if(params.access_token) {
        setToken(params.access_token);
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
        setToken(tokenFromStorage);
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

    var tokenFromLocation = getTokenFromLocation();
    if(!tokenFromLocation) {
      getTokenFromStorage();
    }

    /* Key Manager*/
    var basicToken = null;

    var setBasicToken = function(_basicToken){
      basicToken = _basicToken;
    };

    var getBasicToken = function(){
      return basicToken;
    };

    var basicAuth = function (credentials) {
      var deferred = $q.defer();

      var username = credentials.username;
      var password = credentials.password;

      var token = 'Basic ' + btoa(username + ':' + password);

      jQuery.ajax({
        url: baseUrl + '/access/users/+' + username.toLowerCase() + '/tokens',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': token
        },
        success: function(_tokens) {
          if(!_tokens.tokens.length) {
            deferred.reject('Can\'t authorize!');
          }
          else {
            setBasicToken(token);
            deferred.resolve();
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getUsers = function() {
      var deferred = $q.defer();

      jQuery.ajax({
        url: baseUrl + '/access/users',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': getBasicToken()
        },
        success: function(_users) {
          deferred.resolve(_users.users);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;
    };

    var getUserTokens = function (userId) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: baseUrl + '/access/users/+' + userId + '/tokens',
        type: 'GET',
        dataType: 'json',
        headers: {
          'Authorization': getBasicToken()
        },
        success: function(_tokens) {
          deferred.resolve(_tokens.tokens);
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;

    };

    var addUserToken = function (userId) {
      var deferred = $q.defer();

      var data = JSON.stringify({
        token: {}
      });

      jQuery.ajax({
        url: baseUrl + '/access/users/+' + userId + '/tokens',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
          'Authorization': getBasicToken()
        },
        data: data,
        success: function(_token) {
          deferred.resolve({
            token: _token.token,
            type: _token.type
          });
        },
        error: function(jqXHR, textStatus, errorThrown){
          console.log(errorThrown + ': Error ' + jqXHR.status);
          deferred.reject('Something goes wrong!');
        }
      });

      return deferred.promise;

    };

    var deleteUserToken = function (userId, token) {
      var deferred = $q.defer();

      jQuery.ajax({
        url: baseUrl + '/access/users/+' + userId + '/tokens/' + token,
        type: 'DELETE',
        headers: {
          'Authorization': getBasicToken()
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

    return {
      getTokens: getTokens,
      getToken: getToken,
      setTokensObj: setTokensObj,
      getTokensObj: getTokensObj,
      getCurrentToken: getCurrentToken,
      setCurrentToken: setCurrentToken,
      setToken: setToken,
      getTokenFromLocation: getTokenFromLocation,
      getNeedRemember: getNeedRemember,
      setNeedRemember: setNeedRemember,
      getTokenFromStorage: getTokenFromStorage,
      getBasicToken: getBasicToken,
      getApiKey: getApiKey,
      basicAuth: basicAuth,
      getUsers: getUsers,
      getUserTokens: getUserTokens,
      addUserToken: addUserToken,
      deleteUserToken: deleteUserToken,
      isInLegacyHybridMode: isInLegacyHybridMode,
      isSignedIn: isSignedIn
    };

  };

  angular.module('voicebaseTokensModule')
    .service('voicebaseTokensApi', voicebaseTokensApi);

})();

(function () {
  'use strict';

  angular.module('voicebaseTokensModule').service('voicebaseUrl', [
    '$location',
    function ($location) {

      var url = 'https://apis.voicebase.com/v2-beta';
      var ramlUrl = 'https://apis.voicebase.com/console/';

      var setBaseUrl = function (_url) {
        // setting url from parameter
        if (_url) {
          url = _url;
          return false;
        }

        // setting url from location query
        var queryEnvironment = getQueryEnvironment();
        if(queryEnvironment) {
          _setUrl(queryEnvironment);
          return false;
        }

        // setting url from host
        var productEnvironment = getUrlEnvironment();
        if (productEnvironment) {
          _setUrl(productEnvironment);
          return false;
        }        
      };

      var getQueryEnvironment = function () {
        var queryEnvironment = null;

        if ($location.absUrl().includes('environment=dev')) {
          queryEnvironment = 'dev';
        } 
        else if ($location.absUrl().includes('environment=qa')) {
          queryEnvironment = 'qa';
        } 
        else if ($location.absUrl().includes('environment=preprod')) {
          queryEnvironment = 'preprod';
        } 
        else if ($location.absUrl().includes('environment=prod')) {
          queryEnvironment = 'prod';
        }
        return queryEnvironment;
      };

      var getUrlEnvironment = function () {
        var productEnvironment = '';
        if ($location.host() === 'localhost') {
          productEnvironment = 'dev';
        } 
        else if ($location.host() === 'apis.dev.voicebase.com') {
          productEnvironment = 'dev';
        } 
        else if ($location.host() === 'apis.qa.voicebase.com') {
          productEnvironment = 'qa';
        } 
        else if ($location.host() === 'apis.preprod.voicebase.com') {
          productEnvironment = 'preprod';
        } 
        else if ($location.host() === 'apis.prod.voicebase.com') {
          productEnvironment = 'prod';
        }
        return productEnvironment;
      };
      
      var _setUrl = function (environment) {
        if (environment === 'dev') {
          url = 'https://apis.dev.voicebase.com/v2-beta';
        }
        else if (environment === 'qa') {
          url = 'https://apis.qa.voicebase.com/v2-beta';
        }
        else if (environment === 'preprod') {
          url = 'https://apis.preprod.voicebase.com/v2-beta';
        }
        else {
          url = 'https://apis.voicebase.com/v2-beta';
        }
      };

      var getBaseUrl = function () {
        return url;
      };
      
      var setRamlUrl = function (_url) {
        ramlUrl = _url;    
      };
      
      var getRamlUrl = function () {
        return ramlUrl;  
      };

      return {
        setBaseUrl: setBaseUrl,
        getBaseUrl: getBaseUrl,
        setRamlUrl: setRamlUrl,
        getRamlUrl: getRamlUrl
      };

    }
  ]);

})();

angular.module('ramlVoicebaseConsoleApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('auth0/directives/auth0-key-manager.tpl.html',
    "<div class=\"raml-console-panel auth0-key-generator\">\n" +
    "\n" +
    "  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"keyManagerCtrl.errorMessage\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"keyManagerCtrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "    {{ keyManagerCtrl.errorMessage }}\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"keyManagerCtrl.isLogin\">\n" +
    "    <css-spinner ng-if=\"keyManagerCtrl.tokenPending\"></css-spinner>\n" +
    "\n" +
    "    <div ng-if=\"!keyManagerCtrl.tokenPending\">\n" +
    "      <form>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <button type=\"button\"\n" +
    "                    class=\"btn btn-default btn-show-key\"\n" +
    "                    ng-class=\"keyManagerCtrl.showTokenForm ? 'active' : ''\"\n" +
    "                    data-toggle=\"collapse\" data-target=\"#tokenForm\"\n" +
    "                    ng-click=\"keyManagerCtrl.changeActive()\"\n" +
    "            >\n" +
    "              <i class=\"fa fa-eye\"></i> Show Token\n" +
    "            </button>\n" +
    "            <button type=\"button\"\n" +
    "                    class=\"btn btn-default copy-button\"\n" +
    "                    clipboard\n" +
    "                    text=\"keyManagerCtrl.token\"\n" +
    "                    on-copied=\"keyManagerCtrl.onCopy()\"\n" +
    "                    on-error=\"keyManagerCtrl.onCopyError(err)\">\n" +
    "              {{keyManagerCtrl.isCopied ? \"Copied!\" : \"Copy to clipboard\"}}\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"keyManagerCtrl.downloadKey()\">Download</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group collapse\" id=\"tokenForm\">\n" +
    "          <textarea class=\"form-control\" rows=\"4\" ng-model=\"keyManagerCtrl.token\" readonly></textarea>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">Copy or download this Bearer token and use it for your application</div>\n" +
    "\n" +
    "        <div class=\"form-group text-warning\">\n" +
    "          <strong>Warning!</strong> This Bearer token is only is only displayed this one time. It will not be displayed again once you navigate away from this page\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('auth0/directives/auth0-login.tpl.html',
    "<div class=\"raml-console-main-login-form\">\n" +
    "  <css-spinner></css-spinner>\n" +
    "</div>\n"
  );


  $templateCache.put('auth0/directives/autho-keys-list.tpl.html',
    "<div class=\"raml-console-panel auth0-key-manager\">\n" +
    "\n" +
    "  <div ng-if=\"keyListCtrl.isLogin\">\n" +
    "    <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"keyListCtrl.errorMessage\">\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"keyListCtrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "      {{ keyListCtrl.errorMessage }}\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"section-heading auth0-key-manager_heading\">\n" +
    "      <h3 class=\"section-title\">Bearer Token Management</h3>\n" +
    "      <div class=\"pull-right\">\n" +
    "        <button class=\"btn btn-sm btn-success btn-add-key collapsed\" data-toggle=\"collapse\" data-target=\"#addKey\" aria-expanded=\"false\">\n" +
    "          <i class=\"fa fa-plus\"></i>\n" +
    "          New Token\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"collapse\" id=\"addKey\" aria-expanded=\"false\" >\n" +
    "      <div class=\"well\">\n" +
    "        <div class=\"auth0-add-key-form\" ng-if=\"!keyListCtrl.showGeneratedKey\">\n" +
    "          <form>\n" +
    "            <!--<div class=\"form-group\">-->\n" +
    "              <!--<input class=\"form-control\" type=\"text\" placeholder=\"Label your key\">-->\n" +
    "            <!--</div>-->\n" +
    "            <label for=\"addKeyFormType\">Type</label>\n" +
    "            <div class=\"form-group\" id=\"addKeyFormType\">\n" +
    "              <input type=\"text\" class=\"form-control\" readonly value=\"Bearer token\"/>\n" +
    "            </div>\n" +
    "            <label for=\"addKeyFormRights\">Access Rights</label>\n" +
    "            <div class=\"form-group\" id=\"addKeyFormRights\">\n" +
    "              <input type=\"text\" class=\"form-control\" readonly value=\"All Access\"/>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-success\" type=\"button\" id=\"addKeyFormConfirm\" ng-click=\"keyListCtrl.onGenerateApiKey()\">Create Token</button>\n" +
    "              <button class=\"btn btn-default\" type=\"button\" data-toggle=\"collapse\" data-target=\"#addKey\">Cancel</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div ng-if=\"keyListCtrl.showGeneratedKey\">\n" +
    "          <auth0-key-manager></auth0-key-manager>\n" +
    "          <button type=\"button\" class=\"btn btn-primary\" ng-click=\"keyListCtrl.done()\" data-toggle=\"collapse\" data-target=\"#addKey\">Done</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-default keys-list-container\">\n" +
    "      <css-spinner ng-if=\"keyListCtrl.keysPending\"></css-spinner>\n" +
    "\n" +
    "      <div ng-if=\"!keyListCtrl.keysPending\">\n" +
    "        <table class=\"table table-key-management\">\n" +
    "          <thead>\n" +
    "          <tr>\n" +
    "            <th>\n" +
    "              <span>Token Reference</span>\n" +
    "              <i class=\"fa fa-question-circle tooltip-icon\"\n" +
    "                 data-toggle=\"tooltip\" data-placement=\"right\" title=\"Voicebase only remembers the last 6 digits to help you with API key management.\">\n" +
    "              </i>\n" +
    "            </th>\n" +
    "            <th ng-click=\"keyListCtrl.changeSortReverse()\" class=\"table-sort-header\">\n" +
    "              Date Generated\n" +
    "              <i ng-show=\"keyListCtrl.sortReverse\" class=\"fa fa-caret-down\"></i>\n" +
    "              <i ng-show=\"!keyListCtrl.sortReverse\" class=\"fa fa-caret-up\"></i>\n" +
    "            </th>\n" +
    "          </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "          <tr ng-repeat=\"key in keyListCtrl.keys | orderBy:keyListCtrl.sortType:keyListCtrl.sortReverse track by $index\">\n" +
    "            <td>\n" +
    "              <code>...{{key.lastSix}}</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              {{keyListCtrl.formatDate(key)}}\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


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
    "        <div class=\"raml-console-remember-toggle pull-right\">\n" +
    "          <input type=\"checkbox\"\n" +
    "                 ng-model=\"isRemember\"\n" +
    "                 bs-switch switch-on-text=\"Yes\" switch-off-text=\"No\">\n" +
    "        </div>\n" +
    "        <div class=\"pull-left\">\n" +
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
    "        <select class=\"\" ng-model=\"parameter.selected\" ng-options=\"param.type as param.type for param in parameter.definitions\"></select>\n" +
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
    "    <select id=\"samples_{{param.id}}\" ng-if=\"isMediaUrl(param)\" class=\"raml-console-sidebar-input\"\n" +
    "            ng-model=\"selectedMediaSample\"\n" +
    "            ng-options=\"mediaSample.sample as mediaSample.name for mediaSample in mediaSamples\"\n" +
    "            ng-change=\"selectMediaSample(selectedMediaSample)\">\n" +
    "    </select>\n" +
    "\n" +
    "    <input id=\"{{param.id}}\" ng-if=\"isDefault(param)\" class=\"raml-console-sidebar-input\" placeholder=\"{{getPlaceholder(param)}}\" ng-model=\"model[0]\" ng-class=\"{'raml-console-sidebar-field-no-default': !hasExampleValue(param)}\" validate=\"param\" dynamic-name=\"param.id\" ng-change=\"onChange()\"/>\n" +
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


  $templateCache.put('console/directives/widget-list.tpl.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"panel grayed-out panel-default\" ng-if=\"showConsole\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"corner-ribbon\">Coming Soon</div>\n" +
    "        <i class=\"widget-icon fa fa-2x fa-dashboard\"></i>\n" +
    "        <h4><a href=\"\">API Console <span class=\"panel-version\">v3</span></a></h4>\n" +
    "        Explore the VoiceBase REST API and call methods interactively.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"panel panel-default\" ng-if=\"showDoc\" ng-click=\"loadDocV3()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-file-text-o\"></i>\n" +
    "        <h4><a href=\"\">API Documentation <span class=\"panel-version\">v3</span></a></h4>\n" +
    "        Find detailed documentation and best practices for common use cases.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showKeywordsGroups\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadKeywordsGroupApp()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-search\"></i>\n" +
    "        <h4><a href=\"\" ng-class=\"{'not-clickable': isSignedOut()}\">Phrase Spotting</a></h4>\n" +
    "        Create and manage Phrase Spotting groups for use in the API.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showKeywordsSpotting\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadKeywordsSpottingApp()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-cloud-upload\"></i>\n" +
    "        <h4><a href=\"\" ng-class=\"{'not-clickable': isSignedOut()}\">Phrase Spotting Demo App</a></h4>\n" +
    "        Try out Phrase Spotting by uploading your own content.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showSupport\"\n" +
    "      ng-click=\"redirectToSupport()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-external-link\"></i>\n" +
    "        <h4><a href=\"\">VoiceBase Support</a></h4>\n" +
    "        Visit the VoiceBase support site (this link opens a new window).\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showMediaBrowser\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadMediaBrowser()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-search\"></i>\n" +
    "        <h4><a href=\"\" ng-class=\"{'not-clickable': isSignedOut()}\">Media Browser</a></h4>\n" +
    "        Browse previously uploaded media, transcripts, keywords, and predictions.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showNativeKeyManager()\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadKeyManager()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-key\"></i>\n" +
    "        <h4><a href=\"\" ng-class=\"{'not-clickable': isSignedOut()}\">Bearer Token Management</a></h4>\n" +
    "        Generate Bearer tokens used for API authorization to your account.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showLegacyHybridKeyManager()\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadLegacyKeyManager()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-key\"></i>\n" +
    "        <h4><a href=\"\" ng-class=\"{'not-clickable': isSignedOut()}\">API Key Management</a></h4>\n" +
    "        Add, revoke, and manage keys used for API authorization to your account.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div\n" +
    "      class=\"panel panel-default\"\n" +
    "      ng-if=\"showDag\"\n" +
    "      ng-click=\"isSignedIn() &amp;&amp; loadDag()\"\n" +
    "      ng-class=\"{ 'grayed-out': isSignedOut()}\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-code-fork\"></i>\n" +
    "        <h4>DAG visualization</h4>\n" +
    "        Widget for displaying the status of a running job as a DAG.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-12 widget-list-section\">\n" +
    "    <div class=\"widget-list-section-content\">\n" +
    "      <hr/>\n" +
    "      <span><span>Previous Versions</span></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"panel panel-default\" ng-if=\"showConsole\" ng-click=\"loadConsole()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-dashboard\"></i>\n" +
    "        <h4><a href=\"\">API Console <span class=\"panel-version\">v2-beta</span></a></h4>\n" +
    "        Explore the VoiceBase REST API and call methods interactively.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"panel panel-default\" ng-if=\"showDoc\" ng-click=\"loadDoc()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <i class=\"widget-icon fa fa-2x fa-file-text-o\"></i>\n" +
    "        <h4><a href=\"\">API Documentation <span class=\"panel-version\">v2-beta</span></a></h4>\n" +
    "        Find detailed documentation and best practices for common use cases.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
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
    "<nav class=\"navbar navbar-inverse navbar-fixed-top vbs-portal-navbar\" ng-controller=\"portalNavbarCtrl\">\n" +
    "  <div class=\"container\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\" ng-click=\"loadMain($event)\" >\n" +
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
    "   data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Explore a subset of the Voicebase API prior to creating your developer account\">\n" +
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


  $templateCache.put('dag/directives/dag-graph.tpl.html',
    "<div class=\"dag-graph\">\n" +
    "  <div ng-if=\"dagCtrl.job\">\n" +
    "    <svg id=\"svg-canvas\" class=\"svg-dag\" width=\"750\" height=\"600\"></svg>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('dag/directives/voicebase-jobs.tpl.html',
    "<div class=\"panel panel-default raml-console-panel dag-graph\">\n" +
    "\n" +
    "  <select class=\"\"\n" +
    "          ng-model=\"jobCtrl.selectedJob\"\n" +
    "          ng-options=\"job as job.jobId for job in jobCtrl.jobs\"\n" +
    "          ng-change=\"jobCtrl.changeJob(jobCtrl.selectedJob)\">\n" +
    "  </select>\n" +
    "\n" +
    "  <d3-dag-graph></d3-dag-graph>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('keyword-group-widget/directives/custom-vocabulary.tpl.html',
    "<div class=\"vocabulary\">\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\" role=\"tab\" ng-click=\"ctrl.toggleAccordionPane()\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <a role=\"button\" data-toggle=\"collapse\" href=\"javascript:void(0)\">\n" +
    "          Custom Vocabulary\n" +
    "        </a>\n" +
    "        <div class=\"pull-right\">\n" +
    "          <i class=\"fa fa-caret-up\" ng-if=\"!vocabulary.isExpanded\"></i>\n" +
    "          <i class=\"fa fa-caret-down\" ng-if=\"vocabulary.isExpanded\"></i>\n" +
    "        </div>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{'in': vocabulary.isExpanded}\" role=\"tabpanel\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"panel-player-container\">\n" +
    "          <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"ctrl.errorMessage\">\n" +
    "            <button type=\"button\" class=\"close\" ng-click=\"ctrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "            {{ ctrl.errorMessage }}\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label>Add 1 or more custom terms</label>\n" +
    "            <ui-select multiple\n" +
    "                       ng-model=\"vocabulary.terms\"\n" +
    "                       tagging\n" +
    "                       tagging-label=\"\"\n" +
    "                       tagging-tokens=\"ENTER|,\"\n" +
    "                       hide-choices\n" +
    "            >\n" +
    "              <ui-select-match placeholder=\"Pick 1 or more custom terms\">{{ $item }}</ui-select-match>\n" +
    "              <ui-select-choices repeat=\"term in vocabulary.terms | filter:$select.search\">\n" +
    "                {{ term }}\n" +
    "              </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"drop-box form-group\"\n" +
    "               ngf-drop\n" +
    "               ngf-select\n" +
    "               ng-model=\"ctrl.files\"\n" +
    "               ngf-drag-over-class=\"dragover\"\n" +
    "               ngf-allow-dir=\"false\"\n" +
    "               ngf-multiple=\"true\"\n" +
    "               ngf-accept=\"ctrl.validateFormat($file)\"\n" +
    "               ngf-change=\"ctrl.changeFiles($files, $event)\"\n" +
    "               ng-disabled=\"!ctrl.isEnableFileSelect\"\n" +
    "               ng-class=\"!ctrl.isEnableFileSelect ? 'drop-box__disabled' : ''\"\n" +
    "          >\n" +
    "\n" +
    "            <div class=\"drop-box-text\" ng-class=\"!ctrl.isEnableFileSelect ? 'drop-box-inner__disabled' : ''\">\n" +
    "              <div>\n" +
    "                <i class=\"drop-box-text__icon fa fa-2x fa-cloud-upload\"></i>\n" +
    "                <div class=\"drop-box-text__label\">\n" +
    "                  Drag and drop custom terms file or <a href=\"#\" class=\"drop-box-text__link\">click here to browse</a> (txt files only)\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"drop-box-all-preview\" ng-class=\"!ctrl.isEnableFileSelect ? 'drop-box-inner__disabled' : ''\">\n" +
    "              <div class=\"drop-box-preview\" ng-repeat=\"_file in vocabulary.termsFiles\">\n" +
    "\n" +
    "                <div class=\"drop-box-text__file-header drop-box-preview__cell\">\n" +
    "                  <span class=\"drop-box-text__file-name\">{{ _file.name }}</span>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"drop-box-text__file-buttons drop-box-preview__cell\">\n" +
    "                  <button type=\"button\" class=\"close\"\n" +
    "                          data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete file\"\n" +
    "                          ng-click=\"ctrl.removeFile(_file, $event)\"\n" +
    "                          ng-if=\"ctrl.isEnableFileSelect\">\n" +
    "                    <i class=\"fa fa-times\"></i>\n" +
    "                  </button>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"drop-box-text\" ng-if=\"vocabulary.termsFiles.length > 1 && ctrl.isEnableFileSelect\">\n" +
    "              <button type=\"button\" class=\"btn btn-danger\"\n" +
    "                      ng-click=\"ctrl.removeAllFiles($event)\">\n" +
    "                Remove All Files\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </button>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
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
    "    <span>Phrase Spotting Widget</span>\n" +
    "  </a>\n" +
    "\n" +
    "  <div class=\"raml-console-vbs-popup\" ng-show=\"keywordWidgetCtrl.isShowWidget\">\n" +
    "    <div class=\"raml-console-vbs-popup-header\" ng-if=\"keywordWidgetCtrl.isPopup\">\n" +
    "      <h3 class=\"raml-console-vbs-popup-title\">Phrase Spotting Groups</h3>\n" +
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
    "             data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add Phrase Spotting Group\"\n" +
    "             change-keyword-group\n" +
    "             modal-keyword-group-mode=\"create\"\n" +
    "             change-group-callback=\"keywordWidgetCtrl.createGroup\"\n" +
    "             ng-show=\"!keywordWidgetCtrl.createLoading\">\n" +
    "\n" +
    "            <h4 class=\"list-group-item-heading raml-console-item-heading\">\n" +
    "              <i class=\"fa fa-plus-circle\"></i>\n" +
    "              Add Phrase Spotting Group\n" +
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
    "        <div class=\"raml-console-keywords-pagination\" ng-if=\"keywordWidgetCtrl.isLogin\">\n" +
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
    "</div>\n" +
    "\n"
  );


  $templateCache.put('keyword-group-widget/directives/keywords-spotting-widget.tpl.html',
    "<div class=\"panel panel-default raml-console-panel keywords-spotting\">\n" +
    "  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"keywordsSpottingCtrl.errorMessage\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"keywordsSpottingCtrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "    {{ keywordsSpottingCtrl.errorMessage }}\n" +
    "  </div>\n" +
    "  <div ng-if=\"keywordsSpottingCtrl.isLogin\">\n" +
    "    <div class=\"drop-box form-group\"\n" +
    "         ngf-drop\n" +
    "         ngf-select\n" +
    "         ng-model=\"keywordsSpottingCtrl.files\"\n" +
    "         ngf-drag-over-class=\"dragover\"\n" +
    "         ngf-allow-dir=\"false\"\n" +
    "         ngf-multiple=\"true\"\n" +
    "         ngf-accept=\"keywordsSpottingCtrl.validateFormat($file)\"\n" +
    "         ngf-change=\"keywordsSpottingCtrl.changeFiles($files, $event)\"\n" +
    "         ng-disabled=\"!keywordsSpottingCtrl.isEnableFileSelect\"\n" +
    "         ng-class=\"!keywordsSpottingCtrl.isEnableFileSelect ? 'drop-box__disabled' : ''\">\n" +
    "\n" +
    "      <div class=\"drop-box-text\" ng-class=\"!keywordsSpottingCtrl.isEnableFileSelect ? 'drop-box-inner__disabled' : ''\">\n" +
    "        <div>\n" +
    "          <i class=\"drop-box-text__icon fa fa-2x fa-cloud-upload\"></i>\n" +
    "          <div class=\"drop-box-text__label\">\n" +
    "            Drop file here to upload, or <a href=\"#\" class=\"drop-box-text__link\">browse</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"drop-box-all-preview\" ng-class=\"!keywordsSpottingCtrl.isEnableFileSelect ? 'drop-box-inner__disabled' : ''\">\n" +
    "        <div class=\"drop-box-preview\" ng-repeat=\"_file in keywordsSpottingCtrl.uploadFiles\">\n" +
    "\n" +
    "          <div class=\"drop-box-text__file-header drop-box-preview__cell\">\n" +
    "            <span class=\"drop-box-text__file-name\">{{ _file.name }}</span>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"media-preview-container drop-box-preview__cell\" ng-if=\"keywordsSpottingCtrl.isAudio(_file)\">\n" +
    "            <audio controls class=\"media-preview\"\n" +
    "                   ngf-src=\"_file\"\n" +
    "                   ngf-accept=\"'audio/*'\">\n" +
    "\n" +
    "            </audio>\n" +
    "          </div>\n" +
    "          <div class=\"media-preview-container drop-box-preview__cell\" ng-if=\"keywordsSpottingCtrl.isVideo(_file)\">\n" +
    "            <video controls class=\"media-preview\"\n" +
    "                   ngf-src=\"_file\"\n" +
    "                   ngf-accept=\"'video/*'\">\n" +
    "            </video>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"drop-box-text__file-buttons drop-box-preview__cell\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete file\"\n" +
    "                    ng-click=\"keywordsSpottingCtrl.removeFile(_file, $event)\"\n" +
    "                    ng-if=\"keywordsSpottingCtrl.isEnableFileSelect\">\n" +
    "              <i class=\"fa fa-times\"></i>\n" +
    "            </button>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"drop-box-text\" ng-if=\"keywordsSpottingCtrl.uploadFiles.length > 1 && keywordsSpottingCtrl.isEnableFileSelect\">\n" +
    "        <button type=\"button\" class=\"btn btn-danger\"\n" +
    "                ng-click=\"keywordsSpottingCtrl.removeAllFiles($event)\">\n" +
    "          Remove All Files\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"drop-box-text\" ng-if=\"keywordsSpottingCtrl.showStartOverBtn\">\n" +
    "        <button type=\"button\" class=\"btn btn-success\"\n" +
    "                ng-click=\"keywordsSpottingCtrl.startOver($event)\">\n" +
    "          Start Over\n" +
    "          <i class=\"fa fa-undo\"></i>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"!keywordsSpottingCtrl.createLoading && keywordsSpottingCtrl.isEnableFileSelect\">\n" +
    "      <button type=\"button\" class=\"btn btn-link add-keyword\"\n" +
    "              change-keyword-group\n" +
    "              modal-keyword-group-mode=\"create\"\n" +
    "              change-group-callback=\"keywordsSpottingCtrl.createGroup\">\n" +
    "        <i class=\"fa fa-plus-circle\"></i>\n" +
    "        Add Phrase Spotting Group\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <div ng-if=\"keywordsSpottingCtrl.createLoading\" class=\"create-group-loader\">\n" +
    "      <css-spinner></css-spinner>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!keywordsSpottingCtrl.isLoadedGroups\" class=\"form-group\">\n" +
    "      <ui-select multiple\n" +
    "                 ng-model=\"keywordsSpottingCtrl.detectGroups\"\n" +
    "                 ng-disabled=\"!keywordsSpottingCtrl.isEnableFileSelect\"\n" +
    "                 ng-if=\"keywordsSpottingCtrl.checkDropdownVisibility(keywordsSpottingCtrl.detectGroups)\">\n" +
    "        <ui-select-match placeholder=\"Select groups...\">{{ $item.name }}</ui-select-match>\n" +
    "        <ui-select-choices repeat=\"group in keywordsSpottingCtrl.keywordGroups | filter:$select.search\">\n" +
    "          {{ group.name }}\n" +
    "        </ui-select-choices>\n" +
    "      </ui-select>\n" +
    "    </div>\n" +
    "    <div ng-if=\"keywordsSpottingCtrl.isLoadedGroups\" class=\"groups-loader\">\n" +
    "      <css-spinner></css-spinner>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!keywordsSpottingCtrl.isLoadedModels\" class=\"form-group\">\n" +
    "      <ui-select multiple\n" +
    "                 ng-model=\"keywordsSpottingCtrl.runModels\"\n" +
    "                 ng-disabled=\"!keywordsSpottingCtrl.isEnableFileSelect\"\n" +
    "                 ng-if=\"keywordsSpottingCtrl.checkDropdownVisibility(keywordsSpottingCtrl.runModels)\">\n" +
    "        <ui-select-match placeholder=\"Select models...\">{{ $item.displayName }}</ui-select-match>\n" +
    "        <ui-select-choices repeat=\"model in keywordsSpottingCtrl.predictionModels | filter:$select.search\">\n" +
    "          {{ model.displayName }}\n" +
    "        </ui-select-choices>\n" +
    "      </ui-select>\n" +
    "    </div>\n" +
    "    <div ng-if=\"keywordsSpottingCtrl.isLoadedModels\" class=\"groups-loader\">\n" +
    "      <css-spinner></css-spinner>\n" +
    "    </div>\n" +
    "\n" +
    "    <custom-vocabulary vocabulary=\"keywordsSpottingCtrl.vocabulary\"></custom-vocabulary>\n" +
    "\n" +
    "    <div ng-if=\"!keywordsSpottingCtrl.isLoaded && !keywordsSpottingCtrl.pingProcess\" class=\"form-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-success\" ng-click=\"keywordsSpottingCtrl.upload()\">Upload</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"keywordsSpottingCtrl.isLoaded\">\n" +
    "      <div class=\"progress-bar__label\">Uploading...</div>\n" +
    "      <progress-bar\n" +
    "        data-loaded=\"keywordsSpottingCtrl.uploadedState\"\n" +
    "        data-bar-class=\"progress-bar-info\"\n" +
    "        title=\"Total Hours Progress\">\n" +
    "        {{ keywordsSpottingCtrl.uploadedState }}\n" +
    "      </progress-bar>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"keywordsSpottingCtrl.pingProcess\">\n" +
    "      <div class=\"media-processing-loader\">\n" +
    "        <css-spinner></css-spinner>\n" +
    "      </div>\n" +
    "      <d3-dag-graph></d3-dag-graph>\n" +
    "    </div>\n" +
    "\n" +
    "    <voicebase-accordion uploaded-data=\"keywordsSpottingCtrl.uploadedData\" is-show=\"keywordsSpottingCtrl.finishedUpload\"></voicebase-accordion>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"!keywordsSpottingCtrl.isLogin\" class=\"raml-console-error-message\">Please sign in</div>\n" +
    "</div>\n"
  );


  $templateCache.put('keyword-group-widget/templates/editKeywordGroupModal.tpl.html',
    "<div class=\"modal fade\" data-backdrop=\"static\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content raml-console-modal\">\n" +
    "      <div class=\"modal-header raml-console-modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "        <h4 class=\"modal-title raml-console-modal-title\">{{ mode === 'create' ? 'Add' : 'Edit' }} Phrase Spotting Group</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"keywordGroupForm\" novalidate focus-form>\n" +
    "          <keyword-group-form keyword-group=\"keywordGroup\"></keyword-group-form>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer raml-console-modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-success\" ng-click=\"groupSave()\">\n" +
    "          <i class=\"fa fa-check\"></i>\n" +
    "          Save\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "          Cancel\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('keyword-group-widget/templates/removeKeywordGroupModal.tpl.html',
    "<div class=\"modal fade\" data-backdrop=\"static\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content raml-console-modal\">\n" +
    "      <div class=\"modal-header raml-console-modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "        <h4 class=\"modal-title raml-console-modal-title\">Remove Phrase Spotting Group</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <p class=\"raml-console-confirmation-message\">\n" +
    "          Are you sure you want to delete the group \"{{ groupName }}\"?\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer raml-console-modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-success\" ng-click=\"removeGroup()\">\n" +
    "          <i class=\"fa fa-check\"></i>\n" +
    "          Remove\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "          Cancel\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
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


  $templateCache.put('voicebase-media-player/directives/media-browser.tpl.html',
    "<div class=\"panel panel-default raml-console-panel media-browser\">\n" +
    "\n" +
    "  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"mediaBroserCtrl.errorMessage\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"mediaBroserCtrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "    {{ mediaBroserCtrl.errorMessage }}\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"mediaBroserCtrl.isLogin\">\n" +
    "\n" +
    "    <div ng-if=\"!mediaBroserCtrl.mediaLoaded\">\n" +
    "      <div class=\"media-browser-list\" id=\"media-browser-list\">\n" +
    "\n" +
    "        <div ng-if=\"!mediaBroserCtrl.media.length\" class=\"alert alert-warning\">\n" +
    "          There are no media files uploaded, please go ahead an upload media file\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"mediaBroserCtrl.media.length\">\n" +
    "          <div\n" +
    "            dir-paginate=\"media in mediaBroserCtrl.media | itemsPerPage: mediaBroserCtrl.groupsPerPage\"\n" +
    "            current-page=\"mediaBroserCtrl.currentPage\">\n" +
    "\n" +
    "            <div class=\"panel panel-default\">\n" +
    "              <div class=\"panel-heading\" role=\"tab\">\n" +
    "                <h4 class=\"panel-title\">\n" +
    "                  <a role=\"button\" data-toggle=\"collapse\" ng-attr-data-index=\"{{ $index }}\" href=\"javascript:void(0)\"\n" +
    "                     ng-click=\"mediaBroserCtrl.loadMedia($event, media)\">\n" +
    "                    {{ mediaBroserCtrl.getMediaTitle(media) }}\n" +
    "                  </a>\n" +
    "                </h4>\n" +
    "              </div>\n" +
    "              <div class=\"panel-collapse collapse\" role=\"tabpanel\">\n" +
    "                <div class=\"panel-body\"></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"raml-console-keywords-pagination\" >\n" +
    "        <dir-pagination-controls\n" +
    "          on-page-change=\"mediaBroserCtrl.changePage()\"\n" +
    "          template-url=\"pagination/dirPagination.tpl.html\">\n" +
    "        </dir-pagination-controls>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"mediaBroserCtrl.mediaLoaded\" class=\"media-loader\">\n" +
    "      <css-spinner></css-spinner>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"!mediaBroserCtrl.isLogin\" class=\"raml-console-error-message\">Please sign in</div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-media-player/directives/videojs.tpl.html',
    "<video id=\"player\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"auto\" width=\"100%\" height=\"264\" data-setup=\"\">\n" +
    "  <source src=\"\" type=\"\">\n" +
    "  <p class=\"vjs-no-js\">\n" +
    "    To view this video please enable JavaScript, and consider upgrading to a web browser that\n" +
    "    <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n" +
    "  </p>\n" +
    "</video>\n"
  );


  $templateCache.put('voicebase-media-player/directives/voicebase-accordion.tpl.html',
    "<div class=\"panel-group spotting-results\" id=\"files-accordion\" ng-if=\"isShow\">\n" +
    "  <div ng-repeat=\"uploadedInfo in uploadedData track by $index\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading\" role=\"tab\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "          <a role=\"button\" data-toggle=\"collapse\" ng-attr-data-index=\"{{ $index }}\" href=\"javascript:void(0)\" ng-click=\"toggleAccordionPane($event, uploadedInfo)\">\n" +
    "            {{ uploadedInfo.mediaName }}\n" +
    "            {{ showHasSpottedWords(uploadedInfo) }}\n" +
    "          </a>\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div class=\"panel-collapse collapse\" role=\"tabpanel\">\n" +
    "        <div class=\"panel-body\">\n" +
    "          <div class=\"panel-player-container\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-media-player/directives/voicebase-media-player.tpl.html',
    "<div class=\"vbs-media-player\">\n" +
    "  <div id=\"vbs-console-player-wrap\">\n" +
    "    <videojs media-url=\"{{ mediaUrl }}\" media-type=\"{{ mediaType }}\"></videojs>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-tokens/directives/basic-auth-form.tpl.html',
    "<div class=\"raml-console-auth-form-container\">\n" +
    "  <div class=\"raml-console-vbs-token-auth-form\">\n" +
    "    <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"basicAuthCtrl.formError\">\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"basicAuthCtrl.formError = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "      {{ basicAuthCtrl.formError }}\n" +
    "    </div>\n" +
    "\n" +
    "    <form name=\"authForm\" novalidate null-form ng-submit=\"basicAuthCtrl.startAuth($event)\">\n" +
    "      <div class=\"\">\n" +
    "        <p class=\"raml-console-sidebar-input-container\" ng-if=\"!basicAuthCtrl.noUsernameInput\">\n" +
    "          <label class=\"raml-console-sidebar-label\">API Key <span class=\"raml-console-side-bar-required-field\">*</span></label>\n" +
    "          <input required=\"true\" type=\"text\" name=\"username\" class=\"raml-console-sidebar-input raml-console-sidebar-security-field\"\n" +
    "                 ng-model=\"basicAuthCtrl.credentials.username\"/>\n" +
    "          <span class=\"raml-console-field-validation-error\"></span>\n" +
    "        </p>\n" +
    "\n" +
    "        <p class=\"raml-console-sidebar-input-container\">\n" +
    "          <label class=\"raml-console-sidebar-label\">Password <span class=\"raml-console-side-bar-required-field\">*</span></label>\n" +
    "          <input required=\"true\" type=\"password\" name=\"password\" class=\"raml-console-sidebar-input raml-console-sidebar-security-field\"\n" +
    "                 ng-model=\"basicAuthCtrl.credentials.password\"/>\n" +
    "          <span class=\"raml-console-field-validation-error\"></span>\n" +
    "        </p>\n" +
    "\n" +
    "        <p ng-if=\"needRemember\">\n" +
    "          <label class=\"raml-console-sidebar-label raml-console-pull-right\">\n" +
    "            <input type=\"checkbox\" class=\"raml-console-rememberVoicebaseToken\" ng-checked=\"basicAuthCtrl.isRemember\" ng-click=\"basicAuthCtrl.changeRemember()\"/>\n" +
    "            Remember me\n" +
    "          </label>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"raml-console-vbs-auth-form-btns\">\n" +
    "        <button type=\"submit\" class=\"raml-console-sidebar-action raml-console-sidebar-action-get\">\n" +
    "          <span ng-if=\"!basicAuthCtrl.isLoaded\">Sign In</span>\n" +
    "          <span ng-if=\"basicAuthCtrl.isLoaded\">Signing In...</span>\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"raml-console-sidebar-action raml-console-sidebar-action-reset\"\n" +
    "                ng-if=\"canHideForm\"\n" +
    "                ng-click=\"basicAuthCtrl.hideForm()\">\n" +
    "          Cancel\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('voicebase-tokens/directives/key-manager.tpl.html',
    "<div class=\"panel panel-default raml-console-panel key-manager\">\n" +
    "\n" +
    "  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"keyManagerCtrl.errorMessage\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"keyManagerCtrl.errorMessage = ''\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "    {{ keyManagerCtrl.errorMessage }}\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"keyManagerCtrl.isLogin\">\n" +
    "\n" +
    "    <div class=\"panel-group users-list\" id=\"users-accordion\">\n" +
    "      <div ng-if=\"keyManagerCtrl.isLoadUsers\">\n" +
    "        <css-spinner></css-spinner>\n" +
    "      </div>\n" +
    "      <div ng-repeat=\"user in keyManagerCtrl.users track by $index\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\" role=\"tab\">\n" +
    "            <h4 class=\"panel-title\">\n" +
    "              <a role=\"button\" class=\"user-name\" data-toggle=\"collapse\" href=\"javascript:void(0)\" toggle-bootstrap-accordion ng-click=\"keyManagerCtrl.showUserTokens(user)\">\n" +
    "                {{ user.name }}\n" +
    "              </a>\n" +
    "              <a href=\"javascript:void(0)\" class=\"pull-right add-user-token\"\n" +
    "                 ng-click=\"keyManagerCtrl.addToken(user)\"\n" +
    "                 ng-show=\"!user.isCreatingToken\">\n" +
    "                <i class=\"fa fa-plus-circle\"></i>\n" +
    "                Add token\n" +
    "              </a>\n" +
    "              <div ng-if=\"user.isCreatingToken\" class=\"pull-right add-user-token__loader\">\n" +
    "                <css-spinner></css-spinner>\n" +
    "              </div>\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "          <div class=\"panel-collapse collapse\" role=\"tabpanel\">\n" +
    "            <div class=\"panel-body user-info list-group\">\n" +
    "              <div ng-if=\"user.isLoadTokens\">\n" +
    "                <css-spinner></css-spinner>\n" +
    "              </div>\n" +
    "\n" +
    "              <div ng-if=\"user.tokens\">\n" +
    "                <div class=\"list-group-item user-info__token-row\"\n" +
    "                     ng-repeat=\"_token in user.tokens track by $index\"\n" +
    "                     ng-class=\"keyManagerCtrl.highlightToken === _token ? 'user-info__token-row_highlight' : ''\">\n" +
    "\n" +
    "                  <h4 class=\"user-info__token-name\" ng-if=\"!_token.isRemoving\">{{ _token.token }}</h4>\n" +
    "                  <div class=\"user-info__token-actions\" ng-if=\"!_token.isRemoving\">\n" +
    "                    <a href=\"javascript:void(0)\" class=\"user-info__token-actions__remove\"\n" +
    "                            data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove token\"\n" +
    "                            ng-click=\"keyManagerCtrl.removeToken(user, _token)\">\n" +
    "                      <i class=\"fa fa-times-circle\"></i>\n" +
    "                    </a>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div ng-if=\"_token.isRemoving\" class=\"remove-token__loader\">\n" +
    "                    <css-spinner></css-spinner>\n" +
    "                  </div>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"!keyManagerCtrl.isLogin\">\n" +
    "    <div class=\"alert alert-warning\" role=\"alert\">\n" +
    "      <p>I understand that adding or removing users or tokens may affect the security of my account or break existing integrations.</p>\n" +
    "      <p>Please enter your password to continue</p>\n" +
    "    </div>\n" +
    "    <basic-auth-form need-remember=\"false\" can-hide-form=\"false\"></basic-auth-form>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
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
