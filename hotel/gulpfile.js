var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 3 versions'] });
 

gulp.task('browserSync', function(done) { 
  browserSync.init({
    server: {
      baseDir: './src'
    },
    browser: 'chrome',
    notify: false
  });
  
  
  browserSync.watch('./src/**/*.html').on('change', browserSync.reload);
  browserSync.watch('./src/less/**/*.less',gulp.parallel('less')).on('change', browserSync.reload);;
  browserSync.watch('./src/js/**/*.js').on('change', browserSync.reload);
  done()
});	

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
  	.pipe(sourcemaps.init())
  	.pipe(less({errLogToConsole: true}))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
     }))
    .pipe(less({
    plugins: [autoprefix]
  	}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('default',gulp.parallel('browserSync'));