import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts";
// import postcss from 'rollup-plugin-postcss'
// import rollupStylePlugin from "./plugins/rollup-compile-style-plugin"
import componentsStylePlugin from "./plugins/rollup-components-style-plugin";
import type {RollupOptions} from 'rollup';

const external = [
    'react',
    'react-dom',
    'react/jsx-dev-runtime',
    'react/jsx-runtime',
    '@tarojs/react',
    '@tarojs/runtime',
    '@tarojs/taro',
    '@tarojs/components'
];

/**
 * @type {import('rollup').RollupOptions}
 */
const configs: RollupOptions[] = [
    {
        input: 'src/index.tsx',
        plugins: [
            dts(),
            typescript({tsconfig: 'tsconfig.json'}),
            componentsStylePlugin()
        ],
        external: external,
        output: [
            {
                format: 'es',
                dir: 'es',
                entryFileNames: '[name].js',
                preserveModules: true,
                preserveModulesRoot: 'src',
                banner: '/** TrionesDev  **/',
            },
            {
                format: 'cjs',
                dir: 'lib',
                entryFileNames: '[name].js',
                preserveModules: true,
                preserveModulesRoot: 'src',
                banner: '/** TrionesDev  **/',
            }
        ],
    }
]
export default configs