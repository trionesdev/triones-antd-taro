import {BaseInput, BaseInputHandle} from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, {FC, useRef} from 'react';
import './index.scss';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
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
  disabled,
  allowClear,
  prefix,
  suffix,
  value,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef({} as BaseInputHandle);

  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          {...rest}
          className={className}
          style={style}
          prefix={prefix}
          suffix={suffix}
          allowClear={allowClear}
          value={innerValue}
          onClear={() => {
            baseInputRef?.current?.clear?.();
          }}
        >
          <BaseInput
            ref={baseInputRef}
            {...rest}
            value={value}
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
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return <>{handleRender()}</>;
};
