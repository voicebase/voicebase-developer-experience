(function () {
  'use strict';

  var Auth0Api = function($http, $q, voicebaseUrl, store) {
    var baseUrl = voicebaseUrl.getBaseUrl();
    var DOMAIN = 'voicebase.auth0.com';
    var CLIENT_ID = '1eQFoL41viLp5qK90AMme5tc5TjEpUeE';
    var auth0Options = {
      icon:'https://s3.amazonaws.com/www-tropo-com/wp-content/uploads/2015/06/voicebase-logo.png',
      focusInput: false,
      popup: true,
      closable: false
    };

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
      var deferred = $q.defer();

      var lock = new Auth0Lock(CLIENT_ID, DOMAIN);
      lock.show(auth0Options, function (err, profile, token) {
        if (err) {
          deferred.reject(err);
        }
        else {
          saveCredentials(profile, token);
          deferred.resolve({profile: profile, token: token});
        }
      });

      return deferred.promise;
    };

    var saveCredentials = function (profile, token) {
      store.set('voicebase-profile', profile);
      store.set('auth0Token', token);
    };

    var signOut = function () {
      store.remove('voicebase-profile');
      store.remove('auth0Token');
    };

    var getApiKeys = function() {
      var deferred = $q.defer();
      var auth0Token = store.get('auth0Token');

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

    return {
      createAuth0ApiKey: createAuth0ApiKey,
      getApiKeys: getApiKeys,
      signIn: signIn,
      saveCredentials: saveCredentials,
      signOut: signOut
    };
  };

  angular.module('voicebaseAuth0Module')
    .service('auth0Api', Auth0Api);

})();
