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
            html: ['index.html'],
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
                            connect.static('dist')
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
                            connect.static('dist'),
                            connect.static('test/regression/assets'),
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

                dest: '<%= distdir %>/index.html',
                src:  'src/index.html'
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
                'build:styles'
            ],

            themes: [
                //'concat:darkTheme',
                //'concat:lightTheme'
            ]
        },

        sass: {
            build: {
                options: {
                    sourcemap: 'none',
                    style:     'expanded'
                },

                files: {
                    '<%= distdir %>/styles/<%= pkg.name %>-light-theme.css': 'src/scss/light-theme.scss',
                    '<%= distdir %>/styles/<%= pkg.name %>-dark-theme.css':  'src/scss/dark-theme.scss'
                }
            },

            min: {
                options: {
                    sourcemap: 'none',
                    style:     'compressed'
                },

                files: {
                    '<%= distdir %>/styles/<%= pkg.name %>-light-theme.css': 'src/scss/light-theme.scss',
                    '<%= distdir %>/styles/<%= pkg.name %>-dark-theme.css':  'src/scss/dark-theme.scss'
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
                    '<%= distdir %>/styles/<%= pkg.name %>-light-theme.css': '<%= distdir %>/styles/<%= pkg.name %>-light-theme.css',
                    '<%= distdir %>/styles/<%= pkg.name %>-dark-theme.css':  '<%= distdir %>/styles/<%= pkg.name %>-dark-theme.css'
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
