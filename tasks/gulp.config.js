'use strict';

module.exports = {
  templates: {
    src: './sources/templates/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
  },
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './public',
        './dist',
      ],
    },
    notify: false,
    middleware: [require('connect-history-api-fallback')()],
    reloadDelay: 100,
    open: false,
  },
};
