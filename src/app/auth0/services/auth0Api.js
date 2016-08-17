(function () {
  'use strict';

  var Auth0Api = function($rootScope, $http, $q, voicebaseUrl, store) {
    var baseUrl = voicebaseUrl.getBaseUrl();

    var AUTH0_CLIENT_ID = null;
    var AUTH0_DOMAIN = null;

    var AUTH0_OPTIONS = {
      theme: {
        logo: 'https://s3.amazonaws.com/www-tropo-com/wp-content/uploads/2015/06/voicebase-logo.png'
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
      closable: false
    };

    var lock;

    var createAuth0ApiKey = function (auth0Token) {
      var deferred = $q.defer();
      if (!auth0Token) {
        auth0Token = store.get('auth0Token');
      }

      jQuery.ajax({
        url: baseUrl + '/profile/keys',
        type: 'POST',
        headers: {
          'Authorization': 'Bearer ' + auth0Token
        },
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

      lock.show();
    };

    var hideLock = function () {
      lock.hide();
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

    return {
      createAuth0ApiKey: createAuth0ApiKey,
      getApiKeys: getApiKeys,
      signIn: signIn,
      hideLock: hideLock,
      saveCredentials: saveCredentials,
      signOut: signOut,
      setEnv: setEnv
    };
  };

  angular.module('voicebaseAuth0Module')
    .service('auth0Api', Auth0Api);

})();
