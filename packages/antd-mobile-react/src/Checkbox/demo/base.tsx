/**
 * compact: true
 */
import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import Checkbox from "../index";
import {Space} from "../../index";


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
        <Checkbox  shape='button' >苹果</Checkbox>
      </DemoBlock>

      <DemoBlock title="Button 禁用">
        <Space>
          <Checkbox shape='button' disabled={true}>苹果</Checkbox>
          <Checkbox shape='button' disabled={true} checked={true}>
            苹果
          </Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title="分组">
        <Checkbox.Group defaultValue={['1']}>
          <Checkbox shape='button' value={'1'}>苹果</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
    </>
  );
};
