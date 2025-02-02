import classNames from "classnames";
import _ from "lodash";
import {PickerViewColumn} from "./picker-view-column";
import React, {FC, useEffect, useState} from "react";
import {Option} from "./picker";

const pickerCls = "triones-antm-picker";
type PickerViewProps = {
  columns?: Option[][]
  labelInValue?: boolean
  value?: any[]
  onChange?: (value: any[]) => void
}
export const PickerView: FC<PickerViewProps> = React.memo(({columns, labelInValue, value, onChange}) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  useEffect(() => {
    if (value == undefined) {
      return;
    }
    if (value == internalValue) {
      return;
    }
    setInternalValue(value);
  }, [value]);
  return <div className={classNames(`${pickerCls}-view`)}>
    {!_.isEmpty(columns) && columns?.map((column: any, index: number) => {
      return <PickerViewColumn key={`column-${index}`} labelInValue={labelInValue}
                               options={column}
                               value={value?.[index]}
                               onChange={(v) => {
                                 internalValue[index] = v;
                                 onChange?.(internalValue)
                               }}
      />
    })}
    <div className={classNames(`${pickerCls}-view-mask`)}>
      <div className={classNames(`${pickerCls}-view-mask-top`)}/>
      <div className={classNames(`${pickerCls}-view-mask-middle`)}/>
      <div className={classNames(`${pickerCls}-view-mask-bottom`)}/>
    </div>
  </div>
})
