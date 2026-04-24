import React, {FC, PropsWithChildren} from "react"
import classNames from "classnames";
import {RightOutline} from "@trionesdev/antd-mobile-icons-react";
import {AntSize} from "../types";
import ConfigProvider from "../ConfigProvider";
import {mergeProp} from "../utils/with-default-props";

export type VariantType = 'outlined' | 'borderless' | 'filled' | 'underlined' | undefined

export type FormCellProps = {
  className?: string
  style?: React.CSSProperties
  styles?: {
    root?: React.CSSProperties;
    content?: React.CSSProperties;
    extra?: React.CSSProperties;
    arrow?: React.CSSProperties;
  }
  size?: AntSize
  variant?: VariantType
  placeholder?: string
  onClick?: () => void
  extra?: React.ReactNode;
  arrow?: boolean | React.ReactNode;
  align?: 'start' | 'center' | 'end'
}

const cls = 'triones-antm-form-cell';
const defaultArrowIcon = <RightOutline/>

export const FormCell: FC<PropsWithChildren<FormCellProps>> = ({
                                                                 className,
                                                                 style,
                                                                 styles,
                                                                 children,
                                                                 size = 'middle',
                                                                 variant = 'borderless',
                                                                 placeholder,
                                                                 extra,
                                                                 arrow = false,
                                                                 align = 'left',
                                                                 onClick,
                                                               }) => {
  const {form: componentConfig = {}} = ConfigProvider.useConfig()
  const mergedArrow = (() => {
    if (arrow === false || arrow === undefined || arrow === null) return null
    if (arrow === true) {
      return mergeProp<React.ReactNode>(defaultArrowIcon, componentConfig.arrowIcon)
    }
    return arrow
  })()

  return <div className={classNames(`${cls}`, `${cls}-${align}`, `${cls}-${size}`, `${cls}-${variant}`, className)}
              style={{...style, ...styles?.root}}
              onClick={onClick}>
    <div className={classNames(`${cls}-content`)} style={styles?.content}>
      {children ||
        (placeholder && (
          <div className={classNames(`${cls}-placeholder`)}>
            {placeholder}
          </div>
        ))}
    </div>
    {extra && <div className={classNames(`${cls}-extra`)} style={styles?.extra}>
      {extra}
    </div>}
    {mergedArrow && <div className={classNames(`${cls}-arrow`)} style={styles?.arrow}>
      {mergedArrow}
    </div>}
  </div>
}
