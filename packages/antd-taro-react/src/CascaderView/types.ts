import React from "react";

export type Column = {
  value: any
  options: ColumnOption[]
}
export type ColumnOption = {
  value?: string
  label?: React.ReactNode
  children?: ColumnOption[]
}
