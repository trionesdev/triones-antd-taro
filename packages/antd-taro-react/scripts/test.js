// import postcss from "postcss";
// import * as fs from "node:fs";
// import * as process from "node:process";
// import * as path from "node:path";
//
//
//
// let scss = fs.readFileSync(path.resolve(process.cwd(),"./src/button/style/style.scss"))
//
// postcss([
//     import("postcss-scss").default
// ]).process(scss).then(result => {
//     console.log(result.css)
// })

import postcss from "postcss";
import fs from "fs";
import path from "path"
import postScss from "postcss-scss"

postcss([])
    .process(fs.readFileSync(path.resolve(process.cwd(), './src/button/style/style.scss'), 'utf8'), {
        parser: postScss,
        map: true,
        from: 'style.scss',
    }).then(result => {
    console.log(result.css)
    console.log(result)
})