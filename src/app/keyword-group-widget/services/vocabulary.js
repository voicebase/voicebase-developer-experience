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
            var terms = [].concat(vocabulary.terms);+
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
