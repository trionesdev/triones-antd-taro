"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[7658],{15021:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return f}});var _=n(90819),r=n.n(_),d=n(89933),i=n.n(d),a=n(44194),l=n(22459),m=n(92876),p=n(84514),c=n(8608),f={"pickerview-demo-base":{component:a.memo(a.lazy(function(){return n.e(4495).then(n.bind(n,36838))})),asset:{type:"BLOCK",id:"pickerview-demo-base",refAtomIds:["PickerView"],dependencies:{"index.tsx":{type:"FILE",value:n(67334).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(85105).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":m,"./index.scss":c,react:o||(o=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/PickerView/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":m,"@trionesdev/antd-mobile-base-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var v=i()(r()().mark(function P(){var u,D=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8036).then(n.bind(n,68036));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,D));case 3:case"end":return s.stop()}},P)}));function E(){return v.apply(this,arguments)}return E}()}}}},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return d}});var o=n(44194),_=n(8608),r=n(31549),d=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},22459:function(t,e,n){n.r(e);var o=n(84514);e.default=o.PickerView},8608:function(t,e,n){n.r(e)},92573:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},52964:function(t,e){e.Z=`.demoBlock {
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
`},67334:function(t,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import PickerView from "../index";

export default () => {
  const basicColumns = [
    [
      {label: '\u5468\u4E00', value: 'Mon'},
      {label: '\u5468\u4E8C', value: 'Tues'},
      {label: '\u5468\u4E09', value: 'Wed'},
      {label: '\u5468\u56DB', value: 'Thur'},
      {label: '\u5468\u4E94', value: 'Fri'},
    ],
    [
      {label: '\u4E0A\u5348', value: 'am'},
      {label: '\u4E0B\u5348', value: 'pm'},
    ],
  ]
  return <>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <div style={{height:240}}>
        <PickerView columns={basicColumns}/>
      </div>
    </DemoBlock>
  </>
}
`},85105:function(t,e){e.Z=`import {PickerView,PickerViewProps,PickerColumnOption} from "@trionesdev/antd-mobile-base-react"

export type {
  PickerViewProps,
  PickerColumnOption
}
export default PickerView
`}}]);
