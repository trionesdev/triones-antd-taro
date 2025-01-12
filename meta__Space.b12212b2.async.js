"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6122],{43738:function(d,n,t){var a;t.r(n),t.d(n,{demos:function(){return I}});var o=t(90819),u=t.n(o),l=t(89933),c=t.n(l),r=t(44194),y=t(36594),_=t(76282),m=t(63457),I={"src-space-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([t.e(9378),t.e(6282),t.e(2433)]).then(t.bind(t,72771))})),asset:{type:"BLOCK",id:"src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(9037).Z},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-taro-react":_,"@trionesdev/antd-taro-react/DemoBlock":m,react:a||(a=t.t(r,2))},renderOpts:{compile:function(){var i=c()(u()().mark(function B(){var p,v=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(8863).then(t.bind(t,68863));case 2:return e.abrupt("return",(p=e.sent).default.apply(p,v));case 3:case"end":return e.stop()}},B)}));function s(){return i.apply(this,arguments)}return s}()}}}},54576:function(d,n,t){t.r(n),t.d(n,{texts:function(){return o}});var a=t(36594);const o=[{value:"\u5143\u7D20\u6392\u5217\u4E2D\u4FDD\u6301\u76F8\u540C\u7684\u5BBD\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u591A\u4E2A\u5143\u7D20\u6309\u7167\u6C34\u5E73\u6216\u5782\u76F4\u65B9\u5411\u4FDD\u6301\u76F8\u540C\u7684\u95F4\u8DDD\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:"\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"block",paraId:2,tocIndex:4},{value:"\u662F\u5426\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u95F4\u8DDD\u65B9\u5411",paraId:2,tocIndex:4},{value:"'vertical' | 'horizontal'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4},{value:"justify",paraId:2,tocIndex:4},{value:"\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onClick",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:2,tocIndex:4},{value:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"wrap",paraId:2,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"--gap",paraId:3,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"8px",paraId:3,tocIndex:5},{value:"--gap-horizontal",paraId:3,tocIndex:5},{value:"\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"--gap-vertical",paraId:3,tocIndex:5},{value:"\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5}]},9037:function(d,n){n.Z=`import { Button, Space } from '@trionesdev/antd-taro-react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title='\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD'>
        <Space>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u6362\u884C'>
        <Space wrap>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
          <Button type='primary'>\u6309\u94AE4</Button>
          <Button type='primary'>\u6309\u94AE5</Button>
          <Button type='primary'>\u6309\u94AE6</Button>
          <Button type='primary'>\u6309\u94AE7</Button>
          <Button type='primary'>\u6309\u94AE8</Button>
          <Button type='primary'>\u6309\u94AE9</Button>
          <Button type='primary'>\u6309\u94AE10</Button>
          <Button type='primary'>\u6309\u94AE11</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD'>
        <Space direction='vertical'>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F'>
        <Space style={{ '--gap': '24px' }}>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20'>
        <Space direction='vertical' block>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F'>
        <Space justify='center' block>
          <Button type='primary'>1</Button>
          <Button type='primary'>
            2<br />2
          </Button>
          <Button type='primary'>
            3<br />3<br />3
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F'>
        <Space align='end'>
          <Button type='primary'>1</Button>
          <Button type='primary'>
            2<br />2
          </Button>
          <Button type='primary'>
            3<br />3<br />3
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
`}}]);
