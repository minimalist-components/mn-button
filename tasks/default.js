'use strict';

let gulp = require('gulp');

let tasks = [
  'styles',
  'templates',
  'browser-sync',
  'watch',
];

gulp.task('default', tasks);
