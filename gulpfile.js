var gulp = require('gulp'),
 watch = require('gulp-watch'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 simplevars = require('postcss-simple-vars'),
 nested = require('postcss-nested'),
 cssImport = require('postcss-import');
gulp.task('default',function() {
  console.log('harry , you created gulp task');
});

gulp.task('html',function() {
  console.log('somthing usefull with our html file');
});

gulp.task('style',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, nested, simplevars , autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function() {
  watch('./app/index.html',function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css',function() {
    gulp.start('style');
  });
});
