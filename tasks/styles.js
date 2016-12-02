import gulp from 'gulp'
import sass from 'gulp-sass'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import inject from 'gulp-inject'
import bowerFiles from 'bower-files'
import path from 'path'
import plumber from 'gulp-plumber'
import gutil from 'gulp-util'
import {browserSync, styles} from './config.js'

let dependencies = bowerFiles()
  .relative(path.join(__dirname, '..'))
  .ext('scss')
  .files

let outputStyle = 'compressed'

let injectTransform = {
  starttag: '/* inject:imports */',
  endtag: '/* endinject */',
  transform: filepath => `@import '../..${filepath}';`,
}

let injectConfig = {
  read: false,
  relative: false,
}

gulp.task('styles', stylesTask)

function stylesTask() {
  gulp
    .src(styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(rename(styles.output))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(styles.dest))
    .pipe(browserSync.stream({match: '**/*.css'}))
}

function errorHandler(err) {
  let message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
