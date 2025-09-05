---
category: Components
group:
  title: 数据录入
  order: 5
---
# Rate 评分


评分组件，支持选择星级。

## 示例

<code src="./demo/base.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 评分值 | `number` | - |
| defaultValue | 默认评分值 | `number` | `0` |
| count | 评分总数 | `number` | `5` |
| allowHalf | 是否允许半星 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `true` |
| readonly | 是否只读 | `boolean` | `false` |
| size | 星星大小 | `number` | `20` |
| character | 自定义字符 | `React.ReactNode` | - |
| onChange | 评分改变时的回调 | `(value: number) => void` | - |

## CSS 变量

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| --active-color | 选中时的颜色 | `#ffb400` |
| --inactive-color | 未选中时的颜色 | `#e8e8e8` |
