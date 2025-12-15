"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[7038],{45612:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return f}});var d=n(90819),r=n.n(d),s=n(89933),_=n.n(s),a=n(44194),i=n(26984),m=n(92876),p=n(84514),c=n(8608),f={"cell-demo-base":{component:a.memo(a.lazy(function(){return n.e(1558).then(n.bind(n,61599))})),asset:{type:"BLOCK",id:"cell-demo-base",refAtomIds:["Cell"],dependencies:{"index.tsx":{type:"FILE",value:n(67562).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(9042).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":i,"../../DemoBlock.tsx":m,"./index.scss":c,react:o||(o=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Cell/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":m,"@trionesdev/antd-mobile-base-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var E=_()(r()().mark(function D(){var u,x=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(8036).then(n.bind(n,68036));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},D)}));function v(){return E.apply(this,arguments)}return v}()}}}},26984:function(t,e,n){n.r(e);var o=n(84514);e.default=o.Cell},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var o=n(44194),d=n(8608),r=n(31549),s=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},8608:function(t,e,n){n.r(e)},65327:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},67562:function(t,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Cell from "../index";


export default () => {
  return <div>
    <DemoBlock title={\`\u57FA\u7840\u7528\u6CD5\`}>
      <Cell>\u6807\u9898</Cell>
    </DemoBlock>

    <DemoBlock title={\`\u5206\u7EC4\`}>
      <Cell.Group title={'\u6807\u9898'} divider={ true}>
        <Cell>\u6807\u9898</Cell>
        <Cell>\u6807\u9898</Cell>
        <Cell>\u6807\u9898</Cell>
      </Cell.Group>
    </DemoBlock>
  </div>
}
`},9042:function(t,e){e.Z=`import { Cell,CellProps,CellGroupProps } from '@trionesdev/antd-mobile-base-react';

export type { CellProps, CellGroupProps };
export default Cell;
`},52964:function(t,e){e.Z=`.demoBlock {
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
`}}]);
