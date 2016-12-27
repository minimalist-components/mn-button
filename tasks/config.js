import browserSync from 'browser-sync'

module.exports = {
  templates: {
    src: './sources/templates/index.jade',
    dest: './docs/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'mn-button.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'mn-button.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './docs',
        './dist',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
}
