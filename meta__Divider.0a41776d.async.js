"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9104],{39718:function(i,n,e){var a;e.r(n),e.d(n,{demos:function(){return u}});var t=e(90819),r=e.n(t),_=e(89933),d=e.n(_),l=e(44194),p=e(67064),c=e(59498),m=e(63457),u={"src-divider-demo-base":{component:l.memo(l.lazy(function(){return Promise.all([e.e(107),e.e(9378),e.e(7311),e.e(9729),e.e(2433)]).then(e.bind(e,72012))})),asset:{type:"BLOCK",id:"src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72726).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":c,"@trionesdev/antd-taro-react/DemoBlock":m,react:a||(a=e.t(l,2))},renderOpts:{compile:function(){var v=d()(r()().mark(function D(){var s,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(6142).then(e.bind(e,56142));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,f));case 3:case"end":return o.stop()}},D)}));function I(){return v.apply(this,arguments)}return I}()}}}},63457:function(i,n,e){e.r(n),e.d(n,{DemoBlock:function(){return r}});var a=e(44194),t=e(31549),r=function(d){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:d.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},19755:function(i,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(67064);const t=[{value:"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002",paraId:0,tocIndex:0},{value:"\u5BF9\u4E0D\u540C\u7AE0\u8282\u7684\u6587\u672C\u6BB5\u843D\u8FDB\u884C\u5206\u5272\u3002",paraId:1,tocIndex:1},{value:"\u5BF9\u884C\u5185\u6587\u5B57/\u94FE\u63A5\u8FDB\u884C\u5206\u5272\uFF0C\u4F8B\u5982\u8868\u683C\u7684\u64CD\u4F5C\u5217\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"contentPosition",paraId:2,tocIndex:3},{value:"\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:" \u4E3A ",paraId:2,tocIndex:3},{value:"horizontal",paraId:2,tocIndex:3},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:3},{value:"'center' | 'left' | 'right'",paraId:2,tocIndex:3},{value:"'center'",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:"\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B",paraId:2,tocIndex:3},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:3},{value:"'horizontal'",paraId:2,tocIndex:3}]},72726:function(i,n){n.Z=`import { Divider } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";
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
