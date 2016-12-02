import gulp from 'gulp'

gulp.task('default', [
  'styles',
  'lint',
  'scripts',
  'templates',
  'browser-sync',
  'watch',
])
