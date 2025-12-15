"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[1844],{56086:function(t,e,n){var l;n.r(e),n.d(e,{demos:function(){return f}});var a=n(90819),o=n.n(a),s=n(89933),d=n.n(s),r=n(44194),u=n(70048),p=n(443),c=n(92876),m=n(8608),f={"src-steps-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1323),n.e(5906),n.e(9582),n.e(2792),n.e(5803),n.e(6842),n.e(48),n.e(2433)]).then(n.bind(n,28388))})),asset:{type:"BLOCK",id:"src-steps-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(36898).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-mobile-react":{type:"NPM",value:"0.0.2-beta.2"},"@trionesdev/antd-mobile-icons-react":{type:"NPM",value:"0.0.2-beta.0"},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":c,"./index.scss":m,react:l||(l=n.t(r,2)),"@trionesdev/antd-mobile-react":u,"@trionesdev/antd-mobile-icons-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var v=d()(o()().mark(function E(){var _,B=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(8036).then(n.bind(n,68036));case 2:return i.abrupt("return",(_=i.sent).default.apply(_,B));case 3:case"end":return i.stop()}},E)}));function D(){return v.apply(this,arguments)}return D}()}}}},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var l=n(44194),a=n(8608),o=n(31549),s=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},8608:function(t,e,n){n.r(e)},25117:function(t,e,n){n.r(e),n.d(e,{texts:function(){return l}});const l=[]},52964:function(t,e){e.Z=`.demoBlock {
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
`},36898:function(t,e){e.Z=`import React from "react";
import {DemoBlock} from "../../DemoBlock";
import {Steps} from "@trionesdev/antd-mobile-react";
import {ClockCircleFill} from "@trionesdev/antd-mobile-icons-react";

export default () => {
  return <>
    <DemoBlock title={\`\u57FA\u7840\u7528\u6CD5(\u4E0D\u62C9\u4F38)\`}>
      <Steps stretch={false} items={[{
        icon: <ClockCircleFill/>,
        title: '\u6B65\u9AA41'
      }, {
        icon: <ClockCircleFill/>,
        title: '\u6B65\u9AA42', description: '\u63CF\u8FF0\u4FE1\u606F'
      }, {
        icon: <ClockCircleFill/>,
        title: '\u6B65\u9AA43'
      }]}/>
    </DemoBlock>
    <DemoBlock title={\`\u57FA\u7840\u7528\u6CD5(\u4E0D\u62C9\u4F38)\`}>
      <Steps current={1}
             items={[{title: '\u6B65\u9AA41'}, {title: '\u6B65\u9AA42', description: '\u63CF\u8FF0\u4FE1\u606F'}, {title: '\u6B65\u9AA43'}, {title: '\u6B65\u9AA44'}]}/>
    </DemoBlock>
    <DemoBlock title={\`\u7EB5\u5411\u6B65\u9AA4\u6761\`}>
      <Steps direction='vertical' items={[{title: '\u6B65\u9AA41'}, {title: '\u6B65\u9AA42', description: '\u63CF\u8FF0\u4FE1\u606F'}, {
        title: '\u6B65\u9AA43',
        description: '\u63CF\u8FF0\u4FE1\u606F\u65F6\u5019\u7EA2\u7EA2\u706B\u706B\u604D\u604D\u60DA\u60DA\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8'
      }, {title: '\u6B65\u9AA44\u8FD8\u662F\u5565\u8FD8\u662F\u4E8B\u5B9E\u4E0A\u4E8B\u5B9E\u4E0A\u5C11\u65F6\u8BF5\u8BD7\u4E66\u5C11\u65F6\u8BF5\u8BD7\u4E66\u6D12\u6D12'}]}/>
    </DemoBlock>
    <DemoBlock title={\`\u7EB5\u5411\u6B65\u9AA4\u6761\`}>
      <Steps iconSize={16} direction='vertical' items={[{icon: <ClockCircleFill/>, title: '\u6B65\u9AA41'}, {
        icon: <ClockCircleFill/>,
        title: '\u6B65\u9AA42',
        description: '\u63CF\u8FF0\u4FE1\u606F'
      }, {
        icon: <ClockCircleFill/>,
        title: '\u6B65\u9AA43',
        description: '\u63CF\u8FF0\u4FE1\u606F\u65F6\u5019\u7EA2\u7EA2\u706B\u706B\u604D\u604D\u60DA\u60DA\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8'
      }, {icon: <ClockCircleFill/>, title: '\u6B65\u9AA44\u8FD8\u662F\u5565\u8FD8\u662F\u4E8B\u5B9E\u4E0A\u4E8B\u5B9E\u4E0A\u5C11\u65F6\u8BF5\u8BD7\u4E66\u5C11\u65F6\u8BF5\u8BD7\u4E66\u6D12\u6D12'}]}/>
    </DemoBlock>
  </>;
};
`}}]);
