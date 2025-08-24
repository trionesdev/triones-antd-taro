---
category: Components
group:
  title: 信息展示
  order: 4
---
# ProgressBar 进度条


进度条组件，用于显示任务的完成进度。

## 示例

<code src="./demo/base.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度百分比 | `number` | - |
| rounded | 是否为圆角 | `boolean` | `false` |
| text | 进度文本 | `boolean \| ReactNode \| ((percent: number) => ReactNode)` | - |

## CSS 变量

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| --fill-color | 填充的颜色 | `#1677ff` |
| --track-color | 线条的颜色 | `#e9ecef` |
| --track-width | 线条宽度 | `8px` |
| --text-width | 文字内容的宽度 | `40px` |
