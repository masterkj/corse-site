var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
  webpack(require('../../webpack.config.js'), function(err, state) {
    if(err)
      consloe.log(err.toString());

    console.log(state.toString());

    callback();
  });
});
