var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
htmlmin = require('gulp-htmlmin'),
rev = require('gulp-rev'),
cleanCss = require('gulp-clean-css'),
uglify = require('gulp-uglify-es').default,
browserSync = require('browser-sync').create();

gulp.task('deleteDistFolder', ['icons'], function() {
  return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
})

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true})
		]))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
    gulp.start('usemin');
});


gulp.task('usemin', ['style', 'scripts'], function() {

   return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [ rev()],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server:{
      baseDir: "docs"
    }
})
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
