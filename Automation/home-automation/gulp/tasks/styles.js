'use strict'
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function() {
  return gulp.src(config.Path.SCSS_SOURCES)
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.Path.SCSS_OUT_DIR));
});

/*gulp.task('plugins_css', function() {
  return gulp.src(config.Path.SCSS_PLUGINS_SOURCES)
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.Path.SCSS_OUT_DIR));
});*/
