import classNames from 'classnames'
import type {FC, ReactNode} from 'react'
import React, {useState} from 'react'
import {toCSSLength, withNativeProps} from '../utils/native-props'
import {mergeProps} from '../utils/with-default-props'
import ConfigProvider from '../ConfigProvider'
import './style.scss'
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";

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
  checkedColor?: string
  width?: number
  height?: number
}

const defaultProps = {
  defaultChecked: false,
}

export function createSvgStr(props: { stroke: string }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 20 20">
            <circle r="9" cx="10" cy="10"
                stroke-width="1"
                stroke="${props.stroke}"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="${10 * 3.14159265358979 * 2}"
                stroke-dashoffset="${10 * 3.14159265358979 * 0.5}"></circle>
        </svg>`;
}

export const Switch: FC<SwitchProps> = (p) => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading || false
  const [changing, setChanging] = useState(false)
  const [checked, setChecked] = useState(props.checked ?? props.defaultChecked)
  const {locale} = ConfigProvider.useConfig()

  const handleClick = async () => {
    setChecked(!checked)
  }

  const completedStyle: any = React.useMemo(() => {
    const maskImageSvg = createSvgStr({stroke: '#1677ff'});
    const style: any = {
      '--maskImage': `url(data:image/svg+xml;base64,${Base64.stringify(Utf8.parse(maskImageSvg))})`,
    };
    if (props.checkedColor) {
      style['--checked-color'] = props.checkedColor;
    }
    if (props.width){
      style['--width'] = toCSSLength(props.width);
    }
    if (props.height){
      style['--height'] = toCSSLength(props.height);
    }
    return style;
  }, []);

  return withNativeProps(
    props,
    <div
      onClick={handleClick}
      className={classNames(classPrefix, p.className, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled || changing,
      })}
      style={{...p.style,...completedStyle}}
      role='switch'
      aria-label={locale.Switch.name}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <div className={`${classPrefix}-checkbox`}>
        <div
          className={classNames(`${classPrefix}-handle`)} >
          {(props.loading || changing) ? <div className={`${classPrefix}-handle-loading`}/> : null}
        </div>
        <div className={`${classPrefix}-inner`}>
          {checked ? props.checkedText : props.uncheckedText}
        </div>
      </div>
    </div>
  )
}
