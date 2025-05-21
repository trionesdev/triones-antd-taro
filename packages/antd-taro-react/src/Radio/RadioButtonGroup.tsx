import React, {FC, useState} from "react";
import {classPrefix, RadioGroupProps} from "./types";
import {RadioGroupContext} from "./GroupContext";
import {RadioButton} from "./RadioButton";
import classNames from "classnames";

export const RadioButtonGroup: FC<RadioGroupProps> = ({
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
      <div className={classNames(`${classPrefix}-button-group`)}>
        {children || items?.map(item => {
          return <RadioButton key={item.value} value={item.value} shape={shape}>{item.label}</RadioButton>
        })}
      </div>
    </RadioGroupContext.Provider>
  );
};
