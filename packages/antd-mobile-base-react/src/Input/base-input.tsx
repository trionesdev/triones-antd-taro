import classNames from 'classnames';
import React, {forwardRef, useEffect, useImperativeHandle, useMemo, useState} from 'react';
import {Size} from "../types";

export type BaseInputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  size?: Size
  value?: any;
  onChange?: (e: any) => void;
};

export interface BaseInputHandle {
  clear?: () => void;
}

export const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
  ({className, style, placeholder, type, size, value, onChange, ...props}, ref) => {
    const [keySequence, setKeySequence] = useState(0)
    const [innerValue, setInnerValue] = useState(value || '');
    const innerStyle = style || {};

    innerStyle.height = useMemo(() => {
      switch (size) {
        case 'small':
          return 24;
        case 'middle':
          return 32;
        case 'large':
          return 48;
      }
    }, [size])

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';


    useEffect(() => {
      setKeySequence(keySequence + 1)
    }, [type]);

    useEffect(() => {
      if (value === undefined) {
        return;
      }
      if (value === innerValue) {
        return;
      }
      setInnerValue(value);
    }, [value]);

    return (
      <input key={keySequence}
             {...props}
             className={classNames([`${cls}`, className])}
             style={innerStyle}
             placeholder={placeholder}
             type={type}
             value={innerValue}
             onChange={(e) => {
               setInnerValue(e.target.value);
               onChange?.(e);
             }}
      />
    );
  },
);
