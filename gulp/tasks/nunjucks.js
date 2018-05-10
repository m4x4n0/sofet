var gulp = require('gulp'),
    nunjucksRender = require('gulp-nunjucks-render'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    changed = require('gulp-changed'),
    prettify = require('gulp-prettify'),
    frontMatter = require('gulp-front-matter'),
    browserSync = require('./browsersync'),
    config = require('../config');

function renderHtml(onlyChanged) {
    nunjucksRender.nunjucks.configure({
        watch: false,
        trimBlocks: true,
        lstripBlocks: false
    });

    return gulp
        .src([config.src.templates + '/**/[^_]*.html'])
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))
        .pipe(gulpif(onlyChanged, changed(config.build.html)))
        .pipe(frontMatter({ property: 'data' }))
        .pipe(nunjucksRender({
            PRODUCTION: config.production,
            path: [config.src.templates]
        }))
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: false,
            // unformatted: [],
            end_with_newline: true
        }))
        .pipe(gulp.dest(config.build.html))
}

gulp.task('nunjucks', function() {
    return renderHtml();
});

gulp.task('nunjucks:changed', function() {
    return renderHtml(true);
});

gulp.task('nunjucks:watch', function() {
    // gulp.watch([
    //     config.src.templates + '/**/[^_]*.html'
    // ], ['nunjucks:changed']);

    // gulp.watch([
    //     config.src.templates + '/**/_*.html'
    // ], ['nunjucks']);

    gulp.watch([
        config.src.templates + '/**/*.html'
    ], ['nunjucks']);
});
