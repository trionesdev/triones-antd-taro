import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {Button, CalendarDatetimePicker} from "@trionesdev/antd-taro-react";
import React from "react";
import {DemoBlock} from "../../components";


const CalendarDatetimePopupBase = () => {
  const [open, setOpen] = React.useState(false);

  return <View>
    <DemoBlock title={`日期时间选择器`}>
      <CalendarDatetimePicker open={open} onClose={() => setOpen(false)}
                             afterOpenChange={(o) => {
                               setOpen(o);
                             }} onOk={(date) => {
        Taro.showToast({
          title: `${date!.year()}-${date!.month() + 1}-${date!.date()} ${date!.hour()}:${date!.minute()}`,
          icon: 'none',
          duration: 2000,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>日期时间选择器</Button>
    </DemoBlock>
  </View>
}
export default CalendarDatetimePopupBase;
