import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Button, CalendarDatetimePopup } from "@trionesdev/antd-taro-react";
import React from "react";
import { DemoBlock } from "../../components";


const CalendarDatetimePopupBase = () => {
  const [open, setOpen] = React.useState(false);

  return <View>
    <DemoBlock title={`日期时间选择器`}>
      <CalendarDatetimePopup open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} onOk={(date) => {
        Taro.showToast({
          title: `${date!.getFullYear()}-${date!.getMonth() + 1}-${date!.getDate()} ${date!.getHours()}:${date!.getMinutes()}`,
          icon: 'none',
          duration: 2000,
        })
      }} />
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>日期时间选择器</Button>
    </DemoBlock>
  </View>
}
export default CalendarDatetimePopupBase;
