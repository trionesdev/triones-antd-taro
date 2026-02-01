import classNames from "classnames";
import {isEmpty, size} from "lodash-es";
import {PickerViewColumn} from "./picker-view-column";
import React, {FC, useEffect, useState} from "react";
import { PickerColumnOption} from "./types";
import "./style.scss"

const pickerViewCls = "triones-antm-picker-view";
export type PickerViewProps = {
  className?: string
  style?: React.CSSProperties
  columns?: PickerColumnOption[][]
  labelInValue?: boolean
  value?: any[]
  onChange?: (value: any[]) => void
}
export const PickerView: FC<PickerViewProps> = React.memo(({className,style,columns, labelInValue, value, onChange}) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: size(columns)}).map(() => null))
  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (value === internalValue) {
      return;
    }
    setInternalValue(value);
  }, [value]);
  return <div className={classNames(`${pickerViewCls}`,className)}  style={ style}>
    {!isEmpty(columns) && columns?.map((column: any, index: number) => {
      return <PickerViewColumn key={`column-${index}`} labelInValue={labelInValue}
                               options={column}
                               value={value?.[index]}
                               onChange={(v) => {
                                 internalValue[index] = v;
                                 onChange?.(internalValue)
                               }}
      />
    })}
    <div className={classNames(`${pickerViewCls}-mask`)}>
      <div className={classNames(`${pickerViewCls}-mask-top`)}/>
      <div className={classNames(`${pickerViewCls}-mask-middle`)}/>
      <div className={classNames(`${pickerViewCls}-mask-bottom`)}/>
    </div>
  </div>
})
