var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var reload = require('gulp-reload');
var uglify = require('gulp-uglify');

/* Compiling LESS => CSS */
gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

/* Compressing javascript code */
gulp.task('jsCompressing', function() {
    return gulp.src('*.js')
        .pipe(uglify())
        .pipe(gulp.dest('min.*js'));
});

gulp.task('watch', function() {
    /* Watch all the .less files, then run the less task */
    gulp.watch('less/*.less', ['less']);
});

/* Default will run the 'entry' watch task */
gulp.task('default', ['watch']);