var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var serveStatic = require('serve-static');

var mountFolder = function (connect, dir) {
    return serveStatic(require('path').resolve(dir));
};

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css' : 'sass/styles/app.scss'
                }
            }
        },
        watch: {
            static: {
                files: ['public/**/*'],
                options: {
                    livereload: true
                }
            },
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            //lrSnippet,
                            mountFolder(connect, './public')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:9000'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'sass',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};