"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[4059],{24355:function(a,e,n){var d;n.r(e),n.d(e,{demos:function(){return B}});var c=n(90819),r=n.n(c),i=n(89933),u=n.n(i),o=n(44194),D=n(35245),p=n(95258),l=n(95676),m=n(3837),B={"checkbox-demo-base":{component:o.memo(o.lazy(function(){return n.e(9709).then(n.bind(n,97431))})),asset:{type:"BLOCK",id:"checkbox-demo-base",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:n(38316).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./index.scss":{type:"FILE",value:n(72973).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":m,react:d||(d=n.t(o,2)),"@trionesdev/antd-taro-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var _=u()(r()().mark(function k(){var s,x=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(2740).then(n.bind(n,42740));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,x));case 3:case"end":return t.stop()}},k)}));function h(){return _.apply(this,arguments)}return h}()}},"checkbox-demo-disabled":{component:o.memo(o.lazy(function(){return n.e(9709).then(n.bind(n,80311))})),asset:{type:"BLOCK",id:"checkbox-demo-disabled",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:n(31081).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./index.scss":{type:"FILE",value:n(72973).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":l,"./index.scss":m,react:d||(d=n.t(o,2)),"@trionesdev/antd-taro-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var _=u()(r()().mark(function k(){var s,x=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(2740).then(n.bind(n,42740));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,x));case 3:case"end":return t.stop()}},k)}));function h(){return _.apply(this,arguments)}return h}()}}}},95676:function(a,e,n){n.r(e),n.d(e,{DemoBlock:function(){return i}});var d=n(44194),c=n(3837),r=n(31549),i=function(o){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:o.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},3837:function(a,e,n){n.r(e)},3164:function(a,e,n){n.r(e),n.d(e,{texts:function(){return c}});var d=n(35245);const c=[]},38316:function(a,e){e.Z=`import React from 'react';
import { Checkbox, Space } from '@trionesdev/antd-taro-react';
import { DemoBlock } from '../../DemoBlock';


export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Checkbox checked={true}>\u82F9\u679C</Checkbox>
        <Checkbox checked={false}>\u9999\u8549</Checkbox>
      </DemoBlock>
      <DemoBlock title="\u9ED8\u8BA4\u9009\u4E2D">
        <Checkbox checked={true}>\u82F9\u679C</Checkbox>
      </DemoBlock>
      <DemoBlock title="\u7981\u7528">
        <Checkbox checked={true} disabled={true}>
          \u82F9\u679C
        </Checkbox>
        <Checkbox checked={false} disabled={true}>
          \u9999\u8549
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="Button">
        <Checkbox.Button>\u82F9\u679C</Checkbox.Button>
      </DemoBlock>

      <DemoBlock title="Button \u7981\u7528">
        <Space>
          <Checkbox.Button disabled={true}>\u82F9\u679C</Checkbox.Button>
          <Checkbox.Button disabled={true} checked={true}>
            \u82F9\u679C
          </Checkbox.Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="\u5206\u7EC4">
        <Checkbox.Group defaultValue={['1']}>
          <Checkbox.Button value={'1'}>\u82F9\u679C</Checkbox.Button>
        </Checkbox.Group>
      </DemoBlock>
    </>
  );
};
`},31081:function(a,e){e.Z=`
import React from "react";
import {Checkbox} from '@trionesdev/antd-taro-react';
import {DemoBlock} from "../../DemoBlock";



export default () => {
  return <>
    <DemoBlock title='\u7981\u7528'>
      <Checkbox checked={true} disabled={true}>\u82F9\u679C</Checkbox>
      <Checkbox checked={false} disabled={true}>\u9999\u8549</Checkbox>
    </DemoBlock>
    <DemoBlock title='Button'>
      <Checkbox.Button checked={true}  disabled={true}>\u82F9\u679C</Checkbox.Button>
    </DemoBlock>
  </>
}
`},72973:function(a,e){e.Z=`.demoBlock {
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
`},23624:function(a,e){e.Z=`import React from 'react'
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
`}}]);
