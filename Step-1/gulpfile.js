// tiny gulp file

var gulp = require('gulp'); 

gulp.task('default', function() {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('build'));
});
