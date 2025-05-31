import classNames from 'classnames'
import type {CSSProperties, FC, ReactNode} from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useConfig } from '../ConfigProvider'
import { mergeProp, mergeProps } from '../utils/with-default-props'
import { LeftOutline } from '@trionesdev/antd-taro-icons-react'

import './style.scss'

const classPrefix = `triones-antm-nav-bar`

export type NavBarProps = {
  back?: ReactNode
  backIcon?: boolean | ReactNode
  /**
   * @deprecated use `backIcon` instead
   */
  backArrow?: boolean | ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
  children?: ReactNode,
  style?: CSSProperties
}

const defaultBackIcon = <LeftOutline />

export const NavBar: FC<NavBarProps> = props => {
  const { navBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const { back, backIcon, backArrow } = mergedProps

  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon

  const mergedBackIcon = mergeProp<ReactNode>(
    defaultBackIcon,
    componentConfig.backIcon,
    backArrow === true ? mergedDefaultBackIcon : backArrow,
    backIcon === true ? mergedDefaultBackIcon : backIcon
  )

  return withNativeProps(
    mergedProps,
    <div className={classNames(classPrefix)}>
      <div className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <div className={`${classPrefix}-back`} onClick={mergedProps.onBack}>
            {mergedBackIcon && (
              <span className={`${classPrefix}-back-arrow`}>
                {mergedBackIcon}
              </span>
            )}
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {mergedProps.left}
      </div>
      <div className={`${classPrefix}-title`}>{mergedProps.children}</div>
      <div className={`${classPrefix}-right`}>{mergedProps.right}</div>
    </div>
  )
}
