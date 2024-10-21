import type {Logger, LogLevel} from "vite";

export interface PluginOptions {
    logLevel?: LogLevel;
}

/**
 * 编译样式插件
 * 打包所有的样式
 * @param options
 */
function viteCompileStylePlugin(options?: PluginOptions): import('vite').Plugin {
    const {logLevel} = options
    let logger: Logger
    return {
        name: 'trionesdev:compile-style-plugin',
        apply: 'build',
        enforce: 'post',
        async configResolved(config) {
            logger = logLevel
                ? (await import('vite')).createLogger(logLevel, {allowClearScreen: config.clearScreen})
                : config.logger
        },
        async buildStart() {

        }
    }
}

export default viteCompileStylePlugin