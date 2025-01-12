"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[62],{70853:function(d,e,a){var t;a.r(e),a.d(e,{demos:function(){return p}});var o=a(90819),l=a.n(o),c=a(89933),u=a.n(c),r=a(44194),f=a(7644),I=a(84474),v=a(76282),s=a(63457),p={"rate-demo-base":{component:r.memo(r.lazy(function(){return a.e(1262).then(a.bind(a,46028))})),asset:{type:"BLOCK",id:"rate-demo-base",refAtomIds:["Rate"],dependencies:{"index.tsx":{type:"FILE",value:a(96882).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-icons-react":I,"@trionesdev/antd-taro-react":v,"@trionesdev/antd-taro-react/DemoBlock":s,react:t||(t=a.t(r,2))},renderOpts:{compile:function(){var m=u()(l()().mark(function x(){var _,D=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(8863).then(a.bind(a,68863));case 2:return n.abrupt("return",(_=n.sent).default.apply(_,D));case 3:case"end":return n.stop()}},x)}));function i(){return m.apply(this,arguments)}return i}()}}}},43024:function(d,e,a){a.r(e),a.d(e,{texts:function(){return o}});var t=a(7644);const o=[{value:"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u652F\u6301\u9009\u62E9\u661F\u7EA7\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"defaultValue",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"0",paraId:1,tocIndex:1},{value:"count",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u603B\u6570",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"5",paraId:1,tocIndex:1},{value:"allowHalf",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u534A\u661F",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"allowClear",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"true",paraId:1,tocIndex:1},{value:"readonly",paraId:1,tocIndex:1},{value:"\u662F\u5426\u53EA\u8BFB",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u661F\u661F\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"20",paraId:1,tocIndex:1},{value:"character",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26",paraId:1,tocIndex:1},{value:"React.ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:1},{value:"(value: number) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--active-color",paraId:2,tocIndex:2},{value:"\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#ffb400",paraId:2,tocIndex:2},{value:"--inactive-color",paraId:2,tocIndex:2},{value:"\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e8e8e8",paraId:2,tocIndex:2}]},96882:function(d,e){e.Z=`import { PlayOutline } from '@trionesdev/antd-taro-icons-react';
import { Rate, Space } from '@trionesdev/antd-taro-react';
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock';
import React from 'react';

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Rate />
      </DemoBlock>

      <DemoBlock title="\u9ED8\u8BA4\u503C">
        <Rate defaultValue={3} />
      </DemoBlock>

      <DemoBlock title="\u534A\u661F">
        <Rate allowHalf defaultValue={2.5} />
      </DemoBlock>

      <DemoBlock title="\u53EA\u8BFB">
        <Rate value={4} readonly />
      </DemoBlock>

      <DemoBlock title="\u6E05\u9664">
        <Space direction="vertical">
          <Space>
            <Rate allowClear defaultValue={3} />
            <div>\u53EF\u6E05\u9664(\u70B9\u51FB\u540C\u4E00\u9897\u661F\u661F)</div>
          </Space>
          <Space>
            <Rate allowClear={false} defaultValue={2} />
            <div>\u4E0D\u53EF\u6E05\u9664</div>
          </Space>
        </Space>
      </DemoBlock>

      <DemoBlock title="\u81EA\u5B9A\u4E49\u6570\u91CF">
        <Rate count={10} defaultValue={5} />
      </DemoBlock>

      <DemoBlock title="\u81EA\u5B9A\u4E49\u5B57\u7B26">
        <Space direction="vertical">
          <Rate character="A" size={40} allowHalf />
          <Rate
            character={<PlayOutline style={{ fontSize: 20 }} />}
            allowHalf
            defaultValue={3.5}
            style={{
              '--active-color': '#46b37a',
              '--inactive-color': '#1d78c9',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  );
};
`}}]);
