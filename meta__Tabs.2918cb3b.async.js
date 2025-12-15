"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[8541],{16328:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return p}});var _=n(90819),a=n.n(_),d=n(89933),l=n.n(d),r=n(44194),i=n(92629),m=n(92876),b=n(84514),c=n(8608),p={"tabs-demo-base":{component:r.memo(r.lazy(function(){return n.e(2066).then(n.bind(n,17387))})),asset:{type:"BLOCK",id:"tabs-demo-base",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(23681).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(64949).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":i,"../../DemoBlock.tsx":m,"./index.scss":c,react:o||(o=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Tabs/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":m,"@trionesdev/antd-mobile-base-react":b,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var f=l()(a()().mark(function v(){var u,D=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(8036).then(n.bind(n,68036));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,D));case 3:case"end":return s.stop()}},v)}));function T(){return f.apply(this,arguments)}return T}()}}}},92876:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return d}});var o=n(44194),_=n(8608),a=n(31549),d=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},92629:function(t,e,n){n.r(e);var o=n(84514);e.default=o.Tabs},8608:function(t,e,n){n.r(e)},42499:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},52964:function(t,e){e.Z=`.demoBlock {
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
`},23681:function(t,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Tabs from "../index";

export default () => {
  const items = [
    {
      key: '1',
      label: 'Tab1',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2',
      children: <>2</>
    }
  ]

  const items2 = [
    {
      key: '1',
      label: 'Tab1-\u6D4B\u8BD5',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2-\u6D4B\u8BD5',
      children: <>2</>
    },
    {
      key: '3',
      label: 'Tab3-\u6D4B\u8BD5',
      children: <>3</>
    },
    {
      key: '4',
      label: 'Tab4-\u6D4B\u8BD5',
      children: <>4</>
    },
    {
      key: '5',
      label: 'Tab5-\u6D4B\u8BD5',
      children: <>5</>
    },
    {
      key: '6',
      label: 'Tab6-\u6D4B\u8BD5',
      children: <>6</>
    }
  ]
  return <>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Tabs items={items}/>
    </DemoBlock>
    <DemoBlock title={\`\u6EDA\u52A8\`}>
      <Tabs items={items2} stretch={false} />
    </DemoBlock>
    <DemoBlock title={\`Tab\`}>
      <Tabs stretch={false} >
        <Tabs.Tab key={\`1\`} label={\`Tab1\`}>
          <div>1</div>
        </Tabs.Tab>
        <Tabs.Tab key={\`2\`} label={\`Tab2\`}>
          <div>2</div>
        </Tabs.Tab>
      </Tabs>
    </DemoBlock>
  </>
}
`},64949:function(t,e){e.Z=`import { Tabs, TabsProps } from '@trionesdev/antd-mobile-base-react';

export type { TabsProps };
export default Tabs;
`}}]);
