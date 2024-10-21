import typescript, {RollupTypescriptOptions} from "@rollup/plugin-typescript"
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss';
import * as path from "path"

const tsCompilerOptions = {
    "allowImportingTsExtensions": true,
    noEmit: true,
}


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

export default [
    {
        input: ['src/index.tsx'],
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
            postcss({
                extract: true,
                minimize: true,
                sourceMap: true
            }),
        ],
        external: external,
        output: {
            dir: 'dist',
            entryFileNames: '[name].js',
        },
    },
    {
        input: 'src/index.tsx',
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
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