module.exports = function ( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        // File Watching
        watch: {
            js: {
                files: [ './src/js/**/*.js' ],
                tasks: [ 'concat:js' ]
            },
            css: {
                files: [ './src/css/**/*.css' ],
                tasks: [ 'concat:css' ]
            },
            grunt: {
                files: [ 'Gruntfile.js' ]
            }
        },
        // JavaScript
        concat: {
            js: {
                options : {
                    sourceMap: true,
                    separator: ';\n'
                },
                src: [
                    './src/js/app.js',
                    './vendor/reconnectingWebsocket/reconnecting-websocket.js',
                    './vendor/mustache.js/mustache.js',
                    './src/js/emitter.js',
                    './src/js/socket.js',
                    './src/js/pages/*.js',
                    './src/js/components/*.js',
                ],
                dest: './build/app.js'
            },
            css: {
                options : {
                    sourceMap: true
                },
                src: [
                    './vendor/skeleton/css/normalize.css',
                    './vendor/skeleton/css/skeleton.css',
                    './src/css/**/*.css'
                ],
                dest: './build/app.css'
            }
        },
        copy: {
            fonts: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        './src/fonts/**/*.woff'
                    ],
                    dest: './build/fonts/'
                }]
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );

    grunt.registerTask( 'default', [ 'concat', 'copy', 'watch' ] );
    grunt.registerTask( 'printenv', function () {
        console.log( process.env );
    });
}