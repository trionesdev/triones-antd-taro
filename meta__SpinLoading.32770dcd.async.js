"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[1592],{10594:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return E}});var _=n(90819),a=n.n(_),s=n(89933),i=n.n(s),r=n(44194),m=n(4238),l=n(92876),c=n(16324),f=n(84514),p=n(8608),E={"spinloading-demo-base":{component:r.memo(r.lazy(function(){return n.e(6679).then(n.bind(n,5920))})),asset:{type:"BLOCK",id:"spinloading-demo-base",refAtomIds:["SpinLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(27650).Z},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:n(95573).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"../index.tsx":{type:"FILE",value:n(44931).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../../Space.ts":m,"../../DemoBlock.tsx":l,"../index.tsx":c,"./index.scss":p,react:t||(t=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Space/index.ts":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/SpinLoading/index.tsx":c,"@trionesdev/antd-mobile-base-react":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":p},renderOpts:{compile:function(){var D=i()(a()().mark(function g(){var u,x=arguments;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8036).then(n.bind(n,68036));case 2:return d.abrupt("return",(u=d.sent).default.apply(u,x));case 3:case"end":return d.stop()}},g)}));function v(){return D.apply(this,arguments)}return v}()}}}},92876:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var t=n(44194),_=n(8608),a=n(31549),s=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},4238:function(o,e,n){n.r(e);var t=n(84514);e.default=t.Space},16324:function(o,e,n){n.r(e);var t=n(84514);e.default=t.SpinLoading},8608:function(o,e,n){n.r(e)},31408:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},52964:function(o,e){e.Z=`.demoBlock {
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
`},3699:function(o,e){e.Z=`import React from 'react'
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
`},95573:function(o,e){e.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`},27650:function(o,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import SpinLoading from "../index";
import Space from "../../Space";

export default () => {
  return <>
    <DemoBlock title={\`\u57FA\u7840\u4F7F\u7528\`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={\`\u989C\u8272\`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={\`primary\`}/>
        <SpinLoading color={\`white\`}/>
      </Space>
    </DemoBlock>

    <DemoBlock title={\`\u5927\u5C0F\`}>
      <Space>
        <SpinLoading size={\`small\`}/>
        <SpinLoading/>
        <SpinLoading size={\`large\`}/>
      </Space>
    </DemoBlock>
  </>
}
`},44931:function(o,e){e.Z=`import {SpinLoading,SpinLoadingProps} from "@trionesdev/antd-mobile-base-react"

export type {SpinLoadingProps}
export default SpinLoading
`}}]);
