import { PlayOutline } from '@trionesdev/antd-taro-icons-react';
import { DemoBlock } from '../../DemoBlock';
import React from 'react';
import Rate from "../index";
import Space from "../../Space";

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Rate />
      </DemoBlock>

      <DemoBlock title="默认值">
        <Rate defaultValue={3} />
      </DemoBlock>

      <DemoBlock title="半星">
        <Rate allowHalf defaultValue={2.5} />
      </DemoBlock>

      <DemoBlock title="只读">
        <Rate value={4} readonly />
      </DemoBlock>

      <DemoBlock title="清除">
        <Space direction="vertical">
          <Space>
            <Rate allowClear defaultValue={3} />
            <div>可清除(点击同一颗星星)</div>
          </Space>
          <Space>
            <Rate allowClear={false} defaultValue={2} />
            <div>不可清除</div>
          </Space>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义数量">
        <Rate count={10} defaultValue={5} />
      </DemoBlock>

      <DemoBlock title="自定义字符">
        <Space direction="vertical">
          <Rate character="A" size={40} allowHalf />
          <Rate
            character={<PlayOutline style={{ fontSize: 20 }} />}
            allowHalf
            defaultValue={3.5}
            style={{
              '--active-color': '#46b37a',
              '--inactive-color': '#1d78c9',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  );
};
