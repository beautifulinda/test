var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var series = require('stream-series');

gulp.task('default', function() {

    var sources = gulp.src(['./js/**/*.js', './css/**/*.css', '!./js/**/*.module.js','!js/**/*.min.js'], { read: false });

    var vendorStream = gulp.src(['./js/**/*.module.js'], { read: false });

    var appStream = gulp.src(['./src/app/*.js'], { read: false });

    gulp.src('./index.html')
        .pipe(plugins.wiredep())
        .pipe(plugins.inject(series(vendorStream,sources)))
        .pipe(gulp.dest('.'));
});
