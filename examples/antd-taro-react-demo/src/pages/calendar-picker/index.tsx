import {View} from "@tarojs/components";
import React from "react";
import {DemoBlock} from "../../components";
import {Button, CalendarPicker } from "@trionesdev/antd-taro-react";
import Taro from "@tarojs/taro";

const CalendarBase = () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return <View>
    <View ref={toastContainer}/>
    <DemoBlock title={`日历选择器`}>
      <CalendarPicker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} onOk={(date) => {
        Taro.showToast({
          title: `${date!.getFullYear()}-${date!.getMonth()  +1}-${date!.getDate()}`,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>
        日历选择器
      </Button>
    </DemoBlock>
    <DemoBlock title={`日历选择器(区间)`}>
      <CalendarPicker.Range open={open2} afterOpenChange={(o) => {
        setOpen2(o);
      }} onOk={(date) => {
        Taro.showToast({
          title: `${date![0].getFullYear()}-${date![0].getMonth() +1}-${date![0].getDate()} ~ ${date![1].getFullYear()}-${date![1].getMonth()  +1}-${date![1].getDate()}`,
        })
      }}/>
      <Button block={true} onClick={() => {
        setOpen2(true);
      }}>
        日历选择器(区间)
      </Button>
    </DemoBlock>
  </View>
}
export default CalendarBase;
