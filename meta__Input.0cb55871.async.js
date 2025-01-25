"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{68063:function(e,t,n){var _;n.r(t),n.d(t,{demos:function(){return p}});var d=n(90819),o=n.n(d),s=n(89933),l=n.n(s),r=n(44194),B=n(5333),u=n(25726),m=n(49387),c=n(91518),p={"input-demo-base":{component:r.memo(r.lazy(function(){return n.e(2091).then(n.bind(n,68215))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(64614).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":m,"./index.scss":c,"@trionesdev/antd-taro-react":u,react:_||(_=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var f=l()(o()().mark(function E(){var i,v=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(2194).then(n.bind(n,2194));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,v));case 3:case"end":return a.stop()}},E)}));function D(){return f.apply(this,arguments)}return D}()}}}},49387:function(e,t,n){n.r(t),n.d(t,{DemoBlock:function(){return s}});var _=n(44194),d=n(91518),o=n(31549),s=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},91518:function(e,t,n){n.r(t)},87635:function(e,t,n){n.r(t),n.d(t,{texts:function(){return d}});var _=n(5333);const d=[]},92505:function(e,t){t.Z=`.demoBlock {
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
`},25475:function(e,t){t.Z=`import React from 'react'
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
`},64614:function(e,t){t.Z=`import {DemoBlock} from '../../DemoBlock';
import {Input} from '@trionesdev/antd-taro-react';
import React from 'react';

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"/>
      </DemoBlock>
      <DemoBlock title="\u5E26\u6E05\u9664\u6309\u94AE">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="\u5BC6\u7801\u6A21\u5F0F">
        <Input.Password placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="OPT\u6A21\u5F0F">
        <Input.OPT/>
      </DemoBlock>
    </>
  );
};
`}}]);
