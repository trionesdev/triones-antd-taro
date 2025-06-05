"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2031],{10349:function(o,t,n){var s;n.r(t),n.d(t,{demos:function(){return E}});var d=n(90819),e=n.n(d),_=n(89933),i=n.n(_),a=n(44194),M=n(69098),f=n(72995),l=n(39378),P=n.n(l),m=n(95676),c=n(3837),E={"src-icon-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9378),n.e(5586),n.e(396),n.e(8460),n.e(1919),n.e(1271),n.e(2995),n.e(4410),n.e(2264),n.e(656),n.e(8289),n.e(3188),n.e(2433)]).then(n.bind(n,77643))})),asset:{type:"BLOCK",id:"src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(98922).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./index.scss":{type:"FILE",value:n(72973).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":m,"./index.scss":c,react:s||(s=n.t(a,2)),"@trionesdev/antd-taro-icons-react":f,lodash:l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var v=i()(e()().mark(function D(){var u,h=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2740).then(n.bind(n,42740));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,h));case 3:case"end":return r.stop()}},D)}));function p(){return v.apply(this,arguments)}return p}()}}}},95676:function(o,t,n){n.r(t),n.d(t,{DemoBlock:function(){return _}});var s=n(44194),d=n(3837),e=n(31549),_=function(a){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:a.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},3837:function(o,t,n){n.r(t)},49285:function(o,t,n){n.r(t),n.d(t,{texts:function(){return d}});var s=n(69098);const d=[]},72973:function(o,t){t.Z=`.demoBlock {
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
`},23624:function(o,t){t.Z=`import React from 'react'
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
`},98922:function(o,t){t.Z=`import React from "react";
import * as icons from "@trionesdev/antd-taro-icons-react"
import _ from "lodash";
import { DemoBlock } from '../../DemoBlock';

export default () => {
  return <DemoBlock title='\u56FE\u6807'>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      {
        _.map(_.omit(icons, 'Icon'), (icon, name) => {
          return <div key={name} style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
            <div>
              {React.createElement(icon, {
                key: name,
                style: {
                  fontSize: 48
                }
              })}
            </div>
            <div style={{ fontSize: 14, marginTop: 5 }}>{name}</div>
          </div>
        })
      }
    </div>
  </DemoBlock >
}
`}}]);
