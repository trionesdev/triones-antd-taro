import React from "react";
import {DemoBlock} from "../../components";
import {Button, Picker } from "@trionesdev/antd-taro-react";

const PickerBase = () => {
  const [open, setOpen] = React.useState(false);
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
      <Picker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} columns={basicColumns} value={["Fri"]} onOk={(v)=>{
        console.log(v)
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>选择</Button>
    </DemoBlock>
  </>
}
export default PickerBase;
