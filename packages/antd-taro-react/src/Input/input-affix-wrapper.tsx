import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import {inputAffixWrapperCls, inputCls, variantType} from "./types";
import {CloseCircleFill} from '@trionesdev/antd-mobile-icons-react';

export type InputAffixWrapperProps = {
  style?: React.CSSProperties;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: variantType
  allowClear?: boolean;
  value?: any;
  onClear?: () => void;
};
export const InputAffixWrapper: FC<PropsWithChildren<InputAffixWrapperProps>> = ({
                                                                                   children,
                                                                                   style,
                                                                                   className,
                                                                                   prefix,
                                                                                   suffix,
                                                                                   variant,
                                                                                   allowClear,
                                                                                   value,

                                                                                   onClear,
                                                                                   ...rest
                                                                                 }) => {


  const innerStyle = style || {};

  return (
    <div className={classNames(inputAffixWrapperCls, {
      [`${inputCls}-${variant}`]: variant
    }, className)} style={innerStyle}>
      {prefix && (
        <div className={classNames([`${inputCls}-prefix`])}>{prefix}</div>
      )}
      {children}
      {(suffix || allowClear) && (
        <div className={classNames([`${inputCls}-suffix`])}>
          {allowClear && value && (
            <CloseCircleFill
              className="clear-icon"
              onClick={() => {
                onClear?.()
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
