export interface PluginOptions {
    entries?: string[]
    appendContent?: string
}

/**
 * 编译样式插件
 * 打包所有的样式
 * @param options
 */
function viteContentAppendPlugin(options?: PluginOptions): import('vite').Plugin {
    const {entries = [], appendContent} = options || {}
    // let logger: Logger
    return {
        name: 'vite:compile-style-plugin',
        apply: 'build',
        enforce: 'post',
        generateBundle(_options, bundle) {
            entries?.forEach((entry) => {
                // @ts-ignore
                if (bundle[entry].type === 'chunk') {
                    bundle[entry].code = bundle[entry].code + appendContent
                }
            })
        }
    }
}

export default viteContentAppendPlugin