import { AntOutline } from '@trionesdev/antd-taro-icons-react/dist/AntOutline';
import Avatar from '@trionesdev/antd-taro-react/Avatar';
import React from 'react';
import './style.scss';

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default () => {
  const clsPrefix = 'tag-demo-style';
  return (
    <div className={clsPrefix}>
      <div className={`${clsPrefix}-item`}>
        <div className={`${clsPrefix}-title`}>基本</div>
        <div className={`${clsPrefix}-content`}>
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
        <div className={`${clsPrefix}-title`}>方形</div>
        <div className={`${clsPrefix}-content`}>
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
      </div>
      <div className={`${clsPrefix}-item`}>
        <div className={`${clsPrefix}-title`}>类型</div>
        <div className={`${clsPrefix}-content`}>
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
      </div>
    </div>
  );
};
