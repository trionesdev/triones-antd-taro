import classNames from 'classnames';
import React, {forwardRef, useEffect, useState} from 'react';
import {inputCls} from "./types";

export type BaseInputProps = {
  className?: string;
  style?: React.CSSProperties;

  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  value?: any;
  onChange?: (e: any) => void;
};

export interface BaseInputHandle {

}

export const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
  ({className, style, placeholder, type, value, onChange, ...props}, ref) => {
    const [keySequence, setKeySequence] = useState(0)


    useEffect(() => {
      setKeySequence(keySequence + 1)
    }, [type]);

    return (
      <input key={keySequence}
             {...props}
             className={classNames([`${inputCls}`,  className])}
             style={style}
             placeholder={placeholder}
             type={type}
             value={value}
             onChange={(e) => {
               onChange?.(e.target.value);
             }}
      />
    );
  },
);
