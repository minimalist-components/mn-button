'use strict';

let gulp = require('gulp');
let gulpConfig = require('./gulp.config.js');

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(gulpConfig.templates.src, [
    'templates',
    gulpConfig.browserSync.reload,
  ]);

  gulp.watch(gulpConfig.styles.watch, ['styles']);
}
