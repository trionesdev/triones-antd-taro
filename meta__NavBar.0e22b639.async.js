"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[6784],{98162:function(a,e,n){var o;n.r(e),n.d(e,{demos:function(){return D}});var c=n(90819),t=n.n(c),s=n(89933),i=n.n(s),r=n(44194),B=n(443),l=n(55490),_=n(92876),m=n(4238),u=n(31760),f=n(84514),v=n(8608),D={"src-nav-bar-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1323),n.e(5906),n.e(9582),n.e(2792),n.e(5803),n.e(6842),n.e(48),n.e(2433)]).then(n.bind(n,24724))})),asset:{type:"BLOCK",id:"src-nav-bar-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(83714).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-mobile-icons-react":{type:"NPM",value:"0.0.2-beta.0"},"../index.ts":{type:"FILE",value:n(55584).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"../../Space.ts":{type:"FILE",value:n(95573).Z},"./base.scss":{type:"FILE",value:n(60921).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.ts":l,"../../DemoBlock.tsx":_,"../../Space.ts":m,"./base.scss":u,"./index.scss":v,react:o||(o=n.t(r,2)),"@trionesdev/antd-mobile-icons-react":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/NavBar/index.ts":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Space/index.ts":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/NavBar/demo/base.scss":u,"@trionesdev/antd-mobile-base-react":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":v},renderOpts:{compile:function(){var b=i()(t()().mark(function k(){var p,x=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8036).then(n.bind(n,68036));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,x));case 3:case"end":return d.stop()}},k)}));function E(){return b.apply(this,arguments)}return E}()}}}},92876:function(a,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var o=n(44194),c=n(8608),t=n(31549),s=function(r){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:r.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},55490:function(a,e,n){n.r(e);var o=n(84514);e.default=o.NavBar},4238:function(a,e,n){n.r(e);var o=n(84514);e.default=o.Space},8608:function(a,e,n){n.r(e)},31760:function(a,e,n){n.r(e)},50785:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u4E3A\u9875\u9762\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u5BFC\u822A\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u663E\u793A\u5F53\u524D\u9875\u9762\u5185\u5BB9\u7684\u6807\u9898\u548C\u64CD\u4F5C\u3002",paraId:1,tocIndex:1},{value:"\u53D8\u91CF\u540D",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"$trionesNavBarColorBg",paraId:2,tocIndex:5},{value:"\u80CC\u666F\u8272",paraId:2,tocIndex:5},{value:"#ffffff",paraId:2,tocIndex:5},{value:"$trionesNavBarColorText",paraId:2,tocIndex:5},{value:"\u6587\u672C\u989C\u8272",paraId:2,tocIndex:5},{value:"#000",paraId:2,tocIndex:5}]},52964:function(a,e){e.Z=`.demoBlock {
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
`},60921:function(a,e){e.Z=`.my-nav-bar {
  &-subtitle {
    font-size: 12px;
  }
}
`},83714:function(a,e){e.Z=`import React from 'react'

import './base.scss'
import { DemoBlock } from '../../DemoBlock';
import Space from "../../Space";
import NavBar from "../index";
import {MoreOutline,CloseOutline} from "@trionesdev/antd-mobile-icons-react";


export default () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space>
        <MoreOutline />
      </Space>
    </div>
  )

  const back = () => { }

  return (
    <>
      <DemoBlock title='\u57FA\u7840\u7528\u6CD5' padding='0'>
        <NavBar onBack={back}>\u6807\u9898</NavBar>
      </DemoBlock>

      <DemoBlock title='\u8FD4\u56DE\u6309\u94AE\u663E\u793A\u6587\u5B57' padding='0'>
        <NavBar back='\u8FD4\u56DE' onBack={back}>
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u8FD4\u56DE\u6309\u94AE\u4E0D\u663E\u793A\u56FE\u6807' padding='0'>
        <NavBar back='\u8FD4\u56DE' onBack={back} backIcon={false}>
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u8FD4\u56DE\u6309\u94AE\u56FE\u6807' padding='0'>
        <NavBar back='\u8FD4\u56DE' backIcon={<CloseOutline />} onBack={back}>
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u533A\u57DF' padding='0'>
        <NavBar back='\u8FD4\u56DE' onBack={back} left='\u5173\u95ED'>
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF' padding='0'>
        <NavBar right={right} onBack={back}>
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u9AD8\u5EA6\u53CA\u8FB9\u6846' padding='0'>
        <NavBar
          onBack={back}
        >
          \u6807\u9898
        </NavBar>
      </DemoBlock>

      <DemoBlock title='\u6807\u9898\u8D85\u957F' padding='0'>
        <NavBar onBack={back}>\u8FD9\u662F\u4E00\u6761\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898</NavBar>
      </DemoBlock>

      <DemoBlock title='\u663E\u793A\u526F\u6807\u9898' padding='0'>
        <NavBar onBack={back}>
          <div>
            <div>\u6807\u9898</div>
            <div className='my-nav-bar-subtitle'>\u526F\u6807\u9898</div>
          </div>
        </NavBar>
      </DemoBlock>
    </>
  )
}
`},55584:function(a,e){e.Z=`import { NavBar,NavBarProps } from '@trionesdev/antd-mobile-base-react'

export type { NavBarProps }

export default NavBar
`},95573:function(a,e){e.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`}}]);
