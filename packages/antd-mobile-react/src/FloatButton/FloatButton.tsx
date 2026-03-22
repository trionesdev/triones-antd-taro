import classNames from 'classnames'
import React, {FC, useContext} from 'react'
import {Badge} from '@trionesdev/antd-mobile-base-react'
import type {BadgeProps} from '@trionesdev/antd-mobile-base-react'
import {FloatButtonGroupContext} from './context'
import './style.scss'
import {AddOutline} from '@trionesdev/antd-mobile-icons-react'


export type FloatButtonProps = {
  icon?: React.ReactNode
  /** 文字等内容；仅建议在 `shape="square"` 时使用 */
  content?: React.ReactNode

  type?: 'primary' | 'default'
  shape?: 'circle' | 'square'
  onClick?: (e: any) => void
  href?: string
  target?: string
  htmlType?: 'button' | 'submit' | 'reset'
  badge?: Partial<BadgeProps>
  className?: string
  style?: React.CSSProperties
  right?: number
  bottom?: number
  zIndex?: number
}

const cls = 'triones-antm-float-button'

export const FloatButton: FC<FloatButtonProps> = ({
                                                    icon,
                                                    content,

                                                    type = 'default',
                                                    shape = 'circle',
                                                    onClick,
                                                    href,
                                                    target,
                                                    htmlType = 'button',
                                                    badge,
                                                    className,
                                                    style,
                                                    right,
                                                    bottom,
                                                    zIndex,
                                                  }) => {
  const groupCtx = useContext(FloatButtonGroupContext)
  const mergedShape = groupCtx?.shape ?? shape
  const mergedContent = content
  const mergedIcon = icon ?? <AddOutline/>
  const mergedRight = right ?? 24
  const mergedBottom = bottom ?? 24
  const mergedZIndex = zIndex ?? 100

  const rootClass = classNames(
    cls,
    `${cls}--type-${type}`,
    `${cls}--shape-${mergedShape}`,
    {
      [`${cls}--embedded`]: groupCtx?.inGroup,
      [`${cls}--has-content`]:
        mergedShape === 'square' && mergedContent != null && mergedContent !== false,
    },
    className
  )

  const inner = (
    <>
      {mergedIcon ? <span className={`${cls}-icon`}>{mergedIcon}</span> : null}
      {mergedShape === 'square' && mergedContent ? (
        <span className={`${cls}-content`}>{mergedContent}</span>
      ) : null}
    </>
  )

  const interactive = href ? (
    <a
      className={`${cls}-body`}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
    >
      {inner}
    </a>
  ) : (
    <button
      type={htmlType}
      className={`${cls}-body`}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {inner}
    </button>
  )

  const withBadge =
    badge != null && Object.keys(badge).length > 0 ? (
      <Badge {...badge}>{interactive}</Badge>
    ) : (
      interactive
    )

  return (
    <div className={rootClass}
         style={{
           zIndex: groupCtx?.inGroup ? undefined : mergedZIndex,
           right: groupCtx?.inGroup ? undefined : `${mergedRight}Px`,
           bottom: groupCtx?.inGroup ? undefined : `calc(${mergedBottom}Px + env(safe-area-inset-bottom, 0px))`, ...style
         }}>
      {withBadge}
    </div>
  )
}
