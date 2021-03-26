'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const path = require('path')
// const rename = require('gulp-rename')

// const noElPrefixFile = /(index|base|display)/

function compile() {
  return src(path.resolve(__dirname, '../packages/theme-chalk/src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../lib/theme-chalk/')))
  // .pipe(
  //   rename(function (path) {
  //     if (!noElPrefixFile.test(path.basename)) {
  //       path.basename = `el-${path.basename}`
  //     }
  //   })
  // )
}

function copyfont() {
  return src(path.resolve(__dirname, '../packages/theme-chalk/src/fonts/**'))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../packages/theme-chalk/fonts')))
}

exports.build = series(compile, copyfont)
