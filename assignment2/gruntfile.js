module.exports = function(grunt){


  //grunt.loadNpmTasks('grunt-simple-mocha');

  //grunt.registerTask('default', 'simplemocha');

  /*grunt.initConfig({
    simplemocha: {
      options: {
        globals:['describe', 'it'],
        reporter:'tap'

      },

      src: ['.//test.js']
    }

  });*/

  grunt.initConfig({
    jshint: {
      src: ['test/*.js','gruntfile.js','calc.js'],
      options: {
        globals: {
          describe:true,
          it:true
        },
        node:true,
        mocha:true
      }
    },
    simplemocha:{
      src: ['test/*.js']
    },
    watch:{
      scripts: {
        files: ['test/*.js','gruntfile.js','calc.js'],
        tasks: ['jshint','simplemocha'],
        options: {
          spawn:false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint','test']);

  grunt.registerTask('test', 'simplemocha');

  //grunt.registerTask('watch', 'watch');

};
