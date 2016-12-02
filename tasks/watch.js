import gulp from 'gulp'
import {
  templates,
  scripts,
  styles,
  browserSync,
} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(templates.src, [
    'templates',
    browserSync.reload,
  ])

  gulp.watch(scripts.src, [
    'lint',
    'scripts',
    browserSync.reload,
  ])

  gulp.watch(styles.watch, ['styles'])
}
