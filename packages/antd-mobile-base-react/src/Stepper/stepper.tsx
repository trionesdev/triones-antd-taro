import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";
import {AddOutline, MinusOutline} from "@trionesdev/antd-mobile-icons-react";
import "./style.scss"

export type StepperProps = {
  value?: number,
  onChange?: (value: number) => void
  step?: number
  min?: number
  max?: number
  disabled?: boolean
  block?: boolean
  className?: string
  style?: React.CSSProperties
}

function clampValue(n: number, min?: number, max?: number): number {
  let v = n;
  if (min !== undefined) v = Math.max(min, v);
  if (max !== undefined) v = Math.min(max, v);
  return v;
}

export const Stepper: FC<StepperProps> = ({
                                                    value,
                                                    onChange,
                                                    step,
                                                    min,
                                                    max,
                                                    disabled = false,
                                                    block = false,
                                                    className,
                                                    style
                                                  }) => {
  const [internalValue, setInternalValue] = useState<number>(value ?? 0);
  const stepSize = step ?? 1;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(clampValue(value, min, max));
    }
  }, [value, min, max]);

  const minMatch = min !== undefined && internalValue <= min;
  const maxMatch = max !== undefined && internalValue >= max;

  const trionesStepperCls = 'triones-antm-stepper';
  const setValue = (next: number) => {
    const clamped = clampValue(next, min, max);
    setInternalValue(clamped);
    onChange?.(clamped);
  };

  return <div
    className={classNames(trionesStepperCls, {[`${trionesStepperCls}--block`]: block}, className)}
    style={style}>
    <div
      className={classNames(`${trionesStepperCls}-button`, {
        [`${trionesStepperCls}-button-disabled`]: minMatch || disabled,
      })}
      role="button"
      tabIndex={disabled || minMatch ? -1 : 0}
      onClick={() => {
        if (minMatch || disabled) {
          return
        }
        setValue(internalValue - stepSize);
      }}>
      <MinusOutline/>
    </div>
    <div className={`${trionesStepperCls}-input`}>
      <input
        type="number"
        disabled={disabled}
        min={min}
        max={max}
        step={stepSize}
        value={internalValue}
        onChange={(e) => {
          const num = Number(e.target.value);
          if (!Number.isFinite(num)) {
            return;
          }
          setValue(num);
        }}
      />
    </div>
    <div
      className={classNames(`${trionesStepperCls}-button`, {
        [`${trionesStepperCls}-button-disabled`]: maxMatch || disabled,
      })}
      role="button"
      tabIndex={disabled || maxMatch ? -1 : 0}
      onClick={() => {
        if (maxMatch || disabled) {
          return
        }
        setValue(internalValue + stepSize);
      }}>
      <AddOutline/>
    </div>
  </div>
}
