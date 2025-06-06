import classNames from 'classnames'
import React, {useState} from 'react'
import type {FC, ReactNode} from 'react'
import {SpinIcon} from './spin-icon'
import {NativeProps, withNativeProps} from '../utils/native-props'
import {mergeProps} from '../utils/with-default-props'
import {useConfig} from '../ConfigProvider'
import {usePropsValue} from '../utils/use-props-value'
import {isPromise} from '../utils/validate'

import './style.scss'

const classPrefix = `triones-antm-switch`

export type SwitchProps = {
  className?: string,
  style?: React.CSSProperties
  loading?: boolean
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  /** @deprecated use `onChange` instead */
  beforeChange?: (val: boolean) => Promise<void>
  onChange?: (checked: boolean) => void | Promise<void>
  checkedText?: ReactNode
  uncheckedText?: ReactNode
} & NativeProps<'--checked-color' | '--width' | '--height' | '--border-width'>

const defaultProps = {
  defaultChecked: false,
}

export const Switch: FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false
  const [changing, setChanging] = useState(false)
  const {locale} = useConfig()

  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  })

  async function onClick() {
    if (disabled || props.loading || changing) {
      return
    }
    const nextChecked = !checked
    if (props.beforeChange) {
      setChanging(true)
      try {
        await props.beforeChange(nextChecked)
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
    const result = setChecked(nextChecked)
    if (isPromise(result)) {
      setChanging(true)
      try {
        await result
        setChanging(false)
      } catch (e) {
        setChanging(false)
        throw e
      }
    }
  }

  return withNativeProps(
    props,
    <div
      onClick={onClick}
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
