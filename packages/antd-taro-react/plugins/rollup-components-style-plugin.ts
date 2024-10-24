import * as glob from "glob";
import * as process from "node:process";
import _ from "lodash";
import path from "node:path";
import ts from "typescript";
import fs from "fs";
import {OutputBundle, PluginContext} from "rollup";
import sass from "sass";

interface PluginOptions {
    include?: string | string[];
    preserveModulesRoot?: 'src',
}

const pathUnixFormat = (path: string) => path.replace(/\\+/g, '/')

/**
 * 打包js 文件，只需要生成index.js和css.js文件
 * @param ctx
 * @param bundle
 * @param filePath
 * @param targetDir
 * @param format
 */
const buildJs = (ctx: PluginContext, bundle: OutputBundle, filePath: string, targetDir: string, format?: string) => {
    let compilerOptions = {};
    if (format === 'es') {
        compilerOptions = {
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
        }
    } else if (format === 'cjs') {
        compilerOptions = {
            target: ts.ScriptTarget.ES5,
            module: ts.ModuleKind.CommonJS,
        }
    }
    //将ts代码转成js代码
    const result = ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {compilerOptions})
    const fileNameNoExt = path.basename(filePath).replace(path.extname(filePath), "")

    const targetJsFile = pathUnixFormat(path.join(targetDir, `${fileNameNoExt}.js`))

    if (_.includes(_.keys(bundle), targetJsFile)) {
        _.set(bundle[targetJsFile], 'source', result.outputText)
    } else {
        ctx.emitFile({
            type: 'asset',
            source: result.outputText,
            fileName: targetJsFile,
        })
    }
    if (fileNameNoExt == "index") {
        const targetCssJsFile = pathUnixFormat(path.join(targetDir, 'css.js'))
        const targetCssJsFileContent = result.outputText.replace(/.scss/g, '.css')
        if (_.includes(_.keys(bundle), targetCssJsFile)) {
            _.set(bundle[targetCssJsFile], 'source', targetCssJsFileContent)
        } else {
            ctx.emitFile({
                type: 'asset',
                source: targetCssJsFileContent,
                fileName: targetCssJsFile,
            })
        }
    }

}

const buildCss = (ctx: PluginContext, bundle: OutputBundle, filePath: string, targetDir: string) => {
    const basename = path.basename(filePath)
    const targetFile = pathUnixFormat(path.join(targetDir, basename))
    const targetFileContent = fs.readFileSync(filePath, 'utf8')
    if (_.includes(_.keys(bundle), targetFile)) {
        _.set(bundle[targetFile], 'source', targetFileContent)
    } else {
        ctx.emitFile({
            type: 'asset',
            source: targetFileContent,
            fileName: targetFile,
        })
    }
    const scssResult = sass.compile(filePath);

    const targetCssFile = targetFile.replace('.scss', '.css')
    if (_.includes(_.keys(bundle), targetCssFile)) {
        _.set(bundle[targetCssFile], 'source', scssResult.css)
    } else {
        ctx.emitFile({
            type: 'asset',
            source: scssResult.css,
            fileName: targetCssFile,
        })
    }
}

/**
 * 打包按需加载的style，默认打包es和lib
 * @param options
 */
function componentsStylePlugin(options?: PluginOptions): import('rollup').Plugin {
    const {include = ['./src/*/style'], preserveModulesRoot = 'src'} = options || {};

    let allStyleFiles: string[] = []

    return {
        name: 'rollup:components-style-plugin',
        buildStart(_options) {
            allStyleFiles = []
            const styleFolders = glob.sync(include, {cwd: process.cwd()})

            if (_.isEmpty(styleFolders)) {
                return
            }

            styleFolders.forEach(styleFolder => {
                const styleFiles = glob.sync(pathUnixFormat(path.join(styleFolder, "/**")), {
                    cwd: process.cwd(),
                    nodir: true
                })
                allStyleFiles.push(...styleFiles.map(sf => pathUnixFormat(sf)))
                styleFiles.forEach(styleFile => {
                    this.addWatchFile(styleFile)
                })
            })
        },
        generateBundle(options, bundle) {
            // console.log("generateBundle", options)
            _.forEach(allStyleFiles, (styleFile) => {
                const targetDir = pathUnixFormat(path.dirname(styleFile)).replace(preserveModulesRoot, '').replace(/^\//, '')
                if (_.includes(['.ts', '.tsx'], path.extname(styleFile))) {
                    buildJs(this, bundle, styleFile, targetDir, options.format)
                } else if (_.includes(['.scss'], path.extname(styleFile))) {
                    buildCss(this, bundle, styleFile, targetDir)
                }
            })
        }
    }
}

export default componentsStylePlugin