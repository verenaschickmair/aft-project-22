module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['sass'],
            },
        },
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'public/css/main.css': 'scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['node_modules/bootstrap/js/dist/carousel.js', 'node_modules/bootstrap/js/dist/collapse.js'],
                dest: 'public/js/built.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/built.min.js': ['public/js/built.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/css/main.min.css': 'public/css/main.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/index.min.html': 'index.html',
                }
            },
        },
        compress: {
            main: {
                options: {
                    archive: 'public.zip'
                },
                files: [
                    {src: ['public/**'], dest: '/'},

                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'htmlmin', 'compress']);
}