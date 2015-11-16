'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    tempdir: '.tmp',
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    src: {
      js: ['src/app/voicebaseApp.js', 'src/app/**/*.js'],
      jsMainVendors: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/velocity/velocity.min.js',
        'bower_components/angular/angular.min.js'
      ],
      jsApiConsoleVendors: [
        'bower_components/raml-js-parser/dist/raml-parser.min.js',
        'bower_components/raml-client-generator/dist/raml-client-generator.min.js',
        'bower_components/marked/marked.min.js',
        'bower_components/highlightjs/highlight.pack.js',
        'bower_components/vkbeautify/vkbeautify.js',  // no minify version
        'bower_components/crypto-js/rollups/hmac-sha1.js',
        'bower_components/crypto-js/components/enc-base64-min.js',
        'bower_components/codemirror/lib/codemirror.js', // no minify version
        'bower_components/codemirror/mode/javascript/javascript.js', // no minify version
        'bower_components/codemirror/mode/xml/xml.js', // no minify version
        'bower_components/codemirror/mode/yaml/yaml.js', // no minify version
        'bower_components/codemirror/addon/dialog/dialog.js', // no minify version
        'bower_components/codemirror/addon/search/search.js', // no minify version
        'bower_components/codemirror/addon/search/searchcursor.js', // no minify version
        'bower_components/codemirror/addon/lint/lint.js', // no minify version
        'bower_components/angular-ui-codemirror/ui-codemirror.min.js',
        'bower_components/angular-marked/angular-marked.min.js',
        'bower_components/angular-highlightjs/angular-highlightjs.min.js',
        'bower_components/jszip/jszip.js', // no minify version
        'bower_components/slug/slug.js', // no minify version
        'bower_components/FileSaver/FileSaver.min.js'
      ],
      jsVendor: [
        'dist/bootstrap/javascripts/bootstrap.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-modal-service/dst/angular-modal-service.min.js',
        'bower_components/angular-utils-pagination/dirPagination.js',
        'bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
        'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
        'bower_components/ng-file-upload/ng-file-upload.min.js',
        'bower_components/angular-ui-select/dist/select.min.js'
      ],
      jsApiConsole: [
        'bower_components/api-console-voicebase/dist/scripts/api-console.js'
      ],
      jsGraphVendors: [
        'bower_components/lodash/lodash.min.js',
        'bower_components/d3/d3.min.js',
        'bower_components/graphlib/dist/graphlib.core.js',
        'bower_components/dagre/dist/dagre.core.js',
        'bower_components/dagre-d3/dist/dagre-d3.core.js',
        'src/vendor/dagre-d3-flow/dagre-flow.min.js',
        'src/vendor/dagre-d3-flow/tipsy.min.js'
      ],
      html: ['src/index.html'],
      scss: [
        'bower_components/api-console-voicebase/dist/styles/api-console-dark-theme.css',
        'bower_components/api-console-voicebase/dist/styles/api-console-light-theme.css'
      ],
      cssVendors: [
        'dist/bootstrap/stylesheets/bootstrap.css',
        'bower_components/fontawesome/css/font-awesome.min.css',
        'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror.css',
        'bower_components/api-console-voicebase/src/assets/styles/fonts.css',
        'bower_components/api-console-voicebase/src/assets/styles/error.css',
        'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
        'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror-dark.css',
        'bower_components/angular-ui-select/dist/select.min.css',
        'src/vendor/dagre-d3-flow/dagre-flow.css'
      ],
      scssWatch: ['src/scss/**/*.scss'],
      test: ['test/**/*.js']
    },

    connect: {
      options: {
        hostname: 'localhost',
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
      ],

      tempCss: [
        '<%= distdir %>/styles/pagination.css',
        '<%= distdir %>/styles/voicebase-error.css',
        '<%= distdir %>/styles/voicebase-portal.css'
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

      vendorFolder: {
        files: [{
          dest: '<%= distdir %>',
          cwd: 'src/vendor/',
          expand: true,
          src: [
            '**'
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
          dest: '<%= distdir %>/fonts/',
          cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap',
          src: [
            '**'
          ]
        }]

      },

      fontAwesome: {
        files: [{
          expand: true,
          dest: '<%= distdir %>/fonts/',
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
          module: 'ramlVoicebaseConsoleApp'
        },

        cwd: 'src/app',
        src: '**/*.tpl.html',
        dest: '<%= tempdir %>/templates/app.js'
      }
    },

    concat: {
      apiConsole: {
        dest: '<%= distdir %>/scripts/api-console.js',
        src: [
          '<%= src.jsApiConsole %>'
        ]
      },

      app: {
        dest: '<%= distdir %>/scripts/voicebase-developer-experience.js',
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

      cssVendors: {
        options: {
          process: function process(value) {
            return value.replace(/\.raml-console-CodeMirror/g, '.CodeMirror');
          }
        },
        dest: '<%= distdir %>/styles/api-console-vendors.css',
        src: '<%= src.cssVendors %>'
      },

      cssApiConsoleLight: {
        dest: '<%= distdir %>/styles/api-console-light-theme.css',
        src: [
          'bower_components/api-console-voicebase/dist/styles/api-console-light-theme.css'
        ]
      },

      cssApiConsoleDark: {
        dest: '<%= distdir %>/styles/api-console-dark-theme.css',
        src: [
          'bower_components/api-console-voicebase/dist/styles/api-console-dark-theme.css'
        ]
      },

      darkTheme: {
        dest: '<%= distdir %>/styles/voicebase-dark-theme.css',
        src: [
          '<%= distdir %>/styles/pagination.css',
          '<%= distdir %>/styles/voicebase-error.css',
          '<%= distdir %>/styles/voicebase-portal.css',
          '<%= distdir %>/styles/voicebase-dark-theme.css'
        ]
      },

      lightTheme: {
        dest: '<%= distdir %>/styles/voicebase-light-theme.css',
        src: [
          '<%= distdir %>/styles/pagination.css',
          '<%= distdir %>/styles/voicebase-error.css',
          '<%= distdir %>/styles/voicebase-portal.css',
          '<%= distdir %>/styles/voicebase-light-theme.css'
        ]
      },

      jsMainVendors: {
        src: '<%= src.jsMainVendors %>',
        dest: '<%= distdir %>/scripts/voicebase-main-vendor.js'
      },

      jsApiConsoleVendors: {
        src: '<%= src.jsApiConsoleVendors %>',
        dest: '<%= distdir %>/scripts/api-console-vendor.js'
      },

      jsGraphVendors: {
        src: '<%= src.jsGraphVendors %>',
        dest: '<%= distdir %>/scripts/voicebase-graph-vendor.js'
      },

      vendor: {
        src: '<%= src.jsVendor %>',
        dest: '<%= distdir %>/scripts/voicebase-developer-experience-vendor.js'
      }

    },

    concurrent: {
      build: [
        'build:scripts',
        'concat:jsMainVendors',
        'concat:jsApiConsoleVendors',
        'concat:jsGraphVendors',
        'concat:vendor',
        'concat:index',
        'copy:assets',
        'copy:vendorFolder',
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

      themes: [
        'concat:cssApiConsoleLight',
        'concat:cssApiConsoleDark',
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
          '<%= distdir %>/styles/voicebase-error.css': 'src/scss/voicebase-error.scss',
          '<%= distdir %>/styles/voicebase-portal.css': 'src/scss/voicebase-portal.scss',
          '<%= distdir %>/styles/voicebase-light-theme.css': 'src/scss/light-theme.scss',
          '<%= distdir %>/styles/voicebase-dark-theme.css': 'src/scss/dark-theme.scss'
        }
      },

      min: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },

        files: {
          '<%= distdir %>/styles/pagination.css': 'src/scss/pagination.scss',
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
          '<%= distdir %>/styles/voicebase-light-theme.css': '<%= distdir %>/styles/voicebase-light-theme.css',
          '<%= distdir %>/styles/voicebase-dark-theme.css': '<%= distdir %>/styles/voicebase-dark-theme.css'
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
        '<%= src.test %>',
        '!src/vendor/**'
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
    'customBootstrap',
    'concurrent:build'
  ]);

  grunt.registerTask('customBootstrap', [
    'copy:fontAwesome',
    'copy:customBootstrap',
    'sass:customBootstrap'
  ]);


  grunt.registerTask('build:scripts', [
    'ngtemplates',
    'concat:apiConsole',
    'concat:app'
  ]);

  grunt.registerTask('build:styles', [
    'sass:build',
    'css_prefix:prefix',
    'concat:cssVendors',
    'concurrent:themes',
    'clean:tempCss'
  ]);

  grunt.registerTask('regression', [
    'connect:regression',
    'buildMulesoft',
    'protractor:apiConsole',
    'build',
    'protractor:voicebase'
  ]);

};
