/* jshint node:true */
module.exports = function(grunt) {
    'use strict';
	
	grunt.loadNpmTasks('grunt-my-custom-plugin');

    //require('time-grunt')(grunt);
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig(
        {
            pkg : grunt.file.readJSON('package.json'),
			'my_custom_plugin': {
			  all: []
			}

        }
    );

    // Default task(s).
    grunt.registerTask('default', ['my_custom_plugin']); //my_custom_plugin
};
