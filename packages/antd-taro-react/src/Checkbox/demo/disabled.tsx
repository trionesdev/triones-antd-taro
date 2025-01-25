import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from '../../DemoBlock';
import React from "react";

export default () => {
  return <>
    <DemoBlock title='禁用'>
      <Checkbox checked={true} disabled={true}>苹果</Checkbox>
      <Checkbox checked={false} disabled={true}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox checked={true} shape={'button'} disabled={true}>苹果</Checkbox>
    </DemoBlock>
  </>
}
