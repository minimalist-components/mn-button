'use strict';

let gulp = require('gulp');
let jade = require('gulp-jade');
let config = require('./gulp.config.js');
let plumber = require('gulp-plumber');

gulp.task('templates', templatesTask);

function templatesTask() {
  return gulp
    .src(config.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(jade())
    .pipe(gulp.dest(config.templates.dest));
}

function errorHandler(err) {
  let gutil = require('gulp-util');
  let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');

  gutil.beep();
}
