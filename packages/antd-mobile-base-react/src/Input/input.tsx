import {BaseInput} from './base-input';
import {InputAffixWrapper} from './input-affix-wrapper';
import React, {FC} from 'react';
import './index.scss';
import {Size} from "../types";

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  size?: Size
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: any;
  onChange?: (e: any) => void;
};
export const Input: FC<InputProps> = ({
                                        className,
                                        style,
                                        placeholder,
                                        type,
                                        size = 'middle',
                                        disabled,
                                        allowClear,
                                        prefix,
                                        suffix,
                                        value,
                                        onChange,
                                        ...rest
                                      }) => {

  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          {...rest}
          className={className}
          style={style}
          size={size}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          allowClear={allowClear}
          type={type}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <BaseInput
          {...rest}
          className={className}
          style={style}
          placeholder={placeholder}
          type={type}
          size={size}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return <>{handleRender()}</>;
};
