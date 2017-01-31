import gulp from 'gulp'
import packageFiles from 'package-files'
import minifyCss from 'gulp-clean-css'
import concat from 'gulp-concat'

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  const devDependencies = ['mn-gh-page']
  const dependencies = packageFiles(devDependencies)
    .filter(dep => dep.endsWith('.css'))
    .filter(dep => !dep.includes('open-color.css'))

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.css'))
    .pipe(minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./docs'))
}
