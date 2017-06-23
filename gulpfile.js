var gulp = require('gulp');
// requires gulp-sass plugin
var sass = require('gulp-sass');
// var browserSync = require('browser-sync');

gulp.task('hello', function() {
  console.log('hello you are doing great');
});

gulp.task('sass', function(){
	return gulp.src('css/*.scss')
		.pipe(sass()) // using gulp-sass
		.pipe(gulp.dest('css'))
});

// gulp.task('browserSync', function(){
// 	browserSync.init({
// 		server: {
// 			baseDir: '/'
// 		},
// 	})
// });

gulp.task('watch', ['sass'], function(){
	gulp.watch('css/*.scss', ['sass']);
});