"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[152],{48183:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return f}});var _=n(90819),r=n.n(_),d=n(89933),m=n.n(d),a=n(44194),i=n(92876),l=n(79013),p=n(84514),u=n(8608),f={"inputnumber-demo-base":{component:a.memo(a.lazy(function(){return n.e(2901).then(n.bind(n,13460))})),asset:{type:"BLOCK",id:"inputnumber-demo-base",refAtomIds:["InputNumber"],dependencies:{"index.tsx":{type:"FILE",value:n(33723).Z},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"../index.tsx":{type:"FILE",value:n(5e3).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":i,"../index.tsx":l,"./index.scss":u,react:o||(o=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/InputNumber/index.tsx":l,"@trionesdev/antd-mobile-base-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var E=m()(r()().mark(function v(){var c,D=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8036).then(n.bind(n,68036));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,D));case 3:case"end":return s.stop()}},v)}));function b(){return E.apply(this,arguments)}return b}()}}}},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return d}});var o=n(44194),_=n(8608),r=n(31549),d=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},79013:function(t,e,n){n.r(e);var o=n(84514);e.default=o.InputNumber},8608:function(t,e,n){n.r(e)},20990:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},52964:function(t,e){e.Z=`.demoBlock {
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
`},3699:function(t,e){e.Z=`import React from 'react'
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
`},33723:function(t,e){e.Z=`import React from "react";
import InputNumber from "../index";
import {DemoBlock} from "../../DemoBlock";

export default ()=>{
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <InputNumber/>
    </DemoBlock>
    <DemoBlock title={\`\u6700\u5927\u503C\u6700\u5C0F\u503C\`}>
      <InputNumber min={0} max={10}/>
    </DemoBlock>
  </div>
}
`},5e3:function(t,e){e.Z=`import {InputNumber,InputNumberProps} from "@trionesdev/antd-mobile-base-react"
export  type {InputNumberProps}
export default InputNumber
`}}]);
