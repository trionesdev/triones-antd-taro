import React from "react";
import {DemoBlock} from "../../components";
import {Button, Picker} from "@trionesdev/antd-taro-react";
import Taro from "@tarojs/taro";

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
      <Picker open={open} labelInValue={true} afterOpenChange={(o) => {
        setOpen(o);
      }} columns={basicColumns} value={[{label: '周一', value: 'Mon'}]} onOk={(v) => {
        console.log(v)
        setOpen(false);
        Taro.showToast({
          title: `${v[0]?.label}-${v[1]?.label}`,
          icon: "none",
          duration: 2000,
          mask: true,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>选择</Button>
    </DemoBlock>
  </>
}
export default PickerBase;
