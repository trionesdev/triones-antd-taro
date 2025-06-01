import React, {useEffect} from "react";
import {FC} from "react";
import classNames from "classnames";
import {AddOutline, MinusOutline} from "@trionesdev/antd-taro-icons-react";
import "./style.scss"

type InputNumberProps = {
  value?: number,
  onChange?: (value: number) => void
  step?: number
  min?: number
  max?: number
  className?: string
  style?: React.CSSProperties
}
export const InputNumber: FC<InputNumberProps> = ({value, onChange, step, min, max, className, style}) => {
  const [internalValue, setInternalValue] = React.useState<number>(value || 0);

  useEffect(() => {
    if (value !== undefined) {
      if (value !== internalValue) {
        setInternalValue(value)
      }
    }
  }, [value]);

  const minMatch = min !== undefined && internalValue <= min;
  const maxMatch = max !== undefined && internalValue >= max;

  const trionesInputNumberCls = 'triones-antm-input-number';
  return <div className={classNames(trionesInputNumberCls, className)} style={style}>
    <div
      className={classNames(`${trionesInputNumberCls}-button`, {[`${trionesInputNumberCls}-button-disabled`]: minMatch})}
      onClick={() => {
        if (minMatch) {
          return
        }
        setInternalValue(internalValue - (step || 1));
      }}>
      <MinusOutline/>
    </div>
    <div>
      <input type={`number`} value={internalValue} onChange={(e) => {
        const newVal = Number(e.target.value);
        setInternalValue(newVal);
        onChange?.(newVal)
      }}/>
    </div>
    <div
      className={classNames(`${trionesInputNumberCls}-button`, {[`${trionesInputNumberCls}-button-disabled`]: maxMatch})}
      onClick={() => {
        if (maxMatch) {
          return
        }
        setInternalValue(internalValue + (step || 1));
      }}>
      <AddOutline/>
    </div>
  </div>
}
