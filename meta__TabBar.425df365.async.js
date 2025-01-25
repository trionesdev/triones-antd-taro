"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7186],{33069:function(e,t,n){var _;n.r(t),n.d(t,{demos:function(){return f}});var s=n(90819),o=n.n(s),d=n(89933),i=n.n(d),a=n(44194),M=n(66240),u=n(25726),p=n(27311),c=n(49387),m=n(91518),f={"tabbar-demo-base":{component:a.memo(a.lazy(function(){return n.e(8633).then(n.bind(n,55848))})),asset:{type:"BLOCK",id:"tabbar-demo-base",refAtomIds:["TabBar"],dependencies:{"index.tsx":{type:"FILE",value:n(41181).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":c,"./index.scss":m,"@trionesdev/antd-taro-react":u,react:_||(_=n.t(a,2)),"@trionesdev/antd-taro-icons-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var E=i()(o()().mark(function D(){var l,B=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2194).then(n.bind(n,2194));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,B));case 3:case"end":return r.stop()}},D)}));function v(){return E.apply(this,arguments)}return v}()}}}},49387:function(e,t,n){n.r(t),n.d(t,{DemoBlock:function(){return d}});var _=n(44194),s=n(91518),o=n(31549),d=function(a){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:a.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},91518:function(e,t,n){n.r(t)},22760:function(e,t,n){n.r(t),n.d(t,{texts:function(){return s}});var _=n(66240);const s=[]},92505:function(e,t){t.Z=`.demoBlock {
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
`},25475:function(e,t){t.Z=`import React from 'react'
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
`},41181:function(e,t){t.Z=`import { TabBar } from "@trionesdev/antd-taro-react";
import React from "react";
import { FaceRecognitionOutline } from "@trionesdev/antd-taro-icons-react";
import { DemoBlock } from '../../DemoBlock';

export default () => {
  return <>
    <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
      <TabBar
        items={[{ key: 'home', label: '\u9996\u9875', icon: <FaceRecognitionOutline /> }, { key: 'save', label: '\u6536\u85CF' }, { key: 'my', label: '\u6211\u7684' }]}
      />
    </DemoBlock >
  </>
}
`}}]);
