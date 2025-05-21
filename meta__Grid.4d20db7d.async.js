"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9606],{36222:function(d,t,n){var _;n.r(t),n.d(t,{demos:function(){return E}});var s=n(90819),c=n.n(s),m=n(89933),l=n.n(m),r=n(44194),p=n(11403),u=n(95676),a=n(97870),i=n(75824),e=n(98416),o=n(3837),I=n(78252),f=n(22045),g=n(32874),P=n(51865),M=n.n(P),E={"src-grid-demo-base":{component:r.memo(r.lazy(function(){return Promise.all([n.e(9378),n.e(5586),n.e(9877),n.e(1271),n.e(4316),n.e(7323),n.e(6714),n.e(656),n.e(405),n.e(2433)]).then(n.bind(n,64450))})),asset:{type:"BLOCK",id:"src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(44326).Z},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(92724).Z},"../index.ts":{type:"FILE",value:n(43882).Z},"./base.scss":{type:"FILE",value:n(54275).Z},"./grid.tsx":{type:"FILE",value:n(47755).Z},"./index.scss":{type:"FILE",value:n(63119).Z},"../utils/native-props.ts":{type:"FILE",value:n(27930).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(62586).Z},"./style.scss":{type:"FILE",value:n(21323).Z},classnames:{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":u,"../index.ts":a,"./base.scss":i,"./grid.tsx":e,"./index.scss":o,"../utils/native-props.ts":I,"../utils/with-default-props.tsx":f,"./style.scss":g,react:_||(_=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Grid/index.ts":a,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Grid/demo/base.scss":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Grid/grid.tsx":e,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":o,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Grid/style.scss":g,classnames:P},renderOpts:{compile:function(){var h=l()(c()().mark(function y(){var x,C=arguments;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(8506).then(n.bind(n,48506));case 2:return v.abrupt("return",(x=v.sent).default.apply(x,C));case 3:case"end":return v.stop()}},y)}));function D(){return h.apply(this,arguments)}return D}()}}}},95676:function(d,t,n){n.r(t),n.d(t,{DemoBlock:function(){return m}});var _=n(44194),s=n(3837),c=n(31549),m=function(r){return(0,c.jsxs)("div",{className:"demoBlock",children:[(0,c.jsx)("div",{className:"demoTitle",children:r.title}),(0,c.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},98416:function(d,t,n){n.r(t),n.d(t,{Grid:function(){return p},GridItem:function(){return u}});var _=n(44194),s=n(78252),c=n(32874),m=n(22045),l=n(31549),r="triones-antm-grid",p=function(i){var e={"--columns":i.columns.toString()},o=i.gap;return o!==void 0&&(Array.isArray(o)?(e["--gap-horizontal"]=(0,s.toCSSLength)(o[0]),e["--gap-vertical"]=(0,s.toCSSLength)(o[1])):e["--gap"]=(0,s.toCSSLength)(o)),(0,s.withNativeProps)(i,(0,l.jsx)("div",{className:r,style:e,children:i.children}))},u=function(i){var e=(0,m.mergeProps)({span:1},i),o={"--item-span":e.span};return(0,s.withNativeProps)(e,(0,l.jsx)("div",{className:"".concat(r,"-item"),style:o,onClick:e.onClick,children:e.children}))}},97870:function(d,t,n){n.r(t);var _=n(98416),s=_.Grid;s.Item=_.GridItem,t.default=s},78252:function(d,t,n){n.r(t),n.d(t,{attachPropertiesToComponent:function(){return p},toCSSLength:function(){return u},withNativeProps:function(){return r}});var _=n(73193),s=n.n(_),c=n(44194),m=n(51865),l=n.n(m);function r(a,i){var e=s()({},i.props);a.className&&(e.className=l()(i.props.className,a.className)),a.style&&(e.style=s()(s()({},e.style),a.style)),a.tabIndex!==void 0&&(e.tabIndex=a.tabIndex);for(var o in a)a.hasOwnProperty(o)&&(o.startsWith("data-")||o.startsWith("aria-"))&&(e[o]=a[o]);return c.cloneElement(i,e)}function p(a,i){var e=a;for(var o in i)i.hasOwnProperty(o)&&(e[o]=i[o]);return e}function u(a){return typeof a=="number"?"".concat(a,"px"):a}},22045:function(d,t,n){n.r(t),n.d(t,{mergeProp:function(){return s},mergeProps:function(){return _}});function _(){for(var c={},m=arguments.length,l=new Array(m),r=0;r<m;r++)l[r]=arguments[r];return l.forEach(function(p){p&&Object.keys(p).forEach(function(u){p[u]!==void 0&&(c[u]=p[u])})}),c}function s(c){for(var m=arguments.length,l=new Array(m>1?m-1:0),r=1;r<m;r++)l[r-1]=arguments[r];for(var p=l.length-1;p>=0;p-=1)if(l[p]!==void 0)return l[p];return c}},3837:function(d,t,n){n.r(t)},75824:function(d,t,n){n.r(t)},32874:function(d,t,n){n.r(t)},13432:function(d,t,n){n.r(t),n.d(t,{texts:function(){return s}});var _=n(11403);const s=[{value:"\u7528\u4E8E\u4E1A\u52A1\u4E2D\u591A\u4E2A\u5B50\u529F\u80FD\u7684\u5BFC\u822A\u3002",paraId:0,tocIndex:0},{value:"\u5728\u5177\u6709\u63A8\u8350\u6027\u8D28\u8F83\u5F3A\u7684\u9875\u9762\u4E2D\u4F5C\u4E3A\u529F\u80FD\u5165\u53E3\u4F7F\u7528\uFF0C\u4F8B\u5982\u9996\u9875\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"columns",paraId:2,tocIndex:4},{value:"\u5217\u6570",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"gap",paraId:2,tocIndex:4},{value:"\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:2,tocIndex:4},{value:"number | string | [number | string, number | string]",paraId:2,tocIndex:4},{value:"0",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u5168\u5C40\u53D8\u91CF",paraId:3,tocIndex:5},{value:"--gap",paraId:3,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"0",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"--gap-horizontal",paraId:3,tocIndex:5},{value:"\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"--gap-vertical",paraId:3,tocIndex:5},{value:"\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"onClick",paraId:4,tocIndex:7},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:4,tocIndex:7},{value:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"span",paraId:4,tocIndex:7},{value:"\u8DE8\u5EA6",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"1",paraId:4,tocIndex:7},{value:"Grid \u7EC4\u4EF6\u4F9D\u8D56\u4E86 CSS Grid \u7279\u6027\uFF0C\u6240\u4EE5\u517C\u5BB9\u6027\u6807\u51C6\u662F iOS Safari >= 10.3 \u548C Chrome >= 57\u3002",paraId:5,tocIndex:8}]},63119:function(d,t){t.Z=`.demoBlock {
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
`},92724:function(d,t){t.Z=`import React from 'react'
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
`},54275:function(d,t){t.Z=`.grid-demo-item-block {
  border: solid 1px #999;
  background: #f5f5f5;
  text-align: center;
  color: #999;
  height: 100%;
}
`},44326:function(d,t){t.Z=`import React from 'react'
import { DemoBlock } from '../../DemoBlock';

import './base.scss'
import Grid from "../index";

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
`},47755:function(d,t){t.Z=`import React from 'react'
import type { FC, ReactNode, CSSProperties } from 'react'
import { NativeProps, toCSSLength, withNativeProps } from '../utils/native-props'

import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-grid\`

export type GridProps = {
  columns: number
  gap?: number | string | [number | string, number | string]
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  }
  const { gap } = props
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0])
      style['--gap-vertical'] = toCSSLength(gap[1])
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }

  return withNativeProps(
    props,
    <div className={classPrefix} style={style}>
      {props.children}
    </div>
  )
}

export type GridItemProps = {
  span?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps

type GridItemStyle = CSSProperties &
  Record<'--item-span', GridItemProps['span']>

export const GridItem: FC<GridItemProps> = p => {
  const props = mergeProps({ span: 1 }, p) as GridItemProps

  const itemStyle: GridItemStyle = {
    '--item-span': props.span,
  }
  return withNativeProps(
    props,
    <div
      className={\`\${classPrefix}-item\`}
      style={itemStyle}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
`},43882:function(d,t){t.Z=`import {Grid as InternalGrid, GridItem} from './grid'

export type {GridProps, GridItemProps} from './grid'

type CompoundedComponent = typeof InternalGrid & {
  Item: typeof GridItem;
};

const Grid = InternalGrid as CompoundedComponent;
Grid.Item = GridItem;

export default Grid
`},21323:function(d,t){t.Z=`$class-prefix-grid: 'triones-antm-grid';
/* prettier-ignore */
.#{$class-prefix-grid} {
  --gap: 0;
  --gap-horizontal: var(--gap);
  --gap-vertical: var(--gap);

  display: grid;
  grid-gap: 10PX;
  column-gap: var(--gap-horizontal);
  row-gap: var(--gap-vertical);
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  align-items: stretch;
  &-item {
    grid-column-end: span var(--item-span);
  }
}
`},27930:function(d,t){t.Z=`import React, { AriaAttributes } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key]
    }
  }
  return React.cloneElement(element, p)
}

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key]
    }
  }
  return ret
}


export function toCSSLength(val: string | number) {
  return typeof val === 'number' ? \`\${val}px\` : val
}
`},62586:function(d,t){t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): D & C & B & A;
export function mergeProps(...items: any[]) {
  const ret: any = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}

/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */
export function mergeProp<T, DefaultT extends T = T>(
  defaultProp: DefaultT,
  ...propList: T[]
): T | undefined {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}
`}}]);
