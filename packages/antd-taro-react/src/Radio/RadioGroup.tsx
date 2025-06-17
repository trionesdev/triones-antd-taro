import classNames from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import {RadioGroupContext} from './GroupContext';
import {Radio} from './radio';
import {RadioButton} from './RadioButton';
import {classPrefix, RadioGroupProps} from './types';

export const RadioGroup: FC<RadioGroupProps> = ({
                                                  value,
                                                  onChange,
                                                  defaultValue,
                                                  children,
                                                  shape,
                                                  items,
                                                }) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? value);

  const handleCheck = (val: any) => {
    setInternalValue(val);
    onChange?.(val);
  };

  useEffect(() => {
    if (value !== undefined) {
      if (value !== internalValue) {
        setInternalValue(value);
      }
    }
  }, [value]);

  return (
    <RadioGroupContext.Provider
      value={{
        value: internalValue,
        handleCheck: handleCheck,
      }}
    >
      {shape === 'button' ? (
        <div className={classNames(`${classPrefix}-button-group`)}>
          {children ||
            items?.map((item) => {
              return (
                <RadioButton key={item.value} value={item.value}>
                  {item.label}
                </RadioButton>
              );
            })}
        </div>
      ) : (
        <div className={classNames(`${classPrefix}-group`)}>
          {children ||
            items?.map((item) => {
              return (
                <Radio key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              );
            })}
        </div>
      )}
    </RadioGroupContext.Provider>
  );
};
