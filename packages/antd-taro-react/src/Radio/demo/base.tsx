import {DemoBlock} from '../../DemoBlock';
import {DemoDescription} from '../../DemoDescription';
import React from 'react';
import './base.scss';
import Space from "../../Space";
import {Radio, RadioButtonGroup, RadioGroup} from "../index";

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Space direction="vertical">
          <Radio/>
          <Radio>有描述的单选框</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title="选项组">
        <RadioGroup defaultValue="1">
          <Space direction="vertical">
            <Radio value="1">第一项</Radio>
            <Radio value="2">第二项</Radio>
            <Radio value="3">第三项</Radio>
          </Space>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title="选项组">
        <RadioGroup defaultValue="1" items={[
          {
            label: '第一项',
            value: '1'
          },
          {
            label: '第二项',
            value: '2'
          },
          {
            label: '第三项',
            value: '3'
          }
        ]}/>
      </DemoBlock>

      <DemoBlock title="占满整行宽度">
        <Space direction="vertical" block>
          <RadioGroup>
            <Space direction="vertical" block>
              <Radio value="1" block className="blockIndicator">
                块级元素
              </Radio>
              <Radio value="2" className="blockIndicator">
                非块级元素
              </Radio>
            </Space>
          </RadioGroup>
          <DemoDescription>
            单选框的块级元素会占满整行，而非块级元素不会。灰色的背景标识了元素所占据的空间和可点击的区域。
          </DemoDescription>
        </Space>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <RadioGroup defaultValue="2">
          <Space direction="vertical">
            <Radio value="1" disabled>
              第一项
            </Radio>
            <Radio value="2">第二项</Radio>
            <Radio value="3">第三项</Radio>
          </Space>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={`按钮样式分组`}>
        <RadioButtonGroup defaultValue="1" items={[
          {
            label: '第一项',
            value: '1'
          },
          {
            label: '第二项',
            value: '2'
          },
          {
            label: '第三项',
            value: '3'
          },
          {
            label: '第四项',
            value: '4'
          }
        ]}/>
      </DemoBlock>
    </>
  );
};
