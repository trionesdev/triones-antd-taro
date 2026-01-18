import React, { FC, useEffect } from 'react';
import { Textarea as TaroTextarea } from "@tarojs/components"
import { inputCls } from './types';
import classNames from 'classnames';

export type InputTextareaProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  rows?: number;
  value?: any;
  defaultValue?: any;
  onChange?: (e: any) => void;
};

export const Textarea: FC<InputTextareaProps> = ({
  className,
  style,
  placeholder,
  disabled,
  allowClear,
  rows,
  value,
  defaultValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = React.useState(value);
  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (value === internalValue) {
      return;
    }
    setInternalValue(value);
  }, [value]);
  return (
    <div className={classNames(`${inputCls}-textarea`, className)}
      style={style}>
      <TaroTextarea
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={internalValue}
        onInput={(e: any) => {
          setInternalValue(e.target.value);
          onChange?.(e.target.value);
        }}
      />
    </div>

  );
};
