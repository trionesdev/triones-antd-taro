import React from "react";
import {FC} from "react";
import classNames from "classnames";

type InputNumberProps={
  value?:number,
  onChange?: (value:number)=>void
  step?:number|string
}
export const InputNumber:FC<InputNumberProps> = ({value,onChange,step}) => {
 const trionesInputNumberCls = 'triones-antm-input-number';
  return <div className={classNames(trionesInputNumberCls)}>
    <div>

    </div>
  </div>
}
