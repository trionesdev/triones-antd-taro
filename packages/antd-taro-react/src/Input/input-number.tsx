import React, {FC} from "react";
import {TaroInput, TaroInputProps} from "./taro-input";

export type InputNumberProps = Omit<TaroInputProps, 'type'>

export const InputNumber: FC<InputNumberProps> = ({ ...rest}) => {
  return <TaroInput {...rest} type={`number`}/>
}

