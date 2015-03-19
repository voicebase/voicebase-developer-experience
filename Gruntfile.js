'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        tempdir: '.tmp',
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['src/**/*.js'],
            jsVendor: [
                'bower_components/api-console-voicebase/dist/scripts/api-console-vendor.js',
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
                port:     9000
            },

            livereload: {
                options: {
                    livereload: true,
                    open:       true,
                    middleware: function (connect) {
                        return [
                            connect.static('.')
                        ];
                    }
                }
            },

            regression: {
                options: {
                    livereload: true,
                    open:       false,
                    middleware: function (connect) {
                        return [
                            connect.static('.'),
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
                    dest:   '<%= distdir %>',
                    cwd:    'bower_components/api-console-voicebase/src/assets/',
                    expand: true,
                    src:    [
                        '**',
                        '!styles/**/*'
                    ]
                }]
            }
        },

        ngtemplates: {
            ramlConsole: {
                options: {
                    module: 'ramlConsoleApp'
                },

                cwd:  'src/app',
                src:  '**/*.tpl.html',
                dest: '<%= tempdir %>/templates/app.js'
            }
        },

        concat: {
            app: {
                dest: '<%= distdir %>/scripts/<%= pkg.name %>.js',
                src:  [
                    '<%= src.js %>',
                    '<%= ngtemplates.ramlConsole.dest %>'
                ]
            },

            index: {
                options: {
                    process: true
                },

                dest: 'index.html',
                src:  'src/index.html'
            },

            darkTheme: {
                options: {
                    process: function process(value) {
                        return value.replace(/\.raml-console-CodeMirror/g, '.CodeMirror');
                    }
                },

                dest: '<%= distdir %>/styles/api-console-dark-theme.css',
                src:  [
                    'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror.css',
                    'bower_components/api-console-voicebase/src/assets/styles/fonts.css',
                    'bower_components/api-console-voicebase/src/assets/styles/error.css',
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
                src:  [
                    'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror.css',
                    'bower_components/api-console-voicebase/src/assets/styles/fonts.css',
                    'bower_components/api-console-voicebase/src/assets/styles/error.css',
                    '<%= distdir %>/styles/api-console-light-theme.css',
                    'bower_components/api-console-voicebase/src/assets/styles/vendor/codemirror-light.css'
                ]
            },

            vendor: {
                src:  '<%= src.jsVendor %>',
                dest: '<%= distdir %>/scripts/<%= pkg.name %>-vendor.js'
            }

        },

        concurrent: {
            build: [
                'build:scripts',
                'concat:vendor',
                'concat:index',
                'copy:assets',
                'build:styles'
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
                    style:     'expanded'
                },

                files: {
                    '<%= distdir %>/styles/api-console-light-theme.css': 'src/scss/light-theme.scss',
                    '<%= distdir %>/styles/api-console-dark-theme.css':  'src/scss/dark-theme.scss'
                }
            },

            min: {
                options: {
                    sourcemap: 'none',
                    style:     'compressed'
                },

                files: {
                    '<%= distdir %>/styles/api-console-light-theme.css': 'src/scss/light-theme.scss',
                    '<%= distdir %>/styles/api-console-dark-theme.css':  'src/scss/dark-theme.scss'
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
            }

        },

        /*jshint camelcase: false */
        css_prefix: {
            prefix: {
                options: {
                    prefix:      'raml-console-',
                    processName: 'trim'
                },

                files: {
                    '<%= distdir %>/styles/api-console-light-theme.css': '<%= distdir %>/styles/api-console-light-theme.css',
                    '<%= distdir %>/styles/api-console-dark-theme.css':  '<%= distdir %>/styles/api-console-dark-theme.css'
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
                keepAlive:  false
            },

            local: {
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

    grunt.registerTask('build', [
        'jshint',
        'clean',
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
        'protractor:local'
    ]);

};
