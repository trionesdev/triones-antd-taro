"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[1540],{28303:function(t,n,e){var a;e.r(n),e.d(n,{demos:function(){return u}});var d=e(90819),o=e.n(d),c=e(89933),l=e.n(c),r=e(44194),p=e(70048),i=e(92876),_=e(8608),u={"progress-demo-base":{component:r.memo(r.lazy(function(){return e.e(7566).then(e.bind(e,88102))})),asset:{type:"BLOCK",id:"progress-demo-base",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:e(13801).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-mobile-react":{type:"NPM",value:"0.0.2-beta.2"},"../../DemoBlock.tsx":{type:"FILE",value:e(3699).Z},"./index.scss":{type:"FILE",value:e(52964).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":i,"./index.scss":_,react:a||(a=e.t(r,2)),"@trionesdev/antd-mobile-react":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":_},renderOpts:{compile:function(){var f=l()(o()().mark(function v(){var m,D=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(8036).then(e.bind(e,68036));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,D));case 3:case"end":return s.stop()}},v)}));function P(){return f.apply(this,arguments)}return P}()}}}},92876:function(t,n,e){e.r(n),e.d(n,{DemoBlock:function(){return c}});var a=e(44194),d=e(8608),o=e(31549),c=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},8608:function(t,n,e){e.r(n)},78001:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u5728\u64CD\u4F5C\u9700\u8981\u8F83\u957F\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\uFF0C\u4E3A\u7528\u6237\u663E\u793A\u8BE5\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u548C\u72B6\u6001\u3002",paraId:1,tocIndex:1}]},52964:function(t,n){n.Z=`.demoBlock {
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
`},3699:function(t,n){n.Z=`import React from 'react'
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
`},13801:function(t,n){n.Z='import React from "react"\nimport {DemoBlock} from \'../../DemoBlock\';\nimport { Progress, Space } from "@trionesdev/antd-mobile-react";\n\nexport default () => {\n    return <>\n          <DemoBlock title={`\u8FDB\u5EA6\u6761`}>\n        <Space direction={`vertical`} block={true}>\n          <Progress percent={30}/>\n          <Progress percent={50} status={`active`}/>\n          <Progress percent={50} status={`exception`}/>\n          <Progress percent={100}/>\n          <Progress percent={50} showInfo={false}/>\n        </Space>\n      </DemoBlock>\n      <DemoBlock title={`\u8FDB\u5EA6\u5708`}>\n        <Space>\n          <Progress percent={75} type={`circle`}/>\n          <Progress percent={75} type={`circle`} status={`exception`}/>\n          <Progress percent={100} type={`circle`}/>\n        </Space>\n      </DemoBlock>\n      <DemoBlock title={`\u5C0F\u578B\u8FDB\u5EA6\u6761`}>\n        <Space direction={`vertical`} block={true}>\n          <Progress percent={30} size={`small`}/>\n          <Progress percent={50} size={`small`} status={`active`}/>\n          <Progress percent={70} size={`small`} status={`exception`}/>\n          <Progress percent={100} size={`small`}/>\n          <Progress percent={50} size={`small`} showInfo={false}/>\n        </Space>\n      </DemoBlock>\n      <DemoBlock title={`\u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F`}>\n        <Space>\n          <Progress percent={75} type={`circle`} format={(percent) => `${percent}%`}/>\n          <Progress percent={100} type={`circle`} format={() => `\u5B8C\u6210`}/>\n        </Space>\n      </DemoBlock>\n    </>\n}'}}]);
