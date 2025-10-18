import {CloseCircleFill} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';

export type InputAffixWrapperProps = {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  onClear?: () => void;
};
export const InputAffixWrapper: FC<PropsWithChildren<InputAffixWrapperProps>> = ({
  children,
  className,
  style,
  prefix,
  suffix,
  allowClear,
  value,
  onClear
}) => {

  const cls = 'triones-antm-input-affix-wrapper';
  const inputCls = 'triones-antm-input';
  return (
    <div className={classNames([cls])}>
      {prefix && (
        <div className={classNames([`${inputCls}-prefix`])}>{prefix}</div>
      )}
      {children}
      {(suffix || allowClear) && (
        <div className={classNames([`${inputCls}-suffix`])}>
          {allowClear && value && (
            <CloseCircleFill
              className="clear-icon"
              onClick={onClear}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
