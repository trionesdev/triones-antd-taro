import {CloseCircleFill} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, {FC, PropsWithChildren, useRef} from 'react';
import {BaseInputHandle, BaseInputProps} from './base-input';
import {inputAffixWrapperCls, inputCls} from "./types";

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
};
export const InputAffixWrapper: FC<PropsWithChildren<InputAffixWrapperProps>> = ({
                                                                                   children,
                                                                                   size = 'middle',
                                                                                   prefix,
                                                                                   suffix,
                                                                                   allowClear,
                                                                                   value,
                                                                                   onChange,
                                                                                   ...rest
                                                                                 }) => {
  const baseInputRef = useRef({} as BaseInputHandle);


  const innerStyle = rest.style || {};

  return (
    <div className={classNames([inputAffixWrapperCls, {
      [`${inputAffixWrapperCls}-sm`]: size === 'small',
      [`${inputAffixWrapperCls}-md`]: size === 'middle',
      [`${inputAffixWrapperCls}-lg`]: size === 'large',
    }])} style={innerStyle}>
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
                baseInputRef.current.clear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
