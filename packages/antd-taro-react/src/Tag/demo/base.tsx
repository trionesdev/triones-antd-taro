/**
 * compact: true
 */
import {Tag} from '@trionesdev/antd-taro-react';
import React from 'react';
import './style.scss';
import { DemoBlock } from '../../DemoBlock';

export default () => {
  const clsPrefix = 'tag-demo-style';
  return (
    <>
      <DemoBlock title="基础用法">
        <div className={`${clsPrefix}-content`}>
          <Tag>Default</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="线框标签">
        <div className={`${clsPrefix}-content`}>
          <Tag fill="outline" color="default">
            Default
          </Tag>
          <Tag fill="outline" color="primary">
            Primary
          </Tag>
          <Tag fill="outline" color="success">
            Success
          </Tag>
          <Tag fill="outline" color="warning">
            Warning
          </Tag>
          <Tag fill="outline" color="danger">
            Danger
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="语义标签">
        <div className={`${clsPrefix}-content`}>
          <Tag color="default">Default</Tag>
          <Tag color="primary">Primary</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="圆角标签">
        <div className={`${clsPrefix}-content`}>
          <Tag color="default" round>
            Default
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <div className={`${clsPrefix}-content`}>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </DemoBlock>
    </>
  );
};
