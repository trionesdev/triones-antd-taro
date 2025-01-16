"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[5798],{51830:function(v,o,n){var i;n.r(o),n.d(o,{demos:function(){return a}});var l=n(90819),u=n.n(l),I=n(89933),_=n.n(I),c=n(44194),f=n(18007),p=n(98355),O=n(4699),e=n(63457),a={"src-result-demo-base":{component:c.memo(c.lazy(function(){return Promise.all([n.e(107),n.e(9378),n.e(4474),n.e(7521),n.e(2433)]).then(n.bind(n,95699))})),asset:{type:"BLOCK",id:"src-result-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(66500).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-icons-react/dist/FaceRecognitionOutline":p,"@trionesdev/antd-taro-react":O,"@trionesdev/antd-taro-react/DemoBlock":e,react:i||(i=n.t(c,2))},renderOpts:{compile:function(){var r=_()(u()().mark(function d(){var s,D=arguments;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(7879).then(n.bind(n,77879));case 2:return m.abrupt("return",(s=m.sent).default.apply(s,D));case 3:case"end":return m.stop()}},d)}));function t(){return r.apply(this,arguments)}return t}()}}}},63457:function(v,o,n){n.r(o),n.d(o,{DemoBlock:function(){return u}});var i=n(44194),l=n(31549),u=function(_){return(0,l.jsxs)("div",{className:"demoBlock",children:[(0,l.jsx)("div",{className:"demoTitle",children:_.title}),(0,l.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},35417:function(v,o,n){n.r(o),n.d(o,{texts:function(){return l}});var i=n(18007);const l=[{value:"\u5BF9\u524D\u4E00\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u6709\u91CD\u8981\u64CD\u4F5C\u9700\u544A\u77E5\u7528\u6237\u5904\u7406\u7ED3\u679C\uFF0C\u4E14\u53CD\u9988\u5185\u5BB9\u8F83\u4E3A\u590D\u6742\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"description",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 ",paraId:2,tocIndex:4},{value:"icon",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"status",paraId:2,tocIndex:4},{value:"\u72B6\u6001\u7C7B\u578B",paraId:2,tocIndex:4},{value:"'success' | 'error' | 'info' | 'waiting' | 'warning'",paraId:2,tocIndex:4},{value:"'info'",paraId:2,tocIndex:4},{value:"title",paraId:2,tocIndex:4},{value:"\u6807\u9898",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},66500:function(v,o){o.Z=`import { FaceRecognitionOutline } from '@trionesdev/antd-taro-icons-react/dist/FaceRecognitionOutline'
import { Result } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='\u6210\u529F\u72B6\u6001' padding='0'>
        <Result
          status='success'
          title='\u64CD\u4F5C\u6210\u529F'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u7B49\u5F85\u72B6\u6001' padding='0'>
        <Result
          status='waiting'
          title='\u7B49\u5F85\u5904\u7406'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u63D0\u793A\u72B6\u6001' padding='0'>
        <Result
          status='info'
          title='\u4FE1\u606F\u63D0\u793A'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u8B66\u544A\u72B6\u6001' padding='0'>
        <Result
          status='warning'
          title='\u8B66\u544A\u63D0\u793A'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u5931\u8D25\u72B6\u6001' padding='0'>
        <Result
          status='error'
          title='\u65E0\u6CD5\u5B8C\u6210\u64CD\u4F5C'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u56FE\u6807' padding='0'>
        <Result
          icon={<FaceRecognitionOutline />}
          status='success'
          title='Well done'
          description='\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C'
        />
      </DemoBlock>
    </>
  )
}
`},98355:function(v,o,n){n.r(o),n.d(o,{FaceRecognitionOutline:function(){return O}});var i=n(32985),l=n(44194),u=n(51865),I=n.n(u),_=["className","style"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function f(e,a){if(e==null)return{};var r=p(e,a),t,d;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(d=0;d<s.length;d++)t=s[d],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function p(e,a){if(e==null)return{};var r={},t=Object.keys(e),d,s;for(s=0;s<t.length;s++)d=t[s],!(a.indexOf(d)>=0)&&(r[d]=e[d]);return r}var O=function(a){var r=a.className,t=a.style,d=f(a,_);return l.createElement(i.J,c({},d,{className:I()(["".concat(i.L,"FaceRecognitionOutline"),r]),style:t}))}}}]);
