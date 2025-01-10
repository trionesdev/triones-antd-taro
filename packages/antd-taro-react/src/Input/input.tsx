import classNames from 'classnames';
import React, { FC } from 'react';
import '../style/asset.scss';
import './index.scss';
import {CloseCircleFill} from "@trionesdev/antd-taro-icons-react";

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
}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const cls = 'triones-antm-input';
  return (
    <div className={classNames(cls, className)} style={style}>
      <div className={`${cls}-line`}>
        <div className={`${cls}-content`}>
          {prefix && <div className={`${cls}-prefix`}>{prefix}</div>}
          <div className={`${cls}-wrap`}>
            <input
              className={`${cls}-input`}
              placeholder={placeholder}
              type={type}
              value={innerValue}
              onChange={(e) => {
                setInnerValue(e.target.value);
                onChange?.(e);
              }}
            />
          </div>
          {(suffix || allowClear) && (
            <div className={`${cls}-suffix`}>
              {allowClear && innerValue && (
                <CloseCircleFill className="clear-icon" onClick={() => {
                  setInnerValue('');
                }}/>
              )}
              {suffix}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
