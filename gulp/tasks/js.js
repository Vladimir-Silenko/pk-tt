import jsmin from "gulp-jsmin"
export const Js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(jsmin())
        .pipe(app.gulp.dest(app.path.build.js))
}