var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('../config');

gulp.task('browserSync', function() {
    browserSync.init({
      open: false,
      server: {
        baseDir: config.build.root,
        index: config.index_page
      },
    })
})

module.exports = browserSync;
