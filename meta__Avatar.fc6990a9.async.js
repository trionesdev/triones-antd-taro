"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[3189],{56833:function(a,t,n){var s;n.r(t),n.d(t,{demos:function(){return E}});var d=n(90819),e=n.n(d),c=n(89933),_=n.n(c),r=n(44194),O=n(76550),x=n(72995),I=n(95258),l=n(71649),i=n(95676),u=n(31136),m=n(72990),v=n(51865),g=n.n(v),p=n(3837),E={"avatar-demo-base":{component:r.memo(r.lazy(function(){return n.e(5186).then(n.bind(n,2828))})),asset:{type:"BLOCK",id:"avatar-demo-base",refAtomIds:["Avatar"],dependencies:{"index.tsx":{type:"FILE",value:n(65677).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../index.tsx":{type:"FILE",value:n(38754).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./style.scss":{type:"FILE",value:n(67887).Z},"./avatar.tsx":{type:"FILE",value:n(58453).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(72973).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":i,"./style.scss":u,"./avatar.tsx":m,"./index.scss":p,react:s||(s=n.t(r,2)),"@trionesdev/antd-taro-icons-react":x,"@trionesdev/antd-taro-react":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Avatar/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Avatar/style.scss":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Avatar/avatar.tsx":m,classnames:v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":p},renderOpts:{compile:function(){var A=_()(e()().mark(function D(){var f,P=arguments;return e()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(2740).then(n.bind(n,42740));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,P));case 3:case"end":return o.stop()}},D)}));function h(){return A.apply(this,arguments)}return h}()}}}},95676:function(a,t,n){n.r(t),n.d(t,{DemoBlock:function(){return c}});var s=n(44194),d=n(3837),e=n(31549),c=function(r){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:r.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},3837:function(a,t,n){n.r(t)},88450:function(a,t,n){n.r(t),n.d(t,{texts:function(){return d}});var s=n(76550);const d=[{value:"\u6807\u7B7E\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"alt",paraId:1,tocIndex:1},{value:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"icon",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u5934\u50CF\u7684\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:1,tocIndex:1},{value:"ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"shape",paraId:1,tocIndex:1},{value:"\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6",paraId:1,tocIndex:1},{value:"circle | square",paraId:1,tocIndex:1},{value:"''",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number | 'large' | 'small' | 'default' | { xs: number, sm: number, ...}",paraId:1,tocIndex:1},{value:"'default'",paraId:1,tocIndex:1},{value:"src",paraId:1,tocIndex:1},{value:"\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740\u6216\u8005\u56FE\u7247\u5143\u7D20",paraId:1,tocIndex:1},{value:"string | ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"srcSet",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u56FE\u7247\u7C7B\u5934\u50CF\u54CD\u5E94\u5F0F\u8D44\u6E90\u5730\u5740",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1}]},58453:function(a,t){t.Z=`import classNames from 'classnames';
import React from 'react';
import './style.scss';

type AvatarProps = {
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  size?: number;
  src?: string | React.ReactNode;
  srcSet?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  icon,
  shape = 'circle',
  size = 40,
  src,
  srcSet,
  style,
  children,
}) => {
  const clsPrefix = 'triones-antm-avatar';
  return (
    <div
      className={classNames(clsPrefix, {
        [\`\${clsPrefix}-\${shape !== 'square' ? 'circle' : 'square'}\`]: true,
      })}
      style={{
        width: size,
        height: size,
        backgroundColor: src ? undefined : '#ccc',
        ...style,
      }}
    >
      {src ? (
        typeof src === 'string' ? (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          src
        )
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </div>
  );
};

export default Avatar;
`},65677:function(a,t){t.Z=`import React from 'react';
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
      <DemoBlock title='\u57FA\u672C'>
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
      <DemoBlock title='\u65B9\u5F62'>
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
      <DemoBlock title='\u7C7B\u578B'>
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
`},38754:function(a,t){t.Z=`import { Avatar } from "./avatar"

export default Avatar `},67887:function(a,t){t.Z=`$avatarCls: 'triones-antm-avatar';

.#{$avatarCls} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &-circle {
    border-radius: 50%;
  }

  &-shape-square {
    border-radius: 6Px;
  }
}
`},72973:function(a,t){t.Z=`.demoBlock {
  font-size: 14px;
  margin-bottom: 12px;
  &:last-of-type {
    padding-bottom: 32px;
  }
  scrollbar-width: thin;
}

.demoTitle {
  padding: 12px 12px 8px;
  color: #697b8c;
  font-size: 14px;
  background: #fafbfc;
}

.demoMain {
  border-right: none;
  border-left: none;
}
`},23624:function(a,t){t.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import './index.scss'

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = props => {
  return (
    <div className='demoBlock'>
      <div className='demoTitle'>{props.title}</div>
      <div
        className='demoMain'
        style={{
          padding: '12px 12px',
          background: '#ffffff',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
`}}]);
