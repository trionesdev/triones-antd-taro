/**
 * compact: true
 */
import {DemoBlock} from '../../DemoBlock';
import React from 'react';
import Input from "../index";
import Space from "../../Space";

export default () => {
  return (
    <>
      <DemoBlock title="基础用法" styles={{body: {backgroundColor: '#D5D5D5'}}}>
        <div style={{backgroundColor: '#FFFFFF'}}>
          <Input placeholder="请输入内容"/>
        </div>
      </DemoBlock>
      <DemoBlock title="带清除按钮" styles={{body: {backgroundColor: '#D5D5D5'}}}>
        <div style={{backgroundColor: '#FFFFFF'}}>
          <Input placeholder="请输入内容" allowClear={true}/>
        </div>
      </DemoBlock>
      <DemoBlock title="密码模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
        <div style={{backgroundColor: '#FFFFFF'}}>
          <Input.Password placeholder="请输入内容" allowClear={true}/>
        </div>
      </DemoBlock>
      <DemoBlock title="OPT模式" styles={{body: {backgroundColor: '#D5D5D5'}}}>
        <div style={{backgroundColor: '#FFFFFF'}}>
          <Input.OPT/>
        </div>
      </DemoBlock>
      <DemoBlock title="Textarea" styles={{body: {backgroundColor: '#D5D5D5'}}}>
        <Input.Textarea placeholder={'请输入内容'}/>
      </DemoBlock>
      <DemoBlock title={`变体`}>
        <Space direction="vertical" block={true}>
          <Input variant={`outlined`} placeholder={`outlined`}/>
          <Input variant={`filled`} placeholder={`filled`}/>
          <Input variant={`borderless`} placeholder={`borderless`}/>
          <Input variant={`underlined`} placeholder={`underlined`}/>
        </Space>
      </DemoBlock>
      <DemoBlock title={`尺寸`}>
        <Space direction="vertical" block={true}>
          <Input.Textarea variant={`outlined`} placeholder={`outlined`}/>
          <Input.Textarea variant={`filled`} placeholder={`filled`}/>
          <Input.Textarea variant={`borderless`} placeholder={`borderless`}/>
          <Input.Textarea variant={`underlined`} placeholder={`underlined`}/>
        </Space>
      </DemoBlock>
    </>
  );
};
