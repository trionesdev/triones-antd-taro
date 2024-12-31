/**
 * compact: true
 */
import React from 'react';
import { AntOutline } from '@trionesdev/antd-taro-icons-react/dist/AntOutline';
import Avatar from '@trionesdev/antd-taro-react/Avatar';
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock';

import './style.scss'

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default () => {
  return (
    <>
      <DemoBlock title='基本'>
        <div className='avatar-content'>
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
        </div>
      </DemoBlock>
      <DemoBlock title='方形'>
        <div className='avatar-content'>
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
        </div>
      </DemoBlock>
      <DemoBlock title='类型'>
        <div className='avatar-content'>
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
        </div>
      </DemoBlock>

    </>
  );
};
