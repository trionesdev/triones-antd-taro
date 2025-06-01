import * as fs from 'fs';

const jsonFilePath = './src/style/iconfont.json';
const jsonData: any = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

function advancedToPascal(str) {
  return str.replace(/[-_ ](\w)/g, (_, char) =>
    char.toUpperCase()
  ).replace(/^\w/, match => match.toUpperCase());
}


let outlineArray:any[] = [];
let fillArray:any[] = [];

jsonData.glyphs.forEach((item:any) => {
  if (item.font_class.indexOf('Outline') > -1 || item.font_class.indexOf('outline') > -1){
    outlineArray.push(item.name);
  }else if (item.font_class.indexOf('Fill') > -1 || item.font_class.indexOf('fill') > -1){
    fillArray.push(item.name);
  }
});
console.log(outlineArray);
console.log(fillArray);
fs.mkdirSync('./src-tmp/outline', { recursive: true });
outlineArray.forEach((item) => {
  const className=advancedToPascal(item)
  const data = `import {Icon, IconClsPrefix, IconProps} from "../Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const ${className}: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([\`\${IconClsPrefix}${item}\`,className])} style={style}/>
}
  `
  fs.writeFileSync(`./src-tmp/outline/${className}.tsx`, data);
  fs.appendFileSync(`./src-tmp/outline/index.ts`, `export * from "./${className}";\n`);
});
fs.mkdirSync('./src-tmp/fill', { recursive: true });
fillArray.forEach((item) => {
  const className=advancedToPascal(item)
  const data = `import {Icon, IconClsPrefix, IconProps} from "../Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const ${className}: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([\`\${IconClsPrefix}${item}\`,className])} style={style}/>
}
  `
  fs.writeFileSync(`./src-tmp/fill/${className}.tsx`, data);
  fs.appendFileSync(`./src-tmp/fill/index.ts`, `export * from "./${className}";\n`);
});
