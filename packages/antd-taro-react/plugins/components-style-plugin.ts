import * as fs from "fs"
import * as path from "path"
import * as ts from "typescript"
import * as sass from "sass";
import * as glob from "glob"
import * as _ from "lodash";
import type {LogLevel, Logger} from 'vite'

export interface PluginOptions {
    src?: string;
    formats?: string[];
    logLevel?: LogLevel;
}

const resolveFolder = (targetDir: string) => {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, {recursive: true})
    }
}

/**
 * 组件样式编译插件
 * 将组件下style文件夹下的文件按照按需加载的需求进行构建
 * @param options
 */
function componentsStylePlugin(options?: PluginOptions): import('vite').Plugin {
    const {src = 'src', formats = ['es', 'lib'], logLevel} = options || {}
    let logger: Logger
    let watch: boolean = false

    const buildJs = (filePath: string, targetDir: string, format?: string) => {
        resolveFolder(targetDir)
        let compilerOptions = {};
        if (format === 'es') {
            compilerOptions = {
                target: 'ES2020',
                module: 'ESNext',
            }
        } else if (format === 'lib') {
            compilerOptions = {
                target: 'es5',
                module: 'commonjs',
            }
        }
        //将ts代码转成js代码
        const result = ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {compilerOptions})

        const targetJsFile = path.resolve(targetDir, 'index.js')
        fs.writeFileSync(targetJsFile, result.outputText)
        console.log('build success', targetJsFile)
        const targetCssJsFile = path.resolve(targetDir, 'css.js')
        fs.writeFileSync(targetCssJsFile, result.outputText.replace(/.scss/g, '.css'))
    }
    const buildCss = (filePath: string, targetDir: string) => {
        resolveFolder(targetDir)
        const basePath = path.basename(filePath)
        fs.writeFileSync(path.resolve(targetDir, basePath), fs.readFileSync(filePath, 'utf8'))
        const scssResult = sass.compile(filePath);
        fs.writeFileSync(path.resolve(targetDir, basePath.replace('.scss', '.css')), scssResult.css)
    }

    const generateStyle = (src: string, formats?: string[]) => {
        const styleFolderPattern = path.join(src, './*/style').replace(/\\/g, '/')
        console.log('styleFolderPattern', styleFolderPattern)
        const styleFolders = glob.sync(styleFolderPattern, {dotRelative: true});
        console.log('styleFolders', styleFolders)
        if (_.isEmpty(styleFolders)) {
            logger.warn('\nNo style folder found in src')
            return
        }

        styleFolders.forEach(styleFolder => {
            const pathPattern = path.join(styleFolder, '/**').replace(/\\/g, '/')
            const files = glob.sync(pathPattern, {dotRelative: true, nodir: true})
            if (!_.isEmpty(files)) {
                files.forEach(file => {
                    const extname = path.extname(file)
                    _.forEach(formats, format => {
                        const targetDir = styleFolder.replace(src, format)
                        if (_.includes(['.ts', '.tsx'], extname)) {
                            buildJs(file, targetDir, format)
                        } else if (_.includes(['.scss'], extname)) {
                            buildCss(file, targetDir)
                        }
                    })
                    logger.info(`\n${file.replace(process.cwd(), '')} build success`)
                })
            }
        })
    }

    const watchStyle = (src: string, formats?: string[]) => {
        const styleFolderPattern = path.join(src, './*/style').replace(/\\/g, '/')
        const styleFolders = glob.sync(styleFolderPattern, {dotRelative: true});
        if (_.isEmpty(styleFolders)) {
            return
        }
        styleFolders.forEach(styleFolder => {
            console.log('watch', styleFolder)
            fs.watch(styleFolder, {recursive: true}, (eventType, filename) => {
                const extname = path.extname(filename)
                _.forEach(formats, format => {
                    const targetDir = styleFolder.replace(src, format)
                    if (_.includes(['.ts', '.tsx'], extname)) {
                        buildJs(path.resolve(styleFolder, filename), targetDir, format)
                    } else if (_.includes(['.scss'], extname)) {
                        buildCss(path.resolve(styleFolder, filename), targetDir)
                    }
                })
                logger.info(`\n${filename.replace(process.cwd(), '')} changed`)
            })
        })
    }

    return {
        name: 'trionesdev:components-style-plugin',
        apply: 'build',
        enforce: 'post',
        async configResolved(config) {
            logger = logLevel
                ? (await import('vite')).createLogger(logLevel, {allowClearScreen: config.clearScreen})
                : config.logger
            watch = Boolean(config.build.watch) || false
            // console.log('configResolved----------------------------------', config)
            console.log('configResolved----------------------------------')

        },
        async buildStart() {
            console.log('buildStart----------------------------------',watch)
            generateStyle(src, formats)
            if (watch) {
                watchStyle(src, formats)
            }
        }
    }
}

export default componentsStylePlugin