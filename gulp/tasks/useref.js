// 
var gulp = require('gulp'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    config = require('../config');

gulp.task('useref', function(){
    return gulp.src(config.src.root + '/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest(config.build.root))
});
