(function () {
  'use strict';

  var voicebaseTokensApi = function($http, $q) {
    var baseUrl = 'https://apis.voicebase.com/v2-beta';

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
      getTokenFromStorage: getTokenFromStorage,
      getBasicToken: getBasicToken,
      basicAuth: basicAuth,
      getUsers: getUsers,
      getUserTokens: getUserTokens,
      addUserToken: addUserToken
    };

  };

  angular.module('voicebaseTokensModule')
    .service('voicebaseTokensApi', voicebaseTokensApi);

})();
