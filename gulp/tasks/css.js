import cssmin from "gulp-cssmin"
import rename from 'gulp-rename'


export const css = () => {
    return app.gulp.src(app.path.src.styles, { sourcemaps: true })
        .pipe(cssmin())
        .pipe(app.gulp.dest(app.path.build.styles))
}