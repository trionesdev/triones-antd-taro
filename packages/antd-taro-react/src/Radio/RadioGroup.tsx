import React, {FC, useState} from 'react';
import {RadioGroupContext} from './GroupContext';
import {Radio} from "./radio";
import {RadioGroupProps} from "./types";


export const RadioGroup: FC<RadioGroupProps> = ({
                                             value,
                                             onChange,
                                             defaultValue,
                                             children,
                                             shape,
                                             items
                                           }) => {

  const [internalValue, setInternalValue] = useState(defaultValue ?? value);

  const handleCheck = (val: any) => {
    setInternalValue(val)
    onChange?.(val)
  }

  return (
    <RadioGroupContext.Provider

      value={{
        value: internalValue,
        handleCheck: handleCheck
      }}
    >
      <div>
        {children || items?.map(item => {
          return <Radio key={item.value} value={item.value} shape={shape}>{item.label}</Radio>
        })}
      </div>
    </RadioGroupContext.Provider>
  );
};
