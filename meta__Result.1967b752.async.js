"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[5798],{54823:function(e,t,n){var d;n.r(t),n.d(t,{demos:function(){return v}});var s=n(90819),o=n.n(s),_=n(89933),c=n.n(_),a=n(44194),E=n(51916),m=n(25726),p=n(27311),l=n(49387),i=n(91518),v={"src-result-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(4875),n.e(5726),n.e(2433)]).then(n.bind(n,6388))})),asset:{type:"BLOCK",id:"src-result-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(87787).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":i,"@trionesdev/antd-taro-react":m,react:d||(d=n.t(a,2)),"@trionesdev/antd-taro-icons-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":i},renderOpts:{compile:function(){var I=c()(o()().mark(function D(){var u,f=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2194).then(n.bind(n,2194));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,f));case 3:case"end":return r.stop()}},D)}));function x(){return I.apply(this,arguments)}return x}()}}}},49387:function(e,t,n){n.r(t),n.d(t,{DemoBlock:function(){return _}});var d=n(44194),s=n(91518),o=n(31549),_=function(a){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:a.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},91518:function(e,t,n){n.r(t)},39464:function(e,t,n){n.r(t),n.d(t,{texts:function(){return s}});var d=n(51916);const s=[{value:"\u5BF9\u524D\u4E00\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 ",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"status",paraId:2,tocIndex:4},{value:"\u72B6\u6001\u7C7B\u578B",paraId:2,tocIndex:4},{value:"'success' | 'error' | 'info' | 'waiting' | 'warning'",paraId:2,tocIndex:4},{value:"'info'",paraId:2,tocIndex:4},{value:"title",paraId:2,tocIndex:4},{value:"\u6807\u9898",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},92505:function(e,t){t.Z=`.demoBlock {
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
`},87787:function(e,t){t.Z=`import { Result } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import {FaceRecognitionOutline} from "@trionesdev/antd-taro-icons-react";

export default () => {
  return (
    <>
      <DemoBlock title='\u6210\u529F\u72B6\u6001' padding='0'>
        <Result
          status='success'
          title='\u64CD\u4F5C\u6210\u529F'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u7B49\u5F85\u72B6\u6001' padding='0'>
        <Result
          status='waiting'
          title='\u7B49\u5F85\u5904\u7406'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u63D0\u793A\u72B6\u6001' padding='0'>
        <Result
          status='info'
          title='\u4FE1\u606F\u63D0\u793A'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u8B66\u544A\u72B6\u6001' padding='0'>
        <Result
          status='warning'
          title='\u8B66\u544A\u63D0\u793A'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u5931\u8D25\u72B6\u6001' padding='0'>
        <Result
          status='error'
          title='\u65E0\u6CD5\u5B8C\u6210\u64CD\u4F5C'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u56FE\u6807' padding='0'>
        <Result
          icon={<FaceRecognitionOutline />}
          status='success'
          title='Well done'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>
    </>
  )
}
`}}]);
