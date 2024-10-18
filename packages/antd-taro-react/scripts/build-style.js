const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const vite = require('vite')
const sass = require('sass');
const fse = require('fs-extra')
const react = require('@vitejs/plugin-react')

const scssFiles = glob.sync('./src/**/style/index.tsx', {dotRelative: true});
console.log(scssFiles)

_.forEach(scssFiles, function(file){
    // const result = sass.compile(path.resolve(process.cwd(), scssFile));
    // console.log(result.css)
    // fse.writeFileSync(path.resolve(process.cwd(), scssFile.replace('.scss', '.css')), result.css)

    vite.build({
        configFile: false,
        publicDir: false,
        css: {
            preprocessor: 'postcss',
            preprocessorOptions: {

            }
        },
        target: 'modules',
        plugins: [react()],
        build: {
            emptyOutDir: false,
            outDir: path.resolve(process.cwd(), file.replace('index.tsx', '').replace('src', 'es')),
            rollupOptions: {
                input: file,
                output:[
                    {
                        format: 'es',
                        entryFileNames: 'css.js',
                    },
                ]
            }
        },
        lib: {
            entry: file,
            fileName: 'index',
        },
    })
})