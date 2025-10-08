import {DemoBlock} from "../../components";
import React from "react";
import {View} from "@tarojs/components";
import {CalendarDatetimePicker, Button, Form} from "@trionesdev/antd-taro-react";
import Taro from "@tarojs/taro";
import {DatetimePickerCell} from "./DatetimePickerCell";

const CalendarDatetimePickerBase = () => {
  const [open, setOpen] = React.useState(false);
  const [form] = Form.useForm();
  return <View>
    <DemoBlock title={`基础用法`}>
      <CalendarDatetimePicker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} onOk={(date) => {
        Taro.showToast({
          title: `${date!.getFullYear()}-${date!.getMonth()  +1}-${date!.getDate()} ${date!.getHours()}:${date!.getMinutes()}`,
          icon: 'none',
          duration: 2000,
        });
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>日期时间选择器</Button>
    </DemoBlock>
    <DemoBlock title={`表单使用`}>
      <Form form={form}>
        <Form.Item name={'datetime'}>
          <DatetimePickerCell/>
        </Form.Item>
      </Form>
    </DemoBlock>
  </View>
}
export default CalendarDatetimePickerBase;
