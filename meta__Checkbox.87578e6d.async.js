"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[4059],{27094:function(l,n,e){var r;e.r(n),e.d(n,{demos:function(){return f}});var o=e(90819),a=e.n(o),h=e(89933),c=e.n(h),d=e(44194),x=e(11294),k=e(59498),v=e(63457),f={"checkbox-demo-base":{component:d.memo(d.lazy(function(){return e.e(9709).then(e.bind(e,40462))})),asset:{type:"BLOCK",id:"checkbox-demo-base",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(11303).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":k,"@trionesdev/antd-taro-react/DemoBlock":v,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var m=c()(a()().mark(function i(){var s,_=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(6142).then(e.bind(e,56142));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,_));case 3:case"end":return t.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}},"checkbox-demo-disabled":{component:d.memo(d.lazy(function(){return e.e(9709).then(e.bind(e,31124))})),asset:{type:"BLOCK",id:"checkbox-demo-disabled",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(67382).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":k,"@trionesdev/antd-taro-react/DemoBlock":v,react:r||(r=e.t(d,2))},renderOpts:{compile:function(){var m=c()(a()().mark(function i(){var s,_=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(6142).then(e.bind(e,56142));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,_));case 3:case"end":return t.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}}}},63457:function(l,n,e){e.r(n),e.d(n,{DemoBlock:function(){return a}});var r=e(44194),o=e(31549),a=function(c){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:c.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:c.children})]})}},53927:function(l,n,e){e.r(n),e.d(n,{texts:function(){return o}});var r=e(11294);const o=[]},11303:function(l,n){n.Z=`import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";
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
`},67382:function(l,n){n.Z=`import { Checkbox } from "@trionesdev/antd-taro-react";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";
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
`}}]);
