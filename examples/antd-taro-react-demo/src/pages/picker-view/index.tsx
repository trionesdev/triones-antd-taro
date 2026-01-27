import {DemoBlock} from "../../components";
import {PickerView} from "@trionesdev/antd-taro-react";
import {PickerViewColumn, View,PickerView as TaroPickerView} from "@tarojs/components";
import React from "react";

const PickerViewBase = () => {

  const basicColumns = [
    [
      {label: '周一', value: 'Mon'},
      {label: '周二', value: 'Tues'},
      {label: '周三', value: 'Wed'},
      {label: '周四', value: 'Thur'},
      {label: '周五', value: 'Fri'},
    ],
    [
      {label: '上午', value: 'am'},
      {label: '下午', value: 'pm'},
    ],
  ]
  return <>
    <DemoBlock title={`基本使用`}>
      <PickerView columns={basicColumns}   style={{height: 300}}/>
    </DemoBlock>
  </>
}
export default PickerViewBase;
