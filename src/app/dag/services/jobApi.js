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
            '1cf6aaee-599a-4a9f-9546-984136f3fd6c'
          ]
        },
        'a628bc5b-9cdf-4bd7-a543-398d7d26adbd' : {
          'taskId' : 'a628bc5b-9cdf-4bd7-a543-398d7d26adbd',
          'display' : 'Transcripts...',
          'phase' : 'transcripts',
          'status' : 'pending',
          'jit' : true,
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
            '1cf6aaee-599a-4a9f-9546-984136f3fd6c'
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
