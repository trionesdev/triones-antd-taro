import classNames from 'classnames'
import type {CSSProperties, FC, ReactNode} from 'react'
import React from 'react'
import { withNativeProps } from '../utils/native-props'
import ConfigProvider from '../ConfigProvider'
import { mergeProp, mergeProps } from '../utils/with-default-props'
import { LeftOutline } from '../../../antd-mobile-icons-react'

import './style.scss'

const classPrefix = `triones-antm-nav-bar`

export type NavBarProps = {
  /**
   * @description 返回区域的文字，如果为 `null` 的话，`backIcon` 也不会渲染
   */
  back?: ReactNode
  /**
   * @description 是否显示返回区域的箭头，也可以传入 `ReactNode` 进行自定义
   * @default true
   */
  backIcon?: boolean | ReactNode
  /**
   * @description 左侧内容，渲染在返回区域的右侧
   */
  left?: ReactNode
  /**
   * @description 右侧内容
   */
  right?: ReactNode
  /**
   * @description 点击返回区域后的回调
   */
  onBack?: () => void
  /**
   * @description 标题
   */
  children?: ReactNode,
  style?: CSSProperties
}

const defaultBackIcon = <LeftOutline />

export const NavBar: FC<NavBarProps> = props => {
  const { navBar: componentConfig = {} } = ConfigProvider.useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const { back, backIcon } = mergedProps

  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon

  const mergedBackIcon = mergeProp<ReactNode>(
    defaultBackIcon,
    componentConfig.backIcon,
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
