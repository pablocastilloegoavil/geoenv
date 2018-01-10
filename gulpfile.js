var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();
  
gulp.task('sass', function(){
  gulp.src('./sass/*.sass')
  .pipe(sass({outputStyle:'expanded', sourceComments:false}))
  .pipe(autoprefixer({versions:['last 2 browser']}))
  .pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
  });
  
gulp.task('pug', ()=>{
  gulp.src('./pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
});


gulp.task('default', ()=>{
  gulp.watch('./sass/**/*.sass',['sass']);
  gulp.watch('./pug/**/*.pug',['pug']);
  browserSync.init({
      server:'./'
    });
	gulp.watch("*.html").on('change', browserSync.reload);
	
  })