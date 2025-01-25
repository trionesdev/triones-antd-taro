"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9104],{40872:function(t,e,n){var d;n.r(e),n.d(e,{demos:function(){return v}});var _=n(90819),o=n.n(_),i=n(89933),s=n.n(i),r=n(44194),x=n(37652),u=n(25726),l=n(49387),c=n(91518),v={"src-divider-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(4875),n.e(5726),n.e(2433)]).then(n.bind(n,66784))})),asset:{type:"BLOCK",id:"src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(69300).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":c,"@trionesdev/antd-taro-react":u,react:d||(d=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var p=s()(o()().mark(function f(){var m,I=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(2194).then(n.bind(n,2194));case 2:return a.abrupt("return",(m=a.sent).default.apply(m,I));case 3:case"end":return a.stop()}},f)}));function D(){return p.apply(this,arguments)}return D}()}}}},49387:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return i}});var d=n(44194),_=n(91518),o=n(31549),i=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},91518:function(t,e,n){n.r(e)},56219:function(t,e,n){n.r(e),n.d(e,{texts:function(){return _}});var d=n(37652);const _=[{value:"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002",paraId:0,tocIndex:0},{value:"\u5BF9\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002",paraId:1,tocIndex:1},{value:"\u5BF9\u884C\u5185\u6587\u5B57/\u94FE\u63A5\u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982\u8868\u683C\u7684\u64CD\u4F5C\u5217\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"contentPosition",paraId:2,tocIndex:3},{value:"\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:" \u4E3A ",paraId:2,tocIndex:3},{value:"horizontal",paraId:2,tocIndex:3},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:3},{value:"'center' | 'left' | 'right'",paraId:2,tocIndex:3},{value:"'center'",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:"\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B",paraId:2,tocIndex:3},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:3},{value:"'horizontal'",paraId:2,tocIndex:3}]},92505:function(t,e){e.Z=`.demoBlock {
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
`},25475:function(t,e){e.Z=`import React from 'react'
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
`},69300:function(t,e){e.Z=`import { Divider } from "@trionesdev/antd-taro-react";
import { DemoBlock } from '../../DemoBlock';
import React from "react";

export default () => {
  return <>
    <DemoBlock title='\u57FA\u7840\u5206\u5272\u7EBF'>
      <Divider />
    </DemoBlock>
    <DemoBlock title='\u5E26\u5185\u5BB9\u7684\u5206\u5272\u7EBF'>
      <Divider>\u9ED8\u8BA4\u5185\u5BB9\u5728\u4E2D\u95F4</Divider>
      <Divider contentPosition='left'>\u5DE6\u4FA7\u5185\u5BB9</Divider>
      <Divider contentPosition='right'>\u53F3\u4FA7\u5185\u5BB9</Divider>
    </DemoBlock>
    <DemoBlock title='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
      <Divider
        style={{
          color: '#1677ff',
          borderColor: '#1677ff',
          borderStyle: 'dashed',
        }}
      >
        \u81EA\u5B9A\u4E49\u6837\u5F0F
      </Divider>
    </DemoBlock>
    <DemoBlock title='\u7AD6\u5411\u5206\u5272\u7EBF'>
      <>
        Text
        <Divider direction='vertical' />
        <a href='#'>Link</a>
        <Divider direction='vertical' />
        <a href='#'>Link</a>
      </>
    </DemoBlock>
  </>
}
`}}]);
