import gulp from 'gulp'
import historyApi from 'connect-history-api-fallback'
import gzip from 'compression'
import {browserSync, browserSyncOptions as options} from './config.js'

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  options.middleware = [
    historyApi(),
    gzip(),
  ]

  browserSync.init(options)
}
