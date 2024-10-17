import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [ react(),dts(),],
    build: {
        lib: {
            entry: './src/index.tsx',
            name: 'antd-taro-react',
            fileName: 'index',
            // fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
