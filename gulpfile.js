// Подключаем пакеты  
// КОМАНДЫ ИЗ КОНСОЛИ ПИШИМ В СКОБОЧКИ

const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
  return src('src/**.html') // ** - все файлы с расширением html
    .pipe(include({ // include - пакет 
      prefix: '@@'
    })) // С помошью pipe добовляем модули 
    .pipe(dest('dist')) // Создаст папку и в него положит результат 
}

function scss() {
  return src('src/scss/**.scss')// ** - все файлы с расширением html
    .pipe(sass()) // sass - наш пакет 
    .pipe(autoprefixer({
      
    }))
}

exports.html = html // ВТОРОЙ HTML - НАЗВАНИЕ ФУНКЦИИ вызываем функцию  