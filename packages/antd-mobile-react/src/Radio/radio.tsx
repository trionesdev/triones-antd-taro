import { CheckOutline } from '../../../antd-mobile-icons-react';
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
  block,
  disabled,
  icon,
  children,
  labelPosition,
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
    if (internalChecked){
      return
    }
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

  const finalLabelPosition = useMemo(() => {
    return labelPosition ?? groupContext?.labelPosition ?? 'right';
  }, [labelPosition, groupContext?.labelPosition]);

  const fakeIcon = (
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
  );

  return (
    <label
      className={classNames(`${classPrefix}-wrapper`, {
        [`${classPrefix}-disabled`]: innerDisabled,
        [`${classPrefix}-block`]: block,
      })}
      onClick={handleClick}
    >
      {finalLabelPosition === 'right' && fakeIcon}
      <div className={classNames(`${classPrefix}-label`)}>{children}</div>
      {finalLabelPosition === 'left' && fakeIcon}
    </label>
  );
};
