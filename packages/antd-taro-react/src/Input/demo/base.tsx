/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React from 'react';
import Input from "../index";

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Input placeholder="请输入内容"/>
      </DemoBlock>
      <DemoBlock title="带清除按钮">
        <Input placeholder="请输入内容" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="密码模式">
        <Input.Password placeholder="请输入内容" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="OPT模式">
        <Input.OPT/>
      </DemoBlock>
    </>
  );
};
