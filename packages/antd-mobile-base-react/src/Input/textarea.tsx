import React, { FC, useEffect } from 'react';
import './index.scss';
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
    <textarea
      className={classNames(`${inputCls}-textarea`,className)}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      value={internalValue}
      onChange={(e) => {
        setInternalValue(e.target.value);
        onChange?.(e.target.value);
      }}
    />
  );
};
