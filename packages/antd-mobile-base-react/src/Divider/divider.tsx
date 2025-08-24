import React, { FC } from 'react'
import classNames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'
import './style.scss'

interface BasicComponent {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  id?: string
}

export type DividerContentPosition = 'left' | 'center' | 'right'
export type DividerDirection = 'horizontal' | 'vertical'

export interface DividerProps extends BasicComponent {
  contentPosition: DividerContentPosition
  direction?: DividerDirection
}

const ComponentDefaults = {
  className: '',
  style: {},
}

const defaultProps = {
  ...ComponentDefaults,
  contentPosition: 'center',
  direction: 'horizontal',
} as DividerProps

const classPrefix = `triones-antm-divider`

export const Divider: FC<Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const classes =
    direction === 'horizontal'
      ? classNames({
        [`${classPrefix}`]: true,
        [`${classPrefix}-center`]: children,
        [`${classPrefix}-left`]: contentPosition === 'left',
        [`${classPrefix}-right`]: contentPosition === 'right',
        [`${classPrefix}-hairline`]: true,
      })
      : classNames({
        [`${classPrefix}`]: true,
        [`${classPrefix}-vertical`]: direction === 'vertical',
      })
  return (
    <div className={`${classes} ${className || ''}`} style={style} {...rest}>
      {children}
    </div>
  )
}
