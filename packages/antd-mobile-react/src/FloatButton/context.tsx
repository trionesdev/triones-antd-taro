import React from 'react'

export type FloatButtonGroupContextValue = {
  /** 是否在 FloatButton.Group 内（组内子按钮不使用 fixed 定位） */
  inGroup: boolean
  /** 组级 shape，覆盖子项 */
  shape?: 'circle' | 'square'
  /** 与 antd 一致：circle 组为 true */
  individual?: boolean
  right?: number
  bottom?: number
  zIndex?: number
}

export const FloatButtonGroupContext =
  React.createContext<FloatButtonGroupContextValue | null>(null)
