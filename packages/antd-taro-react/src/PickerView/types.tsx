import React from "react";

export const pickerViewCls = "triones-antm-picker-view";

export type PickerColumnOption = {
  label?: React.ReactNode, value?: any
}

export type PickerViewProps = {
  className?: string
  style?: React.CSSProperties

  columns?: PickerColumnOption[][]
  height?: number
  labelInValue?: boolean
  value?: any[]
  onChange?: (value: any[]) => void
}
