const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

const style = () =>
  gulp
    .src("css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "/index.html",
    },
  });
  gulp.watch("css/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/*.js").on("change", browserSync.reload);
};

exports.watch = watch;
exports.style = style;
