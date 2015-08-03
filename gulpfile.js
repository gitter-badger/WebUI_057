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
	src = "src",
	srcJs = [
		"src/app.constant.js",
		"src/app.config.js",
		"src/app.module.js",
		"src/auth/auth.module.js",
		"src/auth/auth.controller.js",
		"src/admin/admin.module.js",
		"src/admin/admin.service.js",
		"src/admin/admin.controller.js",
		"src/user/user.module.js",
		"src/user/user.controller.js"
		/*"src/components/faculties/controller.js",
		"src/components/specialities/controller.js",
		"src/components/subjects/controller.js"*/
	],
	srcHtml = "src/index.html";

var vendorSrcJs = [
	"bower_components/angular/angular.min.js",
	"bower_components/angular-ui-router/release/angular-ui-router.min.js",
	"bower_components/angular-bootstrap/ui-bootstrap.min.js"
];

var vendorSrcCss = [
	"bower_components/bootstrap/dist/css/bootstrap.min.css"
];

var vendorFonts = [
	"bower_components/bootstrap/dist/fonts/*"
];

// Default task
gulp.task("default", ["watch"]);

// SASS task
gulp.task("sass", function() {
	gulp.src(src + "/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(cssLint())
		.pipe(cssLint.reporter())
		.pipe(concat("app.css"))
		.pipe(gulp.dest(distDev + "/styles/"))
});

// HTML task
gulp.task("html", function() {
	return eventStream.merge(
		gulp.src(src + "/**/*.html")
			.pipe(gulp.dest(distDev + "/partials")),
		gulp.src(srcHtml)
			.pipe(gulp.dest(distDev))
	);

});

// JS task
gulp.task("js", function() {
	gulp.src(srcJs)
		.pipe(concat("app.js"))
		.pipe(gulp.dest(distDev + "/js"))

});

// Vendor CSS and JavaScript
gulp.task("vendor", function() {
	return eventStream.merge(
		gulp.src(vendorSrcCss)
			.pipe(concat("vendor.min.css"))
			.pipe(gulp.dest(distDev + "/vendor")),
		gulp.src(vendorSrcJs)
			.pipe(concat("vendor.min.js"))
			.pipe(gulp.dest(distDev + "/vendor")),
		gulp.src(vendorFonts)
			.pipe(gulp.dest(distDev + "/fonts"))
	);
});

// IMG
gulp.task("img", function() {
	gulp.src(src + "/assets/images/*")
		.pipe(gulp.dest(distDev + "/images"))
});

gulp.task("fonts", function() {
	gulp.src(src + "/assets/fonts/*")
		.pipe(gulp.dest(distDev + "/fonts"))
});


// Watcher
gulp.task("watch", function() {
	gulp.watch(src + "/**/*.scss", ["sass"]);
	gulp.watch(src + "/**/*.js", ["js"]);
	gulp.watch(src + "/index.html", ["html"]);
});

// Build Developer Version
gulp.task("build", ["vendor", "sass", "html", "js", "img", "fonts"]);

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

		gulp.src(srcJs)
			.pipe(uglify())
			.pipe(concat("app.min.js"))
			.pipe(gulp.dest(dist + "/js")),

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