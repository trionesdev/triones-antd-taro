(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7129],{54021:function(e,a,n){"use strict";var i;n.r(a),n.d(a,{demos:function(){return f}});var t=n(90819),o=n.n(t),r=n(89933),l=n.n(r),s=n(44194),u=n(85852),v=n(6412),D=n(63457),m=n(92425),f={"tag-demo-base":{component:s.memo(s.lazy(function(){return n.e(1431).then(n.bind(n,49007))})),asset:{type:"BLOCK",id:"tag-demo-base",refAtomIds:["Tag"],dependencies:{"index.tsx":{type:"FILE",value:n(42323).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"./style.scss":{type:"FILE",value:n(67924).Z}},entry:"index.tsx"},context:{"./style.scss":m,"@trionesdev/antd-taro-react/Tag":v,react:i||(i=n.t(s,2)),"@trionesdev/antd-taro-react/DemoBlock":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tag/demo/style.scss":m},renderOpts:{compile:function(){var p=l()(o()().mark(function P(){var c,I=arguments;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(6142).then(n.bind(n,56142));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,I));case 3:case"end":return d.stop()}},P)}));function g(){return p.apply(this,arguments)}return g}()}}}},63457:function(e,a,n){"use strict";n.r(a),n.d(a,{DemoBlock:function(){return o}});var i=n(44194),t=n(31549),o=function(l){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:l.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:l.children})]})}},6412:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return g}});var i=n(10154),t=n.n(i),o=n(73193),r=n.n(o),l=n(84176),s=n.n(l),u=n(51865),v=n.n(u),D=n(44194),m=n(31549),f=["children","color","fill","onClick","className","style","round"],p=function(c){var I=c.children,x=c.color,d=x===void 0?"default":x,y=c.fill,T=y===void 0?"solid":y,M=c.onClick,C=c.className,h=c.style,E=c.round,O=E===void 0?!1:E,j=s()(c,f),_="triones-antm-tag",B=["default","primary","success","warning","danger"].includes(d),W=B?h:r()(r()({},T==="solid"?{backgroundColor:d,color:"#fff"}:{color:d,borderColor:d,backgroundColor:"transparent"}),h);return(0,m.jsx)("div",r()(r()({className:v()(_,t()(t()(t()({},"".concat(_,"-").concat(d),B),"".concat(_,"-").concat(T),T),"".concat(_,"-").concat(O?"round":"square"),O),C),style:W},j),{},{onClick:M,children:I}))},g=p},92425:function(e,a,n){"use strict";n.r(a)},59177:function(e,a,n){"use strict";n.r(a),n.d(a,{texts:function(){return t}});var i=n(85852);const t=[{value:"\u6807\u7B7E\u7528\u4E8E\u6807\u8BB0\u548C\u5206\u7C7B\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"children",paraId:1,tocIndex:1},{value:"\u6807\u7B7E\u5185\u5BB9",paraId:1,tocIndex:1},{value:"ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"color",paraId:1,tocIndex:1},{value:"\u6807\u7B7E\u8272",paraId:1,tocIndex:1},{value:"'default' | 'primary' | 'success' | 'warning' | 'danger' | string",paraId:1,tocIndex:1},{value:"'default'",paraId:1,tocIndex:1},{value:"fill",paraId:1,tocIndex:1},{value:"\u586B\u5145\u6A21\u5F0F",paraId:1,tocIndex:1},{value:"'solid' | 'outline'",paraId:1,tocIndex:1},{value:"'solid'",paraId:1,tocIndex:1},{value:"onClick",paraId:1,tocIndex:1},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:1},{value:"(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"className",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"style",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:1},{value:"CSSProperties",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"round",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5706\u89D2",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1}]},42323:function(e,a){"use strict";a.Z=`import Tag from '@trionesdev/antd-taro-react/Tag';
import React from 'react';
import './style.scss';
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock';

export default () => {
  const clsPrefix = 'tag-demo-style';
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag>Default</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u7EBF\u6846\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag fill="outline" color="default">
            Default
          </Tag>
          <Tag fill="outline" color="primary">
            Primary
          </Tag>
          <Tag fill="outline" color="success">
            Success
          </Tag>
          <Tag fill="outline" color="warning">
            Warning
          </Tag>
          <Tag fill="outline" color="danger">
            Danger
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u8BED\u4E49\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="default">Default</Tag>
          <Tag color="primary">Primary</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u5706\u89D2\u6807\u7B7E">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="default" round>
            Default
          </Tag>
        </div>
      </DemoBlock>
      <DemoBlock title="\u81EA\u5B9A\u4E49\u989C\u8272">
        <div className={\`\${clsPrefix}-content\`}>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </DemoBlock>
    </>
  );
};
`},67924:function(e,a){"use strict";a.Z=`.tag-demo-style {
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    row-gap: 8px;
  }
}
`},84176:function(e,a,n){var i=n(75863);function t(o,r){if(o==null)return{};var l=i(o,r),s,u;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(o);for(u=0;u<v.length;u++)s=v[u],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(o,s)&&(l[s]=o[s])}return l}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},75863:function(e){function a(n,i){if(n==null)return{};var t={},o=Object.keys(n),r,l;for(l=0;l<o.length;l++)r=o[l],!(i.indexOf(r)>=0)&&(t[r]=n[r]);return t}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
