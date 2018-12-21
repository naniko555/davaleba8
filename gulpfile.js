'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('style/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('watch', function () {
  gulp.watch('style/scss/style.scss', gulp.parallel('sass'));
}); 