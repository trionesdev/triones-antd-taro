import {View} from "@tarojs/components";
import {Button, Form, Input, Radio, Stepper } from "@trionesdev/antd-taro-react";

const FormPage = () => {
  const [verticalForm] = Form.useForm();
  const [horizontalForm] = Form.useForm();
  const [form] = Form.useForm();

  return <View>
    <View style={{padding:16}} >
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
        }).catch((ex)=>{
          console.log(ex)
        })
      }}>提交</Button>
    </View>
    <View style={{padding:16}}>
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

    <View style={{padding:16}}>
      <Form layout={`horizontal`} form={form}>
        <Form.Item label={'姓名'} name={'name'}>
          <Input placeholder={`请输入姓名`}/>
        </Form.Item>
        <Form.Item label={'地址'} name={'address'}>
          <Input placeholder={`请输入地址`}/>
        </Form.Item>
        <Form.Item label={'年龄'} name={'age'}>
          <Stepper/>
        </Form.Item>
        <Form.Item label={'性别'} name={'sex'}>
          <Radio.Group>
            <Radio value={1}>男</Radio>
            <Radio value={0}>女</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Form.Item label={`备注`} name={`remark`}>
        <Input.Textarea placeholder={`请输入备注`}/>
      </Form.Item>
      <Button type={`primary`} block={true} onClick={() => {
        form.validateFields().then(values => {
          console.log(values)
        })
      }}>提交</Button>
    </View>
  </View>

}
export default FormPage;
