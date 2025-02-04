import React from "react";
import {FC} from "react";
import {CascaderColumnItem} from "./cascader-column-item";
import classNames from "classnames";

const cascaderViewCls = 'triones-antm-cascader-view'
type CascaderColumnProps = {
  index?: number
  options: any[],
  value: any
  labelInValue?: boolean
  onSelect?: (option: any, columnIndex: number) => void
}
export const CascaderColumn: FC<CascaderColumnProps> = ({
                                                          index = 0,
                                                          options,
                                                          value,
                                                          labelInValue = false,
                                                          onSelect,
                                                        }) => {
  const handleOnSelect = (option: any) => {
    onSelect?.(option, index);
  }

  return <div className={classNames(`${cascaderViewCls}-column`)}>
    {options.map((option: any, index: number) => {
      return <CascaderColumnItem key={index} option={option} selected={value?.value == option.value} onClick={() => {
        handleOnSelect(option)
      }}/>;
    })}
  </div>
}
