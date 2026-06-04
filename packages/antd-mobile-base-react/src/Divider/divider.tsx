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
  contentPosition?: DividerContentPosition
  direction?: DividerDirection
}

const ComponentDefaults = {
  className: '',
  style: {},
}

const defaultProps: Required<Pick<DividerProps, 'contentPosition' | 'direction'>> = {
  ...ComponentDefaults,
  contentPosition: 'center',
  direction: 'horizontal',
}

const classPrefix = `triones-antm-divider`

export const Divider: FC<Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, contentPosition, style, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-vertical`]: direction === 'vertical',
      [`${classPrefix}-hairline`]: direction === 'horizontal',
      [`${classPrefix}-center`]: direction === 'horizontal' && !!children && contentPosition === 'center',
      [`${classPrefix}-left`]: direction === 'horizontal' && contentPosition === 'left',
      [`${classPrefix}-right`]: direction === 'horizontal' && contentPosition === 'right',
    },
    className
  )

  return (
    <div className={classes} style={style} role='separator' aria-orientation={direction} {...rest}>
      {children}
    </div>
  )
}
