import React from "react";
import {FC} from "react";
import {CascaderColumnItem} from "./cascader-column-item";

type CascaderColumnProps = {
  index?: number
  options: any[],
  value: any
  onSelect?: (option: any, columnIndex: number) => void
}
export const CascaderColumn: FC<CascaderColumnProps> = ({
                                                          index = 0,
                                                          options,
                                                          value,
                                                          onSelect,
                                                        }) => {
  const handleOnSelect = (option: any) => {
    onSelect?.(option, index);
  }

  return <div>
    {options.map((option: any, index: number) => {
      return <CascaderColumnItem key={index} option={option} selected={value?.value == option.value} onClick={() => {
        handleOnSelect(option)
      }}/>;
    })}
  </div>
}
