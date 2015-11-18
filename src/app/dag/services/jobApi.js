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
      'finish': 'b82b29e7-6282-498f-bdac-4c203531f117',
      'jobId': '78c3959e-7f4d-4942-adbd-2733ae56bc24',
      'status': 'started',
      'start': '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550',
      'tasks': {
        '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550': {
          'taskId': '668f0f3c-ec7d-4b95-bdb5-ed0027ed3550',
          'dependents': [
            '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
            '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
            '3268fc01-27ba-4d99-a2ba-d36999d6879b',
            'da818fd8-ac9a-444d-a0c1-01f6352a9985',
            '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
            '3be558b4-8263-4333-897f-17996622f910',
            'a1643d01-11ab-44f5-83fd-851cc9993556',
            '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
            '094934ee-10ce-4a9b-9729-2fb8a4bb9328'
          ],
          'status': 'completed',
          'dependencies': [],
          'display': 'Ingest',
          'phase': 'ingest'
        },
        '74323d31-a068-4cf2-91ee-5c67e5bc6232': {
          'taskId': '74323d31-a068-4cf2-91ee-5c67e5bc6232',
          'dependents': ['d9fcb867-625e-4bf3-b2bc-ecbae5573922'],
          'status': 'pending',
          'dependencies': [
            '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
            '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
            '3268fc01-27ba-4d99-a2ba-d36999d6879b',
            'da818fd8-ac9a-444d-a0c1-01f6352a9985',
            '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
            '3be558b4-8263-4333-897f-17996622f910',
            'a1643d01-11ab-44f5-83fd-851cc9993556',
            '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
            '094934ee-10ce-4a9b-9729-2fb8a4bb9328'
          ],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'd9fcb867-625e-4bf3-b2bc-ecbae5573922': {
          'taskId': 'd9fcb867-625e-4bf3-b2bc-ecbae5573922',
          'dependents': ['9fac53f8-933e-4bdd-9ef3-bb7eceb25a82'],
          'status': 'pending',
          'dependencies': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '9fac53f8-933e-4bdd-9ef3-bb7eceb25a82': {
          'taskId': '9fac53f8-933e-4bdd-9ef3-bb7eceb25a82',
          'dependents': ['81583263-23d9-48a2-a85a-78ff41bc6723'],
          'status': 'pending',
          'dependencies': ['d9fcb867-625e-4bf3-b2bc-ecbae5573922'],
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '81583263-23d9-48a2-a85a-78ff41bc6723': {
          'taskId': '81583263-23d9-48a2-a85a-78ff41bc6723',
          'dependents': ['b82b29e7-6282-498f-bdac-4c203531f117'],
          'status': 'pending',
          'dependencies': ['9fac53f8-933e-4bdd-9ef3-bb7eceb25a82'],
          'display': 'Keywords',
          'phase': 'keywords'
        },
        'b82b29e7-6282-498f-bdac-4c203531f117': {
          'taskId': 'b82b29e7-6282-498f-bdac-4c203531f117',
          'dependents': [],
          'status': 'pending',
          'dependencies': ['81583263-23d9-48a2-a85a-78ff41bc6723'],
          'display': 'Keywords',
          'phase': 'keywords'
        },
        '96f8e609-dfc2-4584-adc8-4c1addf22c4f': {
          'taskId': '96f8e609-dfc2-4584-adc8-4c1addf22c4f',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9': {
          'taskId': '937fe7eb-a576-401c-b3d9-c91c0e9f3cd9',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '3268fc01-27ba-4d99-a2ba-d36999d6879b': {
          'taskId': '3268fc01-27ba-4d99-a2ba-d36999d6879b',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'da818fd8-ac9a-444d-a0c1-01f6352a9985': {
          'taskId': 'da818fd8-ac9a-444d-a0c1-01f6352a9985',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '34a60073-68d4-4993-ad8a-a3dbaa2b51b2': {
          'taskId': '34a60073-68d4-4993-ad8a-a3dbaa2b51b2',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '3be558b4-8263-4333-897f-17996622f910': {
          'taskId': '3be558b4-8263-4333-897f-17996622f910',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        'a1643d01-11ab-44f5-83fd-851cc9993556': {
          'taskId': 'a1643d01-11ab-44f5-83fd-851cc9993556',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '1ffbb791-b1ce-4879-a5e7-aad093e8272a': {
          'taskId': '1ffbb791-b1ce-4879-a5e7-aad093e8272a',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
        },
        '094934ee-10ce-4a9b-9729-2fb8a4bb9328': {
          'taskId': '094934ee-10ce-4a9b-9729-2fb8a4bb9328',
          'dependents': ['74323d31-a068-4cf2-91ee-5c67e5bc6232'],
          'status': 'started',
          'dependencies': ['668f0f3c-ec7d-4b95-bdb5-ed0027ed3550'],
          'generator': '1b113fa2-47c2-40a7-835a-ad735fc8e85a',
          'display': 'Transcripts',
          'phase': 'transcripts'
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
