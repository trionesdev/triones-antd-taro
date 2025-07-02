import {DemoBlock} from "../../components";
import React from "react";
import {View} from "@tarojs/components";
import {CalendarDatetimePicker, Toast,Button} from "@trionesdev/antd-taro-react";

const CalendarDatetimePickerBase = () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  return <View>
    <div ref={toastContainer}/>
    <DemoBlock title={`基础用法`}>
      <CalendarDatetimePicker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} onOk={(date) => {
        Toast.show({
          getContainer: () => toastContainer.current,
          content: `${date!.getFullYear()}-${date!.getMonth()  +1}-${date!.getDate()} ${date!.getHours()}:${date!.getMinutes()}`,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>日期时间选择器</Button>
    </DemoBlock>
  </View>
}
export default CalendarDatetimePickerBase;
