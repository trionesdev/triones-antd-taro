import type {LogLevel} from "vite";
import * as glob from "glob";
import * as process from "node:process";

export interface PluginOptions {
    styleFolders?: string[];
    formats?: Record<string, string>;
    logLevel?: LogLevel;
}
export default (options?: PluginOptions) => {
    const {styleFolders=['./*/*/style']}= options || {};
    return {
        name: 'rollup:components-style-plugin',
        buildStart(options) {
             const files = glob.sync(styleFolders, {cwd: process.cwd()})
        }
    }
}