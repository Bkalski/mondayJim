var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('compile-sass', function(){
	gulp.src('./public/styles/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/styles/'))
})

gulp.task('watch', function(){
	gulp.watch('./public/styles/main.scss', ['compile-sass']);
})

gulp.task('default', ['compile-sass', 'watch'])
