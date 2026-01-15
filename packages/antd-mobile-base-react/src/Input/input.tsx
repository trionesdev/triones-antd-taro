import React, { FC, useEffect } from 'react';
import { SizeType } from "../types";
import { BaseInput } from './base-input';
import './index.scss';
import { InputAffixWrapper } from './input-affix-wrapper';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  size?: SizeType
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  defaultValue?: any;
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
  defaultValue,
  value,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState(value);

  useEffect(() => {
    if (value == undefined) {
      return
    }
    if (value !== innerValue) {
      setInnerValue(value);
    }
  }, [value])

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
          value={innerValue}
          onChange={onChange}
          onClear={() => {
            setInnerValue('')
          }}
        >
          <BaseInput
            {...rest}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            value={innerValue}
            onChange={(value) => {
              setInnerValue(value);
              onChange?.(value);
            }}
          />
        </InputAffixWrapper>
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
