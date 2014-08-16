module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowercopy: {
			options: {
				// Bower components folder will be removed afterwards
				clean: true
			},
			libs: {
				options: {
					//destPrefix: 'libs'
				},
				files: {
					// Note: when copying folders, the destination (key) will be used as the location for the folder
					'ReduxCore': 'redux-framework/ReduxCore'
				}
			},
		}
		
	});

	// load plugins
	grunt.loadNpmTasks('grunt-bowercopy');

	// register tasks
	grunt.registerTask('default', [ 'bowercopy' ]);
};
