// main module

import gulp from "gulp"

// paths

import { path } from "./gulp/config/path.js"

// passing values in global variable

global.app = {
    path: path,
    gulp: gulp,
}

//tasks import
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { css } from "./gulp/tasks/css.js"
import { html } from "./gulp/tasks/html.js"
import { Js } from "./gulp/tasks/js.js"
//changes-watcher
const mainTasks = {}
const watcher = () => {
    gulp.watch(path.watch.assets, copy)
    gulp.watch(path.watch.styles, css)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.js, Js)
}


//building scenarios of performing tasks
const dev = gulp.series(reset, html, Js, css, copy, watcher)

// default scenario
gulp.task('default', dev)