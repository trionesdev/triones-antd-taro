"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[4856],{37476:function(t,e,n){var d;n.r(e),n.d(e,{demos:function(){return m}});var c=n(90819),r=n.n(c),s=n(89933),l=n.n(s),a=n(44194),B=n(32046),u=n(25726),_=n(49387),i=n(91518),m={"progressbar-demo-base":{component:a.memo(a.lazy(function(){return n.e(7616).then(n.bind(n,49869))})),asset:{type:"BLOCK",id:"progressbar-demo-base",refAtomIds:["ProgressBar"],dependencies:{"index.tsx":{type:"FILE",value:n(88060).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":_,"./index.scss":i,"@trionesdev/antd-taro-react":u,react:d||(d=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":i},renderOpts:{compile:function(){var I=l()(r()().mark(function x(){var p,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(2194).then(n.bind(n,2194));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,f));case 3:case"end":return o.stop()}},x)}));function v(){return I.apply(this,arguments)}return v}()}}}},49387:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var d=n(44194),c=n(91518),r=n(31549),s=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},91518:function(t,e,n){n.r(e)},69444:function(t,e,n){n.r(e),n.d(e,{texts:function(){return c}});var d=n(32046);const c=[{value:"\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u663E\u793A\u4EFB\u52A1\u7684\u5B8C\u6210\u8FDB\u5EA6\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"percent",paraId:1,tocIndex:1},{value:"\u8FDB\u5EA6\u767E\u5206\u6BD4",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"rounded",paraId:1,tocIndex:1},{value:"\u662F\u5426\u4E3A\u5706\u89D2",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"text",paraId:1,tocIndex:1},{value:"\u8FDB\u5EA6\u6587\u672C",paraId:1,tocIndex:1},{value:"boolean | ReactNode | ((percent: number) => ReactNode)",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--fill-color",paraId:2,tocIndex:2},{value:"\u586B\u5145\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#1677ff",paraId:2,tocIndex:2},{value:"--track-color",paraId:2,tocIndex:2},{value:"\u7EBF\u6761\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e9ecef",paraId:2,tocIndex:2},{value:"--track-width",paraId:2,tocIndex:2},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:2,tocIndex:2},{value:"8px",paraId:2,tocIndex:2},{value:"--text-width",paraId:2,tocIndex:2},{value:"\u6587\u5B57\u5185\u5BB9\u7684\u5BBD\u5EA6",paraId:2,tocIndex:2},{value:"40px",paraId:2,tocIndex:2}]},92505:function(t,e){e.Z=`.demoBlock {
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
`},88060:function(t,e){e.Z=`import { Button, ProgressBar, Space } from '@trionesdev/antd-taro-react';
import { DemoBlock } from '../../DemoBlock';
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
