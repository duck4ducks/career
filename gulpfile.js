const gulp = require("gulp");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const sass = require('gulp-sass');

const dist = "C:\\Users\\Ytta\\Downloads\\openserver\\domains\\diplom-careeer";
const distProd = "./build/";

gulp.task("admin", () => {
    return gulp.src('./admin/**/*')
        .pipe(gulp.dest(dist + '/admin/'));
});

gulp.task("copy-html", () => {
    return gulp.src("./index.html")
        .pipe(gulp.dest(dist));
});

gulp.task("copy-api", () => {
    return gulp.src("./api/**/*.*")
        .pipe(gulp.dest(dist + "/api"));
    return gulp.src("./api/**/.*")
        .pipe(gulp.dest(dist + "/api"));
});

gulp.task("copy-assets", () => {
    return gulp.src("./assets/**/*.*")
        .pipe(gulp.dest(dist + "/assets"));
});

gulp.task("build-src", () => {
    return browserify('./js/front.js', {debug: true})
        .transform("babelify", {presets: ["@babel/preset-env"], sourceMaps: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(dist))
});

gulp.task("build-sass", () => {
    return gulp.src('./css/**/*')
        .pipe(gulp.dest(dist + '/css/'));
});

gulp.task("vendor", () => {
    return gulp.src('./vendor/**/*')
        .pipe(gulp.dest(dist + '/vendor/'));
});

gulp.task("img", () => {
    return gulp.src('./img/**/*')
        .pipe(gulp.dest(dist + '/img/'));
});


gulp.task("image", () => {
    return gulp.src('./image/**/**/*')
        .pipe(gulp.dest(dist + '/image/'));
});

gulp.task("watch", () => {
    gulp.watch("./index.html", gulp.parallel('copy-html'));
    gulp.watch("./api/**/*.*", gulp.parallel('copy-api'));
    gulp.watch("./assets/**/*.*", gulp.parallel('copy-assets'));
    gulp.watch("./js/front.js", gulp.parallel('build-src'));
    gulp.watch("./css/**/*", gulp.parallel('build-sass'));
    gulp.watch("./vendor/**/*", gulp.parallel('vendor'));
    gulp.watch("./img/**/*", gulp.parallel('img'));
    gulp.watch("./image/**/**/*", gulp.parallel('image'));
});
// ctrl+c to stop watch

gulp.task("build", gulp.parallel('copy-html', 'copy-api', 'copy-assets', 'build-src', 'build-sass', 'img', 'image', 'vendor'));


gulp.task("build-prod", () => {
    gulp.src("./index.html")
        .pipe(gulp.dest(distProd));

    gulp.src("./api/**/*.*")
        .pipe(gulp.dest(distProd + "/api"));
    gulp.src("./api/**/.*")
        .pipe(gulp.dest(distProd + "/api"));

    gulp.src("./assets/**/*.*")
        .pipe(gulp.dest(distProd + "/assets"));

    browserify('./src/main.js', {debug: false})
        .transform("babelify", {presets: ["@babel/preset-env"], sourceMaps: false})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(distProd))

    gulp.src('./scss/scss.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(distProd));
});

gulp.task("default", gulp.parallel("watch", "build"));