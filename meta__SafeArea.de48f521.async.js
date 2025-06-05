(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7255],{24567:function(a,e,t){"use strict";var l;t.r(e),t.d(e,{demos:function(){return s}});var r=t(90819),o=t.n(r),_=t(89933),i=t.n(_),d=t(44194),c=t(99045),m=t(82281),n=t(51865),u=t.n(n),p=t(78252),s={"safearea-demo-base":{component:d.memo(d.lazy(function(){return t.e(8474).then(t.bind(t,26588))})),asset:{type:"BLOCK",id:"safearea-demo-base",refAtomIds:["SafeArea"],dependencies:{"index.tsx":{type:"FILE",value:t(80106).Z},react:{type:"NPM",value:"18.3.1"},"../safe-area.tsx":{type:"FILE",value:t(46451).Z},classnames:{type:"NPM",value:"2.5.1"},"../utils/native-props.ts":{type:"FILE",value:t(78892).Z}},entry:"index.tsx"},context:{"../safe-area.tsx":m,"../utils/native-props.ts":p,react:l||(l=t.t(d,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SafeArea/safe-area.tsx":m,classnames:n,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":p},renderOpts:{compile:function(){var v=i()(o()().mark(function P(){var h,O=arguments;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,t.e(2740).then(t.bind(t,42740));case 2:return f.abrupt("return",(h=f.sent).default.apply(h,O));case 3:case"end":return f.stop()}},P)}));function E(){return v.apply(this,arguments)}return E}()}}}},82281:function(a,e,t){"use strict";t.r(e),t.d(e,{SafeArea:function(){return u}});var l=t(84176),r=t.n(l),o=t(44194),_=t(78252),i=t(51865),d=t.n(i),c=t(31549),m=["position"],n="triones-antm-safe-area",u=function(s){var v=s.position,E=v===void 0?"top":v,P=r()(s,m);return(0,_.withNativeProps)(P,(0,c.jsx)("div",{className:d()(n,"".concat(n,"-position-").concat(E)),children:P.children}))}},78252:function(a,e,t){"use strict";t.r(e),t.d(e,{attachPropertiesToComponent:function(){return c},toCSSLength:function(){return m},withNativeProps:function(){return d}});var l=t(73193),r=t.n(l),o=t(44194),_=t(51865),i=t.n(_);function d(n,u){var p=r()({},u.props);n.className&&(p.className=i()(u.props.className,n.className)),n.style&&(p.style=r()(r()({},p.style),n.style)),n.tabIndex!==void 0&&(p.tabIndex=n.tabIndex);for(var s in n)n.hasOwnProperty(s)&&(s.startsWith("data-")||s.startsWith("aria-"))&&(p[s]=n[s]);return o.cloneElement(u,p)}function c(n,u){var p=n;for(var s in u)u.hasOwnProperty(s)&&(p[s]=u[s]);return p}function m(n){return typeof n=="number"?"".concat(n,"px"):n}},713:function(a,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return r}});var l=t(99045);const r=[{value:"\u5728\u5168\u9762\u5C4F\u4E0B\u63D0\u4F9B\u81EA\u9002\u5E94\u7684\u8FB9\u8DDD\u8C03\u6574\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u7F51\u9875\u88AB\u5168\u5C4F\u5C55\u793A\u65F6\uFF0C\u53EF\u501F\u52A9\u5B89\u5168\u533A\u5B9E\u73B0\u81EA\u52A8\u9002\u914D\u3002",paraId:1,tocIndex:1},{value:"SafeArea \u7EC4\u4EF6\u662F\u7528\u6765\u5728\u5168\u9762\u5C4F\u4E0B\u63D0\u4F9B\u81EA\u9002\u5E94\u7684\u8FB9\u8DDD\u8C03\u6574\uFF0C\u5B83\u7684\u5E95\u5C42\u5B9E\u73B0\u5176\u5B9E\u662F ",paraId:2,tocIndex:2},{value:"env(safe-area-inset-xxx)",paraId:2,tocIndex:2},{value:"\u3002",paraId:2,tocIndex:2},{value:`\u5F53\u4F60\u7684\u7F51\u9875\u662F\u88AB\u5168\u5C4F\u5C55\u793A\u65F6\uFF0C\u53EF\u4EE5\u501F\u52A9\u5B83\u6765\u5B9E\u73B0\u81EA\u52A8\u7684\u9002\u914D\uFF0C\u4E0B\u56FE\u4E2D\u84DD\u8272\u7684\u90E8\u5206\u662F\u9876\u90E8 SafeArea \u6240\u5360\u636E\u7684\u533A\u57DF\uFF0C\u800C\u6A59\u8272\u7684\u90E8\u5206\u662F\u5E95\u90E8
SafeArea \u6240\u5360\u636E\u7684\u533A\u57DF\u3002`,paraId:3,tocIndex:2},{value:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0B\u65B9\u7684 demo \u5728\u684C\u9762\u7AEF\u6D4F\u89C8\u5668\u4E0B\u662F\u770B\u4E0D\u5230\u6548\u679C\u7684\uFF1A",paraId:4,tocIndex:2},{value:`\u4E00\u4E9B rem \u65B9\u6848\u4F1A\u901A\u8FC7 viewport meta \u8BBE\u7F6E\u7F51\u9875\u7684\u6574\u4F53\u7F29\u653E\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CSafeArea \u4E5F\u4F1A\u88AB\u5BF9\u5E94\u7684\u7F29\u653E\uFF0C\u4ECE\u800C\u5F88\u53EF\u80FD\u9AD8\u5EA6\u5F02\u5E38\u3002
\u8FD9\u65F6\u4F60\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u7684 `,paraId:5,tocIndex:7},{value:"$trionesSafeAreaMultiple",paraId:5,tocIndex:7},{value:` CSS \u53D8\u91CF\u6765\u8C03\u6574 SafeArea \u7684\u663E\u793A\u500D\u6570\uFF0C\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u6846\u67B6\u5C06\u9875\u9762\u6574\u4F53\u7F29\u653E\u4E3A\u4E86
0.5 \u500D\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u8BBE\u7F6E `,paraId:5,tocIndex:7},{value:"$trionesSafeAreaMultiple: 2",paraId:5,tocIndex:7},{value:" \u6765\u505A\u5BF9\u5E94\u7684\u8865\u507F\u8C03\u6574\u3002",paraId:5,tocIndex:7}]},80106:function(a,e){"use strict";e.Z=`import React from 'react';
import { SafeArea } from '../safe-area';

export default () => {
  return (
    <div>
      <div style={{ background: '#ace0ff' }}>
        <SafeArea position="top" />
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  );
};
`},46451:function(a,e){"use strict";e.Z=`import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  /**
   * @description \u5B89\u5168\u533A\u4F4D\u7F6E
   * @default top
   */
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = ({ position = 'top', ...props }) => {
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, \`\${classPrefix}-position-\${position}\`)}
    >
      {props.children}
    </div>,
  );
};
`},78892:function(a,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
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
`},84176:function(a,e,t){var l=t(75863);function r(o,_){if(o==null)return{};var i=l(o,_),d,c;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);for(c=0;c<m.length;c++)d=m[c],!(_.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(o,d)&&(i[d]=o[d])}return i}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},75863:function(a){function e(t,l){if(t==null)return{};var r={},o=Object.keys(t),_,i;for(i=0;i<o.length;i++)_=o[i],!(l.indexOf(_)>=0)&&(r[_]=t[_]);return r}a.exports=e,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
