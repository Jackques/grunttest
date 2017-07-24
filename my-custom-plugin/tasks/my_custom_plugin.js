/*
 * grunt-my-custom-plugin
 * https://github.com/IEUser/my-custom-plugin
 *
 * Copyright (c) 2017 
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  
  grunt.log.writeln('test');
  
  grunt.file.defaultEncoding = 'utf8';

  grunt.registerMultiTask('my_custom_plugin', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    
	grunt.log.writeln('test2');
	
	 
  });

};
