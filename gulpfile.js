const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const image        =  require('gulp-image');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['app/assets/css/scss/**/*.scss'])

    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.stream());
});

//minify__image

// gulp.task('image', function () {
//     gulp.src('app/assets/img/**/*')
//       .pipe(image())
//       .pipe(gulp.dest('app/assets/img/**/*'));
//   });

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
});

gulp.watch(["app/assets/css/scss/**/*.scss"], ['sass']);

gulp.watch("./*.html").on('change', browserSync.reload);

gulp.watch("app/assets/js/*.js").on('change', browserSync.reload);

});

// Default Task
gulp.task('default', ['serve',]);
