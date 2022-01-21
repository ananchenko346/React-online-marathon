const { gulp, src, dest, series } = require('gulp');
const concat = require('gulp-concat');

function js() {
  return src('src/**/*.js')
    .pipe(concat('result.js'))
    .pipe(dest('./output'));
}
exports.js = js;

function css() {
  return src('src/**/*.css')
    .pipe(concat('result.css'))
    .pipe(dest('./output/'));
}
exports.css = css;

exports.default = series(js, css);