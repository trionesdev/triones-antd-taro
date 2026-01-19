import React, {FC, useEffect} from "react";
import {TaroInput, TaroInputProps} from "./taro-input";

export type InputDigitProps = Omit<TaroInputProps, 'type'> & {
  max?: number;
  min?: number;
}

export const InputDigit: FC<InputDigitProps> = ({min, max, ...rest}) => {
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

  return <TaroInput {...rest} type={`digit`} value={internalValue} onChange={(value: any) => {
    let newValue: any = value;
    if (newValue !== '') {
      newValue = Number(value);
    }
    if (isNaN(newValue)) {
      newValue = undefined;
    } else {
      if (min != undefined && newValue < min) {
        newValue = min;
      }
      if (max != undefined && newValue > max) {
        newValue = max;
      }
    }

    setInternalValue(newValue)
    rest.onChange?.(newValue);
  }}/>
}

