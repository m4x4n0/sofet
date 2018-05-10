// Clean and delete task
var gulp = require('gulp'),
    del = require('del'),
    cache = require('gulp-cache'),
    config = require('../config');

gulp.task('clean:dist', function() {
    return del.sync(config.build.root);
})

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
})
