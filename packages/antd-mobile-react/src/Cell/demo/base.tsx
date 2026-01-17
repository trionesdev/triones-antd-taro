import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Cell from "../index";
import {Divider} from "@trionesdev/antd-mobile-base-react";


export default () => {
  return <div>
    <DemoBlock title={`基础用法`}>
      <Cell>标题</Cell>
    </DemoBlock>

    <DemoBlock title={`分组`}>
      <Cell.Group title={'标题'} divider={<Divider/>}>
        <Cell>标题</Cell>
        <Cell>标题</Cell>
        <Cell>标题</Cell>
      </Cell.Group>
    </DemoBlock>
    <DemoBlock title={`分组带Label`}>
      <Cell.Group title={'标题'} labelCol={{flex: 100}}>
        <Cell label={'Label'}>标题</Cell>
        <Cell label={'Label'}>标题</Cell>
        <Cell label={'Label'}>标题</Cell>
      </Cell.Group>
    </DemoBlock>
  </div>
}
