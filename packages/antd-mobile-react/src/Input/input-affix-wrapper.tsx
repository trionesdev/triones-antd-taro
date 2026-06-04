import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import { BaseInputProps } from './base-input';
import { inputAffixWrapperCls, inputCls, variantType } from './types';
import {AntSize} from "@trionesdev/antd-mobile-base-react";
import {CloseCircleFill} from "@trionesdev/antd-mobile-icons-react";

export type InputAffixWrapperProps = BaseInputProps & {
  size?:AntSize,
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: variantType;
  allowClear?: boolean;
  onClear?: () => void;
};
export const InputAffixWrapper: FC<
  PropsWithChildren<InputAffixWrapperProps>
> = ({
  children,
  size,
  prefix,
  suffix,
  variant = 'borderless',
  allowClear,
  value,
  onClear,
  ...rest
}) => {
  const innerStyle = rest.style || {};

  return (
    <div
      className={classNames([
        inputAffixWrapperCls,
        `${inputAffixWrapperCls}-${size}`,
        {
          [`${inputCls}-${variant}`]: variant,
        },

        rest.className,
      ])}
      style={innerStyle}
    >
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
                onClear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
