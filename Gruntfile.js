var withPHP = true;
var folder = withPHP ? "public" : ".";
var distFolder = withPHP ? "public/dist" : "/dist";

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
					folder + '/components/jquery/jquery.js',
					folder + '/js/script.js'
				],
				dest: distFolder + '/scripts.js'
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
		},
		// we compile sass files with compass when they change
		// we livereload when html/css/js is changed
		watch: {
			sass: {
				files: [folder + '/scss/*.scss'],
				tasks: ['compass:dev']
			},
			css: {
				files: ['*.css']
			},
			livereload: {
				files: [
					'*.html',
					folder + '/css/*.css',
					folder + '/js/*.js',
					folder + '/img/*.{png,jpg,jpeg}'
				],
				options: {
					livereload: true
				}
			}
		},
		compass: {
			dev: {
				options: {
					httpPath: folder,
					cssDir: folder + "/css",
					sassDir: folder + "/scss",
					imagesDir: folder + "/img",
					fontsDir: folder + "/fonts",
					outputStyle: 'expanded',
					relativeAssets: true
				}
			},
			dist: {
				options: {
					httpPath: folder,
					cssDir: distFolder,
					sassDir: folder + "/scss",
					imagesDir: distFolder + "/img",
					fontsDir: distFolder + "/fonts",
					outputStyle: 'compressed',
					relativeAssets: true
				}
			}
		},

		connect: {
			livereload: {
				options: {
					port: 9032,
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, folder)
						];
					}
				}
			}
		},

		clean: {
			dist: ['.tmp', distFolder + '/*'],
			server: '.tmp'
		}
	};
	gruntConfig.uglify.dist.files[distFolder + '/scripts.min.js'] =  [distFolder + '/scripts.js'];
	gruntConfig.cssmin.dist.files[distFolder + '/styles.min.css'] =  [distFolder + '/style.css'];

	grunt.initConfig(gruntConfig);
	grunt.registerTask('server', [
		'clean:server',
		'connect:livereload',
		'watch'
	]);
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
