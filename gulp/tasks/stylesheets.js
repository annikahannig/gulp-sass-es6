'use strict';

/**
 * Task: stylesheets 
 *
 * Compile stylesheets from less source.
 */

var gulp    = require('gulp');
var cssmin  = require('gulp-cssmin');
var rename  = require('gulp-rename');
var compass = require('gulp-compass');

// == Register task: stylesheets 
gulp.task('stylesheets', function(){

  var compassCfg = {
    css: 'build/css',
    sass: 'app/sass',
    image: 'app/images'
  };
  
  // Compile less files
  gulp.src('app/sass/*.scss')
    .pipe(compass(compassCfg))
    .pipe(gulp.dest('build/css/'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
  
});

