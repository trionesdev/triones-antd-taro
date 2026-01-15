import {BaseInput, BaseInputHandle} from './base-input';
import {InputAffixWrapper} from './input-affix-wrapper';
import React, {FC, useEffect, useRef} from 'react';
import './index.scss';
import {SizeType} from "../types";

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
  const baseInputRef = useRef({} as BaseInputHandle);

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
            ref={baseInputRef}
            {...rest}
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
