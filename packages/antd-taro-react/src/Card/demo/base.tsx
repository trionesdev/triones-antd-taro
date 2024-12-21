import Card from '@trionesdev/antd-taro-react/Card';
import classNames from 'classnames';
import React from 'react';

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
      <div>
        <div>基础用法</div>
        <Card title="卡片标题" onClick={onClick}>
          卡片内容
        </Card>
      </div>
      <div>
        <div>没有卡片内容</div>
        <Card title="卡片标题" onClick={onClick} />
      </div>
      <div>
        <div>没有卡片标题</div>
        <Card onClick={onClick}>卡片内容</Card>
      </div>
      <div>
        <div>自定义卡片内容</div>
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
      </div>
      <div>
        <div>自定义卡片样式</div>
        <Card
          headerStyle={{
            color: '#1677ff',
          }}
          bodyClassName={classNames(`${classPrefix}-customBody`)}
          title="卡片标题"
        >
          卡片内容
        </Card>
      </div>
    </>
  );
};
