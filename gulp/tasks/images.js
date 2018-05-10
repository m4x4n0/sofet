var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    config = require('../config');

gulp.task('images', function(){
    return gulp.src(config.src.images + '/**/*.+(png|jpg|gif|svg|ico)')
    .pipe(imagemin())
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest(config.build.images))
});
