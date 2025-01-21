"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[62],{5959:function(l,a,e){var o;e.r(a),e.d(a,{demos:function(){return i}});var n=e(90819),d=e.n(n),u=e(89933),r=e.n(u),c=e(44194),D=e(72716),I=e(84474),v=e(30343),s=e(42491),i={"rate-demo-base":{component:c.memo(c.lazy(function(){return e.e(1262).then(e.bind(e,35131))})),asset:{type:"BLOCK",id:"rate-demo-base",refAtomIds:["Rate"],dependencies:{"index.tsx":{type:"FILE",value:e(9872).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-icons-react":I,"@trionesdev/antd-taro-react":v,"@trionesdev/antd-taro-react/DemoBlock":s,react:o||(o=e.t(c,2))},renderOpts:{compile:function(){var m=r()(d()().mark(function x(){var _,f=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(5926).then(e.bind(e,25926));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,f));case 3:case"end":return t.stop()}},x)}));function p(){return m.apply(this,arguments)}return p}()}}}},42491:function(l,a,e){e.r(a),e.d(a,{DemoBlock:function(){return d}});var o=e(44194),n=e(31549),d=function(r){return(0,n.jsxs)("div",{className:"demoBlock",children:[(0,n.jsx)("div",{className:"demoTitle",children:r.title}),(0,n.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},77133:function(l,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(72716);const n=[{value:"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u652F\u6301\u9009\u62E9\u661F\u7EA7\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"defaultValue",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"0",paraId:1,tocIndex:1},{value:"count",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u603B\u6570",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"5",paraId:1,tocIndex:1},{value:"allowHalf",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u534A\u661F",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"allowClear",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"true",paraId:1,tocIndex:1},{value:"readonly",paraId:1,tocIndex:1},{value:"\u662F\u5426\u53EA\u8BFB",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u661F\u661F\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"20",paraId:1,tocIndex:1},{value:"character",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26",paraId:1,tocIndex:1},{value:"React.ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:1},{value:"(value: number) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--active-color",paraId:2,tocIndex:2},{value:"\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#ffb400",paraId:2,tocIndex:2},{value:"--inactive-color",paraId:2,tocIndex:2},{value:"\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e8e8e8",paraId:2,tocIndex:2}]},9872:function(l,a){a.Z=`import { PlayOutline } from '@trionesdev/antd-taro-icons-react';
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
