"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9461],{29345:function(o,n,t){var d;t.r(n),t.d(n,{demos:function(){return m}});var l=t(90819),e=t.n(l),i=t(89933),s=t.n(i),a=t(44194),y=t(7717),c=t(95258),_=t(95676),u=t(3837),m={"button-demo-base":{component:a.memo(a.lazy(function(){return t.e(7570).then(t.bind(t,39249))})),asset:{type:"BLOCK",id:"button-demo-base",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:t(33429).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../../DemoBlock.tsx":{type:"FILE",value:t(92724).Z},"./index.scss":{type:"FILE",value:t(63119).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":_,"./index.scss":u,react:d||(d=t.t(a,2)),"@trionesdev/antd-taro-react":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var B=s()(e()().mark(function v(){var p,x=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.e(8506).then(t.bind(t,48506));case 2:return r.abrupt("return",(p=r.sent).default.apply(p,x));case 3:case"end":return r.stop()}},v)}));function f(){return B.apply(this,arguments)}return f}()}}}},95676:function(o,n,t){t.r(n),t.d(n,{DemoBlock:function(){return i}});var d=t(44194),l=t(3837),e=t(31549),i=function(a){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:a.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},3837:function(o,n,t){t.r(n)},63466:function(o,n,t){t.r(n),t.d(n,{texts:function(){return l}});var d=t(7717);const l=[]},33429:function(o,n){n.Z="import { DemoBlock } from '../../DemoBlock';\nimport React from \"react\";\nimport { Button } from '@trionesdev/antd-taro-react';\n\n\nexport default () => {\n  return <>\n    <DemoBlock title='\u6309\u94AE\u7C7B\u578B'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`}>Primary</Button>\n        <Button type={`default`}>Default</Button>\n        <Button type={`dashed`}>Dashed</Button>\n        <Button type={`text`}>Text</Button>\n        <Button type={`link`}>Link</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u989C\u8272\u4E0E\u53D8\u4F53'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`default`} variant={`solid`}>Solid</Button>\n          <Button color={`default`} variant={`outlined`}>Outlined</Button>\n          <Button color={`default`} variant={`dashed`}>Dashed</Button>\n          <Button color={`default`} variant={`filled`}>Filled</Button>\n          <Button color={`default`} variant={`text`}>Text</Button>\n          <Button color={`default`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`primary`} variant={`solid`}>Solid</Button>\n          <Button color={`primary`} variant={`outlined`}>Outlined</Button>\n          <Button color={`primary`} variant={`dashed`}>Dashed</Button>\n          <Button color={`primary`} variant={`filled`}>Filled</Button>\n          <Button color={`primary`} variant={`text`}>Text</Button>\n          <Button color={`primary`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`danger`} variant={`solid`}>Solid</Button>\n          <Button color={`danger`} variant={`outlined`}>Outlined</Button>\n          <Button color={`danger`} variant={`dashed`}>Dashed</Button>\n          <Button color={`danger`} variant={`filled`}>Filled</Button>\n          <Button color={`danger`} variant={`text`}>Text</Button>\n          <Button color={`danger`} variant={`link`}>Link</Button>\n        </div>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5757\u7EA7\u6309\u94AE'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button block={true} type='primary'>\u6309\u94AE</Button>\n        <Button block={true} color='primary'>\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u7981\u7528'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} disabled>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} disabled>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} disabled>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5371\u9669'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} danger>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} danger>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} danger>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n  </>\n}\n"},63119:function(o,n){n.Z=`.demoBlock {
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
`},92724:function(o,n){n.Z=`import React from 'react'
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
