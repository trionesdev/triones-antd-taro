const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const vite = require('vite')
const sass = require('sass');
const fse = require('fs-extra')
const fs = require('fs')
const react = require('@vitejs/plugin-react')
const ts = require('typescript')
const rollup = require('rollup')
// import * as ts1 from 'typescript';
// import * as rollup from "rollup"

// import { nodeResolve } from '@rollup/plugin-node-resolve';

const nodeResolve = require('@rollup/plugin-node-resolve').default
const tsPlugin = require('@rollup/plugin-typescript').default

console.log(path.resolve(process.cwd(), 'tsconfig.json'))

const styleBuild = (file, mode) => {
    const styleDir = file.replace('index.tsx', '').replace("index.ts", "")
    const targetDir = styleDir.replace("src", mode)
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, {recursive: true})
    }
    fs.writeFileSync(path.resolve(targetDir, "style.scss"), fs.readFileSync(path.resolve(styleDir, "style.scss"), 'utf8'))
    const scssResult = sass.compile(path.resolve(styleDir, "style.scss"));
    fs.writeFileSync(path.resolve(targetDir, 'style.css'), scssResult.css)
    let compilerOptions = {};
    if (mode === 'es') {
        compilerOptions = {
            target: 'ES2020',
            module: 'ESNext',
        }
    } else if (mode === 'lib') {
        compilerOptions = {
            target: 'es5',
            module: 'commonjs',
        }
    }

    //将ts代码转成js代码
    const result = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions})
    console.log(result.outputText)
    fs.writeFileSync(targetDir + 'index.js', result.outputText)
    fs.writeFileSync(targetDir + 'css.js', result.outputText.replace(/.scss/g, '.css'))
}


const scssFiles = glob.sync('./src/**/style', {dotRelative: true});
console.log(scssFiles)
console.log(path.resolve(process.cwd(), scssFiles[0]))
console.log(glob.sync(path.resolve(process.cwd(), scssFiles[0] + '/**'), {dotRelative: true, nodir: true}))

console.log(path.extname("indes.js"))

// _.forEach(scssFiles, function (file) {
//     styleBuild(file, 'es')
//     styleBuild(file, 'lib')
// })
const options = rollup.defineConfig({
    input: './src/button/style/index.tsx',
    plugins: [nodeResolve(),tsPlugin({
        target: 'ES2020',
        module: 'ESNext',
        jsx: 'react-jsx',
        noEmit: true,
    })]
})
rollup.rollup(options).then(bundle => bundle.write({
    file: './dist/bundle.js',
    format: 'es'
}))
