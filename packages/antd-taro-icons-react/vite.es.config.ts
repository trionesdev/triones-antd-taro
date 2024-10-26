import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts";
import viteContentAppendPlugin from "./plugins/vite-content-append-plugin";

export default defineConfig({
    plugins: [react(), dts({include: ['src/**/*']}),
        viteContentAppendPlugin({
            entries: ['index.es.js'],
            appendContent: '\nimport "../dist/style.css"'
        })],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: './src/index.tsx',
            name: 'antd-taro-icons-react',
            fileName: 'index'
        },
        rollupOptions: {
            plugins: [],
            external: ['react',
                'react-dom',
                'react/jsx-dev-runtime',
                'react/jsx-runtime'],
            output: [
                {
                    format: 'es',
                    dir: 'es',
                    entryFileNames: '[name].es.js',
                    assetFileNames: '[name].[ext]',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                },
            ]
        },
    },
})
