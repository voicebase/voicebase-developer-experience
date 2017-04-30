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
    }

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
