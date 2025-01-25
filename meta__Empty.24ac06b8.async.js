"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7413],{24649:function(t,e,n){var d;n.r(e),n.d(e,{demos:function(){return v}});var _=n(90819),o=n.n(_),s=n(89933),c=n.n(s),a=n(44194),f=n(86596),u=n(27311),p=n(25726),i=n(49387),l=n(91518),v={"empty-demo-base":{component:a.memo(a.lazy(function(){return n.e(6522).then(n.bind(n,2688))})),asset:{type:"BLOCK",id:"empty-demo-base",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:n(15791).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":i,"./index.scss":l,"@trionesdev/antd-taro-icons-react":u,"@trionesdev/antd-taro-react":p,react:d||(d=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":l},renderOpts:{compile:function(){var E=c()(o()().mark(function x(){var m,D=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2194).then(n.bind(n,2194));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,D));case 3:case"end":return r.stop()}},x)}));function I(){return E.apply(this,arguments)}return I}()}}}},49387:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var d=n(44194),_=n(91518),o=n(31549),s=function(a){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:a.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},91518:function(t,e,n){n.r(e)},54239:function(t,e,n){n.r(e),n.d(e,{texts:function(){return _}});var d=n(86596);const _=[{value:"\u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002",paraId:0,tocIndex:1},{value:"\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u5F15\u5BFC\u521B\u5EFA\u6D41\u7A0B\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"description",paraId:1,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u5185\u5BB9",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"image",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E\u663E\u793A\u56FE\u7247\uFF0C\u4E3A string \u65F6\u8868\u793A\u81EA\u5B9A\u4E49\u56FE\u7247\u5730\u5740\u3002",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"Empty.PRESENTED_IMAGE_DEFAULT",paraId:1,tocIndex:3},{value:"imageStyle",paraId:1,tocIndex:3},{value:"\u56FE\u7247\u6837\u5F0F",paraId:1,tocIndex:3},{value:"CSSProperties",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3}]},92505:function(t,e){e.Z=`.demoBlock {
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
`},15791:function(t,e){e.Z=`import { QuestionCircleOutline } from "@trionesdev/antd-taro-icons-react";
import { DemoBlock } from '../../DemoBlock';
import {Empty} from "@trionesdev/antd-taro-react";
import React from "react";

export default () => {
  return <>
    <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
      <Empty />
    </DemoBlock>

    <DemoBlock title='\u63CF\u8FF0\u6587\u5B57'>
      <Empty description='\u6682\u65E0\u6570\u636E' />
    </DemoBlock>

    <DemoBlock title='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
      <Empty
        style={{ padding: '64px 0' }}
        imageStyle={{ width: 128 }}
        description='\u6682\u65E0\u6570\u636E'
      />
    </DemoBlock>

    <DemoBlock title='\u81EA\u5B9A\u4E49\u56FE\u7247'>
      <Empty
        style={{ padding: '64px 0' }}
        image={
          <QuestionCircleOutline
            style={{ color: '#ccc' }}
          />
        }
        description='\u6682\u65E0\u6570\u636E'
      />
    </DemoBlock>
  </>
}
`}}]);
