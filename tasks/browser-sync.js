import gulp from 'gulp'
import gzip from 'compression'
import {browserSync, browserSyncOptions as options} from './config.js'

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  options.middleware = [
    gzip(),
  ]

  browserSync.init(options)
}
