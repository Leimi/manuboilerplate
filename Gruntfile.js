module.exports = function(grunt) {
	var folder = "public";
	// var folder = ".";

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
					folder + '/components/jquery/jquery.js',
					folder + '/js/script.js'
				],
				dest: folder + '/dist/scripts.js'
			}
		},
		uglify: {
			dist: {
				files: {
				}
			}
		},
		cssmin: {
			dist: {
				files: {
				}
			}
		}
	};
	gruntConfig.uglify.dist.files[folder + '/dist/scripts.min.js'] =  [folder + '/dist/scripts.js'];
	gruntConfig.cssmin.dist.files[folder + '/dist/styles.min.css'] =  [folder + '/dist/style.css'];

	grunt.initConfig(gruntConfig);
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
