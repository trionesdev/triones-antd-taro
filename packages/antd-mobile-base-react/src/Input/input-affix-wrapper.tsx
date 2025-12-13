import {CloseCircleFill} from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, {FC, useMemo, useRef} from 'react';
import {BaseInput, BaseInputHandle, BaseInputProps} from './base-input';

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
};
export const InputAffixWrapper: FC<InputAffixWrapperProps> = ({
                                                                prefix,
                                                                suffix,
                                                                allowClear,
                                                                value,
                                                                onChange,
                                                                ...rest
                                                              }) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef({} as BaseInputHandle);
  const cls = 'triones-antm-input-affix-wrapper';
  const inputCls = 'triones-antm-input';

  const innerStyle = rest.style || {};

  innerStyle.height = useMemo(() => {
    switch (rest.size) {
      case 'small':
        return 24;
      case 'middle':
        return 32;
      case 'large':
        return 48;
    }
  }, [rest.size])

  return (
    <div className={classNames([cls])} style={innerStyle}>
      {prefix && (
        <div className={classNames([`${inputCls}-prefix`])}>{prefix}</div>
      )}
      <BaseInput
        ref={baseInputRef}
        {...rest}
        value={value}
        onChange={(value) => {
          setInnerValue(value);
          onChange?.(value);
        }}
      />
      {(suffix || allowClear) && (
        <div className={classNames([`${inputCls}-suffix`])}>
          {allowClear && innerValue && (
            <CloseCircleFill
              className="clear-icon"
              onClick={() => {
                baseInputRef.current.clear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
