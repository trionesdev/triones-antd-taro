import classNames from 'classnames'
import type {FC, ReactNode} from 'react'
import React, {useState} from 'react'
import {SpinIcon} from './spin-icon'
import {withNativeProps} from '../utils/native-props'
import {mergeProps} from '../utils/with-default-props'
import ConfigProvider from '../ConfigProvider'


import './style.scss'

const classPrefix = `triones-antm-switch`

export type SwitchProps = {
  className?: string,
  style?: React.CSSProperties
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void | Promise<void>
  checkedText?: ReactNode
  uncheckedText?: ReactNode
}

const defaultProps = {
  defaultChecked: false,
}

export const Switch: FC<SwitchProps> = (p) => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false
  const [changing, setChanging] = useState(false)
  const [checked, setChecked] = useState(props.checked ?? props.defaultChecked)
  const {locale} = ConfigProvider.useConfig()

  const handleClick = async () => {
  }

  return withNativeProps(
    props,
    <div
      onClick={handleClick}
      className={classNames(classPrefix, p.className, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled || changing,
      })}
      style={p.style}
      role='switch'
      aria-label={locale.Switch.name}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <div className={`${classPrefix}-checkbox`}>
        <div className={`${classPrefix}-handle`}>
          {(props.loading || changing) && (
            <SpinIcon className={`${classPrefix}-spin-icon`}/>
          )}
        </div>
        <div className={`${classPrefix}-inner`}>
          {checked ? props.checkedText : props.uncheckedText}
        </div>
      </div>
    </div>
  )
}
