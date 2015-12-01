var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles',function(){
  gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
})
