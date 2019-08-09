'use strict';
var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync({
    notify: false,
    port: 3010,
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch([config.Path.SCSS_SOURCES], ['sass'/*, 'plugins_css'*/]);
  gulp.watch([config.Path.JS_SOURCES, './bower.json'], ['build_js']);
});
