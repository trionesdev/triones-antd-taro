"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[4059],{14301:function(a,n,e){var d;e.r(n),e.d(n,{demos:function(){return f}});var c=e(90819),r=e.n(c),i=e(89933),_=e.n(i),o=e(44194),v=e(7417),k=e(25726),l=e(49387),m=e(91518),f={"checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(9709).then(e.bind(e,91542))})),asset:{type:"BLOCK",id:"checkbox-demo-base",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(57764).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:e(25475).Z},"./index.scss":{type:"FILE",value:e(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":m,"@trionesdev/antd-taro-react":k,react:d||(d=e.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var u=_()(r()().mark(function p(){var s,x=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(2194).then(e.bind(e,2194));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,x));case 3:case"end":return t.stop()}},p)}));function h(){return u.apply(this,arguments)}return h}()}},"checkbox-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(9709).then(e.bind(e,80222))})),asset:{type:"BLOCK",id:"checkbox-demo-disabled",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(65514).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:e(25475).Z},"./index.scss":{type:"FILE",value:e(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":m,"@trionesdev/antd-taro-react":k,react:d||(d=e.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var u=_()(r()().mark(function p(){var s,x=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(2194).then(e.bind(e,2194));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,x));case 3:case"end":return t.stop()}},p)}));function h(){return u.apply(this,arguments)}return h}()}}}},49387:function(a,n,e){e.r(n),e.d(n,{DemoBlock:function(){return i}});var d=e(44194),c=e(91518),r=e(31549),i=function(o){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:o.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},91518:function(a,n,e){e.r(n)},95780:function(a,n,e){e.r(n),e.d(n,{texts:function(){return c}});var d=e(7417);const c=[]},57764:function(a,n){n.Z=`import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from '../../DemoBlock';
import React from "react";

export default () => {
  return <>
    <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
      <Checkbox checked={true}>\u82F9\u679C</Checkbox>
      <Checkbox checked={false}>\u9999\u8549</Checkbox>
    </DemoBlock>
    <DemoBlock title='\u9ED8\u8BA4\u9009\u4E2D'>
      <Checkbox checked={true}>\u82F9\u679C</Checkbox>
    </DemoBlock>
    <DemoBlock title='\u7981\u7528'>
      <Checkbox checked={true} disabled={true}>\u82F9\u679C</Checkbox>
      <Checkbox checked={false} disabled={true}>\u9999\u8549</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox checked={true} shape={'button'}>\u82F9\u679C</Checkbox>
    </DemoBlock>
  </>
}
`},65514:function(a,n){n.Z=`import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from '../../DemoBlock';
import React from "react";

export default () => {
  return <>
    <DemoBlock title='\u7981\u7528'>
      <Checkbox checked={true} disabled={true}>\u82F9\u679C</Checkbox>
      <Checkbox checked={false} disabled={true}>\u9999\u8549</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox checked={true} shape={'button'} disabled={true}>\u82F9\u679C</Checkbox>
    </DemoBlock>
  </>
}
`},92505:function(a,n){n.Z=`.demoBlock {
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
`},25475:function(a,n){n.Z=`import React from 'react'
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
`}}]);
