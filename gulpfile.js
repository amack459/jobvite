const browserSync = require('browser-sync');
const gulp = require('gulp');
const reload = browserSync.reload;
const sass = require('gulp-sass');


gulp.task('sass', () => {
  gulp.src('stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('default',['sass'], ()=> {
  console.log("CSS COMPILED");
});
