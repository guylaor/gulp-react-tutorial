      // tiny gulp file

      var gulp = require('gulp'); 
      var browserify = require('browserify');
      var source = require("vinyl-source-stream");
      var reactify = require('reactify');

      gulp.task('default', function() {
        var b = browserify();
        b.transform(reactify); // use the reactify transform
        b.add('src/main.js');

        return b.bundle()
          .pipe(source('main.js'))
          .pipe(gulp.dest('./build'));
      });

