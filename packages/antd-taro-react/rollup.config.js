import typescript from "@rollup/plugin-typescript"
import postcss from 'rollup-plugin-postcss'
import rollupStylePlugin from "./plugins/rollup-style-plugin.js";

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
        input: ['src/index.tsx', 'src/style/index.scss'],
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
            rollupStylePlugin(),
            postcss({
                extract: true,
                minimize: true,
                sourceMap: true,
                preprocessOptions:{
                    scss:{
                        includePaths: [
                            'src/style'
                        ]
                    }
                }
            }),
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