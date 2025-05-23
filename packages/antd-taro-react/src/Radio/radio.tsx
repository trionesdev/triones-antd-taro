import { CheckOutline } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { RadioGroupContext } from './GroupContext';
import { RadioProps } from './types';

const classPrefix = `triones-antm-radio`;

export type RadioValue = string | number;

export const Radio: FC<RadioProps> = ({
  checked,
  defaultChecked,
  onChange,
  value,
  disabled,
  icon,
  children,
  onClick,
}) => {
  const groupContext = useContext(RadioGroupContext);
  const [internalChecked, setInternalChecked] = useState(
    checked ??
      defaultChecked ??
      groupContext.value ??
      groupContext?.defaultValue ??
      false,
  );
  const innerDisabled = useMemo(() => {
    return disabled ?? groupContext.disabled ?? false;
  }, [disabled, groupContext.disabled]);

  const handleClick = (e: any) => {
    setInternalChecked(!internalChecked);
    onChange?.(!internalChecked);
    groupContext?.handleCheck?.(value);
    onClick?.(e);
  };

  useEffect(() => {
    if (checked !== undefined) {
      if (checked !== internalChecked) {
        setInternalChecked(checked);
      }
    }
  }, [checked]);

  useEffect(() => {
    if (groupContext?.value !== undefined) {
      setInternalChecked(groupContext.value === value);
    }
  }, [groupContext?.value]);

  return (
    <label
      className={classNames(`${classPrefix}-wrapper`, {
        [`${classPrefix}-disabled`]: innerDisabled,
      })}
      onClick={handleClick}
    >
      <div className={classNames(`${classPrefix}`)}>
        <div className={classNames(`${classPrefix}-fake`)}>
          {icon?.(internalChecked) || (
            <>
              {internalChecked ? (
                <div className={`${classPrefix}-fake-checked`}>
                  <CheckOutline />
                </div>
              ) : (
                <div className={`${classPrefix}-fake-unchecked`}></div>
              )}
            </>
          )}
        </div>
      </div>
      <div className={classNames(`${classPrefix}-label`)}>{children}</div>
    </label>
  );
};
