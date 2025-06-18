import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {Cell} from "@trionesdev/antd-taro-react";

export default () => {
  return <div>
    <DemoBlock title={`基础用法`}>
      <Cell>标题</Cell>
    </DemoBlock>
    <DemoBlock title={`基础用法`}>
      <Cell>标题</Cell>
    </DemoBlock>
  </div>
}
