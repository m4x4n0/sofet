var gulp = require('gulp'),
    browserSync = require('./browsersync'),
    config = require('../config');

gulp.task('watch:front', ['sass', 'watch:copy'], function (){
    gulp.watch(config.src.sass + '/**/*.{scss,sass}', ['sass']);
    // gulp.watch(config.src.templates + '/**/*.html', ['nunjucks:watch']);
    gulp.watch(config.src.images + '/**/*.+(png|jpg|gif|svg)', ['images']);
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch(config.src.sass + '/**/*.{scss,sass}', ['sass']);
    gulp.watch(config.src.root + '/*.html', browserSync.reload);
    gulp.watch(config.src.templates + '/**/*.html', ['nunjucks:watch']);
    gulp.watch(config.src.js + '/**/*.js', browserSync.reload);
    gulp.watch(config.src.images + '/**/*.+(png|jpg|gif|svg)', ['images']);
    gulp.watch(config.build.images + '/**/*', browserSync.reload);
    gulp.watch(config.build.root + '/**/*', browserSync.reload);
    // Other watchers
})
