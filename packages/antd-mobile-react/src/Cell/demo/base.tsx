import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {Cell} from "@trionesdev/antd-mobile-react";

export default () => {
  return <div>
    <DemoBlock title={`基础用法`}>
      <Cell>标题</Cell>
    </DemoBlock>

    <DemoBlock title={`分组`}>
      <Cell.Group title={'标题'} divider={ true}>
        <Cell>标题</Cell>
        <Cell>标题</Cell>
        <Cell>标题</Cell>
      </Cell.Group>
    </DemoBlock>
  </div>
}
