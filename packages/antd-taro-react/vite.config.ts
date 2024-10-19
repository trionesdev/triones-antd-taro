import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [react(), dts({outDir: 'es',exclude: ['src/**/style/**']}), dts({outDir: 'lib',exclude: ['src/**/style/**']}),],
    build: {
        target: 'modules',
        lib: {
            entry: './src/index.tsx',
            name: 'antd-taro-react',
            fileName: 'index',
            // fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@tarojs/react', '@tarojs/runtime', '@tarojs/taro', '@tarojs/components'],
            input: './src/index.tsx',
            output: [
                {}, //默认配置，打包到dist 文件夹下
                {
                    format: 'es',
                    dir: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                },
                {
                    format: 'cjs',
                    dir: 'lib',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                },
            ]
        },
    },
})
