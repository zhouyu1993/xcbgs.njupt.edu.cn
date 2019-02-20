// 引入 gulp
var gulp = require('gulp')

// 引入组件
var plumber = require('gulp-plumber')
var sourceMaps = require('gulp-sourcemaps')

var concat = require('gulp-concat')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

// var uglify = require('gulp-uglify')
var miniCss = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')
var htmlmin = require('gulp-htmlmin')

var browserSync = require('browser-sync').create()
var reload = browserSync.reload

gulp.task('dev', function () {
  // 合并js
  gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'))
  // 编译Sass
  gulp.src('./src/css/*.scss')
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./dist/css'))
  // images
  gulp.src('./src/images/**')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/images'))
  // html
  gulp.src('./src/*.htm')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'))
})

gulp.task('dev-server', function () {
  console.log('open: http://localhost:8080/main.htm')
  browserSync.init({
    port: 9876,
    open: true,
    server: {
      baseDir: 'dist'
    }
  })
  gulp.watch('./src/js/*.js', function (e){
    gulp.src(e.path)
      .pipe(plumber())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({ stream: true }))
    console.log('js', e.type, '-' , e.path)
  })
  gulp.watch('./src/css/*.scss', function (e){
    gulp.src(e.path)
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(sass())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('./dist/css'))
      .pipe(reload({ stream: true }))
    console.log('css', e.type, '-' , e.path)
  })
  gulp.watch('./src/images/**', function (e){
    gulp.src(e.path)
      .pipe(plumber())
      .pipe(gulp.dest('./dist/images'))
      .pipe(reload({ stream: true }))
    console.log('images', e.type, '-' , e.path)
  })
  gulp.watch('./src/*.htm', function (e){
    gulp.src(e.path)
      .pipe(plumber())
      .pipe(gulp.dest('./dist'))
      .pipe(reload({ stream: true }))
    console.log('htm', e.type, '-' , e.path)
  })
})

gulp.task('build', function () {
  gulp.src(['./src/js/*.js'])
    .pipe(plumber())
    .pipe(concat('app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
  gulp.src('./src/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(miniCss())
    .pipe(gulp.dest('./build/css'))
  gulp.src('./src/images/**')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
  gulp.src('src/*.htm')
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'))
})

// 默认任务
gulp.task('default', ['dev', 'dev-server'])
