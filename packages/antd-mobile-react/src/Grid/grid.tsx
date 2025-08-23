import React from 'react'
import type { FC, ReactNode } from 'react'
import { NativeProps, toCSSLength, withNativeProps } from '../utils/native-props'

import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = `triones-antm-grid`

export type GridProps = {
  columns: number
  gap?: number | string | [number | string, number | string]
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  }
  const { gap } = props
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0])
      style['--gap-vertical'] = toCSSLength(gap[1])
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }

  return withNativeProps(
    props,
    <div className={classPrefix} style={style}>
      {props.children}
    </div>
  )
}

export type GridItemProps = {
  span?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps


export const GridItem: FC<GridItemProps> = p => {
  const props = mergeProps({ span: 1 }, p) as GridItemProps


  return withNativeProps(
    props,
    <div
      className={`${classPrefix}-item`}
      style={{gridColumnEnd: `span ${props.span}`}}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
