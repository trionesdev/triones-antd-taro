import React, {FC, useEffect} from 'react';
import './index.scss';
import {inputCls, variantType} from './types';
import classNames from 'classnames';

export type InputTextareaProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  variant?: variantType
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
                                                   variant = 'borderless',
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
      className={classNames(`${inputCls}-textarea`, {
        [`${inputCls}-${variant}`]: variant,
      }, className)}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      value={internalValue}
      onInput={(e: any) => {
        setInternalValue(e.target.value);
        onChange?.(e.target.value);
      }}
    />
  );
};
