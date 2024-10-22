// @ts-ignore
import _ from "lodash";
import * as path from "node:path";
import {glob} from "glob";
import postcss from "postcss"
import * as process from "node:process";


export default () => {
    return {
        name: 'rollup:compile-style-plugin',
        buildStart(options) {
            console.log('buildStart----------------------------------')
            // console.log('buildStart----------------------------------', options)
            // this.load({id: 'src/style/index.tsx', resolveDependencies: true})
            const files = glob.sync(['src/**/*.scss', 'src/**/*.less', 'src/**/*.css'], {nodir: true, cwd: process.cwd()})

            console.log('glob.sync----------------------------------', files)

             Promise.all(files.map(async (file) => {
                const content = await this.load({id: file})
                // console.log('content----------------------------------', content)
                return content
            }))


        },
        async resolveId(source, importer, options) {
            console.log('resolveId source----------------------------------', source)
            // this.resolve(source,importer)
            const resolution = await this.resolve(source, importer, options);
            console.log('resolveId resolution----------------------------------', resolution)
        },
        load(id) {
            console.log('load----------------------------------', id)
            // return {
            //     code: `export default ${JSON.stringify(id)}`
            // }
            console.log('load- getModuleInfo---------------------------------', this.getModuleInfo(id))
            console.log('load- getModuleInfo---------------------------------', this.getModuleInfo(id).importedIds)
            // return this.getModuleInfo(path.resolve(process.cwd(),id))
        },
        transform(code, id) {
            console.log('transform----------------------------------', id)
            console.log('transform----------------------------------', code)
            // return code
        },
        generateBundle(options_, bundle) {
            // console.log(' rollup:style-plugin generateBundle options_ ----------------------------------', options_)
            console.log(' rollup:style-plugin generateBundle bundle ----------------------------------', bundle)

            // bundle.

            // postcss([]).process()

            // const cssFile = _.find(bundle, (item) => {
            //     return item.type === 'asset' && path.extname(item.fileName) === ".css";
            // })
            // debugger
            // cssFile.source = cssFile.source

            // this.emitFile({
            //     type: 'asset',
            //     source: 'hello world',
            //     fileName: 'hello.txt'
            // })
        }
    }
}