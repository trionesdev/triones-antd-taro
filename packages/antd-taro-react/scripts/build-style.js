const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const vite = require('vite')
const sass = require('sass');
const fse = require('fs-extra')
const fs = require('fs')
const react = require('@vitejs/plugin-react')
const ts = require('typescript')
// import * as ts1 from 'typescript';
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


const scssFiles = glob.sync('./src/**/style/index.tsx', {dotRelative: true});
console.log(scssFiles)

_.forEach(scssFiles, function (file) {
    styleBuild(file, 'es')
    styleBuild(file, 'lib')
})

