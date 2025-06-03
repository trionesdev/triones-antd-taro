/**
 * compact: true
 */
import React from 'react';
import { DemoBlock } from '../../DemoBlock';

import './style.scss'
import { AntOutline } from '@trionesdev/antd-taro-icons-react';
import Avatar from "../index";
import {Space} from "@trionesdev/antd-taro-react";

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default () => {
  return (
    <>
      <DemoBlock title='基本'>
        <Space>
          <Avatar
            size={64}
            icon={<AntOutline style={{ fontSize: '32px', color: '#fff' }} />}
          />
          <Avatar
            icon={<AntOutline style={{ fontSize: '20px', color: '#fff' }} />}
          />
          <Avatar
            size={32}
            icon={<AntOutline style={{ fontSize: '16px', color: '#fff' }} />}
          />
          <Avatar
            size={24}
            icon={<AntOutline style={{ fontSize: '12px', color: '#fff' }} />}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title='方形'>
        <Space>
          <Avatar
            size={64}
            shape="square"
            icon={<AntOutline style={{ fontSize: '32px', color: '#fff' }} />}
          />
          <Avatar
            shape="square"
            icon={<AntOutline style={{ fontSize: '20px', color: '#fff' }} />}
          />
          <Avatar
            size={32}
            shape="square"
            icon={<AntOutline style={{ fontSize: '16px', color: '#fff' }} />}
          />
          <Avatar
            size={24}
            shape="square"
            icon={<AntOutline style={{ fontSize: '12px', color: '#fff' }} />}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title='类型'>
        <Space>
          <Avatar>U</Avatar>
          <Avatar
            size={48}
            style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
          >
            USER
          </Avatar>
          <Avatar src={url} />
          <Avatar src={<img src={url} alt="avatar" width={'100%'} />} />
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<AntOutline style={{ fontSize: '16px', color: '#fff' }} />}
          />
        </Space>
      </DemoBlock>

    </>
  );
};
