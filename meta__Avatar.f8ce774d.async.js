"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[3189],{74012:function(a,t,n){var d;n.r(t),n.d(t,{demos:function(){return f}});var s=n(90819),e=n.n(s),_=n(89933),c=n.n(_),o=n(44194),A=n(40492),v=n(25726),p=n(27311),l=n(30572),i=n(49387),u=n(91518),f={"avatar-demo-base":{component:o.memo(o.lazy(function(){return n.e(5186).then(n.bind(n,47882))})),asset:{type:"BLOCK",id:"avatar-demo-base",refAtomIds:["Avatar"],dependencies:{"index.tsx":{type:"FILE",value:n(90190).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./style.scss":{type:"FILE",value:n(45261).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"./style.scss":l,"../../DemoBlock.tsx":i,"./index.scss":u,react:d||(d=n.t(o,2)),"@trionesdev/antd-taro-react":v,"@trionesdev/antd-taro-icons-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Avatar/demo/style.scss":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var I=c()(e()().mark(function E(){var m,D=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2194).then(n.bind(n,2194));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,D));case 3:case"end":return r.stop()}},E)}));function x(){return I.apply(this,arguments)}return x}()}}}},49387:function(a,t,n){n.r(t),n.d(t,{DemoBlock:function(){return _}});var d=n(44194),s=n(91518),e=n(31549),_=function(o){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:o.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},30572:function(a,t,n){n.r(t)},91518:function(a,t,n){n.r(t)},34698:function(a,t,n){n.r(t),n.d(t,{texts:function(){return s}});var d=n(40492);const s=[{value:"\u6807\u7B7E\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"alt",paraId:1,tocIndex:1},{value:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"icon",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u5934\u50CF\u7684\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:1,tocIndex:1},{value:"ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"shape",paraId:1,tocIndex:1},{value:"\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6",paraId:1,tocIndex:1},{value:"circle | square",paraId:1,tocIndex:1},{value:"''",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number | 'large' | 'small' | 'default' | { xs: number, sm: number, ...}",paraId:1,tocIndex:1},{value:"'default'",paraId:1,tocIndex:1},{value:"src",paraId:1,tocIndex:1},{value:"\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740\u6216\u8005\u56FE\u7247\u5143\u7D20",paraId:1,tocIndex:1},{value:"string | ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"srcSet",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u56FE\u7247\u7C7B\u5934\u50CF\u54CD\u5E94\u5F0F\u8D44\u6E90\u5730\u5740",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1}]},90190:function(a,t){t.Z=`import React from 'react';
import {Avatar} from '@trionesdev/antd-taro-react';
import { DemoBlock } from '../../DemoBlock';

import './style.scss'
import { AntOutline } from '@trionesdev/antd-taro-icons-react';

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default () => {
  return (
    <>
      <DemoBlock title='\u57FA\u672C'>
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
      <DemoBlock title='\u65B9\u5F62'>
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
      <DemoBlock title='\u7C7B\u578B'>
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
`},45261:function(a,t){t.Z=`.avatar-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
`},92505:function(a,t){t.Z=`.demoBlock {
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
`},25475:function(a,t){t.Z=`import React from 'react'
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
