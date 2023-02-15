import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './build'
const srcFolder = './src'

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/html/`,
        styles: `${buildFolder}/css/`,
        assets: `${buildFolder}/assets/`,
    },
    src: {
        js: `${srcFolder}/js/**/*.*`,
        styles: `${srcFolder}/styles/styles.css`,
        html: `${srcFolder}/html/*.html`,
        assets: `${srcFolder}/assets/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        styles: `${srcFolder}/styles/*.css`,
        assets: `${srcFolder}/assets/**/*.*`,
        html: `${srcFolder}/html/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    ftp: ``
}