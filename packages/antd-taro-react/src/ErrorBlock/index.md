# ErrorBlock 异常

使用场景插画表示页面异常。

## 何时使用

适用于六种异常场景的反馈提示。

## ErrorBlock

### 示例

<code src="./demo/base.tsx"></code>

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 描述 | `ReactNode` | - |
| fullPage | 是否为整页异常 | `boolean` | `false` |
| image | 图片 | `string \| ReactElement` | - |
| status | 默认错误类型 | `'default' \| 'disconnected' \| 'empty' \| 'busy'` | `'default'` |
| title | 标题 | `ReactNode` | - |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --image-height | 图片的高度 | `100px` | `--triones-antm-error-block-image-height` |
| --image-height-full-page | 整页模式下的图片高度 | `200px` | `--triones-antm-error-block-image-height-full-page` |
| --image-width | 图片的宽度 | `auto` | `--triones-antm-error-block-image-width` |
| --image-width-full-page | 整页模式下的图片宽度 | `auto` | `--triones-antm-error-block-image-width-full-page` |

## createErrorBlock

`ErrorBlock` 组件用起来非常简单，但是它不可避免的带来了一个问题：由于我们不知道你会用到哪些 `status`，所以我们只能把四种状态下的图片资源都打包进来，这会带来一些包体积上的问题。

为了能够尽可能少的引入资源，我们提供了一个工具函数 `createErrorBlock`，你可以使用它来创建一个定制化的 `ErrorBlock` 组件，其中只包含你需要的素材。

它的类型定义是：

```ts
declare function createErrorBlock(imageRecord: ImageRecord): React.ComponentType

type ImageRecord = Partial<Record<ErrorBlockStatus, string | ReactNode>>
type ErrorBlockStatus = 'default' | 'disconnected' | 'empty' | 'busy'
```
