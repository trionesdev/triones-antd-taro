---
category: Components
group:
  title: 信息展示
  order: 4
---

# Avatar 头像

标签用于标记和分类。

## 示例

<code src="./demo/base.tsx"></code>

## API

| 参数   | 说明                             | 类型                                                                        | 默认值    |
| ------ | -------------------------------- | --------------------------------------------------------------------------- | --------- |
| alt    | 图像无法显示时的替代文本         | string                                                                      | -         |
| icon   | 设置头像的自定义图标             | ReactNode                                                                   | -         |
| shape  | 指定头像的形状                   | circle \| square                                                            | ''        |
| size   | 设置头像的大小                   | number \| 'large' \| 'small' \| 'default' \| { xs: number, sm: number, ...} | 'default' |
| src    | 图片类头像的资源地址或者图片元素 | string \| ReactNode                                                         | -         |
| srcSet | 设置图片类头像响应式资源地址     | string                                                                      | -         |
