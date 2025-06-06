import {defineConfig} from 'dumi';
import * as process from "node:process";

const apiParserEnable = process.env.NODE_ENV === 'production' || process.env.API_PARSER == 'true';

export default defineConfig({
  base: '/triones-antd-taro/',
  publicPath: '/triones-antd-taro/',
  outputPath: 'docs-dist',
  apiParser: apiParserEnable ? {} :false,
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
  },
  themeConfig: {
    name: 'Antd Taro',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/alert' }, // components会默认自动对应到src文件夹
    ],
    hd: { rules: [{ mode: 'vw', options: [100, 750] }] },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
    socialLinks: {
      github: 'https://github.com/trionesdev/triones-antd-taro',
      zhihu: 'https://www.ithere.net/',
    },
    footer:
      '<div><div>Copyright © 2015-present TrionesDev</div><div>友情链接： <a href="https://www.ithere.net/" target="_blank">书阙</a></div></div>',
  },
});
