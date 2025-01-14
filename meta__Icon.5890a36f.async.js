"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2031],{92304:function(_,t,n){var o;n.r(t),n.d(t,{demos:function(){return v}});var a=n(90819),s=n.n(a),l=n(89933),i=n.n(l),r=n(44194),f=n(81514),c=n(26307),d=n(39378),M=n.n(d),u=n(63457),v={"src-icon-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(9378),n.e(7574),n.e(2433)]).then(n.bind(n,2486))})),asset:{type:"BLOCK",id:"src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(44781).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"}},entry:"index.tsx"},context:{react:o||(o=n.t(r,2)),"@trionesdev/antd-taro-icons-react":c,lodash:d,"@trionesdev/antd-taro-react/DemoBlock":u},renderOpts:{compile:function(){var E=i()(s()().mark(function p(){var m,P=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(157).then(n.bind(n,30157));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,P));case 3:case"end":return e.stop()}},p)}));function D(){return E.apply(this,arguments)}return D}()}}}},88045:function(_,t,n){n.r(t),n.d(t,{texts:function(){return a}});var o=n(81514);const a=[]},44781:function(_,t){t.Z=`import React from "react";
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
