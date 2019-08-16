var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src(['app/scss/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false,
  });
});

gulp.task('default', ['watch']);

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch(['app/scss/**/*.scss'], ['sass']);
});
