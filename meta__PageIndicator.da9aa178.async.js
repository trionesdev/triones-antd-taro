"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6851],{63845:function(d,e,a){var n;a.r(e),a.d(e,{demos:function(){return i}});var o=a(90819),c=a.n(o),_=a(89933),I=a.n(_),r=a(44194),D=a(7766),u=a(27574),s=a(63457),i={"src-page-indicator-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([a.e(9378),a.e(7574),a.e(2433)]).then(a.bind(a,82745))})),asset:{type:"BLOCK",id:"src-page-indicator-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a(53627).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":u,"@trionesdev/antd-taro-react/DemoBlock":s,react:n||(n=a.t(r,2))},renderOpts:{compile:function(){var p=I()(c()().mark(function m(){var l,x=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.e(157).then(a.bind(a,30157));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,x));case 3:case"end":return t.stop()}},m)}));function v(){return p.apply(this,arguments)}return v}()}}}},38125:function(d,e,a){a.r(e),a.d(e,{texts:function(){return o}});var n=a(7766);const o=[{value:"\u6307\u793A\u5F53\u524D\u663E\u793A\u7684\u662F\u591A\u9875\u9762\u89C6\u56FE\u7684\u54EA\u4E00\u9875\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u8868\u793A\u5F53\u524D\u5185\u5BB9\u533A\u5757\u53EF\u4EE5\u6A2A\u5411\u6EDA\u52A8\u7FFB\u9875\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u989C\u8272",paraId:2,tocIndex:4},{value:"'primary' | 'white'",paraId:2,tocIndex:4},{value:"'primary'",paraId:2,tocIndex:4},{value:"current",paraId:2,tocIndex:4},{value:"\u5F53\u524D\u9875\uFF08\u4ECE ",paraId:2,tocIndex:4},{value:"0",paraId:2,tocIndex:4},{value:" \u5F00\u59CB\u8BA1\u6570\uFF09",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u65B9\u5411\uFF0C\u9ED8\u8BA4\u662F\u6C34\u5E73\u65B9\u5411",paraId:2,tocIndex:4},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4},{value:"total",paraId:2,tocIndex:4},{value:"\u603B\u9875\u6570",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"--active-dot-border-radius",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u5706\u89D2\u5927\u5C0F",paraId:3,tocIndex:5},{value:"--active-dot-color",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:3,tocIndex:5},{value:"--active-dot-size",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u5927\u5C0F",paraId:3,tocIndex:5},{value:"13px",paraId:3,tocIndex:5},{value:"--dot-border-radius",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u5706\u89D2\u5927\u5C0F",paraId:3,tocIndex:5},{value:"1px",paraId:3,tocIndex:5},{value:"--dot-color",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:3,tocIndex:5},{value:"--dot-size",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u5927\u5C0F",paraId:3,tocIndex:5},{value:"3px",paraId:3,tocIndex:5},{value:"--dot-spacing",paraId:3,tocIndex:5},{value:"\u9875\u7801\u6307\u793A\u5668\u5C0F\u5706\u70B9\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:3,tocIndex:5},{value:"3px",paraId:3,tocIndex:5}]},53627:function(d,e){e.Z=`import { PageIndicator } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
        <PageIndicator total={4} current={0} />
      </DemoBlock>

      <DemoBlock title='\u767D\u8272' background='rgb(212 212 212)'>
        <PageIndicator total={4} current={0} color='white' />
      </DemoBlock>

      <DemoBlock title='\u7AD6\u76F4\u65B9\u5411'>
        <PageIndicator total={4} current={0} direction='vertical' />
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F'>
        <PageIndicator
          total={4}
          current={0}
          style={{
            '--dot-color': 'rgba(0, 0, 0, 0.4)',
            '--active-dot-color': '#ffc0cb',
            '--dot-size': '10px',
            '--active-dot-size': '30px',
            '--dot-border-radius': '50%',
            '--active-dot-border-radius': '15px',
            '--dot-spacing': '8px',
          }}
        />
      </DemoBlock>
    </>
  )
}
`}}]);
