// This task needs to copy some files into the front directory

var gulp = require('gulp'),
    browserSync = require('./browsersync'),
    config = require('../config');

gulp.task('copy:html', function (){
    return gulp.src(config.build.html + '/index.html')
      .pipe(gulp.dest(config.front.html))
})

gulp.task('copy:static', function (){
    return gulp.src(config.build.static + '/**/*')
      .pipe(gulp.dest(config.front.static))
})

gulp.task('watch:copy', ['copy:static'], function (){
    // gulp.watch(config.build.templates + '/**/*.html', ['copy:html']);
    gulp.watch(config.build.static + '/**/*', ['copy:static']);
})
