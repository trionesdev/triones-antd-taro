---
category: Components
title: Grid 栅格
subtitle: 栅格
description: 
group:
  title: 布局
  order: 2
---

# Grid 栅格

用于业务中多个子功能的导航。

## 何时使用

在具有推荐性质较强的页面中作为功能入口使用，例如首页。

## 示例

<code src="./demo/base.tsx"></code>

## Grid

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | `number` | - |
| gap | 格子之间的间距 | `number \| string \| [number \| string, number \| string]` | `0` |

### CSS 变量

| 属性             | 说明               | 默认值       | 全局变量 |
| ---------------- | ------------------ | ------------ | -------- |
| --gap            | 间距大小           | `0`          | -        |
| --gap-horizontal | 水平方向的间距大小 | `var(--gap)` | -        |
| --gap-vertical   | 垂直方向的间距大小 | `var(--gap)` | -        |

## Grid.Item

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |
| span | 跨度 | `number` | `1` |

### Grid 组件的兼容性说明

Grid 组件依赖了 CSS Grid 特性，所以兼容性标准是 iOS Safari >= 10.3 和 Chrome >= 57。
