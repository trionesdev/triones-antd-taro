"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[252],{53546:function(t,e,n){var _;n.r(e),n.d(e,{demos:function(){return p}});var s=n(90819),o=n.n(s),d=n(89933),m=n.n(d),r=n(44194),D=n(19e3),u=n(25726),l=n(49387),i=n(91518),p={"form-demo-base":{component:r.memo(r.lazy(function(){return n.e(5943).then(n.bind(n,93488))})),asset:{type:"BLOCK",id:"form-demo-base",refAtomIds:["Form"],dependencies:{"index.tsx":{type:"FILE",value:n(53457).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(25475).Z},"./index.scss":{type:"FILE",value:n(92505).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":i,"@trionesdev/antd-taro-react":u,react:_||(_=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":i},renderOpts:{compile:function(){var f=m()(o()().mark(function E(){var c,h=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(2194).then(n.bind(n,2194));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,h));case 3:case"end":return a.stop()}},E)}));function v(){return f.apply(this,arguments)}return v}()}}}},49387:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return d}});var _=n(44194),s=n(91518),o=n(31549),d=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},91518:function(t,e,n){n.r(e)},12765:function(t,e,n){n.r(e),n.d(e,{texts:function(){return s}});var _=n(19e3);const s=[]},92505:function(t,e){e.Z=`.demoBlock {
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
`},25475:function(t,e){e.Z=`import React from 'react'
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
`},53457:function(t,e){e.Z=`import {Button, Form} from "@trionesdev/antd-taro-react";
import {DemoBlock} from '../../DemoBlock';
import React from "react"
import {Input} from "@trionesdev/antd-taro-react";

export default () => {
  const [verticalForm] = Form.useForm();
  const [horizontalForm] = Form.useForm();
  return <div>
    <DemoBlock title='\u6C34\u5E73\u8868\u5355'>
      <Form form={verticalForm} labelWidth={80}>
        <Form.Item label={'\u59D3\u540D'} name={'name'} required={true} rules={[{required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D'}]}>
          <Input placeholder={\`\u8BF7\u8F93\u5165\u59D3\u540D\`}/>
        </Form.Item>
        <Form.Item label={'\u5730\u5740'} name={'address'} required={true} rules={[{required: true, message: '\u8BF7\u8F93\u5165\u5730\u5740'}]}>
          <Input placeholder={\`\u8BF7\u8F93\u5165\u5730\u5740\`}/>
        </Form.Item>
      </Form>
      <Button type={\`primary\`} block={true} onClick={() => {
        verticalForm.validateFields().then(values => {
          console.log(values)
        })
      }}>\u63D0\u4EA4</Button>
    </DemoBlock>
    <DemoBlock title='\u5782\u76F4\u8868\u5355'>
      <Form layout={\`vertical\`} form={horizontalForm}>
        <Form.Item label={'\u59D3\u540D'} name={'name'}>
          <Input placeholder={\`\u8BF7\u8F93\u5165\u59D3\u540D\`}/>
        </Form.Item>
        <Form.Item label={'\u5730\u5740'} name={'address'}>
          <Input placeholder={\`\u8BF7\u8F93\u5165\u5730\u5740\`}/>
        </Form.Item>
      </Form>
      <Button type={\`primary\`} block={true} onClick={() => {
        horizontalForm.validateFields().then(values => {
          console.log(values)
        })
      }}>\u63D0\u4EA4</Button>
    </DemoBlock>
  </div>
}
`}}]);
