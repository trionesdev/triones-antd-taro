"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7129],{70865:function(a,e,n){var d;n.r(e),n.d(e,{demos:function(){return v}});var s=n(90819),t=n.n(s),l=n(89933),c=n.n(l),o=n(44194),T=n(69425),p=n(25726),_=n(49387),i=n(92425),u=n(91518),v={"tag-demo-base":{component:o.memo(o.lazy(function(){return n.e(1431).then(n.bind(n,71069))})),asset:{type:"BLOCK",id:"tag-demo-base",refAtomIds:["Tag"],dependencies:{"index.tsx":{type:"FILE",value:n(21633).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./style.scss":{type:"FILE",value:n(17183).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":_,"./style.scss":i,"./index.scss":u,"@trionesdev/antd-taro-react":p,react:d||(d=n.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tag/demo/style.scss":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var I=c()(t()().mark(function f(){var m,x=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2194).then(n.bind(n,2194));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,x));case 3:case"end":return r.stop()}},f)}));function g(){return I.apply(this,arguments)}return g}()}}}},49387:function(a,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var d=n(44194),s=n(91518),t=n(31549),l=function(o){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:o.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},91518:function(a,e,n){n.r(e)},92425:function(a,e,n){n.r(e)},17583:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});var d=n(69425);const s=[{value:"\u6807\u7B7E\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"children",paraId:1,tocIndex:1},{value:"\u6807\u7B7E\u5185\u5BB9",paraId:1,tocIndex:1},{value:"ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"color",paraId:1,tocIndex:1},{value:"\u6807\u7B7E\u8272",paraId:1,tocIndex:1},{value:"'default' | 'primary' | 'success' | 'warning' | 'danger' | string",paraId:1,tocIndex:1},{value:"'default'",paraId:1,tocIndex:1},{value:"fill",paraId:1,tocIndex:1},{value:"\u586B\u5145\u6A21\u5F0F",paraId:1,tocIndex:1},{value:"'solid' | 'outline'",paraId:1,tocIndex:1},{value:"'solid'",paraId:1,tocIndex:1},{value:"onClick",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:1},{value:"(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"className",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"style",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:1},{value:"CSSProperties",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"round",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5706\u89D2",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1}]},92505:function(a,e){e.Z=`.demoBlock {
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
`},25475:function(a,e){e.Z=`import React from 'react'
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
`},21633:function(a,e){e.Z=`import {Tag} from '@trionesdev/antd-taro-react';
import React from 'react';
import './style.scss';
import { DemoBlock } from '../../DemoBlock';

export default () => {
  const clsPrefix = 'tag-demo-style';
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag>Default</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u7EBF\u6846\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag fill="outline" color="default">
            Default
          </Tag>
          <Tag fill="outline" color="primary">
            Primary
          </Tag>
          <Tag fill="outline" color="success">
            Success
          </Tag>
          <Tag fill="outline" color="warning">
            Warning
          </Tag>
          <Tag fill="outline" color="danger">
            Danger
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u8BED\u4E49\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="default">Default</Tag>
          <Tag color="primary">Primary</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u5706\u89D2\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="default" round>
            Default
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u81EA\u5B9A\u4E49\u989C\u8272">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </DemoBlock>
    </>
  );
};
`},17183:function(a,e){e.Z=`.tag-demo-style {
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    row-gap: 8px;
  }
}
`}}]);
