import {defineConfig} from 'dumi';

export default defineConfig({
  base: '/triones-antd-taro/',
  publicPath: '/triones-antd-taro/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Triones UI',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/avatar' }, // components会默认自动对应到src文件夹
    ],
    hd: { rules: [{ mode: 'vw', options: [100, 750] }] },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
});
