---
category: Components
group:
  title: 信息展示
  order: 4
---
# Tag 标签


标签用于标记和分类。

## 示例

<code src="./demo/base.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 标签内容 | ReactNode | - |
| color | 标签色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline'` | `'solid'` |
| onClick | 点击事件 | `(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| round | 是否圆角 | `boolean` | `false` |
