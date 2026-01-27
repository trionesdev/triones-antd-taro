import {pickerViewCls, PickerViewProps} from "./types";
import {FC} from "react";
import classNames from "classnames";
import React from "react";
import {PickerView as TaroPickerView, PickerViewColumn as TaroPickerViewColumn, View} from "@tarojs/components"
import "./style.scss";

export const PickerView: FC<PickerViewProps> = ({className, style, columns, labelInValue, value, onChange}) => {
  return <View className={classNames(pickerViewCls, className)}>
    <TaroPickerView indicatorStyle={'height: 32px;'} style={{width: '100%', height: 300}} onChange={(e) => {
      onChange?.(e.detail.value)
    }}>
      {columns?.map((columnOptions, index) => {
        return <TaroPickerViewColumn  className={classNames(`${pickerViewCls}-column`)}
                                     key={index}>{columnOptions.map((option, index) => {
          return <View key={`pvoi-${index}`} className={classNames(`${pickerViewCls}-column-item`)}>{option.label}</View>
        })}</TaroPickerViewColumn>
      })}
    </TaroPickerView>
  </View>


}
