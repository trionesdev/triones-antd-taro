"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2031],{78236:function(s,t,n){var a;n.r(t),n.d(t,{demos:function(){return v}});var e=n(90819),r=n.n(e),l=n(89933),d=n.n(l),_=n(44194),M=n(4456),c=n(27311),m=n(39378),P=n.n(m),u=n(63457),v={"src-icon-demo-base":{component:_.memo(_.lazy(function(){return Promise.all([n.e(107),n.e(9378),n.e(7311),n.e(9729),n.e(2433)]).then(n.bind(n,77607))})),asset:{type:"BLOCK",id:"src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(2831).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"}},entry:"index.tsx"},context:{react:a||(a=n.t(_,2)),"@trionesdev/antd-taro-icons-react":c,lodash:m,"@trionesdev/antd-taro-react/DemoBlock":u},renderOpts:{compile:function(){var E=d()(r()().mark(function D(){var i,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(6142).then(n.bind(n,56142));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,h));case 3:case"end":return o.stop()}},D)}));function f(){return E.apply(this,arguments)}return f}()}}}},63457:function(s,t,n){n.r(t),n.d(t,{DemoBlock:function(){return r}});var a=n(44194),e=n(31549),r=function(d){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:d.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},44187:function(s,t,n){n.r(t),n.d(t,{texts:function(){return e}});var a=n(4456);const e=[]},2831:function(s,t){t.Z=`import React from "react";
import * as icons from "@trionesdev/antd-taro-icons-react"
import _ from "lodash";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";

export default () => {
  return <DemoBlock title='\u56FE\u6807'>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      {
        _.map(_.omit(icons, 'Icon'), (icon, name) => {
          return <div key={name} style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
            <div>{React.createElement(icon, { key: name })}</div>
            <div style={{ fontSize: 12 }}>{name}</div>
          </div>
        })
      }
    </div>
  </DemoBlock >
}
`}}]);
