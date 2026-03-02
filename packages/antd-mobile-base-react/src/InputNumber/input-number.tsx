import React, {useEffect} from "react";
import {FC} from "react";
import classNames from "classnames";
import {AddOutline, MinusOutline} from "../../../antd-mobile-icons-react";
import "./style.scss"
import {SizeType} from "../types";

export type InputNumberProps = {
  size?: SizeType
  value?: number,
  onChange?: (value: number) => void
  step?: number
  min?: number
  max?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
export const InputNumber: FC<InputNumberProps> = ({
                                                    size,
                                                    value,
                                                    onChange,
                                                    step,
                                                    min,
                                                    max,
                                                    disabled = false,
                                                    className,
                                                    style
                                                  }) => {
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
      className={classNames(`${trionesInputNumberCls}-button`, {
        [`${trionesInputNumberCls}-button-sm`]: size == 'small',
        [`${trionesInputNumberCls}-button-lg`]: size == 'large',
        [`${trionesInputNumberCls}-button-disabled`]: minMatch || disabled,
      })}
      onClick={() => {
        if (minMatch) {
          return
        }
        const newValue = internalValue - (step || 1);
        setInternalValue(newValue);
        onChange?.(newValue);
      }}>
      <MinusOutline/>
    </div>
    <div>
      <input type={`number`} disabled={disabled} value={internalValue} onChange={(e) => {
        const newVal = Number(e.target.value);
        setInternalValue(newVal);
        onChange?.(newVal)
      }}/>
    </div>
    <div
      className={classNames(`${trionesInputNumberCls}-button`, {
        [`${trionesInputNumberCls}-button-sm`]: size == 'small',
        [`${trionesInputNumberCls}-button-lg`]: size == 'large',
        [`${trionesInputNumberCls}-button-disabled`]: maxMatch || disabled,
      })}
      onClick={() => {
        if (maxMatch) {
          return
        }
        const newVal = internalValue + (step || 1);
        setInternalValue(newVal);
        onChange?.(newVal)
      }}>
      <AddOutline/>
    </div>
  </div>
}
