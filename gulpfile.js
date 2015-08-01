"use strict";

// Import Gulp and plugins
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cssLint = require("gulp-csslint"),
	minifyCSS = require("gulp-minify-css"),
	jsHint = require("gulp-jshint"),
	uglify = require("gulp-uglify"),
	minifyHTML = require("gulp-minify-html"),
	rename = require("gulp-rename"),
	concat = require("gulp-concat"),
	eventStream = require("event-stream");

var dist = "dist",
	distDev = "dist_dev",
	src = "src";

var vendorSrcJs = [
	"bower_components/angular/angular.min.js",
	"bower_components/angular-ui-router/release/angular-ui-router.min.js",
	"bower_components/angular-bootstrap/ui-bootstrap.min.js"
];

var vendorSrcCss = [
	"bower_components/bootstrap/dist/css/bootstrap.css",
	"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"
];

// Default task
gulp.task("default", ["watch"]);

// SASS task
gulp.task("sass", function() {
	gulp.src(src + "/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(cssLint())
		.pipe(cssLint.reporter())
		.pipe(gulp.dest(distDev + "/app/"))
});

// HTML task
gulp.task("html", function() {
	gulp.src(src + "/index.html")
		.pipe(gulp.dest(distDev))

});
// HTML task
gulp.task("moveHtml", function() {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest(distDev));

});

// JS task
gulp.task("js", function() {
	gulp.src(src + "/**/*.js")
		.pipe(concat("app.js"))
		.pipe(gulp.dest(distDev + "/app"))

});

// Vendor CSS and JavaScript
gulp.task("vendor", function() {
	return eventStream.merge(
		gulp.src(vendorSrcCss)
			.pipe(concat("vendor.min.css"))
			.pipe(gulp.dest(distDev + "/vendor")),
		gulp.src(vendorSrcJs)
			.pipe(concat("vendor.min.js"))
			.pipe(gulp.dest(distDev + "/vendor"))
	);
});

// Watcher
gulp.task("watch", function() {
	gulp.watch(src + "/**/*.scss", ["sass"]);
	gulp.watch(src + "/**/*.js", ["js"]);
	gulp.watch(src + "/index.html", ["html"]);
});

// Build Developer Version
gulp.task("build", ['moveHtml', "vendor", "sass", "html", "js"]);

// Build Production Version
gulp.task("build_production", function() {
	return eventStream.merge(
		gulp.src(src + "/*.js")
			.pipe(concat("app.js"))
			.pipe(rename({
				suffix: ".min"
			}))
			.pipe(uglify())
			.pipe(gulp.dest(dist + "/js")),

		gulp.src(vendorSrcCss)
			.pipe(minifyCSS())
			.pipe(concat("vendor.min.css"))
			.pipe(gulp.dest(dist + "/vendor")),

		gulp.src(vendorSrcJs)
			.pipe(uglify())
			.pipe(concat("vendor.min.js"))
			.pipe(gulp.dest(dist + "/vendor")),

		gulp.src(src + "/**/*.scss")
			.pipe(sass().on("error", sass.logError))
			.pipe(rename({
				suffix: ".min"
			}))
			.pipe(minifyCSS())
			.pipe(gulp.dest(dist + "/styles/")),

		gulp.src(src + "/index.html")
			.pipe(minifyHTML())
			.pipe(gulp.dest(dist)),

		gulp.src(vendorSrcCss)
			.pipe(concat("vendor.min.css"))
			.pipe(gulp.dest(dist + "/vendor")),

		gulp.src(vendorSrcJs)
			.pipe(concat("vendor.min.js"))
			.pipe(uglify())
			.pipe(gulp.dest(dist + "/vendor"))
	);
});