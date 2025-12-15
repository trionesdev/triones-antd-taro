"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[625],{14573:function(t,n,e){var o;e.r(n),e.d(n,{demos:function(){return x}});var _=e(90819),r=e.n(_),d=e(89933),i=e.n(d),a=e(44194),l=e(4238),c=e(92876),m=e(98765),f=e(84514),u=e(8608),x={"alert-demo-base":{component:a.memo(a.lazy(function(){return e.e(5031).then(e.bind(e,51472))})),asset:{type:"BLOCK",id:"alert-demo-base",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:e(76091).Z},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:e(95573).Z},"../../DemoBlock.tsx":{type:"FILE",value:e(3699).Z},"../index.tsx":{type:"FILE",value:e(37606).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:e(52964).Z}},entry:"index.tsx"},context:{"../../Space.ts":l,"../../DemoBlock.tsx":c,"../index.tsx":m,"./index.scss":u,react:o||(o=e.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Space/index.ts":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Alert/index.tsx":m,"@trionesdev/antd-mobile-base-react":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var E=i()(r()().mark(function D(){var p,g=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(8036).then(e.bind(e,68036));case 2:return s.abrupt("return",(p=s.sent).default.apply(p,g));case 3:case"end":return s.stop()}},D)}));function v(){return E.apply(this,arguments)}return v}()}}}},98765:function(t,n,e){e.r(n);var o=e(84514);n.default=o.Alert},92876:function(t,n,e){e.r(n),e.d(n,{DemoBlock:function(){return d}});var o=e(44194),_=e(8608),r=e(31549),d=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},4238:function(t,n,e){e.r(n);var o=e(84514);n.default=o.Space},8608:function(t,n,e){e.r(n)},31900:function(t,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},76091:function(t,n){n.Z=`import React from "react";
import {DemoBlock} from "../../DemoBlock";
import Alert from "../index";
import Space from "../../Space";

export default () => {
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Alert message={\`Success Text\`}/>
    </DemoBlock>
    <DemoBlock title={\`\u56DB\u79CD\u6837\u5F0F\`}>
      <Space direction={'vertical'} block={true}>
        <Alert message={\`Success Text\`}/>
        <Alert type={'info'} message={\`Info Text\`}/>
        <Alert type={\`warning\`} message={\`Warring Text\`}/>
        <Alert type={\`error\`} message={\`Error Text\`}/>
      </Space>
    </DemoBlock>
    <DemoBlock title={\`\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A\`}>
      <Space direction={\`vertical\`} block={true}>
        <Alert type={\`warning\`}
               message={\`Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text\`}
               closable/>
      </Space>
    </DemoBlock>
    <DemoBlock title={\`\u56FE\u6807\`}>
      <Space direction={'vertical'} block={true}>
        <Alert showIcon={true} message={\`Success Text\`}/>
        <Alert showIcon={true} type={'info'} message={\`Info Text\`}/>
        <Alert showIcon={true} type={\`warning\`} message={\`Warring Text\`}/>
        <Alert showIcon={true} type={\`error\`} message={\`Error Text\`}/>
      </Space>
    </DemoBlock>
  </div>
}
`},37606:function(t,n){n.Z=`import {Alert, AlertProps} from "@trionesdev/antd-mobile-base-react"

export type {
  AlertProps
}
export default Alert
`},52964:function(t,n){n.Z=`.demoBlock {
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
`},3699:function(t,n){n.Z=`import React from 'react'
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
`},95573:function(t,n){n.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`}}]);
