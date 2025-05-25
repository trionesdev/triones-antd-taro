/**
 * compact: true
 */
import classNames from 'classnames';
import React from 'react';
import { DemoBlock } from '../../DemoBlock';

import { Card } from '../card';
import './base.scss';
const classPrefix = `card-demo`;

export default () => {
  const onClick = () => {
    console.log('点击了卡片');
  };

  const onHeaderClick = () => {
    console.log('点击了卡片Header区域');
  };

  const onBodyClick = () => {
    console.log('点击了卡片Body区域');
  };
  return (
    <>
      <DemoBlock title="基础用法">
        <Card title="卡片标题" onClick={onClick}>
          卡片内容
        </Card>
      </DemoBlock>
      <DemoBlock title="没有卡片内容">
        <Card title="卡片标题" onClick={onClick} />
      </DemoBlock>
      <DemoBlock title="没有卡片标题">
        <Card onClick={onClick}>卡片内容</Card>
      </DemoBlock>
      <DemoBlock title="自定义卡片内容">
        <Card
          title={<div style={{ fontWeight: 'normal' }}>卡片标题</div>}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <div className={classNames(`${classPrefix}-content`)}>卡片内容</div>
          <div
            className={classNames(`${classPrefix}-footer`)}
            onClick={(e) => e.stopPropagation()}
          ></div>
        </Card>
      </DemoBlock>
      <DemoBlock title="自定义卡片样式">
        <Card
          headerStyle={{
            color: '#1677ff',
          }}
          bodyClassName={classNames(`${classPrefix}-customBody`)}
          title="卡片标题"
        >
          卡片内容
        </Card>
      </DemoBlock>
    </>
  );
};
