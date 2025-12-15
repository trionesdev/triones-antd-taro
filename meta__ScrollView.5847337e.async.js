"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[6491],{91289:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return v}});var l=n(90819),r=n.n(l),s=n(89933),_=n.n(s),a=n(44194),i=n(41627),c=n(92876),p=n(84514),m=n(8608),v={"scrollview-demo-base":{component:a.memo(a.lazy(function(){return n.e(5318).then(n.bind(n,81992))})),asset:{type:"BLOCK",id:"scrollview-demo-base",refAtomIds:["ScrollView"],dependencies:{"index.tsx":{type:"FILE",value:n(47808).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(86579).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.tsx":i,"../../DemoBlock.tsx":c,"./index.scss":m,react:t||(t=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/ScrollView/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":c,"@trionesdev/antd-mobile-base-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":m},renderOpts:{compile:function(){var f=_()(r()().mark(function E(){var u,D=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8036).then(n.bind(n,68036));case 2:return d.abrupt("return",(u=d.sent).default.apply(u,D));case 3:case"end":return d.stop()}},E)}));function h(){return f.apply(this,arguments)}return h}()}}}},92876:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var t=n(44194),l=n(8608),r=n(31549),s=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},41627:function(o,e,n){n.r(e);var t=n(84514);e.default=t.ScrollView},8608:function(o,e,n){n.r(e)},20355:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u517C\u5BB9\u5C0F\u7A0B\u5E8F\u548C\u666E\u901A\u6D4F\u89C8\u5668\u4E0B\u7684\u6EDA\u52A8\u89C6\u56FE\uFF0C\u65E0\u9700\u5F15\u5165@taro/components,\u76F4\u63A5\u5728h5\u9879\u76EE\u4E2D\u53EF\u4EE5\u4F7F\u7528\u3002",paraId:0,tocIndex:0}]},52964:function(o,e){e.Z=`.demoBlock {
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
`},3699:function(o,e){e.Z=`import React from 'react'
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
`},47808:function(o,e){e.Z=`import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import ScrollView from '../index';

export default () => {
  return (
    <div>
      <DemoBlock title={\`\u4E00\u822C\u4F7F\u7528\`}>
        <ScrollView style={{ height: 300 }} scrollY={true}>
          <div>
            <div style={{ height: 100, backgroundColor: 'blue' }}>
              <div style={{ height: 100, backgroundColor: 'yellow' }} />
              <div style={{ height: 100, backgroundColor: 'gray' }} />
              <div style={{ height: 100, backgroundColor: 'green' }} />
              <div style={{ height: 100, backgroundColor: 'beige' }} />
              <div style={{ height: 100, backgroundColor: 'black' }} />
            </div>
          </div>
        </ScrollView>
      </DemoBlock>
    </div>
  );
};
`},86579:function(o,e){e.Z=`import {
  ScrollView,
  ScrollViewProps,
} from '@trionesdev/antd-mobile-base-react';

export type { ScrollViewProps };
export default ScrollView;
`}}]);
