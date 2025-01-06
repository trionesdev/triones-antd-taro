/**
 * compact: true
 */
import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";
import React from "react";

export default () => {
  return <>
    <DemoBlock title='基础用法'>
      <Checkbox checked={true}>苹果</Checkbox>
      <Checkbox checked={false}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='默认选中'>
      <Checkbox checked={true}>苹果</Checkbox>
    </DemoBlock>
    <DemoBlock title='禁用'>
      <Checkbox checked={true} disabled={true}>苹果</Checkbox>
      <Checkbox checked={false} disabled={true}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox checked={true} shape={'button'}>苹果</Checkbox>
    </DemoBlock>
  </>
}
