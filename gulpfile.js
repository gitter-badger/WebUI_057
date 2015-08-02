"use strict";

// Import Gulp and plugins
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cssLint = require("gulp-csslint"),
	jsHint = require("gulp-jshint"),
	uglify = require("gulp-uglify"),
	minifyHTML = require("gulp-minify-html"),
	rename = require("gulp-rename"),
	concat = require("gulp-concat"),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	minifyCss = require('gulp-minify-css'),
	lazypipe = require('lazypipe'),
	wiredep = require('wiredep').stream;

var dist = "dist",
	src = "src";

gulp.task('bower', function () {
	gulp.src('./src/index.html')
		.pipe(wiredep({
			directory: 'bower_components'
		}))
		.pipe(gulp.dest('./src'));
});

gulp.task('watch-bower', function () {
	gulp.watch('bower.json', ['bower'])
});

var jsTask = lazypipe()
	//.pipe(jsHint)
	//.pipe(jsHint.reporter)
	.pipe(uglify);

var cssTask = lazypipe()
	//.pipe(cssLint)
	//.pipe(cssLint.reporter)
	.pipe(minifyCss);

// Default task
gulp.task("default", ["watch"]);

// SASS task
gulp.task("sass", function() {
	gulp.src(src + "/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(cssLint())
		.pipe(cssLint.reporter())
		.pipe(gulp.dest(function(file) {
			return file.base;
		}));
});

// Watcher
gulp.task("watch", function() {
	gulp.watch(src + "/**/*.scss", ["sass"]);
	gulp.watch(src + "bower.json", ["bower"]);
});


// Build
gulp.task('build', function () {
	var assets = useref.assets();
	return gulp.src('src/index.html')
		.pipe(assets)
		.pipe(gulpif('*.js', jsTask()))
		.pipe(gulpif('*.css', cssTask()))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});