import {Button, View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import {DatePicker, Form} from "@trionesdev/antd-taro-react";
import dayjs from "dayjs";

const DatePickerPage = () => {
  const [form] = Form.useForm();
  return <View>
    <DemoBlock title='基础用法'>
      <DatePicker placeholder='请选择日期'/>
    </DemoBlock>
    <DemoBlock title='基础用法带时间'>
      <DatePicker placeholder='请选择日期' showTime={true}/>
    </DemoBlock>
    <DemoBlock title='基础用法，Time模式'>
      <DatePicker placeholder='请选择时间' mode='time'/>
    </DemoBlock>
    <DemoBlock title='基础用法，Date格式化'>
      <DatePicker placeholder='请选择时间' showTime={true} format='YYYY-MM-DD HH:mm'/>
    </DemoBlock>
    <DemoBlock title='基础用法，Time格式化'>
      <DatePicker placeholder='请选择时间' mode='time' format='HH:mm'/>
    </DemoBlock>
    <DemoBlock title='基础用法，时间限制'>
      <DatePicker placeholder='请选择时间' minDate={dayjs().add(-1, 'day')} maxDate={dayjs().add(1, 'day')}/>
    </DemoBlock>
    <DemoBlock title='Form表单中使用'>
      <Form form={form}>
        <Form.Item name='date' label='日期'>
          <DatePicker placeholder='请选择日期'/>
        </Form.Item>
        <Button onClick={() => {
          form.validateFields().then(values => {
            console.log(values)
          })
        }}>
          提交
        </Button>
      </Form>
    </DemoBlock>
  </View>
}
export default DatePickerPage
