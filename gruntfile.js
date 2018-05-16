var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var serveStatic = require('serve-static');
var fs = require('fs')
const path = require('path')

var mountFolder = function (connect, dir) {
    return serveStatic(require('path').resolve(dir));
};

const getPartials = () => fs
        .readdirSync('./components')
        .filter(filename => filename.split('.').pop() === 'hbs')
        .map (filename => filename.split('.')[0])
        .reduce( (acc, filename) => {
            acc[filename] = path.join('./components', filename + '.hbs')
            return acc;
        }, {})

const getFiles = () => fs
        .readdirSync('./views')
        .filter(filename => filename.split('.').pop() === 'hbs')
        .map (filename => filename.split('.')[0])
        .reduce( (acc, filename) => {
            acc[path.join('./static', filename + '.html')] = path.join('./views', filename + '.hbs')
            return acc;
        }, {})


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
        hbs: {
            public: {
                options: {
                    layout: "./views/layouts/index.hbs",
                    partials: getPartials(),
                },
                files: getFiles ()
            }
        },
        watch: {
            static: {
                files: ['public/**/*'],
                options: {
                    livereload: true
                }
            },
            hbs: {
                files: ['views/**/*.hbs'],
                tasks: ['hbs'],
                options: {
                    livereload: true
                }
            },
            source: {
                files: ['sass/**/**/*.scss'],
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
                            mountFolder(connect, './public'),
                            mountFolder(connect, './static')
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
            'hbs',
            'sass',
            'connect',
            'open',
            'watch'
        ]);
    });
};