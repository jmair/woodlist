// gulpfile.js 
// Require the needed packages 

var gulp = require('gulp'),
		haml = require('gulp-haml'),
		watch = require('gulp-watch'),
		sass = require('gulp-sass');

gulp.task('haml', function() {
	gulp.src('./haml/**/*.haml')
		.pipe(haml())
		.pipe(gulp.dest('./html'));
});

gulp.task('sass', function() {
	gulp.src('./sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
	watch('./sass/**/*.sass', function() {
		gulp.start('sass');
	});
	watch('./haml/**/*.haml', function() {
		gulp.start('haml');
	});
});

gulp.task('default', ['watch']);
 
