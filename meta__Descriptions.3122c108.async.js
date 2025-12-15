"use strict";(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[266],{91254:function(o,e,n){var l;n.r(e),n.d(e,{demos:function(){return X}});var v=n(90819),s=n.n(v),m=n(89933),u=n.n(m),r=n(44194),i=n(57789),d=n(92876),b=n(84514),c=n(8608),X={"src-descriptions-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1323),n.e(5906),n.e(9582),n.e(2792),n.e(5803),n.e(6842),n.e(48),n.e(2433)]).then(n.bind(n,5014))})),asset:{type:"BLOCK",id:"src-descriptions-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(37861).Z},react:{type:"NPM",value:"18.3.1"},"../index.ts":{type:"FILE",value:n(14406).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.ts":i,"../../DemoBlock.tsx":d,"./index.scss":c,react:l||(l=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Descriptions/index.ts":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":d,"@trionesdev/antd-mobile-base-react":b,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var p=u()(s()().mark(function D(){var a,f=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8036).then(n.bind(n,68036));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,f));case 3:case"end":return t.stop()}},D)}));function h(){return p.apply(this,arguments)}return h}()}},"src-descriptions-demo-vertical":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1323),n.e(5906),n.e(9582),n.e(2792),n.e(5803),n.e(6842),n.e(48),n.e(2433)]).then(n.bind(n,66663))})),asset:{type:"BLOCK",id:"src-descriptions-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(19329).Z},react:{type:"NPM",value:"18.3.1"},"../index.ts":{type:"FILE",value:n(14406).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./index.scss":{type:"FILE",value:n(52964).Z}},entry:"index.tsx"},context:{"../index.ts":i,"../../DemoBlock.tsx":d,"./index.scss":c,react:l||(l=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Descriptions/index.ts":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":d,"@trionesdev/antd-mobile-base-react":b,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":c},renderOpts:{compile:function(){var p=u()(s()().mark(function D(){var a,f=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(8036).then(n.bind(n,68036));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,f));case 3:case"end":return t.stop()}},D)}));function h(){return p.apply(this,arguments)}return h}()}}}},92876:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return m}});var l=n(44194),v=n(8608),s=n(31549),m=function(r){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:r.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},57789:function(o,e,n){n.r(e);var l=n(84514);e.default=l.Descriptions},8608:function(o,e,n){n.r(e)},8536:function(o,e,n){n.r(e),n.d(e,{texts:function(){return l}});const l=[]},52964:function(o,e){e.Z=`.demoBlock {
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
`},37861:function(o,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Descriptions from "../index";

export default () => {
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Descriptions columns={1} items={[
        {
          label: '\u59D3\u540D',
          children: '\u5F20\u4E09'
        },
        {
          label: '\u5E74\u9F84',
          children: '18'
        },
        {
          label: '\u5730\u5740',
          span: 1,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u5730\u5740',
          span: 1,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },

        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Descriptions labelWidth={80} columns={2} items={[
        {
          label: '\u59D3\u540D',
          children: '\u5F20\u4E09'
        },
        {
          label: '\u5E74\u9F84',
          children: '18'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },

        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Descriptions bordered={ true} labelWidth={80} columns={2} items={[
        {
          label: '\u59D3\u540D',
          children: '\u5F20\u4E09'
        },
        {
          label: '\u5E74\u9F84',
          children: '18'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },

        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
  </div>
}
`},19329:function(o,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Descriptions from "../index";

export default () => {
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Descriptions layout={'vertical'} columns={1} items={[
        {
          label: '\u59D3\u540D',
          children: '\u5F20\u4E09'
        },
        {
          label: '\u5E74\u9F84',
          children: '18'
        },
        {
          label: '\u5730\u5740',
          span: 1,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u5730\u5740',
          span: 1,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },

        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Descriptions layout={'vertical'} columns={2} items={[
        {
          label: '\u59D3\u540D',
          children: '\u5F20\u4E09'
        },
        {
          label: '\u5E74\u9F84',
          children: '18'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        },
        {
          label: '\u624B\u673A\u53F7',
          children: '1234567890'
        },
        {
          label: '\u5730\u5740',
          span: 2,
          children: '\u4E2D\u56FD \u4E0A\u6D77 \u6D66\u4E1C\u65B0\u533A \u9646\u5BB6\u5634 XXXXXX'
        },

        {
          label: '\u90AE\u7BB1',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
  </div>
}
`},14406:function(o,e){e.Z=`import {
  Descriptions,
  DescriptionsProps,
} from '@trionesdev/antd-mobile-base-react';

export type { DescriptionsProps };
export default Descriptions;
`}}]);
