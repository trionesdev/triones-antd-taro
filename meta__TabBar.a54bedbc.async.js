"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7186],{95369:function(u,_,t){var d;t.r(_),t.d(_,{demos:function(){return a}});var c=t(90819),m=t.n(c),O=t(89933),v=t.n(O),i=t(44194),P=t(94166),E=t(79813),f=t(98355),e=t(63457),a={"tabbar-demo-base":{component:i.memo(i.lazy(function(){return t.e(8633).then(t.bind(t,4461))})),asset:{type:"BLOCK",id:"tabbar-demo-base",refAtomIds:["TabBar"],dependencies:{"index.tsx":{type:"FILE",value:t(51337).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":E,react:d||(d=t.t(i,2)),"@trionesdev/antd-taro-icons-react/dist/FaceRecognitionOutline":f,"@trionesdev/antd-taro-react/DemoBlock":e},renderOpts:{compile:function(){var r=v()(m()().mark(function o(){var s,D=arguments;return m()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.e(157).then(t.bind(t,30157));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,D));case 3:case"end":return l.stop()}},o)}));function n(){return r.apply(this,arguments)}return n}()}}}},58837:function(u,_,t){t.r(_),t.d(_,{texts:function(){return c}});var d=t(94166);const c=[]},51337:function(u,_){_.Z=`import { TabBar } from "@trionesdev/antd-taro-react";
import React from "react";
import { FaceRecognitionOutline } from "@trionesdev/antd-taro-icons-react/dist/FaceRecognitionOutline";
import { DemoBlock } from "@trionesdev/antd-taro-react/DemoBlock";

export default () => {
  return <>
    <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
      <TabBar
        items={[{ key: 'home', label: '\u9996\u9875', icon: <FaceRecognitionOutline /> }, { key: 'save', label: '\u6536\u85CF' }, { key: 'my', label: '\u6211\u7684' }]}
      />
    </DemoBlock >
  </>
}
`},98355:function(u,_,t){t.r(_),t.d(_,{FaceRecognitionOutline:function(){return f}});var d=t(32985),c=t(44194),m=t(51865),O=t.n(m),v=["className","style"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function P(e,a){if(e==null)return{};var r=E(e,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,a){if(e==null)return{};var r={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(r[o]=e[o]);return r}var f=function(a){var r=a.className,n=a.style,o=P(a,v);return c.createElement(d.J,i({},o,{className:O()(["".concat(d.L,"FaceRecognitionOutline"),r]),style:n}))}}}]);
