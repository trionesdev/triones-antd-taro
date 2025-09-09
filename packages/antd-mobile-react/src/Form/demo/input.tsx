import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Form from "../index";
import {Input} from "../../index";
import Button from "../../Button";

export default ()=>{
  const [form] = Form.useForm()
  return <>
    <DemoBlock title='水平表单'>
      <Form form={form}>
        <Form.Item label='用户名' name='username'>
          <Input placeholder='请输入用户名'/>
        </Form.Item>
        <Form.Item label='说明' name='description'>
          <Input.TextArea placeholder='请输入说明'/>
        </Form.Item>
      </Form>
      <Button type={`primary`} block={true} onClick={() => {
        form.validateFields().then(values => {
          console.log(values)
        })
      }}>提交</Button>
    </DemoBlock>
  </>
}
