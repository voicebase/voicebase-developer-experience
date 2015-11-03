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

