module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      src: ['test/*.js', 'gruntfile.js', 'bitmap_header_reader.js'],
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
        files: ['test/*.js', 'gruntfile.js', 'bitmap_header_reader.js'],
        tasks: ['jshint', 'simplemocha'],
        options: {
          spawn: false,
        },
      },
    },
    jscs: {
      src: ['test/*.js', 'gruntfile.js', 'bitmap_header_reader.js'],
      options: {
        config: '.jscsrc',
      },
    },
  });

  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', ['jshint', 'test', 'jscs']);

  grunt.registerTask('test', 'simplemocha');

};
