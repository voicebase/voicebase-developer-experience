'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    tempdir: '.tmp',
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    src: {
      js: ['src/app/voicebaseApp.js', 'src/**/*.js'],
      jsVendor: [
        'bower_components/api-console-voicebase/dist/scripts/api-console-vendor.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-modal-service/dst/angular-modal-service.js',
        'bower_components/angular-utils-pagination/dirPagination.js',
        'bower_components/api-console-voicebase/dist/scripts/api-console.js'
      ],
      html: ['src/index.html'],
      scss: [
        'bower_components/api-console-voicebase/dist/styles/api-console-dark-theme.css',
        'bower_components/api-console-voicebase/dist/styles/api-console-light-theme.css'
      ],
      scssWatch: ['src/scss/**/*.scss'],
      test: ['test/**/*.js']
    },

    connect: {
      options: {
        hostname: '0.0.0.0',
        port: 9000
      },

      livereload: {
        options: {
          livereload: true,
          open: true,
          middleware: function (connect) {
            return [
              connect.static('dist')
            ];
          }
        }
      },

      regression: {
        options: {
          livereload: true,
          open: false,
          middleware: function (connect) {
            return [
              connect.static('dist'),
              connect.static('test/regression/assets')
            ];
          }
        }
      }

    },

    clean: {
      build: [
        '<%= tempdir %>',
        '<%= distdir %>'
      ]
    },

    copy: {
      assets: {
        files: [{
          dest: '<%= distdir %>',
          cwd: 'bower_components/api-console-voicebase/src/assets/',
          expand: true,
          src: [
            '**',
            '!styles/**/*'
          ]
        }]
      },

      pages: {
        files: [{
          dest: '<%= distdir %>/pages',
          cwd: 'src/assets/pages/',
          expand: true,
          src: [
            '**'
          ]
        }]
      },

      images: {
        files: [{
          dest: '<%= distdir %>/img',
          cwd: 'src/assets/img/',
          expand: true,
          src: [
            '**'
          ]
        }]
      },

      customBootstrap: {
        files: [{
          expand: true,
          dest: '<%= distdir %>/bootstrap/javascripts/',
          cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
          src: [
            'bootstrap.min.js'
          ]
        }, {
          expand: true,
          dest: '<%= distdir %>/bootstrap/fonts/',
          cwd: 'bower_components/bootstrap-sass/assets/fonts/',
          src: [
            '**'
          ]
        }]

      },

      fontAwesome: {
        files: [{
          expand: true,
          dest: '<%= distdir %>/fontawesome/css/',
          cwd: 'bower_components/fontawesome/css/',
          src: [
            'font-awesome.min.css'
          ]
        }, {
          expand: true,
          dest: '<%= distdir %>/fontawesome/fonts/',
          cwd: 'bower_components/fontawesome/fonts/',
          src: [
            '**'
          ]
        }]
      }
    },

    ngtemplates: {
      ramlConsole: {
        options: {
          module: 'ramlConsoleApp'
        },

        cwd: 'src/app',
        src: '**/*.tpl.html',
        dest: '<%= tempdir %>/templates/app.js'
      }
    },

    concat: {
      app: {
        dest: '<%= distdir %>/scripts/api-console.js',
        src: [
          '<%= src.js %>',
          '<%= ngtemplates.ramlConsole.dest %>'
        ]
      },

      index: {
        options: {
          process: true
        },

        dest: '<%= distdir %>/index.html',
        src: 'src/voicebase.html'
      },

      indexMulesoft: {
        options: {
          process: true
        },

        dest: '<%= distdir %>/index.html',
        src: 'src/index.html'
      },

      darkTheme: {
        options: {
          process: function process(value) {
            return value.replace(/\.raml-console-CodeMirror/g, '.CodeMirror');
          }
        },

        dest: '<%= distdir %>/styles/api-console-dark-theme.css',
        src: [
          'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror.css',
          'bower_components/api-console-voicebase/src/assets/styles/fonts.css',
          'bower_components/api-console-voicebase/src/assets/styles/error.css',
          '<%= distdir %>/styles/toggle-button.css',
          '<%= distdir %>/styles/pagination.css',
          '<%= distdir %>/styles/voicebase-error.css',
          '<%= distdir %>/styles/voicebase-portal.css',
          '<%= distdir %>/styles/api-console-dark-theme.css',
          'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror-dark.css'
        ]
      },

      lightTheme: {
        options: {
          process: function process(value) {
            return value.replace(/\.raml-console-CodeMirror/g, '.CodeMirror');
          }
        },

        dest: '<%= distdir %>/styles/api-console-light-theme.css',
        src: [
          'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror.css',
          'bower_components/api-console-voicebase/src/assets/styles/fonts.css',
          'bower_components/api-console-voicebase/src/assets/styles/error.css',
          '<%= distdir %>/styles/toggle-button.css',
          '<%= distdir %>/styles/pagination.css',
          '<%= distdir %>/styles/voicebase-error.css',
          '<%= distdir %>/styles/voicebase-portal.css',
          '<%= distdir %>/styles/api-console-light-theme.css',
          'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror-light.css'
        ]
      },

      vendor: {
        src: '<%= src.jsVendor %>',
        dest: '<%= distdir %>/scripts/api-console-vendor.js'
      }

    },

    concurrent: {
      build: [
        'build:scripts',
        'concat:vendor',
        'concat:index',
        'copy:assets',
        'copy:pages',
        'copy:images',
        'build:styles'
      ],

      buildMulesoft: [
        'build:scripts',
        'concat:vendor',
        'concat:indexMulesoft',
        'copy:assets',
        'build:styles'
      ],

      customBootstrap: [
        'copy:fontAwesome',
        'copy:customBootstrap',
        'sass:customBootstrap'
      ],

      themes: [
        'concat:darkTheme',
        'concat:lightTheme'
      ]
    },

    sass: {
      build: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },

        files: {
          '<%= distdir %>/styles/pagination.css': 'src/scss/pagination.scss',
          '<%= distdir %>/styles/toggle-button.css': 'src/scss/toggle-button.scss',
          '<%= distdir %>/styles/voicebase-error.css': 'src/scss/voicebase-error.scss',
          '<%= distdir %>/styles/voicebase-portal.css': 'src/scss/voicebase-portal.scss',
          '<%= distdir %>/styles/api-console-light-theme.css': 'src/scss/light-theme.scss',
          '<%= distdir %>/styles/api-console-dark-theme.css': 'src/scss/dark-theme.scss'
        }
      },

      min: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },

        files: {
          '<%= distdir %>/styles/pagination.css': 'src/scss/pagination.scss',
          '<%= distdir %>/styles/toggle-button.css': 'src/scss/toggle-button.scss',
          '<%= distdir %>/styles/voicebase-error.css': 'src/scss/voicebase-error.scss',
          '<%= distdir %>/styles/voicebase-portal.css': 'src/scss/voicebase-portal.scss',
          '<%= distdir %>/styles/api-console-light-theme.css': 'src/scss/light-theme.scss',
          '<%= distdir %>/styles/api-console-dark-theme.css': 'src/scss/dark-theme.scss'
        }
      },

      customBootstrap: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },
        files: {
          '<%= distdir %>/bootstrap/stylesheets/bootstrap.css': 'src/scss/bootstrap.scss'
        }
      }
    },

    watch: {
      dist: {
        options: {
          livereload: true
        },

        tasks: [],
        files: [
          '<%= distdir %>/**/*'
        ]
      },

      scripts: {
        tasks: ['build:scripts'],
        files: [
          '<%= ngtemplates.ramlConsole.src %>',
          '<%= src.js %>'
        ]
      },

      vendor: {
        tasks: ['concat:scripts'],
        files: [
          '<%= concat.vendor.src %>'
        ]
      },

      index: {
        tasks: ['concat:index'],
        files: [
          '<%= concat.index.src %>'
        ]
      },

      styles: {
        tasks: ['build:styles'],
        files: [
          'src/scss/**/*.scss'
        ]
      },

      pages: {
        tasks: ['copy:pages'],
        files: [
          'src/assets/pages/**/*.html'
        ]
      },

      images: {
        tasks: ['copy:images'],
        files: [
          'src/assets/img/**/*.*'
        ]
      }

    },

    /*jshint camelcase: false */
    css_prefix: {
      prefix: {
        options: {
          prefix: 'raml-console-',
          processName: 'trim'
        },

        files: {
          '<%= distdir %>/styles/api-console-light-theme.css': '<%= distdir %>/styles/api-console-light-theme.css',
          '<%= distdir %>/styles/api-console-dark-theme.css': '<%= distdir %>/styles/api-console-dark-theme.css'
        }
      }
    },
    /*jshint camelcase: true */

    jshint: {
      options: {
        jshintrc: true
      },

      files: [
        'Gruntfile.js',
        '<%= src.js %>',
        '<%= src.test %>'
      ]
    },

    protractor: {
      options: {
        keepAlive: false
      },

      apiConsole: {
        options: {
          configFile: 'bower_components/api-console-voicebase/test/regression/local.protractor.conf.js'
        }
      },

      voicebase: {
        options: {
          configFile: 'test/regression/local.protractor.conf.js'
        }
      }
    }

  });

  grunt.registerTask('default', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  // build app with default mulesoft settings
  grunt.registerTask('buildMulesoft', [
    'jshint',
    'clean',
    'concurrent:buildMulesoft'
  ]);

  // build app with voicebase settings
  grunt.registerTask('build', [
    'jshint',
    'clean',
    'concurrent:customBootstrap',
    'concurrent:build'
  ]);

  grunt.registerTask('build:scripts', [
    'ngtemplates',
    'concat:app'
  ]);

  grunt.registerTask('build:styles', [
    'sass:build',
    'css_prefix:prefix',
    'concurrent:themes'
  ]);

  grunt.registerTask('regression', [
    'connect:regression',
    'buildMulesoft',
    'protractor:apiConsole',
    'build',
    'protractor:voicebase'
  ]);

};
