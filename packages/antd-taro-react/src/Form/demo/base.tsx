import {Form} from "@trionesdev/antd-taro-react";
import {DemoBlock} from "@trionesdev/antd-taro-react/DemoBlock"
import React from "react"

export default () => {
  const [form] = Form.useForm();
  return <DemoBlock title='表单'>
    <Form form={form}>
      
    </Form>
  </DemoBlock>
}
