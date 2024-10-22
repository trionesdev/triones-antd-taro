import _ from "lodash";
import {glob} from "glob";
import * as process from "node:process";

interface PluginOptions {
    pattern?: string | string[];
}

/**
 * 将没有引入的样式文件编译
 * 这里主要是讲文件进行load,后续的问题交由postcss插件进行处理
 * @param options
 */
export default (options?: PluginOptions): import('rollup').Plugin => {
    return {
        name: 'rollup:compile-style-plugin',
        buildStart(_options) {
            if (!options || !options.pattern) {
                return
            }
            const files = glob.sync(options!.pattern!, {nodir: true, cwd: process.cwd()})
            if (_.isEmpty(files)){
                return;
            }
            files.forEach(file => {
                this.load({id: file})
            })
        }
    }
}