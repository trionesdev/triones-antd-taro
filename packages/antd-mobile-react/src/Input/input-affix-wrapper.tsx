import {CloseCircleFill} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, {FC, PropsWithChildren, useRef} from 'react';
import {BaseInputHandle, BaseInputProps} from './base-input';
import {inputAffixWrapperCls, inputCls, variantType} from "./types";

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: variantType
  allowClear?: boolean;
  onClear?: () => void;
};
export const InputAffixWrapper: FC<PropsWithChildren<InputAffixWrapperProps>> = ({
                                                                                   children,
                                                                                   prefix,
                                                                                   suffix,
                                                                                   variant = 'borderless',
                                                                                   allowClear,
                                                                                   value,
                                                                                   onChange,
                                                                                   onClear,
                                                                                   ...rest
                                                                                 }) => {


  const innerStyle = rest.style || {};

  return (
    <div className={classNames([inputAffixWrapperCls, {
      [`${inputCls}-${variant}`]: variant
    }, rest.className])} style={innerStyle}>
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
