var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcss_assets = require('postcss-assets'),
    mqpacker = require('css-mqpacker'),
    config = require('../config'),
    csso = require('postcss-csso');

var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    postcss_assets,
    // require('lost'),
    mqpacker({
        sort: sortMediaQueries
    }),
    // csso
];

gulp.task('sass', function() {
    return gulp
        .src(config.src.sass + '/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
            precision: 5
        }))
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.build.css));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});

function isMax(mq) {
    return /max-width/.test(mq);
}

function isMin(mq) {
    return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
    A = a.replace(/\D/g, '');
    B = b.replace(/\D/g, '');

    if (isMax(a) && isMax(b)) {
        return B - A;
    } else if (isMin(a) && isMin(b)) {
        return A - B;
    } else if (isMax(a) && isMin(b)) {
        return 1;
    } else if (isMin(a) && isMax(b)) {
        return -1;
    }

    return 1;
}
