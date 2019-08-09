'use strict'
var gulp = require('gulp');
var runSequence = require('run-sequence');
var filenames = require('gulp-filenames');
var concat = require('gulp-concat');
var closureCompiler = require('gulp-closure-compiler');
var uglify = require('gulp-uglify');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


var config = require('../config');

gulp.task('compile_js', function() {
  var closureOpts = {
    compilerPath: './bower_components/closure-compiler/closure-compiler-v20160911.jar',
    compilerFlags: {
        angular_pass: true,
        closure_entry_point: 'automationApp',
        compilation_level: 'SIMPLE_OPTIMIZATIONS',
        generate_exports: true,
        manage_closure_dependencies: true,
        only_closure_dependencies: true,
        output_wrapper: '(function(){%output%})();',
        js: [
            './bower_components/closure-library/closure/**.js',
            './bower_components/closure-library/third_party/**.js',
            '!**_test.js'
        ]
    },
    maxBuffer: 800000, // Set maxBuffer to .8GB
    fileName: 'build.min.js'
  };

  var externs = [];
  externs.concat(filenames.get('closure_externs'));

  closureOpts.compilerFlags.externs = externs;

  return gulp.src(config.Path.JS_SOURCES)
    .pipe(closureCompiler(closureOpts))
    .pipe(gulp.dest(config.Path.JS_TEMP_DIR))
});

gulp.task('minify_js', function() {
  return gulp.src([
    config.Path.JS_TEMP_DIR + 'build.min.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.Path.JS_OUT_DIR));
});

gulp.task('minify_plugins_js', function () {
  gulp.src(config.Path.JS_BOWER_PLUGINS)
    .pipe(concat('plugins.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.Path.JS_OUT_DIR));
});

gulp.task('build_js', function(callback) {
  return runSequence(
    'get_closure_externs_paths',
    'compile_js',
    'minify_plugins_js',
    'minify_js',
    callback);
});

gulp.task('get_closure_externs_paths', function() {
    return gulp.src(config.Path.CLOSURE_EXTERNS)
        .pipe(filenames('closure_externs'))
});

gulp.task('icon_font', function(){
  var fontName = 'fi';
  var runTimestamp = Math.round(Date.now()/1000);

  gulp.src(config.Path.ICON_SOURCES)
    .pipe(iconfontCss({
      fontName: fontName,
      path: './app/source/stylesheets/_icons-template.scss',
      targetPath: '../../../source/stylesheets/_icons.scss', // this path means: fi/fonts/dist/source/source/stylesheets/_icons.scss
      fontPath: '../fonts/font-icons/',
      cssClass: fontName
    }))
    .pipe(iconfont({
      fontName: fontName, // required // fi = font-icon
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff', 'woff2'], // add 'svg' if needed
      timestamp: runTimestamp // recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest(config.Path.ICON_OUT_DIR));
});