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
        console.log('currentToken', currentToken);
        // currentToken does not contain a "." => isInLegacyHybridMode
        return ( !! currentToken )
          && ( !! currentToken.token )
          && ( 0 > currentToken.token.indexOf('.') );
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
      isInLegacyHybridMode: isInLegacyHybridMode
    };

  };

  angular.module('voicebaseTokensModule')
    .service('voicebaseTokensApi', voicebaseTokensApi);

})();
