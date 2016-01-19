"use strict";

const gulp = require('gulp'),
      stylus = require('gulp-sass');

var __assets = __dirname + '/app/assets';
var __public = __dirname + '/public';

gulp.task('sass', () => {
    gulp.src(__assets + '/styles/app.scss')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(gulp.dest(__public + '/styles'));
});

gulp.task('default', ['sass'] );
