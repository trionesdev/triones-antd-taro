# Card 卡片

通用卡片容器。

## 何时使用

可承载文字、列表、图片、段落等，便于用户浏览内容。

## 示例

<code src="./demo/base.tsx"></code>

## Card

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bodyClassName | body 自定义类名 | `string` | - |  |
| bodyStyle | body 自定义样式 | `React.CSSProperties` | - |  |
| extra | header 右边区域 | `ReactNode` | - |  |
| headerClassName | header 自定义类名 | `string` | - |  |
| headerStyle | header 自定义样式 | `React.CSSProperties` | - |  |
| icon | header 左边图标 | `ReactNode` | - | 5.38.0 |
| onBodyClick | body 区域点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| onClick | 卡片点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| onHeaderClick | header 区域点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| title | header 左边区域 | `ReactNode` | - |  |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 | 版本 |
| --- | --- | --- | --- | --- |
| `--triones-antm-card-border-radius` | 圆角大小 | `8px` | `--triones-antm-card-border-radius` |  |
| `--triones-antm-card-padding-inline` | 水平内边距 | `12px` | `--triones-antm-card-padding-inline` |  |
| `--triones-antm-card-header-border-width` | header 分割线宽度 | `0.5px` | `--triones-antm-card-header-border-width` |  |
| `--triones-antm-card-header-border-color` | header 分割线颜色 | `var(--triones-antm-color-border)` | `--triones-antm-card-header-border-color` |  |
| `--triones-antm-card-header-gap` | header 水平间隙 | `8px` | `--triones-antm-card-header-gap` | 5.38.0 |
| `--triones-antm-card-header-padding-block` | header 垂直内边距 | `12px` | `--triones-antm-card-header-padding-block` |  |
| `--triones-antm-card-body-padding-block` | body 垂直内边距 | `12px` | `--triones-antm-card-body-padding-block` |  |
