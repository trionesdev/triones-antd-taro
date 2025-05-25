"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[3135],{19910:function(o,e,n){var s;n.r(e),n.d(e,{demos:function(){return v}});var a=n(90819),t=n.n(a),_=n(89933),i=n.n(_),r=n(44194),B=n(55288),D=n(95258),c=n(42682),l=n(95676),m=n(22263),u=n(3837),v={"radio-demo-base":{component:r.memo(r.lazy(function(){return n.e(7075).then(n.bind(n,20393))})),asset:{type:"BLOCK",id:"radio-demo-base",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(99691).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"./base.scss":{type:"FILE",value:n(49807).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(92724).Z},"../../DemoDescription.tsx":{type:"FILE",value:n(37059).Z},"./index.scss":{type:"FILE",value:n(63119).Z}},entry:"index.tsx"},context:{"./base.scss":c,"../../DemoBlock.tsx":l,"../../DemoDescription.tsx":m,"./index.scss":u,react:s||(s=n.t(r,2)),"@trionesdev/antd-taro-react":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Radio/demo/base.scss":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoDescription/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u},renderOpts:{compile:function(){var f=i()(t()().mark(function E(){var p,x=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8506).then(n.bind(n,48506));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,x));case 3:case"end":return d.stop()}},E)}));function R(){return f.apply(this,arguments)}return R}()}}}},95676:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return _}});var s=n(44194),a=n(3837),t=n(31549),_=function(r){return(0,t.jsxs)("div",{className:"demoBlock",children:[(0,t.jsx)("div",{className:"demoTitle",children:r.title}),(0,t.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},22263:function(o,e,n){n.r(e),n.d(e,{DemoDescription:function(){return t}});var s=n(44194),a=n(31549),t=function(i){return(0,a.jsx)("div",{className:"demoDescription",children:i.content||i.children})}},3837:function(o,e,n){n.r(e)},42682:function(o,e,n){n.r(e)},61755:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var s=n(55288);const a=[{value:"\u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009\u3002",paraId:0,tocIndex:0},{value:"\u5355\u9009\u6846\u6240\u6709\u9009\u9879\u9ED8\u8BA4\u53EF\u89C1\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u6BD4\u8F83\u4E2D\u9009\u62E9\uFF0C\u56E0\u6B64\u9009\u9879\u4E0D\u5B9C\u8FC7\u591A\u3002",paraId:1,tocIndex:1}]},63119:function(o,e){e.Z=`.demoBlock {
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
`},92724:function(o,e){e.Z=`import React from 'react'
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
`},37059:function(o,e){e.Z=`import type { FC, ReactNode } from 'react';
import React from 'react';
import './index.scss';

export const DemoDescription: FC<{
  content?: ReactNode;
  children?: ReactNode;
}> = (props) => {
  return (
    <div className="demoDescription">{props.content || props.children}</div>
  );
};
`},49807:function(o,e){e.Z=`.blockIndicator {
  background-color: #f5f5f5;
  border-radius: 2px;
}
`},99691:function(o,e){e.Z=`import {DemoBlock} from '../../DemoBlock';
import {DemoDescription} from '../../DemoDescription';
import React from 'react';
import './base.scss';
import { Radio, Space } from '@trionesdev/antd-taro-react';

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Space direction="vertical">
          <Radio/>
          <Radio>\u6709\u63CF\u8FF0\u7684\u5355\u9009\u6846</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title="\u9009\u9879\u7EC4">
        <Radio.Group defaultValue="1">
          <Space direction="vertical">
            <Radio value="1">\u7B2C\u4E00\u9879</Radio>
            <Radio value="2">\u7B2C\u4E8C\u9879</Radio>
            <Radio value="3">\u7B2C\u4E09\u9879</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>

      <DemoBlock title="\u9009\u9879\u7EC4">
        <Radio.Group defaultValue="1" items={[
          {
            label: '\u7B2C\u4E00\u9879',
            value: '1'
          },
          {
            label: '\u7B2C\u4E8C\u9879',
            value: '2'
          },
          {
            label: '\u7B2C\u4E09\u9879',
            value: '3'
          }
        ]}/>
      </DemoBlock>

      <DemoBlock title="\u5360\u6EE1\u6574\u884C\u5BBD\u5EA6">
        <Space direction="vertical" block>
          <Radio.Group>
            <Space direction="vertical" block>
              <Radio value="1" block className="blockIndicator">
                \u5757\u7EA7\u5143\u7D20
              </Radio>
              <Radio value="2" className="blockIndicator">
                \u975E\u5757\u7EA7\u5143\u7D20
              </Radio>
            </Space>
          </Radio.Group>
          <DemoDescription>
            \u5355\u9009\u6846\u7684\u5757\u7EA7\u5143\u7D20\u4F1A\u5360\u6EE1\u6574\u884C\uFF0C\u800C\u975E\u5757\u7EA7\u5143\u7D20\u4E0D\u4F1A\u3002\u7070\u8272\u7684\u80CC\u666F\u6807\u8BC6\u4E86\u5143\u7D20\u6240\u5360\u636E\u7684\u7A7A\u95F4\u548C\u53EF\u70B9\u51FB\u7684\u533A\u57DF\u3002
          </DemoDescription>
        </Space>
      </DemoBlock>

      <DemoBlock title="\u7981\u7528\u72B6\u6001">
        <Radio.Group defaultValue="2">
          <Space direction="vertical">
            <Radio value="1" disabled>
              \u7B2C\u4E00\u9879
            </Radio>
            <Radio value="2">\u7B2C\u4E8C\u9879</Radio>
            <Radio value="3">\u7B2C\u4E09\u9879</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>

      <DemoBlock title={\`\u6309\u94AE\u6837\u5F0F\u5206\u7EC4\`}>
        <Radio.Group defaultValue="1" shape={'button'} items={[
          {
            label: '\u7B2C\u4E00\u9879',
            value: '1'
          },
          {
            label: '\u7B2C\u4E8C\u9879',
            value: '2'
          },
          {
            label: '\u7B2C\u4E09\u9879',
            value: '3'
          },
          {
            label: '\u7B2C\u56DB\u9879',
            value: '4'
          }
        ]}/>
      </DemoBlock>
    </>
  );
};
`}}]);
