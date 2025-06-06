import {View} from "@tarojs/components";
import {Button, Form, Input } from "@trionesdev/antd-taro-react";

const FormPage = () => {
  const [verticalForm] = Form.useForm();
  const [horizontalForm] = Form.useForm();

  return <View>
    <View >
      <Form form={verticalForm} labelWidth={80}>
        <Form.Item label={'姓名'} name={'name'} required={true} rules={[{required: true, message: '请输入姓名'}]}>
          <Input placeholder={`请输入姓名`}/>
        </Form.Item>
        <Form.Item label={'地址'} name={'address'} required={true} rules={[{required: true, message: '请输入地址'}]}>
          <Input placeholder={`请输入地址`}/>
        </Form.Item>
      </Form>
      <Button type={`primary`} block={true} onClick={() => {
        verticalForm.validateFields().then(values => {
          console.log(values)
        })
      }}>提交</Button>
    </View>
    <View>
      <Form layout={`vertical`} form={horizontalForm}>
        <Form.Item label={'姓名'} name={'name'}>
          <Input placeholder={`请输入姓名`}/>
        </Form.Item>
        <Form.Item label={'地址'} name={'address'}>
          <Input placeholder={`请输入地址`}/>
        </Form.Item>
      </Form>
      <Button type={`primary`} block={true} onClick={() => {
        horizontalForm.validateFields().then(values => {
          console.log(values)
        })
      }}>提交</Button>
    </View>
  </View>

}
export default FormPage;
