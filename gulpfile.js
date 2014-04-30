var gulp = require('gulp')
	, sass = require('gulp-sass')
	, jade = require('gulp-jade')
	, plumber = require('gulp-plumber');

gulp.task('css', function() {
	gulp.src("frontend/application.scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest("public/"));
});
gulp.task('jade', function() {
	gulp.src("frontend/index.jade")
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest("public/"));
});

gulp.task('default', ['css', 'jade', 'watch']);

gulp.task('watch', function() {
	gulp.watch('frontend/**.scss', ['css'])
	gulp.watch('frontend/**.jade', ['jade'])
});