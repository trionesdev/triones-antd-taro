"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[5798],{74655:function(s,t,n){var o;n.r(t),n.d(t,{demos:function(){return v}});var e=n(90819),r=n.n(e),c=n(89933),d=n.n(c),l=n(44194),f=n(28913),_=n(59498),u=n(63457),m=n(27311),v={"src-result-demo-base":{component:l.memo(l.lazy(function(){return Promise.all([n.e(107),n.e(9378),n.e(7311),n.e(9729),n.e(2433)]).then(n.bind(n,4505))})),asset:{type:"BLOCK",id:"src-result-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(87595).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":_,"@trionesdev/antd-taro-react/DemoBlock":u,react:o||(o=n.t(l,2)),"@trionesdev/antd-taro-icons-react":m},renderOpts:{compile:function(){var I=d()(r()().mark(function D(){var i,E=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(6142).then(n.bind(n,56142));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,E));case 3:case"end":return a.stop()}},D)}));function p(){return I.apply(this,arguments)}return p}()}}}},63457:function(s,t,n){n.r(t),n.d(t,{DemoBlock:function(){return r}});var o=n(44194),e=n(31549),r=function(d){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:d.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},35624:function(s,t,n){n.r(t),n.d(t,{texts:function(){return e}});var o=n(28913);const e=[{value:"\u5BF9\u524D\u4E00\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 ",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"status",paraId:2,tocIndex:4},{value:"\u72B6\u6001\u7C7B\u578B",paraId:2,tocIndex:4},{value:"'success' | 'error' | 'info' | 'waiting' | 'warning'",paraId:2,tocIndex:4},{value:"'info'",paraId:2,tocIndex:4},{value:"title",paraId:2,tocIndex:4},{value:"\u6807\u9898",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},87595:function(s,t){t.Z=`import { Result } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
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
