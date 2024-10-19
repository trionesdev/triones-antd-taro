// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      compiler: 'webpack5',
    }],
    ['@wyw-in-js', {displayName: true}],
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@trionesdev/antd-taro-react",
        "libraryDirectory": "es",
        "style": true,
        "camel2DashComponentName": false
      },
      'antd-taro-react'
    ]
  ]
}
