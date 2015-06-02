module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      src: ['test/*.js', 'gruntfile.js', 'server.js', './spec/**/*.js'],
      options: {
        globals: {
          describe: true,
          it: true,
        },
        node: true,
        mocha: true,
      },
    },
    simplemocha: {
      src: ['test/*.js'],
    },
    watch: {
      scripts: {
        files: ['./src/scripts/**/*.js', '!./src/scripts/app-bundle.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
    jscs: {
      src: ['test/*.js', 'gruntfile.js', 'server.js'],
      options: {
        config: '.jscsrc',
      },
    },
    browserify: {
      dist: {
        files: {
          'build/scripts/app-bundle.js': ['./src/scripts/*.js' ]
        },
      },
    },
    bower: {
    install: {
       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
    },
  },
  });

  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-jscs');

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['jshint', 'test', 'jscs']);

  grunt.registerTask('test', 'simplemocha');

  grunt.loadNpmTasks('grunt-bower-task');

};
