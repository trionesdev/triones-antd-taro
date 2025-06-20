import { defineConfig } from 'dumi';

import * as process from 'node:process';
import pkgJSON from './package.json';

const apiParserEnable =
  process.env.NODE_ENV === 'production' || process.env.API_PARSER == 'true';

export default defineConfig({
  base: '/triones-antd-taro/',
  publicPath: '/triones-antd-taro/',
  outputPath: 'docs-dist',
  apiParser: apiParserEnable ? {} : false,
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
  },
  define: {
    'process.env.TARO_PLATFORM': 'web', //解决taro-runtime 4.0.9 之后，验证平台类型的错误
  },
  themeConfig:{
    name: 'Antd Taro',
    hd: { rules: [{ mode: 'vw', options: [100, 750] }] },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
    nav: [
      { title: '指南', link: '/guide/guide' },
      { title: '组件', link: '/components/overview' },
    ],
    footer:
      '<div><div>Copyright © 2015-present TrionesDev</div><div>友情链接： <a href="https://www.ithere.net/" target="_blank">书阙</a></div></div>',
    github: 'https://github.com/trionesdev/triones-antd-taro',
    sidebarGroupModePath: ['/guide', '/components'],
    title: 'Antd Taro',
    description: 'Antd Taro 官方文档',
    rtl: false,
    actions: [
      {
        type: 'primary',
        text: '开始使用',
        link: '/guide/guide',
      },
      {
        text: '组件',
        link: '/components/overview',
      },
    ],
    features: [
      {
        title: '内置全文搜索',
        details:
          '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。',
      },
      {
        title: '更好的编译性能',
        details:
          '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。',
      },
      {
        title: 'SSR',
        details:
          '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。',
      },
      {
        title: '样式风格统一',
        details:
          '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。',
      },
      {
        title: '功能增强',
        details:
          '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。',
      },
      {
        title: '开箱即用',
        details:
          '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。',
      },
    ],
    loading: {
      skeleton: ['/guide'],
    },
    docVersions: {
      [pkgJSON.version]: '',
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true,
          },
          {
            title: 'Ant Design',
            description: '企业级React组件库',
            url: 'https://ant.design',
            openExternal: true,
          },
        ],
      },
      {
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/trionesdev/triones-antd-taro',
            openExternal: true,
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181704-d443821a-38a2-490a-9aba-4955ceb8d89b.png',
            title: '常见问题',
            url: 'https://github.com/trionesdev/triones-antd-taro/issues',
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
            title: '报告 Bug',
            url: 'https://github.com/trionesdev/triones-antd-taro/issues/new',
            openExternal: true,
          },
        ],
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '书阙',
            url: 'https://www.ithere.net/',
            description: '构建你的数字花园',
            openExternal: true,
          },
        ],
      },
    ],
  }
});
