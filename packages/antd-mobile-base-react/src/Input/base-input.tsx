import classNames from 'classnames';
import React, {forwardRef, useEffect, useImperativeHandle, useMemo, useState} from 'react';
import {SizeType} from "../types";

export type BaseInputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  size?: SizeType
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
             className={classNames([`${cls}`,{
               [`${cls}-sm`]: size === 'small',
               [`${cls}-lg`]: size === 'large',
             }, className])}
             style={style}
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
