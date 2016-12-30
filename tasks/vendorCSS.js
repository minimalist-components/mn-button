import gulp from 'gulp'
import bowerFiles from 'bower-files'
// import minifyCss from 'gulp-minify-css'
import concat from 'gulp-concat'

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  let dependencies = bowerFiles()
    .ext('css')
    .files

  const devDependencies = bowerFiles()
    .ext('css')
    .dev()
    .files

  dependencies = dependencies.concat(devDependencies)

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.css'))
    // .pipe(minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./docs'))
}
