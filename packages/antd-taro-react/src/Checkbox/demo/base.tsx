/**
 * compact: true
 */
import React from 'react';
import { Checkbox, Space } from '@trionesdev/antd-taro-react';
import { DemoBlock } from '../../DemoBlock';


export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Checkbox checked={true}>苹果</Checkbox>
        <Checkbox checked={false}>香蕉</Checkbox>
      </DemoBlock>
      <DemoBlock title="默认选中">
        <Checkbox checked={true}>苹果</Checkbox>
      </DemoBlock>
      <DemoBlock title="禁用">
        <Checkbox checked={true} disabled={true}>
          苹果
        </Checkbox>
        <Checkbox checked={false} disabled={true}>
          香蕉
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="Button">
        <Checkbox.Button>苹果</Checkbox.Button>
      </DemoBlock>

      <DemoBlock title="Button 禁用">
        <Space>
          <Checkbox.Button disabled={true}>苹果</Checkbox.Button>
          <Checkbox.Button disabled={true} checked={true}>
            苹果
          </Checkbox.Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="分组">
        <Checkbox.Group defaultValue={['1']}>
          <Checkbox.Button value={'1'}>苹果</Checkbox.Button>
        </Checkbox.Group>
      </DemoBlock>
    </>
  );
};
