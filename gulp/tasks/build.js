// Task for build a project
var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
    runSequence('clean:dist', 'cache:clear',
      ['sass', 'useref', 'images', 'fonts', 'nunjucks'],
      callback
    )
})
