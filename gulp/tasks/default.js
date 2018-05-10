// Default task
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    config = require('../config');

gulp.task('default', function (callback) {
    runSequence(['build', 'browserSync', 'watch'], 
      callback
    )
})

// gulp.task('default', function (callback) {
//     runSequence(['build', 'watch:front'], 
//       callback
//     )
// })