"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6851],{22557:function(o,t,n){var u;n.r(t),n.d(t,{demos:function(){return g}});var p=n(90819),s=n.n(p),i=n(89933),d=n.n(i),a=n(44194),c=n(50522),m=n(68846),e=n(49387),r=n(36758),_=n(91518),l=n(51865),x=n.n(l),v=n(57858),P=n(45920),f=n(96858),g={"src-page-indicator-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9378),n.e(3849),n.e(1588),n.e(7311),n.e(1715),n.e(9985),n.e(9842),n.e(2433)]).then(n.bind(n,80889))})),asset:{type:"BLOCK",id:"src-page-indicator-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(46542).Z},react:{type:"NPM",value:"18.3.1"},"../index.ts":{type:"FILE",value:n(45326).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"./page-indicator.tsx":{type:"FILE",value:n(98188).Z},"./index.scss":{type:"FILE",value:n(21791).Z},classnames:{type:"NPM",value:"2.5.1"},"../utils/native-props.ts":{type:"FILE",value:n(12636).Z},"./style.scss":{type:"FILE",value:n(53613).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(62055).Z}},entry:"index.tsx"},context:{"../index.ts":m,"../../DemoBlock.tsx":e,"./page-indicator.tsx":r,"./index.scss":_,"../utils/native-props.ts":v,"./style.scss":P,"../utils/with-default-props.tsx":f,react:u||(u=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PageIndicator/index.ts":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":e,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PageIndicator/page-indicator.tsx":r,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":_,classnames:l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PageIndicator/style.scss":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":f},renderOpts:{compile:function(){var h=d()(s()().mark(function O(){var E,M=arguments;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,n.e(4521).then(n.bind(n,24521));case 2:return I.abrupt("return",(E=I.sent).default.apply(E,M));case 3:case"end":return I.stop()}},O)}));function D(){return h.apply(this,arguments)}return D}()}}}},49387:function(o,t,n){n.r(t),n.d(t,{DemoBlock:function(){return i}});var u=n(44194),p=n(91518),s=n(31549),i=function(a){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:a.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},68846:function(o,t,n){n.r(t);var u=n(36758);t.default=u.PageIndicator},36758:function(o,t,n){n.r(t),n.d(t,{PageIndicator:function(){return l}});var u=n(10154),p=n.n(u),s=n(44194),i=n(51865),d=n.n(i),a=n(57858),c=n(96858),m=n(45920),e=n(31549),r="triones-antm-page-indicator",_={color:"primary",direction:"horizontal"},l=(0,s.memo)(function(x){for(var v=(0,c.mergeProps)(_,x),P=[],f=0;f<v.total;f++)P.push((0,e.jsx)("div",{className:d()("".concat(r,"-dot"),p()({},"".concat(r,"-dot-active"),v.current===f))},f));return(0,a.withNativeProps)(v,(0,e.jsx)("div",{className:d()(r,"".concat(r,"-").concat(v.direction),"".concat(r,"-color-").concat(v.color)),children:P}))})},57858:function(o,t,n){n.r(t),n.d(t,{attachPropertiesToComponent:function(){return c},toCSSLength:function(){return m},withNativeProps:function(){return a}});var u=n(73193),p=n.n(u),s=n(44194),i=n(51865),d=n.n(i);function a(e,r){var _=p()({},r.props);e.className&&(_.className=d()(r.props.className,e.className)),e.style&&(_.style=p()(p()({},_.style),e.style)),e.tabIndex!==void 0&&(_.tabIndex=e.tabIndex);for(var l in e)e.hasOwnProperty(l)&&(l.startsWith("data-")||l.startsWith("aria-"))&&(_[l]=e[l]);return s.cloneElement(r,_)}function c(e,r){var _=e;for(var l in r)r.hasOwnProperty(l)&&(_[l]=r[l]);return _}function m(e){return typeof e=="number"?"".concat(e,"px"):e}},96858:function(o,t,n){n.r(t),n.d(t,{mergeProp:function(){return p},mergeProps:function(){return u}});function u(){for(var s={},i=arguments.length,d=new Array(i),a=0;a<i;a++)d[a]=arguments[a];return d.forEach(function(c){c&&Object.keys(c).forEach(function(m){c[m]!==void 0&&(s[m]=c[m])})}),s}function p(s){for(var i=arguments.length,d=new Array(i>1?i-1:0),a=1;a<i;a++)d[a-1]=arguments[a];for(var c=d.length-1;c>=0;c-=1)if(d[c]!==void 0)return d[c];return s}},91518:function(o,t,n){n.r(t)},45920:function(o,t,n){n.r(t)},85981:function(o,t,n){n.r(t),n.d(t,{texts:function(){return p}});var u=n(50522);const p=[{value:"\u6307\u793A\u5F53\u524D\u663E\u793A\u7684\u662F\u591A\u9875\u9762\u89C6\u56FE\u7684\u54EA\u4E00\u9875\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u8868\u793A\u5F53\u524D\u5185\u5BB9\u533A\u5757\u53EF\u4EE5\u6A2A\u5411\u6EDA\u52A8\u7FFB\u9875\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u989C\u8272",paraId:2,tocIndex:4},{value:"'primary' | 'white'",paraId:2,tocIndex:4},{value:"'primary'",paraId:2,tocIndex:4},{value:"current",paraId:2,tocIndex:4},{value:"\u5F53\u524D\u9875\uFF08\u4ECE ",paraId:2,tocIndex:4},{value:"0",paraId:2,tocIndex:4},{value:" \u5F00\u59CB\u8BA1\u6570\uFF09",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u65B9\u5411\uFF0C\u9ED8\u8BA4\u662F\u6C34\u5E73\u65B9\u5411",paraId:2,tocIndex:4},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4},{value:"total",paraId:2,tocIndex:4},{value:"\u603B\u9875\u6570",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"--active-dot-border-radius",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u5706\u89D2\u5927\u5C0F",paraId:3,tocIndex:5},{value:"--active-dot-color",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:3,tocIndex:5},{value:"--active-dot-size",paraId:3,tocIndex:5},{value:"\u5F53\u524D\u9875\u7684\u5927\u5C0F",paraId:3,tocIndex:5},{value:"13px",paraId:3,tocIndex:5},{value:"--dot-border-radius",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u5706\u89D2\u5927\u5C0F",paraId:3,tocIndex:5},{value:"1px",paraId:3,tocIndex:5},{value:"--dot-color",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:3,tocIndex:5},{value:"--dot-size",paraId:3,tocIndex:5},{value:"\u975E\u5F53\u524D\u9875\u7684\u5927\u5C0F",paraId:3,tocIndex:5},{value:"3px",paraId:3,tocIndex:5},{value:"--dot-spacing",paraId:3,tocIndex:5},{value:"\u9875\u7801\u6307\u793A\u5668\u5C0F\u5706\u70B9\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:3,tocIndex:5},{value:"3px",paraId:3,tocIndex:5}]},21791:function(o,t){t.Z=`.demoBlock {
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
`},7761:function(o,t){t.Z=`import React from 'react'
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
`},46542:function(o,t){t.Z=`import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import PageIndicator from "../index";

export default () => {
  return (
    <>
      <DemoBlock title='\u57FA\u7840\u7528\u6CD5'>
        <PageIndicator total={4} current={0} />
      </DemoBlock>

      <DemoBlock title='\u767D\u8272' background='rgb(212 212 212)'>
        <PageIndicator total={4} current={0} color='white' />
      </DemoBlock>

      <DemoBlock title='\u7AD6\u76F4\u65B9\u5411'>
        <PageIndicator total={4} current={0} direction='vertical' />
      </DemoBlock>

      <DemoBlock title='\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F'>
        <PageIndicator
          total={4}
          current={0}
          style={{
            '--dot-color': 'rgba(0, 0, 0, 0.4)',
            '--active-dot-color': '#ffc0cb',
            '--dot-size': '10px',
            '--active-dot-size': '30px',
            '--dot-border-radius': '50%',
            '--active-dot-border-radius': '15px',
            '--dot-spacing': '8px',
          }}
        />
      </DemoBlock>
    </>
  )
}
`},45326:function(o,t){t.Z=`import { PageIndicator } from './page-indicator'

export type { PageIndicatorProps } from './page-indicator'

export default PageIndicator
`},98188:function(o,t){t.Z=`import React, { memo } from 'react'
import type { ReactElement } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from '../utils/with-default-props'
import './style.scss'

const classPrefix = \`triones-antm-page-indicator\`

export type PageIndicatorProps = {
  total: number
  current: number
  direction?: 'horizontal' | 'vertical'
  color?: 'primary' | 'white'
} & NativeProps<
  | '--dot-color'
  | '--active-dot-color'
  | '--dot-size'
  | '--active-dot-size'
  | '--dot-border-radius'
  | '--active-dot-border-radius'
  | '--dot-spacing'
>

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
}

export const PageIndicator = memo<PageIndicatorProps>(p => {
  const props = mergeProps(defaultProps, p)

  const dots: ReactElement[] = []
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={classNames(\`\${classPrefix}-dot\`, {
          [\`\${classPrefix}-dot-active\`]: props.current === i,
        })}
      />
    )
  }

  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        \`\${classPrefix}-\${props.direction}\`,
        \`\${classPrefix}-color-\${props.color}\`
      )}
    >
      {dots}
    </div>
  )
})
`},53613:function(o,t){t.Z=`.triones-antm-page-indicator {
  display: flex;
  width: auto;

  --dot-color: #cccccc;
  --active-dot-color: #1677ff;
  --dot-size: 3px;
  --active-dot-size: 13px;
  --dot-border-radius: 1px;
  --active-dot-border-radius: var(--dot-border-radius);
  --dot-spacing: 3px;

  &-dot {
    display: block;
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: var(--dot-border-radius);
    background: var(--dot-color);

    &:last-child {
      margin-right: 0;
    }
    &-active {
      border-radius: var(--active-dot-border-radius);
      background: var(--active-dot-color);
    }
  }
  &-color-white {
    --dot-color: rgba(255, 255, 255, 0.5);
    --active-dot-color: #ffffff;
  }
  &-horizontal {
    flex-direction: row;
    .triones-antm-page-indicator-dot {
      margin-right: var(--dot-spacing);
      &-active {
        width: var(--active-dot-size);
      }
    }
  }
  &-vertical {
    flex-direction: column;
    .triones-antm-page-indicator-dot {
      margin-bottom: var(--dot-spacing);
      &-active {
        height: var(--active-dot-size);
      }
    }
  }
}
`},12636:function(o,t){t.Z=`import React, { AriaAttributes } from 'react'
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
`},62055:function(o,t){t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
