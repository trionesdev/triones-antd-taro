"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9606],{988:function(t,a,e){var d;e.r(a),e.d(a,{demos:function(){return u}});var r=e(90819),_=e.n(r),l=e(89933),m=e.n(l),o=e(44194),g=e(80281),c=e(63457),I=e(76282),s=e(51321),u={"src-grid-demo-base":{component:o.memo(o.lazy(function(){return Promise.all([e.e(9378),e.e(6282),e.e(2433)]).then(e.bind(e,36996))})),asset:{type:"BLOCK",id:"src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86181).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"./base.scss":{type:"FILE",value:e(13580).Z}},entry:"index.tsx"},context:{"./base.scss":s,react:d||(d=e.t(o,2)),"@trionesdev/antd-taro-react/DemoBlock":c,"@trionesdev/antd-taro-react":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Grid/demo/base.scss":s},renderOpts:{compile:function(){var v=m()(_()().mark(function x(){var i,E=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(8863).then(e.bind(e,68863));case 2:return n.abrupt("return",(i=n.sent).default.apply(i,E));case 3:case"end":return n.stop()}},x)}));function p(){return v.apply(this,arguments)}return p}()}}}},51321:function(t,a,e){e.r(a)},15207:function(t,a,e){e.r(a),e.d(a,{texts:function(){return r}});var d=e(80281);const r=[{value:"\u7528\u4E8E\u4E1A\u52A1\u4E2D\u591A\u4E2A\u5B50\u529F\u80FD\u7684\u5BFC\u822A\u3002",paraId:0,tocIndex:0},{value:"\u5728\u5177\u6709\u63A8\u8350\u6027\u8D28\u8F83\u5F3A\u7684\u9875\u9762\u4E2D\u4F5C\u4E3A\u529F\u80FD\u5165\u53E3\u4F7F\u7528\uFF0C\u4F8B\u5982\u9996\u9875\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"columns",paraId:2,tocIndex:4},{value:"\u5217\u6570",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"gap",paraId:2,tocIndex:4},{value:"\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:2,tocIndex:4},{value:"number | string | [number | string, number | string]",paraId:2,tocIndex:4},{value:"0",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u5168\u5C40\u53D8\u91CF",paraId:3,tocIndex:5},{value:"--gap",paraId:3,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"0",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"--gap-horizontal",paraId:3,tocIndex:5},{value:"\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"--gap-vertical",paraId:3,tocIndex:5},{value:"\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"onClick",paraId:4,tocIndex:7},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:4,tocIndex:7},{value:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"span",paraId:4,tocIndex:7},{value:"\u8DE8\u5EA6",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"1",paraId:4,tocIndex:7},{value:"Grid \u7EC4\u4EF6\u4F9D\u8D56\u4E86 CSS Grid \u7279\u6027\uFF0C\u6240\u4EE5\u517C\u5BB9\u6027\u6807\u51C6\u662F iOS Safari >= 10.3 \u548C Chrome >= 57\u3002",paraId:5,tocIndex:8}]},13580:function(t,a){a.Z=`.grid-demo-item-block {
  border: solid 1px #999999;
  background: #f5f5f5;
  text-align: center;
  color: #999999;
  height: 100%;
}
`},86181:function(t,a){a.Z=`import React from 'react'
import { DemoBlock } from '@trionesdev/antd-taro-react/DemoBlock'
import { Grid } from '@trionesdev/antd-taro-react'

import './base.scss'

export default () => {
  return (
    <>
      <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className='grid-demo-item-block'>A</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>B</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>D</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>

      <DemoBlock title='\u63A7\u5236\u683C\u5B50\u7684\u8DE8\u5EA6'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className='grid-demo-item-block'>A</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className='grid-demo-item-block'>B</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className='grid-demo-item-block'>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>D</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className='grid-demo-item-block'>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </>
  )
}
`}}]);
