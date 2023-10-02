'use strict'
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('app', function () {
    return gulp.src(['src/components/app.module.js', 'src/components/login/login.controller.js', 'src/components/dashboard/dashboard.controller.js', 'src/components/login/login.service.js', 'src/components/dashboard/dashboard.service.js', 'src/components/shared/footer/footer.directive.js', 'src/components/shared/header/header.directive.js', 'src/components/shared/modal/modal.directive.js'])
        .pipe(concat('app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(ngAnnotate())
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('src/components/'));
});

gulp.task('watch:app', function () {
    gulp.watch(['src/components/app.module.js', 'src/components/login/login.controller.js', 'src/components/dashboard/dashboard.controller.js', 'src/components/login/login.service.js', 'src/components/dashboard/dashboard.service.js', 'src/components/shared/footer/footer.directive.js', 'src/components/shared/header/header.directive.js', 'src/components/shared/modal/modal.directive.js'], ['app']);
});

gulp.task('js', function () {
    return gulp.src(['src/assets/js/scripts.js', 'node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.js'])
        .pipe(concat('scripts.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('src/dist/js'));
});

gulp.task('watch:js', function () {
    gulp.watch(['src/assets/js/scripts.js', 'node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.js'], ['js'])
})

gulp.task('images', function () {
    return gulp.src('src/assets/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('src/dist/images/'))
});

gulp.task('css', function () {
    return gulp.src(['src/assets/css/style.css'])
        .pipe(concat('main.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglifycss().on('error', function (e) {
            console.log(e)
        }))
        .pipe(gulp.dest('src/dist/css'))
});

gulp.task('watch:css', function () {
    gulp.watch(['src/assets/css/style.css'], ['css'])
});

gulp.task('default', ['app', 'js', 'css', 'watch:app', 'watch:js', 'watch:css'])
