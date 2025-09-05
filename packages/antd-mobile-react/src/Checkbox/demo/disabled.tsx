
import React from "react";
import {Checkbox} from '@trionesdev/antd-mobile-react';
import {DemoBlock} from "../../DemoBlock";

export default () => {
  return <>
    <DemoBlock title='禁用'>
      <Checkbox checked={true} disabled={true}>苹果</Checkbox>
      <Checkbox checked={false} disabled={true}>香蕉</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox.Button checked={true}  disabled={true}>苹果</Checkbox.Button>
    </DemoBlock>
  </>
}
