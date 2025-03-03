(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6122],{39177:function(e,t,n){"use strict";var p;n.r(t),n.d(t,{demos:function(){return u}});var o=n(90819),r=n.n(o),s=n(89933),i=n.n(s),a=n(44194),c=n(68584),v=n(31261),l=n(62901),d=n(19510),m=n(51865),y=n.n(m),_=n(97871),B=n(22811),f=n(84980),E=n(43439),x=n(87836),u={"src-space-demo-base":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9378),n.e(9),n.e(9877),n.e(1271),n.e(3531),n.e(525),n.e(5079),n.e(3442),n.e(1638),n.e(4705),n.e(2433)]).then(n.bind(n,62034))})),asset:{type:"BLOCK",id:"src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(27475).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(80760).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(70143).Z},"../space.tsx":{type:"FILE",value:n(75058).Z},classnames:{type:"NPM",value:"2.5.1"},"./button.tsx":{type:"FILE",value:n(79901).Z},"./index.scss":{type:"FILE",value:n(68004).Z},"./style.scss":{type:"FILE",value:n(63612).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(63421).Z},"../utils/native-props.ts":{type:"FILE",value:n(64090).Z}},entry:"index.tsx"},context:{"../../Button.tsx":v,"../../DemoBlock.tsx":l,"../space.tsx":d,"./button.tsx":_,"./index.scss":B,"./style.scss":f,"../utils/with-default-props.tsx":E,"../utils/native-props.ts":x,react:p||(p=n.t(a,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":d,classnames:m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/style.scss":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":x},renderOpts:{compile:function(){var D=i()(r()().mark(function b(){var O,C=arguments;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,n.e(1026).then(n.bind(n,41026));case 2:return P.abrupt("return",(O=P.sent).default.apply(O,C));case 3:case"end":return P.stop()}},b)}));function M(){return D.apply(this,arguments)}return M}()}}}},97871:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return m}});var p=n(10154),o=n.n(p),r=n(84176),s=n.n(r),i=n(75363),a=n(44194),c=n(51865),v=n.n(c),l=n(31549),d=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],m=function(_){var B=_.children,f=_.block,E=f===void 0?!1:f,x=_.type,u=x===void 0?"default":x,D=_.color,M=_.danger,b=M===void 0?!1:M,O=_.disabled,C=_.className,L=_.style,P=_.icon,R=_.iconPosition,k=R===void 0?"start":R,W=_.loading,T=_.variant,A=_.onClick,j=s()(_,d),h="triones-antm-button",I=D,g=T;return u&&(D||(u==="primary"||u==="link"?I="primary":u==="default"&&(I="default")),T||(u==="primary"?g="solid":u==="default"?g="outlined":(u==="dashed"||u==="link"||u==="text")&&(g=u))),b&&(I="danger"),(0,l.jsxs)("button",{onClick:A,className:v()(h,o()(o()(o()(o()({},"".concat(h,"-block"),E),"".concat(h,"-type-").concat(u),u),"".concat(h,"-color-").concat(I),I),"".concat(h,"-variant-").concat(g),g)),disabled:O,children:[k=="start"&&P,B,k=="end"&&P]})}},31261:function(e,t,n){"use strict";n.r(t);var p=n(97871);t.default=p.Button},62901:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return s}});var p=n(44194),o=n(22811),r=n(31549),s=function(a){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:a.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},19510:function(e,t,n){"use strict";n.r(t),n.d(t,{Space:function(){return y}});var p=n(10154),o=n.n(p),r=n(44194),s=n(51865),i=n.n(s),a=n(87836),c=n(84980),v=n(43439),l=n(31549),d="triones-antm-space",m={direction:"horizontal"},y=function(B){var f=(0,v.mergeProps)(m,B),E=f.direction,x=f.onClick;return(0,a.withNativeProps)(f,(0,l.jsx)("div",{className:i()(d,o()(o()(o()(o()(o()({},"".concat(d,"-wrap"),f.wrap),"".concat(d,"-block"),f.block),"".concat(d,"-").concat(E),!0),"".concat(d,"-align-").concat(f.align),!!f.align),"".concat(d,"-justify-").concat(f.justify),!!f.justify)),onClick:x,children:r.Children.map(f.children,function(u){return u!=null&&(0,l.jsx)("div",{className:"".concat(d,"-item"),children:u})})}))}},87836:function(e,t,n){"use strict";n.r(t),n.d(t,{attachPropertiesToComponent:function(){return c},toCSSLength:function(){return v},withNativeProps:function(){return a}});var p=n(73193),o=n.n(p),r=n(44194),s=n(51865),i=n.n(s);function a(l,d){var m=o()({},d.props);l.className&&(m.className=i()(d.props.className,l.className)),l.style&&(m.style=o()(o()({},m.style),l.style)),l.tabIndex!==void 0&&(m.tabIndex=l.tabIndex);for(var y in l)l.hasOwnProperty(y)&&(y.startsWith("data-")||y.startsWith("aria-"))&&(m[y]=l[y]);return r.cloneElement(d,m)}function c(l,d){var m=l;for(var y in d)d.hasOwnProperty(y)&&(m[y]=d[y]);return m}function v(l){return typeof l=="number"?"".concat(l,"px"):l}},43439:function(e,t,n){"use strict";n.r(t),n.d(t,{mergeProp:function(){return o},mergeProps:function(){return p}});function p(){for(var r={},s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return i.forEach(function(c){c&&Object.keys(c).forEach(function(v){c[v]!==void 0&&(r[v]=c[v])})}),r}function o(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];for(var c=i.length-1;c>=0;c-=1)if(i[c]!==void 0)return i[c];return r}},75363:function(e,t,n){"use strict";n.r(t)},22811:function(e,t,n){"use strict";n.r(t)},84980:function(e,t,n){"use strict";n.r(t)},9592:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var p=n(68584);const o=[{value:"\u5143\u7D20\u6392\u5217\u4E2D\u4FDD\u6301\u76F8\u540C\u7684\u5BBD\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u591A\u4E2A\u5143\u7D20\u6309\u7167\u6C34\u5E73\u6216\u5782\u76F4\u65B9\u5411\u4FDD\u6301\u76F8\u540C\u7684\u95F4\u8DDD\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:"\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"block",paraId:2,tocIndex:4},{value:"\u662F\u5426\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u95F4\u8DDD\u65B9\u5411",paraId:2,tocIndex:4},{value:"'vertical' | 'horizontal'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4},{value:"justify",paraId:2,tocIndex:4},{value:"\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onClick",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:2,tocIndex:4},{value:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"wrap",paraId:2,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"--gap",paraId:3,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"8px",paraId:3,tocIndex:5},{value:"--gap-horizontal",paraId:3,tocIndex:5},{value:"\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"--gap-vertical",paraId:3,tocIndex:5},{value:"\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5}]},79901:function(e,t){"use strict";t.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode
  /**
   * block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean
  /**
   * \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled?: boolean
  /**
   * \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  className?: string,
  style?: React.CSSProperties
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  loading?: boolean
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link',
  onClick?: MouseEventHandler<HTMLButtonElement>
}


export const Button: FC<ButtonProps> = (
  {
    children,
    block = false,
    type = 'default',
    color,
    danger = false,
    disabled,
    className,
    style,
    icon,
    iconPosition = 'start',
    loading,
    variant,
    onClick,
    ...props
  }
) => {
  const clsPrefix = "triones-antm-button"
  let finalColor = color
  let finalVariant = variant
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary'
      } else if (type === 'default') {
        finalColor = 'default'
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid'
      } else if (type === 'default') {
        finalVariant = 'outlined'
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type
      }
    }

  }
  if (danger) {
    finalColor = 'danger'
  }
  return <button
    onClick={onClick}
    className={classNames(clsPrefix,
      {
        [\`\${clsPrefix}-block\`]: block,
        [\`\${clsPrefix}-type-\${type}\`]: type,
        [\`\${clsPrefix}-color-\${finalColor}\`]: finalColor,
        [\`\${clsPrefix}-variant-\${finalVariant}\`]: finalVariant,

      })}
    disabled={disabled}>
    {iconPosition == 'start' && icon}
    {children}
    {iconPosition == 'end' && icon}
  </button>
}
`},80760:function(e,t){"use strict";t.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},68004:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},70143:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},27475:function(e,t){"use strict";t.Z=`import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import {Space} from "../space";
import Button from "../../Button";

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
`},75058:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},63612:function(e,t){"use strict";t.Z=`$class-prefix-space: 'triones-antm-space';

.#{$class-prefix-space}-item {
  flex: none;
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
`},64090:function(e,t){"use strict";t.Z=`import React, { AriaAttributes } from 'react'
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
`},63421:function(e,t){"use strict";t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},84176:function(e,t,n){var p=n(75863);function o(r,s){if(r==null)return{};var i=p(r,s),a,c;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(r);for(c=0;c<v.length;c++)a=v[c],!(s.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(i[a]=r[a])}return i}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},75863:function(e){function t(n,p){if(n==null)return{};var o={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(p.indexOf(s)>=0)&&(o[s]=n[s]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
