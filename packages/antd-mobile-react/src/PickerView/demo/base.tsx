import React from "react"
import {DemoBlock} from "../../DemoBlock";
import PickerView from "../index";

export default () => {
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
      <div style={{height:240}}>
        <PickerView columns={basicColumns}/>
      </div>
    </DemoBlock>
  </>
}
