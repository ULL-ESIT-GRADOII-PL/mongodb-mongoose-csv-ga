
var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		ghPages = require('gulp-gh-pages'),
		karma   = require('gulp-karma')
		del = require('del'),
		minifyHTML = require('gulp-minify-html'),
		minifyCSS  = require('gulp-minify-css');


//Tarea minify para meter las pruebas en la rama gh-pages
gulp.task('minify',function(){
			gulp.src('tests/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('minified/'))
			
			gulp.src('test/*.css')
			.pipe(minifyCSS({keepBreaks:true}))
			.pipe(gulp.dest('minified/'))

			gulp.src('tests/index.html')
			.pipe(minifyHTML())
			.pipe(gulp.dest('minified/'))

		});

gulp.task('clean', function(cb){
	del(['minified/*'],cb);
});


gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('deploy', function() {
     return gulp.src('./minified/**/*')
       .pipe(ghPages());
   });

gulp.task('default', ['minify','clean']);
