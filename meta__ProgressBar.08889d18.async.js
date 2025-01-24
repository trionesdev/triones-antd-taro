"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[4856],{9724:function(c,n,e){var a;e.r(n),e.d(n,{demos:function(){return p}});var t=e(90819),o=e.n(t),s=e(89933),d=e.n(s),l=e(44194),f=e(91183),u=e(59498),i=e(63457),p={"progressbar-demo-base":{component:l.memo(l.lazy(function(){return e.e(7616).then(e.bind(e,36783))})),asset:{type:"BLOCK",id:"progressbar-demo-base",refAtomIds:["ProgressBar"],dependencies:{"index.tsx":{type:"FILE",value:e(52544).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":u,"@trionesdev/antd-taro-react/DemoBlock":i,react:a||(a=e.t(l,2))},renderOpts:{compile:function(){var m=d()(o()().mark(function v(){var _,B=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(6142).then(e.bind(e,56142));case 2:return r.abrupt("return",(_=r.sent).default.apply(_,B));case 3:case"end":return r.stop()}},v)}));function I(){return m.apply(this,arguments)}return I}()}}}},63457:function(c,n,e){e.r(n),e.d(n,{DemoBlock:function(){return o}});var a=e(44194),t=e(31549),o=function(d){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:d.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},74751:function(c,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(91183);const t=[{value:"\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u663E\u793A\u4EFB\u52A1\u7684\u5B8C\u6210\u8FDB\u5EA6\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"percent",paraId:1,tocIndex:1},{value:"\u8FDB\u5EA6\u767E\u5206\u6BD4",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"rounded",paraId:1,tocIndex:1},{value:"\u662F\u5426\u4E3A\u5706\u89D2",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"text",paraId:1,tocIndex:1},{value:"\u8FDB\u5EA6\u6587\u672C",paraId:1,tocIndex:1},{value:"boolean | ReactNode | ((percent: number) => ReactNode)",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--fill-color",paraId:2,tocIndex:2},{value:"\u586B\u5145\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#1677ff",paraId:2,tocIndex:2},{value:"--track-color",paraId:2,tocIndex:2},{value:"\u7EBF\u6761\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e9ecef",paraId:2,tocIndex:2},{value:"--track-width",paraId:2,tocIndex:2},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:2,tocIndex:2},{value:"8px",paraId:2,tocIndex:2},{value:"--text-width",paraId:2,tocIndex:2},{value:"\u6587\u5B57\u5185\u5BB9\u7684\u5BBD\u5EA6",paraId:2,tocIndex:2},{value:"40px",paraId:2,tocIndex:2}]},52544:function(c,n){n.Z=`import { Button, ProgressBar, Space } from '@trionesdev/antd-taro-react';
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock';
import React, { useState } from 'react';

export default () => {
  const [percent, setPercent] = useState<number>(20);

  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Space direction="vertical" block>
          <Space block>
            <Button
              color="primary"
              disabled={percent === 100}
              onClick={() => {
                setPercent((pre) => pre + 10);
              }}
            >
              \u8FDB\u5EA6+10
            </Button>
            <Button
              color="primary"
              onClick={() => {
                setPercent(0);
              }}
            >
              \u91CD\u7F6E
            </Button>
          </Space>
          <ProgressBar percent={percent} />
        </Space>
      </DemoBlock>

      <DemoBlock title="\u663E\u793A\u8FDB\u5EA6\u6587\u5B57">
        <Space direction="vertical" block>
          <ProgressBar percent={50} text />
          <ProgressBar
            percent={50}
            text="\u5DF2\u5B8C\u6210 3/6 \u6B65"
            style={{
              '--text-width': '80px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="\u6307\u5B9A\u7EBF\u6761\u5BBD\u5EA6">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--track-width': '4px',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--track-width': '12px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="\u76F4\u89D2\u7684\u8FDB\u5EA6\u6761">
        <ProgressBar percent={50} rounded={false} />
      </DemoBlock>

      <DemoBlock title="\u6307\u5B9A\u7EBF\u6761\u989C\u8272">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--fill-color': '#00b578',
            }}
          />
          <ProgressBar
            percent={60}
            style={{
              '--fill-color': '#ff8f1f',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--fill-color': '#ff3141',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--fill-color': 'linear-gradient(to right, #1677ff, #00b578)',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="\u6307\u5B9A\u8F68\u9053\u989C\u8272">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--track-color': '#00b578',
            }}
          />
          <ProgressBar
            percent={60}
            style={{
              '--track-color': '#ff8f1f',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  );
};
`}}]);
