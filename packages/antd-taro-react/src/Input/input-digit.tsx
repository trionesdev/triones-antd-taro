import React, {FC} from "react";
import {TaroInput, TaroInputProps} from "./taro-input";

export type InputDigitProps = Omit<TaroInputProps, 'type'>

export const InputDigit: FC<InputDigitProps> = ({...rest}) => {
  return <TaroInput {...rest} type={`digit`}/>
}

