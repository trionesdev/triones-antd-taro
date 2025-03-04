import React from "react";

export type Column = {
  value?: ColumnOption | null
  options?: ColumnOption[]
}
export type ColumnOption = {
  value?: string
  label?: React.ReactNode
  children?: ColumnOption[]
}
