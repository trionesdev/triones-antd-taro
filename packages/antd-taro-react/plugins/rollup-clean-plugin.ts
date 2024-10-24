import _ from "lodash";
import {OutputOptions, RollupWatchOptions} from "rollup";
import * as rimraf from "rimraf"

/**
 * 删除输出目录的插件
 * 在启动的时候删除之前的输出目录
 */
export default (): import('rollup').Plugin => {
    return {
        name: 'rollup:clean-plugin',
        options: function (options: RollupWatchOptions) {
            _.forEach(options.output, (outConfig: OutputOptions) => {
                if (outConfig.dir) {
                    rimraf.sync(outConfig.dir)
                }
            })
        }
    }
}