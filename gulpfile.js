"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); //dev server
var open = require('gulp-open'); //open browser 
var browserify = require('browserify'); //bundler
var reactify = require('reactify'); //trasnforms JSX to JS 
var source = require('vinyl-source-stream'); //use conventional text streams with Gulp
var concat = require('gulp-concat'); //concatenates files
var lint = require('gulp-eslint'); //lint js and jsx 


var config = {
	port: 5000, 
	devBaseUrl: 'http://localhost', 
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',  
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css', 
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.css'
		], 
		dist: './dist', 
		mainJs: './src/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'], 
		port: config.port, 
		base: config.devBaseUrl, 
		livereload: true
	});
});

// connect is a dependency, so open runs connect first
gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({
			uri: config.devBaseUrl + ':' + config.port + '/'
		})); 
}); 

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload()); 

	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
}); 

gulp.task('js', function() {
	browserify(config.paths.mainJs)// input
	.transform(reactify) //like a preloader for jsx 
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js')) //output name 
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(connect.reload()); 
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css')); 
});

gulp.task('images', function() {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload()); 

})

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format()); 
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']); 
	gulp.watch(config.paths.js, ['js', 'lint']); 
});

//these tasks will run on "gulp"
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']); 