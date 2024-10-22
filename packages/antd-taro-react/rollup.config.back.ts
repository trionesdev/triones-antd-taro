import typescript from "@rollup/plugin-typescript"
import postcss from 'rollup-plugin-postcss'
import rollupStylePlugin from "./plugins/rollup-compile-style-plugin"
import componentsStylePlugin  from "./plugins/vite-components-style-plugin";

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
                sourceMap: true,
            }),
            rollupStylePlugin(),
        ],
        external: external,
        output: {
            // format: 'umd',
            dir: 'dist',
            name: '[name].js',
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