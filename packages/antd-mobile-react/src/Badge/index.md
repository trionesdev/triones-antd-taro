---
category: Components
group:
  title: 反馈
  order: 6
---
# Badge 徽标

在右上角展示数字、文字、小红点。

## 何时使用

适用于产品化的新消息、新功能、新服务等内容的提醒，通过醒目视觉形式吸引用户处理。

## 示例

<code src="./demo/base.tsx"></code>

## Badge

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 显示的内容，支持数字、字符和自定义内容 | `ReactNode` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 是否为小点，当`value`值为自定义内容时，dot不生效 | `boolean` | `false` |
| top | 上下偏移量，支持单位设置，可设置为："0"或0 等 | `string` \| `number` | `"0"` |
| right | 左右偏移量，支持单位设置，可设置为："5"或5 等 | `string` \| `number` | `"5"` |
| color | 徽标背景颜色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` | `solid` |
