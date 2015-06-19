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
