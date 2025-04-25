"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2031],{78561:function(o,t,n){var s;n.r(t),n.d(t,{demos:function(){return p}});var d=n(90819),e=n.n(d),_=n(89933),i=n.n(_),a=n(44194),M=n(77156),f=n(80150),l=n(39378),P=n.n(l),m=n(57180),c=n(56368),p={"src-icon-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9378),n.e(9),n.e(9877),n.e(1271),n.e(2025),n.e(150),n.e(3538),n.e(3411),n.e(1591),n.e(2433)]).then(n.bind(n,97983))})),asset:{type:"BLOCK",id:"src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(68747).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"../../DemoBlock.tsx":{type:"FILE",value:n(48873).Z},"./index.scss":{type:"FILE",value:n(85634).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":m,"./index.scss":c,react:s||(s=n.t(a,2)),"@trionesdev/antd-taro-icons-react":f,lodash:l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var E=i()(e()().mark(function D(){var u,h=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(8029).then(n.bind(n,18029));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,h));case 3:case"end":return r.stop()}},D)}));function v(){return E.apply(this,arguments)}return v}()}}}},57180:function(o,t,n){n.r(t),n.d(t,{DemoBlock:function(){return _}});var s=n(44194),d=n(56368),e=n(31549),_=function(a){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:a.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},56368:function(o,t,n){n.r(t)},5143:function(o,t,n){n.r(t),n.d(t,{texts:function(){return d}});var s=n(77156);const d=[]},85634:function(o,t){t.Z=`.demoBlock {
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
`},48873:function(o,t){t.Z=`import React from 'react'
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
`},68747:function(o,t){t.Z=`import React from "react";
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
