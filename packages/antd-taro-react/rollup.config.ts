import type {RollupOptions} from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss";
import rollupStylePlugin from "./plugins/rollup-compile-style-plugin";

import dts from "vite-plugin-dts";
import componentsStylePlugin from "./plugins/rollup-components-style-plugin";
import commonjs from "@rollup/plugin-commonjs";

export const external = [
    'react',
    'react-dom',
    'react/jsx-dev-runtime',
    'react/jsx-runtime',
    '@tarojs/react',
    '@tarojs/runtime',
    '@tarojs/taro',
    '@tarojs/components'
];

const distConfig: RollupOptions = {
    input: ['src/index.tsx'],
    plugins: [
        resolve(),
        typescript({tsconfig: './tsconfig.json'}),
        commonjs(),
        babel({
            "presets": ['@babel/preset-react', '@babel/preset-env']
        }),
        postcss({
            extract: true,
            minimize: true,
            sourceMap: true,
        }),
        rollupStylePlugin(['src/**/*.scss']),
    ],
    external: external,
    output: {
        format: 'umd',
        dir: 'dist',
        name: '[name].js',
    },
}

const componentConfig: RollupOptions = {
    input: 'src/index.tsx',
    plugins: [
        resolve(),
        dts({outDir: 'es', include: ['src'], exclude: ['src/**/style/**']}),
        dts({outDir: 'lib', include: ['src'], exclude: ['src/**/style/**']}),
        typescript(),
        commonjs(),
        babel({
            "presets": ['@babel/preset-react', '@babel/preset-env']
        }),
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

/**
 * @type {import('rollup').RollupOptions}
 */
const configs: RollupOptions[] = [
    {...distConfig},
    {...componentConfig}
]
export default configs