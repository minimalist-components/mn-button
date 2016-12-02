import gulp from 'gulp'
import jade from 'gulp-jade'
import plumber from 'gulp-plumber'
import gutil from 'gulp-util'
import {templates} from './config.js'

gulp.task('templates', templatesTask)

function templatesTask() {
  return gulp
    .src(templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(jade())
    .pipe(gulp.dest(templates.dest))
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
