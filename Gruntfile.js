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
                    'public/main.css': 'scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['node_modules/bootstrap/js/carousel.js', 'node_modules/bootstrap/js/collapse.js'],
                dest: 'public/built.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass', 'concat']);
}