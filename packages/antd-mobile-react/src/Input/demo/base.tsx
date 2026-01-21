/**
 * compact: true
 */
import { DemoBlock } from '../../DemoBlock';
import React from 'react';
import Input from "../index";

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" styles={{ body: { backgroundColor: '#D5D5D5' } }}>
        <div style={{ backgroundColor: '#FFFFFF' }}>
          <Input placeholder="请输入内容" />
        </div>
      </DemoBlock>
      <DemoBlock title="带清除按钮" styles={{ body: { backgroundColor: '#D5D5D5' } }}>
        <div style={{ backgroundColor: '#FFFFFF' }}>
          <Input placeholder="请输入内容" allowClear={true} />
        </div>
      </DemoBlock>
      <DemoBlock title="密码模式" styles={{ body: { backgroundColor: '#D5D5D5' } }}>
        <div style={{ backgroundColor: '#FFFFFF' }}>
          <Input.Password placeholder="请输入内容" allowClear={true} />
        </div>
      </DemoBlock>
      <DemoBlock title="OPT模式" styles={{ body: { backgroundColor: '#D5D5D5' } }}>
        <div style={{ backgroundColor: '#FFFFFF' }}> 
        <Input.OPT />
        </div>
      </DemoBlock>
      <DemoBlock title="Textarea" styles={{ body: { backgroundColor: '#D5D5D5' } }}>
        <Input.Textarea placeholder={'请输入内容'} />
      </DemoBlock>
    </>
  );
};
