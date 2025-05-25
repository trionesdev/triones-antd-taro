import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { CheckboxGroupContext } from './group-context';
import { CheckboxGroupProps, cls } from './types';

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  value,
  defaultValue,
  onChange,
  children,
}) => {
  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? []);

  return (
    <CheckboxGroupContext.Provider
      value={{
        value: innerValue,
        handleCheck: (v) => {
          setInnerValue(v);
          onChange?.(v);
        },
      }}
    >
      <div className={classNames(`${cls}-group}`)}>{children}</div>
    </CheckboxGroupContext.Provider>
  );
};
