import React, {FC, PropsWithChildren} from "react"
import classNames from "classnames";
import {RightOutline} from "@trionesdev/antd-mobile-icons-react";

type FormCellProps = {
  className?: string
  style?: React.CSSProperties
  styles?: {
    root?: React.CSSProperties;
    content?: React.CSSProperties;
    extra?: React.CSSProperties;
    arrow?: React.CSSProperties;
  }
  size?: 'small' | 'large' | 'middle'
  placeholder?: string
  onClick: () => void
  extra?: React.ReactNode;
  arrow?: boolean;
  align?: 'left' | 'center' | 'right'
}

const cls = 'triones-antm-form-cell';

export const FormCell: FC<PropsWithChildren<FormCellProps>> = ({
                                                                 className,
                                                                 style,
                                                                 styles,
                                                                 children,
                                                                 size = 'middle',
                                                                 placeholder,
                                                                 extra,
                                                                 arrow = false,
                                                                 align = 'left',
                                                                 onClick,
                                                               }) => {
  return <div className={classNames(`${cls}`, `${cls}-${align}`, `${cls}-${size}`, className)}
              style={{...style, ...styles?.root}}
              onClick={onClick}>
    <div className={classNames(`${cls}-content`, {})} style={styles?.content}>
      {children ||
        (placeholder && (
          <div className={classNames(`${cls}-placeholder`)}>
            {placeholder}
          </div>
        ))}
    </div>
    <div className={classNames(`${cls}-extra`)} style={styles?.extra}>
      {extra}
    </div>
    {arrow && <div className={classNames(`${cls}-arrow`)} style={styles?.arrow}>
      <RightOutline/>
    </div>}
  </div>
}
