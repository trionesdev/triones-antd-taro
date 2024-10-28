import _ from "lodash";
import {OutputAsset, OutputBundle, OutputChunk} from "rollup";
import * as glob from "glob";
import process from "node:process";
import path from "node:path";

const pathUnixFormat = (path: string) => path.replace(/\\+/g, '/')

interface PluginOptions {
    root?: string;
    include?: string | string[]
}

/**
 * 将组件的样式文件引入的import或require语句加入到chunk中，使用该插件，使用方可以不需要babel-import-plugin.
 * @param options
 */
export default (options?: PluginOptions): import('rollup').Plugin => {
    const {root = 'src', include = [`**/style/**.scss`, `**/style/**.less`, `**/style/**.css`]} = options || {}
    let moduleIds: string[] = []
    return {
        name: 'rollup:import-style-plugin',
        renderStart(_options, _inputOptions) {
            moduleIds = []
        },
        renderChunk(_code, chunk, _options) {
            if (chunk.isEntry) {
                moduleIds.push(...chunk.imports)
            }
        },
        generateBundle: function (options, bundle: OutputBundle) {
            _.forEach(bundle, (item: OutputAsset | OutputChunk, key: string) => {
                if (_.includes(moduleIds, key) && item.type === 'chunk') {
                    const componentFolder = key.split("/")[0];
                    const styleFiles = glob.sync(include, {
                        nodir: true,
                        cwd: path.join(process.cwd(), root, componentFolder)
                    })
                    if (!_.isEmpty(styleFiles)) {
                        let importsLange = '';
                        if (options.format == 'es') {
                            importsLange = styleFiles.map((styleFile: string) => {
                                return `import "./${pathUnixFormat(styleFile)}";`
                            }).join('\n');
                        } else if (options.format == 'cjs') {
                            importsLange = styleFiles.map((styleFile: string) => {
                                return `require("./${pathUnixFormat(styleFile).replace(/\.(scss|less)$/, '.css')}"); `
                            }).join('\n');
                        }
                        (item as OutputChunk).code = `${importsLange}\n${(item as OutputChunk).code}`
                    }

                }
            })
        }
    }
}