var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
 
gulp.task('compress', ['scripts'], function() {
    return gulp.src('js/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', function() {
  return gulp.src('css/*.css')
  .pipe(minify())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('html', ['scripts'], function() {
	var opts = {
	conditionals: true,
	spare:true
  	};
  return gulp.src('*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('dist/html'));
});

gulp.task('scripts', ['default'], function() {
  return gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});