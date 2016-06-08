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
