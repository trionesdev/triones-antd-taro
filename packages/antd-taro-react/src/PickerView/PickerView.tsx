import {pickerViewCls, PickerViewProps} from "./types";
import React, {FC, useMemo} from "react";
import classNames from "classnames";
import {PickerView as TaroPickerView, PickerViewColumn as TaroPickerViewColumn, View} from "@tarojs/components"
import "./style.scss";

export const PickerView: FC<PickerViewProps> = ({
                                                  className,
                                                  style,
                                                  columns,
                                                  height = 300,
                                                  labelInValue,
                                                  value,
                                                  onChange
                                                }) => {

  const handleChange = (e: any) => {
    const changedValue = e.detail.value;
    const newValue: any[] = Array(changedValue.length).fill(null);
    changedValue.forEach((v: number, index: number) => {
      const columnOptions = columns?.[index];
      if (columnOptions) {
        const option = columnOptions[v];
        if (option) {
          newValue[index] = labelInValue ? option : option.value;
        }
      }
    });
    onChange?.(newValue);
  }

  const innerValue: number[] = useMemo(() => {
    const valueInit = Array(columns?.length).fill(0);
    value?.forEach((v, index) => {
      const columnOptions = columns?.[index];
      if (columnOptions) {
        const optionIndex = columnOptions.findIndex((option) => {
          return labelInValue ? option.value === v.value : option.value === v;
        });
        if (optionIndex > 0) {
          valueInit[index] = optionIndex
        }
      }
    });
    return valueInit
  }, [value])

  return <TaroPickerView className={classNames(pickerViewCls, className)}
                         style={{width: '100%', ...style, height: height}}
                         indicatorStyle={'height: 32px;'}
                         value={innerValue}
                         onChange={handleChange}>
    {columns?.map((columnOptions, index) => {
      return <TaroPickerViewColumn className={classNames(`${pickerViewCls}-column`)}
                                   key={index}>{columnOptions.map((option, index) => {
        return <View key={`pvoi-${index}`}
                     className={classNames(`${pickerViewCls}-column-item`)}>{option.label}</View>
      })}</TaroPickerViewColumn>
    })}
  </TaroPickerView>


}
