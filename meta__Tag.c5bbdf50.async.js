"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[7129],{16132:function(a,e,n){var o;n.r(e),n.d(e,{demos:function(){return g}});var s=n(90819),t=n.n(s),l=n(89933),c=n.n(l),r=n(44194),i=n(46059),_=n(33349),u=n(92876),v=n(84514),m=n(8608),g={"tag-demo-base":{component:r.memo(r.lazy(function(){return n.e(1431).then(n.bind(n,66442))})),asset:{type:"BLOCK",id:"tag-demo-base",refAtomIds:["Tag"],dependencies:{"index.tsx":{type:"FILE",value:n(9613).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(65518).Z},"./style.scss":{type:"FILE",value:n(14016).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":i,"./style.scss":_,"../../DemoBlock.tsx":u,"./index.scss":m,react:o||(o=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Tag/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Tag/demo/style.scss":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":u,"@trionesdev/antd-mobile-base-react":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var I=c()(t()().mark(function x(){var p,T=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8036).then(n.bind(n,68036));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,T));case 3:case"end":return d.stop()}},x)}));function f(){return I.apply(this,arguments)}return f}()}}}},92876:function(a,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var o=n(44194),s=n(8608),t=n(31549),l=function(r){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:r.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},46059:function(a,e,n){n.r(e);var o=n(84514);e.default=o.Tag},8608:function(a,e,n){n.r(e)},33349:function(a,e,n){n.r(e)},38399:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u6807\u7B7E\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u5185\u5BB9",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"color",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u8272",paraId:1,tocIndex:2},{value:"'default' | 'primary' | 'success' | 'warning' | 'danger' | string",paraId:1,tocIndex:2},{value:"'default'",paraId:1,tocIndex:2},{value:"fill",paraId:1,tocIndex:2},{value:"\u586B\u5145\u6A21\u5F0F",paraId:1,tocIndex:2},{value:"'solid' | 'outline'",paraId:1,tocIndex:2},{value:"'solid'",paraId:1,tocIndex:2},{value:"onClick",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"className",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"style",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:2},{value:"CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"round",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5706\u89D2",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2}]},52964:function(a,e){e.Z=`.demoBlock {
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
`},3699:function(a,e){e.Z=`import React from 'react'
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
`},9613:function(a,e){e.Z=`import React from 'react';
import './style.scss';
import { DemoBlock } from '../../DemoBlock';
import Tag from "../index";

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
`},14016:function(a,e){e.Z=`.tag-demo-style {
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    row-gap: 8px;
  }
}
`},65518:function(a,e){e.Z=`import {Tag, TagProps} from "@trionesdev/antd-mobile-base-react"

export type {
  TagProps
}
export default Tag
`}}]);
