import React, { FC, useEffect } from "react";
import { TaroInput, TaroInputProps } from "./taro-input";

export type InputNumberProps = Omit<TaroInputProps, 'type'> & {
  max?: number;
  min?: number;
}

export const InputNumber: FC<InputNumberProps> = ({ min, max, ...rest }) => {
  const [internalValue, setInternalValue] = React.useState<any>(rest.value);

  useEffect(() => {
    if (rest.value === undefined) {
      return;
    }
    if (rest.value === internalValue) {
      return;
    }
    setInternalValue(rest.value);
  }, [rest.value]);
  
  return <TaroInput {...rest} type={`number`} value={internalValue} onChange={(value: any) => {
    let newValue = value;
    if (min && value < min) {
      newValue = min;
    }
    if (max && value > max) {
      newValue = max;
    }
    setInternalValue(newValue)
    rest.onChange?.(newValue);
  }} />
}

