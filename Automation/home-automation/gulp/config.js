'use strict';
var path = require('path');

var paths = {
  rootPath: path.join(__dirname, '../'),
  bowerPath: path.join(__dirname, '../bower_components')
};

var scripts = {
  jsBowerPlugins: [
    paths.bowerPath + '/jquery/dist/jquery.js',
    paths.bowerPath + '/tether/dist/js/tether.js',
    paths.bowerPath + '/bootstrap/dist/js/bootstrap.js',
    paths.bowerPath + '/angular/angular.js'
  ]
};

module.exports = {
  Path: {
    SCSS_SOURCE_DIR: './app/source/stylesheets/',
    SCSS_SOURCES: './app/source/stylesheets/**/*.scss',
    //SCSS_PLUGINS_SOURCES: './app/source/stylesheets/plugins.scss',
    SCSS_OUT_DIR: './app/dist/stylesheets/',
    JS_OUT_DIR: './app/dist/javascripts/',
    JS_TEMP_DIR: './.tmp/',
    JS_SOURCES: './app/source/javascripts/**/*.js',
    ICON_SOURCES: './app/source/icons/*.svg',
    ICON_OUT_DIR: './app/dist/fonts/font-icons',
    JS_BOWER_PLUGINS: scripts.jsBowerPlugins,
    BOWER_FOLDER: './bower_components/',
    CLOSURE_EXTERNS: [
        './bower_components/closure-compiler-src/externs/browser/**/*.js'
    ]
  }
}
