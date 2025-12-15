"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[3135],{27780:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return E}});var i=n(90819),r=n.n(i),s=n(89933),_=n.n(s),a=n(44194),c=n(55774),l=n(5193),m=n(92876),u=n(44789),p=n(4238),R=n(84514),D=n(51391),E={"radio-demo-base":{component:a.memo(a.lazy(function(){return n.e(7075).then(n.bind(n,94319))})),asset:{type:"BLOCK",id:"radio-demo-base",refAtomIds:["Radio"],dependencies:{"index.tsx":{type:"FILE",value:n(43422).Z},react:{type:"NPM",value:"18.3.1"},"../../DemoDescription.tsx":{type:"FILE",value:n(12659).Z},"../index.tsx":{type:"FILE",value:n(4106).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"./base.scss":{type:"FILE",value:n(45430).Z},"../../Space.ts":{type:"FILE",value:n(95573).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(45270).Z}},entry:"index.tsx"},context:{"../../DemoDescription.tsx":c,"../index.tsx":l,"../../DemoBlock.tsx":m,"./base.scss":u,"../../Space.ts":p,"./index.scss":D,react:t||(t=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoDescription/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Radio/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Radio/demo/base.scss":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Space/index.ts":p,"@trionesdev/antd-mobile-base-react":R,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoDescription/index.scss":D},renderOpts:{compile:function(){var f=_()(r()().mark(function b(){var v,x=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(8036).then(n.bind(n,68036));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,x));case 3:case"end":return d.stop()}},b)}));function P(){return f.apply(this,arguments)}return P}()}}}},92876:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return s}});var t=n(44194),i=n(8608),r=n(31549),s=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},55774:function(o,e,n){n.r(e),n.d(e,{DemoDescription:function(){return s}});var t=n(44194),i=n(51391),r=n(31549),s=function(a){return(0,r.jsx)("div",{className:"demoDescription",children:a.content||a.children})}},5193:function(o,e,n){n.r(e);var t=n(84514);e.default=t.Radio},4238:function(o,e,n){n.r(e);var t=n(84514);e.default=t.Space},8608:function(o,e,n){n.r(e)},51391:function(o,e,n){n.r(e)},44789:function(o,e,n){n.r(e)},93124:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009\u3002",paraId:0,tocIndex:0},{value:"\u5355\u9009\u6846\u6240\u6709\u9009\u9879\u9ED8\u8BA4\u53EF\u89C1\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u6BD4\u8F83\u4E2D\u9009\u62E9\uFF0C\u56E0\u6B64\u9009\u9879\u4E0D\u5B9C\u8FC7\u591A\u3002",paraId:1,tocIndex:1}]},3699:function(o,e){e.Z=`import React from 'react'
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
`},45270:function(o,e){e.Z=`.demoDescription {
  color: var(--triones-antm-color-weak);
}
`},12659:function(o,e){e.Z=`import type { FC, ReactNode } from 'react';
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
`},45430:function(o,e){e.Z=`.blockIndicator {
  background-color: #f5f5f5;
  border-radius: 2px;
}
`},43422:function(o,e){e.Z=`import {DemoBlock} from '../../DemoBlock';
import {DemoDescription} from '../../DemoDescription';
import React from 'react';
import './base.scss';
import Space from "../../Space";
import Radio from "../index";

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
`},4106:function(o,e){e.Z=`import {
  Radio,
  RadioGroupProps,
  RadioProps,
} from '@trionesdev/antd-mobile-base-react';

export type { RadioGroupProps, RadioProps };
export default Radio;
`},95573:function(o,e){e.Z=`import { Space,SpaceProps } from '@trionesdev/antd-mobile-base-react'

export type { SpaceProps }
export default Space
`}}]);
