"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[2802],{6313:function(a,n,e){var r;e.r(n),e.d(n,{demos:function(){return B}});var v=e(90819),o=e.n(v),p=e(89933),m=e.n(p),d=e(44194),k=e(443),f=e(4238),D=e(92876),E=e(52316),P=e(84514),x=e(8608),B={"src-switch-demo-base":{component:d.memo(d.lazy(function(){return Promise.all([e.e(1323),e.e(5906),e.e(9582),e.e(2792),e.e(5803),e.e(6842),e.e(48),e.e(2433)]).then(e.bind(e,28137))})),asset:{type:"BLOCK",id:"src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(48187).Z},"@trionesdev/antd-mobile-icons-react":{type:"NPM",value:"0.0.2-beta.0"},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:e(95573).Z},"../../DemoBlock.tsx":{type:"FILE",value:e(3699).Z},"../index.ts":{type:"FILE",value:e(58430).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:e(52964).Z}},entry:"index.tsx"},context:{"../../Space.ts":f,"../../DemoBlock.tsx":D,"../index.ts":E,"./index.scss":x,"@trionesdev/antd-mobile-icons-react":k,react:r||(r=e.t(d,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Space/index.ts":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Switch/index.ts":E,"@trionesdev/antd-mobile-base-react":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":x},renderOpts:{compile:function(){var u=m()(o()().mark(function c(){var l,i=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8036).then(e.bind(e,68036));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,i));case 3:case"end":return t.stop()}},c)}));function _(){return u.apply(this,arguments)}return _}()}},"src-switch-demo-0":{component:d.memo(d.lazy(m()(o()().mark(function u(){var _,c;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:c=function(){return c=m()(o()().mark(function t(g){return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,doSomething();case 3:s.next=7;break;case 5:s.prev=5,s.t0=s.catch(0);case 7:case"end":return s.stop()}},t,null,[[0,5]])})),c.apply(this,arguments)},_=function(t){return c.apply(this,arguments)};case 2:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"src-switch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`async function onChange(val: boolean) {
  try {
    await doSomething();
  } catch (e) {
    // handle or ignore error
  }
}`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=m()(o()().mark(function c(){var l,i=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8036).then(e.bind(e,68036));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,i));case 3:case"end":return t.stop()}},c)}));function _(){return u.apply(this,arguments)}return _}()}}}},92876:function(a,n,e){e.r(n),e.d(n,{DemoBlock:function(){return p}});var r=e(44194),v=e(8608),o=e(31549),p=function(d){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:d.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},4238:function(a,n,e){e.r(n);var r=e(84514);n.default=r.Space},52316:function(a,n,e){e.r(n);var r=e(84514);n.default=r.Switch},8608:function(a,n,e){e.r(n)},21731:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u5F00\u5173\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\u3002",paraId:1,tocIndex:1},{value:"\u548C checkbox \u7684\u533A\u522B\u662F\uFF0C\u5207\u6362 switch \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C checkbox \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u548C\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u3002",paraId:1,tocIndex:1},{value:"onChange",paraId:2},{value:"onChange",paraId:3,tocIndex:6},{value:" \u4E8B\u4EF6\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u5F53 Promise \u5F00\u59CB\u65F6\uFF0CSwitch \u4F1A\u81EA\u52A8\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\uFF0C\u800C\u5F53 Promise \u5B8C\u6210\u6216\u5931\u8D25\u65F6\uFF0CSwitch \u4F1A\u81EA\u52A8\u9000\u51FA\u52A0\u8F7D\u72B6\u6001\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6EE1\u8DB3\u5927\u591A\u6570\u9879\u76EE\u7684\u9700\u6C42\u3002",paraId:3,tocIndex:6},{value:"\u4F46\u662F\u5F53 Promise \u5931\u8D25\u65F6\uFF0CSwitch \u5E76\u4E0D\u4F1A\u5403\u6389\u62A5\u9519\uFF0C\u800C\u662F\u4F1A\u628A\u8FD9\u4E2A\u9519\u8BEF\u5BF9\u8C61\u91CD\u65B0\u629B\u51FA\u6765\uFF0C\u8FD9\u662F\u9884\u671F\u884C\u4E3A\uFF0C\u5982\u679C\u4F60\u60F3\u81EA\u5DF1\u62E6\u622A\u6389\u4E00\u4E9B\u9519\u8BEF\uFF0C\u907F\u514D\u4ED6\u4EEC\u88AB\u629B\u51FA\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"try/catch",paraId:4,tocIndex:6},{value:" \u5305\u88F9 ",paraId:4,tocIndex:6},{value:"onChange",paraId:4,tocIndex:6},{value:" \u4E2D\u7684\u5904\u7406\u903B\u8F91\uFF0C\u4F8B\u5982\uFF1A",paraId:4,tocIndex:6}]},52964:function(a,n){n.Z=`.demoBlock {
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
`},3699:function(a,n){n.Z=`import React from 'react'
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
`},95573:function(a,n){n.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`},48187:function(a,n){n.Z=`import { CheckOutline, CloseOutline } from '@trionesdev/antd-mobile-icons-react'
import { DemoBlock } from '../../DemoBlock';
import React, { useState } from 'react'
import Switch from "../index";
import Space from "../../Space";

export default () => {
  const [checked, setChecked] = useState(false)

  const mockRequest = (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  return (
    <>
      <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
        <Switch />
      </DemoBlock>

      <DemoBlock title='\u6709\u9ED8\u8BA4\u503C'>
        <Switch defaultChecked />
      </DemoBlock>

      <DemoBlock title='\u6587\u5B57\u548C\u56FE\u6807'>
        <Space wrap>
          <Switch uncheckedText='\u5173' checkedText='\u5F00' />
          <Switch
            checkedText={<CheckOutline style={{ fontSize: 12 }} />}
            uncheckedText={<CloseOutline style={{ fontSize: 12 }} />}
          />
          <Switch uncheckedText='0' checkedText='1' />
        </Space>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u6837\u5F0F'>
        <Switch
          defaultChecked
          // style={{
          //   '--checked-color': '#00b578',
          //   '--height': '36px',
          //   '--width': '60px',
          // }}
          checkedColor='#00b578'
          height={36}
          width={60}
        />
      </DemoBlock>

      <DemoBlock title='\u7981\u7528\u72B6\u6001'>
        <Space>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Space>
      </DemoBlock>

      <DemoBlock title='\u52A0\u8F7D\u72B6\u6001'>
        <Switch loading />
      </DemoBlock>

      <DemoBlock title='\u5F02\u6B65'>
        <Space wrap>
          <Switch
            checked={checked}
            onChange={async val => {
              await mockRequest()
              setChecked(val)
            }}
          />
        </Space>
      </DemoBlock>
    </>
  )
}
`},58430:function(a,n){n.Z=`import { Switch } from '@trionesdev/antd-mobile-base-react'

export type { SwitchProps } from '@trionesdev/antd-mobile-base-react'

export default Switch
`}}]);
