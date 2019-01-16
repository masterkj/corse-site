var gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const simplevars = require('postcss-simple-vars');
const nested = require('postcss-nested');
gulp.task('default',function() {
  console.log('harry , you created gulp task');
});

gulp.task('html',function() {
  console.log('somthing usefull with our html file');
});

gulp.task('style',function(){
  return gulp.src('./app/assets/styles/style.css')
  .pipe(postcss([nested, simplevars , autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function() {
  watch('./app/index.html',function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/*.css',function() {
    gulp.start('style');
  });
});
