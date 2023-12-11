const { src, dest, series, watch } = require("gulp");
const sync = require("browser-sync").create();
const del = require("del");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

function html() {
  return src("src/**.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));
}

function scss() {
  return src("src/**/*.scss")
    .pipe(concat("index.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemap.init())
    .pipe(sourcemap.write("."))
    .pipe(dest("dist"));
}

function images() {
  return src("src/img/**").pipe(dest("dist/images"));
}

function scripts() {
  return src("src/**/*js").pipe(concat("index-min.js")).pipe(dest("dist"));
}

function fonts() {
  return src("src/fonts/*").pipe(dest("dist/fonts"));
}

function libs() {
  return src("libs/**").pipe(dest("dist/libs"));
}

function clear() {
  return del("dist");
}

function serve() {
  sync.init({
    server: "./dist",
  });

  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/**/*.scss", series(scss)).on("change", sync.reload);
  watch("src/**/*.js", series(scripts)).on("change", sync.reload);
}

exports.build = series(clear, scss, html, fonts, images, scripts, libs);
exports.serve = series(clear, scss, html, fonts, images, scripts, libs, serve);
exports.clear = clear;
exports.scss = scss;
exports.html = html;
exports.images = images;
exports.scripts = scripts;
