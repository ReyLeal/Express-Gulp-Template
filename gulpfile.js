var gulp = require('gulp');

// car sass

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

// sass precompiler, reloads after using browser-sync
gulp.task('sass', function () {
  return gulp.src('public/sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// default task
gulp.task('default', ['browserSync', 'sass'], function() {
  gulp.watch('public/**/*.scss', ['sass']);
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/js/**/*.js', browserSync.reload)
});
