(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1592],{63115:function(o,t,n){"use strict";var p;n.r(t),n.d(t,{demos:function(){return L}});var s=n(90819),i=n.n(s),l=n(89933),d=n.n(l),r=n(44194),c=n(2703),g=n(68413),e=n(95676),a=n(18942),_=n(51865),m=n.n(_),D=n(14691),E=n(1667),u=n.n(E),v=n(3837),h=n(65728),P=n.n(h),M=n(3191),x=n(22045),O=n(78252),f=n(27608),L={"spinloading-demo-base":{component:r.memo(r.lazy(function(){return n.e(6679).then(n.bind(n,76275))})),asset:{type:"BLOCK",id:"spinloading-demo-base",refAtomIds:["SpinLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(83783).Z},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:n(45610).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(92724).Z},"../spin-loading.tsx":{type:"FILE",value:n(33597).Z},classnames:{type:"NPM",value:"2.5.1"},"./space.tsx":{type:"FILE",value:n(89083).Z},"crypto-js":{type:"NPM",value:"4.2.0"},"./index.scss":{type:"FILE",value:n(63119).Z},"./spin-loading.scss":{type:"FILE",value:n(93413).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(62586).Z},"../utils/native-props.ts":{type:"FILE",value:n(27930).Z},"./style.scss":{type:"FILE",value:n(4279).Z}},entry:"index.tsx"},context:{"../../Space.ts":g,"../../DemoBlock.tsx":e,"../spin-loading.tsx":a,"./space.tsx":D,"./index.scss":v,"./spin-loading.scss":M,"../utils/with-default-props.tsx":x,"../utils/native-props.ts":O,"./style.scss":f,react:p||(p=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/index.ts":g,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":e,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SpinLoading/spin-loading.tsx":a,classnames:_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":D,"crypto-js/enc-base64":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":v,"crypto-js/enc-utf8":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SpinLoading/spin-loading.scss":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/style.scss":f},renderOpts:{compile:function(){var S=d()(i()().mark(function I(){var C,R=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,n.e(8506).then(n.bind(n,48506));case 2:return y.abrupt("return",(C=y.sent).default.apply(C,R));case 3:case"end":return y.stop()}},I)}));function B(){return S.apply(this,arguments)}return B}()}}}},95676:function(o,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return l}});var p=n(44194),s=n(3837),i=n(31549),l=function(r){return(0,i.jsxs)("div",{className:"demoBlock",children:[(0,i.jsx)("div",{className:"demoTitle",children:r.title}),(0,i.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},68413:function(o,t,n){"use strict";n.r(t);var p=n(14691);t.default=p.Space},14691:function(o,t,n){"use strict";n.r(t),n.d(t,{Space:function(){return m}});var p=n(10154),s=n.n(p),i=n(44194),l=n(51865),d=n.n(l),r=n(78252),c=n(27608),g=n(22045),e=n(31549),a="triones-antm-space",_={direction:"horizontal"},m=function(E){var u=(0,g.mergeProps)(_,E),v=u.direction,h=u.onClick;return(0,r.withNativeProps)(u,(0,e.jsx)("div",{className:d()(a,s()(s()(s()(s()(s()({},"".concat(a,"-wrap"),u.wrap),"".concat(a,"-block"),u.block),"".concat(a,"-").concat(v),!0),"".concat(a,"-align-").concat(u.align),!!u.align),"".concat(a,"-justify-").concat(u.justify),!!u.justify)),onClick:h,children:i.Children.map(u.children,function(P){return P!=null&&(0,e.jsx)("div",{className:"".concat(a,"-item"),children:P})})}))}},18942:function(o,t,n){"use strict";n.r(t),n.d(t,{SpinLoading:function(){return m},createSvgStr:function(){return _}});var p=n(51865),s=n.n(p),i=n(1667),l=n.n(i),d=n(65728),r=n.n(d),c=n(44194),g=n(3191),e=n(31549),a="triones-antm-spin-loading";function _(D){return`<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"
                stroke-width="2"
                stroke="`.concat(D.stroke,`"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="`).concat(15*3.14159265358979*2,`"
                stroke-dashoffset="`).concat(15*3.14159265358979*.5,`"></circle>
        </svg>`)}var m=function(E){var u=E.size,v=u===void 0?"middle":u,h=E.color,P=h===void 0?"default":h,M=c.useMemo(function(){var f=null;return v==="small"?f="24Px":v==="middle"?f="32Px":v==="large"?f="48Px":f=v,typeof f=="number"?"".concat(f,"Px"):f},[v]),x=c.useMemo(function(){return P==="default"?"#9D9D9D":P==="primary"?"#1677ff":P==="white"?"#ffffff":P},[P]),O=c.useMemo(function(){var f=_({stroke:x});return{"--size":M,"--color":x,"--maskImage":"url(data:image/svg+xml;base64,".concat(l().stringify(r().parse(f)),")")}},[M,x]);return(0,e.jsx)("div",{className:s()(a),style:O,children:(0,e.jsx)("i",{className:s()("".concat(a,"-loading"))})})}},78252:function(o,t,n){"use strict";n.r(t),n.d(t,{attachPropertiesToComponent:function(){return c},toCSSLength:function(){return g},withNativeProps:function(){return r}});var p=n(73193),s=n.n(p),i=n(44194),l=n(51865),d=n.n(l);function r(e,a){var _=s()({},a.props);e.className&&(_.className=d()(a.props.className,e.className)),e.style&&(_.style=s()(s()({},_.style),e.style)),e.tabIndex!==void 0&&(_.tabIndex=e.tabIndex);for(var m in e)e.hasOwnProperty(m)&&(m.startsWith("data-")||m.startsWith("aria-"))&&(_[m]=e[m]);return i.cloneElement(a,_)}function c(e,a){var _=e;for(var m in a)a.hasOwnProperty(m)&&(_[m]=a[m]);return _}function g(e){return typeof e=="number"?"".concat(e,"px"):e}},22045:function(o,t,n){"use strict";n.r(t),n.d(t,{mergeProp:function(){return s},mergeProps:function(){return p}});function p(){for(var i={},l=arguments.length,d=new Array(l),r=0;r<l;r++)d[r]=arguments[r];return d.forEach(function(c){c&&Object.keys(c).forEach(function(g){c[g]!==void 0&&(i[g]=c[g])})}),i}function s(i){for(var l=arguments.length,d=new Array(l>1?l-1:0),r=1;r<l;r++)d[r-1]=arguments[r];for(var c=d.length-1;c>=0;c-=1)if(d[c]!==void 0)return d[c];return i}},3837:function(o,t,n){"use strict";n.r(t)},27608:function(o,t,n){"use strict";n.r(t)},3191:function(o,t,n){"use strict";n.r(t)},30256:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});var p=n(2703);const s=[]},63119:function(o,t){"use strict";t.Z=`.demoBlock {
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
`},92724:function(o,t){"use strict";t.Z=`import React from 'react'
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
`},45610:function(o,t){"use strict";t.Z=`import { Space } from './space'

export type { SpaceProps } from './space'

export default Space
`},89083:function(o,t){"use strict";t.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-space\`

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  wrap?: boolean
  block?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

const defaultProps = {
  direction: 'horizontal' as const,
}

export const Space: FC<SpaceProps> = p => {
  const props = mergeProps(defaultProps, p) as SpaceProps
  const { direction, onClick } = props
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [\`\${classPrefix}-wrap\`]: props.wrap,
        [\`\${classPrefix}-block\`]: props.block,
        [\`\${classPrefix}-\${direction}\`]: true,
        [\`\${classPrefix}-align-\${props.align}\`]: !!props.align,
        [\`\${classPrefix}-justify-\${props.justify}\`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, child => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={\`\${classPrefix}-item\`}>{child}</div>
          )
        )
      })}
    </div>
  )
}
`},4279:function(o,t){"use strict";t.Z=`$class-prefix-space: 'triones-antm-space';

.#{$class-prefix-space}-item {
  flex: none;
  display: inline-flex;
}
/* prettier-ignore */
.#{$class-prefix-space} {
  display: inline-flex;
  --gap: 8PX;
  --gap-vertical: var(--gap);
  --gap-horizontal: var(--gap);
  &-vertical {
    flex-direction: column;
    > .#{$class-prefix-space}-item {
      margin-bottom: var(--gap-vertical);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-horizontal {
    flex-direction: row;
    > .#{$class-prefix-space}-item {
      margin-right: var(--gap-horizontal);
      &:last-child {
        margin-right: 0;
      }
    }
    &.#{$class-prefix-space}-wrap {
      flex-wrap: wrap;
      margin-bottom: calc(var(--gap-vertical) * -1);
      > .#{$class-prefix-space}-item {
        padding-bottom: var(--gap-vertical);
      }
    }
  }
  &.#{$class-prefix-space}-block {
    display: flex;
  }
  &-align {
    &-center {
      align-items: center;
    }
    &-start {
      align-items: flex-start;
    }
    &-end {
      align-items: flex-end;
    }
    &-baseline {
      align-items: baseline;
    }
  }
  &-justify {
    &-center {
      justify-content: center;
    }
    &-start {
      justify-content: flex-start;
    }
    &-end {
      justify-content: flex-end;
    }
    &-between {
      justify-content: space-between;
    }
    &-around {
      justify-content: space-around;
    }
    &-evenly {
      justify-content: space-evenly;
    }
    &-stretch {
      justify-content: stretch;
    }
  }
}
`},83783:function(o,t){"use strict";t.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {SpinLoading} from "../spin-loading";
import Space from "../../Space";

export default () => {
  return <>
    <DemoBlock title={\`\u57FA\u7840\u4F7F\u7528\`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={\`\u989C\u8272\`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={\`primary\`}/>
        <SpinLoading color={\`white\`}/>
      </Space>
    </DemoBlock>

    <DemoBlock title={\`\u5927\u5C0F\`}>
      <Space>
        <SpinLoading size={\`small\`}/>
        <SpinLoading/>
        <SpinLoading size={\`large\`}/>
      </Space>
    </DemoBlock>
  </>
}
`},93413:function(o,t){"use strict";t.Z=`$spinLoadingCls: triones-antm-spin-loading;

.#{$spinLoadingCls} {
  --size: 32Px;
  --color: #1677ff;
  width: var(--size);
  height: var(--size);

  &-svg {
    width: 100%;
    height: 100%;
    //animation: adm-spin-loading-rotate 0.8s infinite linear;

    > .#{$spinLoadingCls}-circle {
      //stroke: #1677ff;
      stroke: var(--color);
    }
  }

  &-loading {
    color: var(--color);
    display: inline-block;
    height: 100%;
    width: 100%;
    background: currentColor;
    mask-image: var(--maskImage);
    -webkit-mask-image: var(--maskImage);
    animation: adm-spin-loading-rotate 2s infinite linear;
  }

}

@keyframes adm-spin-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`},33597:function(o,t){"use strict";t.Z=`import classNames from 'classnames';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import React, { FC } from 'react';
import './spin-loading.scss';

const spinLoadingCls = 'triones-antm-spin-loading';
export type SpinLoadingProps = {
  size?: 'small' | 'middle' | 'large' | number;
  color?: 'default' | 'primary' | 'white' | string;
};

export function createSvgStr(props: { stroke: string }) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"
                stroke-width="2"
                stroke="\${props.stroke}"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="\${15 * 3.14159265358979 * 2}"
                stroke-dashoffset="\${15 * 3.14159265358979 * 0.5}"></circle>
        </svg>\`;
}

export const SpinLoading: FC<SpinLoadingProps> = ({
  size = 'middle',
  color = 'default',
}) => {
  const computedSize = React.useMemo(() => {
    let resSize = null;
    if (size === 'small') {
      resSize = '24Px';
    } else if (size === 'middle') {
      resSize = '32Px';
    } else if (size === 'large') {
      resSize = '48Px';
    } else {
      resSize = size;
    }
    if (typeof resSize === 'number') {
      return \`\${resSize}Px\`;
    } else {
      return resSize;
    }
  }, [size]);

  const computedColor = React.useMemo(() => {
    if (color === 'default') {
      return '#9D9D9D';
    } else if (color === 'primary') {
      return '#1677ff';
    } else if (color === 'white') {
      return '#ffffff';
    } else {
      return color;
    }
  }, [color]);

  const completedStyle: any = React.useMemo(() => {
    const maskImageSvg = createSvgStr({ stroke: computedColor });

    return {
      '--size': computedSize,
      '--color': computedColor,
      '--maskImage': \`url(data:image/svg+xml;base64,\${Base64.stringify(Utf8.parse(maskImageSvg))})\`,
    };
  }, [computedSize, computedColor]);

  return (
    <div className={classNames(spinLoadingCls)} style={completedStyle}>
      <i className={classNames(\`\${spinLoadingCls}-loading\`)} />
    </div>
  );
};
`},27930:function(o,t){"use strict";t.Z=`import React, { AriaAttributes } from 'react'
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
`},62586:function(o,t){"use strict";t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},7091:function(){}}]);
