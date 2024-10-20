const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const vite = require('vite')
const sass = require('sass');
const fse = require('fs-extra')
const fs = require('fs')
const react = require('@vitejs/plugin-react')
const ts = require('typescript')

vite.build({
    configFile: false,
    root: path.resolve(process.cwd(), './src/button/style'),
    build: {
        emptyOutDir: false,
        outDir: path.resolve(process.cwd(), './es/button1/style'),
        lib: {
            entry: 'index.tsx',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output:[
                {
                    format: 'es',
                    entryFileNames: 'css.js',
                },
            ]
        }
    }
})