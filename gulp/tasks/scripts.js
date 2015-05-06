'use strict';

/**
 * Task: scripts
 *
 * Compile javascript source.
 */

var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

// == Register task: scripts
gulp.task('scripts', ['lint'], function(){
  
  browserify({
    entries: './app/js/app.js',
    insertGlobals: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('build/js'));

});

