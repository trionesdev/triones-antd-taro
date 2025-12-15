"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[1808],{12559:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return f}});var _=n(90819),r=n.n(_),d=n(89933),l=n.n(d),a=n(44194),m=n(85519),i=n(92876),p=n(84514),c=n(8608),f={"input-demo-base":{component:a.memo(a.lazy(function(){return n.e(2091).then(n.bind(n,7749))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(82705).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(6050).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":m,"../../DemoBlock.tsx":i,"./index.scss":c,react:o||(o=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Input/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":i,"@trionesdev/antd-mobile-base-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var D=l()(r()().mark(function E(){var u,x=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8036).then(n.bind(n,68036));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,x));case 3:case"end":return s.stop()}},E)}));function P(){return D.apply(this,arguments)}return P}()}}}},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return d}});var o=n(44194),_=n(8608),r=n(31549),d=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},85519:function(t,e,n){n.r(e);var o=n(84514);e.default=o.Input},8608:function(t,e,n){n.r(e)},23226:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},52964:function(t,e){e.Z=`.demoBlock {
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
`},82705:function(t,e){e.Z=`import {DemoBlock} from '../../DemoBlock';
import React from 'react';
import Input from "../index";

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"/>
      </DemoBlock>
      <DemoBlock title="\u5E26\u6E05\u9664\u6309\u94AE">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="\u5BC6\u7801\u6A21\u5F0F">
        <Input.Password placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="OPT\u6A21\u5F0F">
        <Input.OPT/>
      </DemoBlock>
      <DemoBlock title="Textarea">
        <Input.TextArea placeholder={'\u8BF7\u8F93\u5165\u5185\u5BB9'}/>
      </DemoBlock>
    </>
  );
};
`},6050:function(t,e){e.Z=`import { InputProps, Input, InputOPTProps, InputPasswordProps,InputTextareaProps   } from '@trionesdev/antd-mobile-base-react';

export type {
  InputOPTProps,
  InputPasswordProps,
  InputProps,
  InputTextareaProps,
};
export default Input;
`}}]);
