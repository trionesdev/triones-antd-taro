(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6122],{43012:function(e,t,n){"use strict";var u;n.r(t),n.d(t,{demos:function(){return _}});var r=n(90819),a=n.n(r),s=n(89933),i=n.n(s),o=n(44194),d=n(34092),v=n(93977),l=n(49387),c=n(17455),p=n(37180),P=n(51865),f=n.n(P),h=n(91518),m=n(96858),B=n(57858),y=n(87695),_={"src-space-demo-base":{component:o.memo(o.lazy(function(){return Promise.all([n.e(3849),n.e(9378),n.e(1588),n.e(7311),n.e(1715),n.e(9985),n.e(9842),n.e(2433)]).then(n.bind(n,34443))})),asset:{type:"BLOCK",id:"src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(35248).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(77306).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"../space.tsx":{type:"FILE",value:n(55033).Z},"./button.tsx":{type:"FILE",value:n(6458).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(21791).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(62055).Z},"../utils/native-props.ts":{type:"FILE",value:n(12636).Z},"./style.scss":{type:"FILE",value:n(73008).Z}},entry:"index.tsx"},context:{"../../Button.tsx":v,"../../DemoBlock.tsx":l,"../space.tsx":c,"./button.tsx":p,"./index.scss":h,"../utils/with-default-props.tsx":m,"../utils/native-props.ts":B,"./style.scss":y,react:u||(u=n.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":p,classnames:P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/style.scss":y},renderOpts:{compile:function(){var I=i()(a()().mark(function O(){var M,C=arguments;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,n.e(4521).then(n.bind(n,24521));case 2:return x.abrupt("return",(M=x.sent).default.apply(M,C));case 3:case"end":return x.stop()}},O)}));function D(){return I.apply(this,arguments)}return D}()}}}},37180:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return p}});var u=n(10154),r=n.n(u),a=n(84176),s=n.n(a),i=n(87695),o=n(44194),d=n(51865),v=n.n(d),l=n(31549),c=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],p=function(f){var h=f.children,m=f.block,B=m===void 0?!1:m,y=f.type,_=y===void 0?"default":y,I=f.color,D=f.danger,O=D===void 0?!1:D,M=f.disabled,C=f.className,L=f.style,x=f.icon,k=f.iconPosition,R=k===void 0?"start":k,W=f.loading,T=f.variant,A=f.onClick,N=s()(f,c),E="triones-antm-button",b=I,g=T;return _&&(I||(_==="primary"||_==="link"?b="primary":_==="default"&&(b="default")),T||(_==="primary"?g="solid":_==="default"?g="outlined":(_==="dashed"||_==="link"||_==="text")&&(g=_))),O&&(b="danger"),(0,l.jsxs)("button",{onClick:A,className:v()(E,r()(r()(r()(r()({},"".concat(E,"-block"),B),"".concat(E,"-type-").concat(_),_),"".concat(E,"-color-").concat(b),b),"".concat(E,"-variant-").concat(g),g)),disabled:M,children:[R=="start"&&x,h,R=="end"&&x]})}},93977:function(e,t,n){"use strict";n.r(t);var u=n(37180);t.default=u.Button},49387:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return s}});var u=n(44194),r=n(91518),a=n(31549),s=function(o){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:o.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},17455:function(e,t,n){"use strict";n.r(t),n.d(t,{Space:function(){return P}});var u=n(10154),r=n.n(u),a=n(44194),s=n(51865),i=n.n(s),o=n(57858),d=n(51583),v=n(96858),l=n(31549),c="triones-antm-space",p={direction:"horizontal"},P=function(h){var m=(0,v.mergeProps)(p,h),B=m.direction,y=m.onClick;return(0,o.withNativeProps)(m,(0,l.jsx)("div",{className:i()(c,r()(r()(r()(r()(r()({},"".concat(c,"-wrap"),m.wrap),"".concat(c,"-block"),m.block),"".concat(c,"-").concat(B),!0),"".concat(c,"-align-").concat(m.align),!!m.align),"".concat(c,"-justify-").concat(m.justify),!!m.justify)),onClick:y,children:a.Children.map(m.children,function(_){return _!=null&&(0,l.jsx)("div",{className:"".concat(c,"-item"),children:_})})}))}},57858:function(e,t,n){"use strict";n.r(t),n.d(t,{attachPropertiesToComponent:function(){return d},toCSSLength:function(){return v},withNativeProps:function(){return o}});var u=n(73193),r=n.n(u),a=n(44194),s=n(51865),i=n.n(s);function o(l,c){var p=r()({},c.props);l.className&&(p.className=i()(c.props.className,l.className)),l.style&&(p.style=r()(r()({},p.style),l.style)),l.tabIndex!==void 0&&(p.tabIndex=l.tabIndex);for(var P in l)l.hasOwnProperty(P)&&(P.startsWith("data-")||P.startsWith("aria-"))&&(p[P]=l[P]);return a.cloneElement(c,p)}function d(l,c){var p=l;for(var P in c)c.hasOwnProperty(P)&&(p[P]=c[P]);return p}function v(l){return typeof l=="number"?"".concat(l,"px"):l}},96858:function(e,t,n){"use strict";n.r(t),n.d(t,{mergeProp:function(){return r},mergeProps:function(){return u}});function u(){for(var a={},s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return i.forEach(function(d){d&&Object.keys(d).forEach(function(v){d[v]!==void 0&&(a[v]=d[v])})}),a}function r(a){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];for(var d=i.length-1;d>=0;d-=1)if(i[d]!==void 0)return i[d];return a}},87695:function(e,t,n){"use strict";n.r(t)},91518:function(e,t,n){"use strict";n.r(t)},51583:function(e,t,n){"use strict";n.r(t)},22746:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return r}});var u=n(34092);const r=[{value:"\u5143\u7D20\u6392\u5217\u4E2D\u4FDD\u6301\u76F8\u540C\u7684\u5BBD\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u591A\u4E2A\u5143\u7D20\u6309\u7167\u6C34\u5E73\u6216\u5782\u76F4\u65B9\u5411\u4FDD\u6301\u76F8\u540C\u7684\u95F4\u8DDD\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:"\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"block",paraId:2,tocIndex:4},{value:"\u662F\u5426\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u95F4\u8DDD\u65B9\u5411",paraId:2,tocIndex:4},{value:"'vertical' | 'horizontal'",paraId:2,tocIndex:4},{value:"'horizontal'",paraId:2,tocIndex:4},{value:"justify",paraId:2,tocIndex:4},{value:"\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onClick",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:2,tocIndex:4},{value:"(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"wrap",paraId:2,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C\uFF0C\u4EC5\u5728 ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:" \u65F6\u6709\u6548",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"--gap",paraId:3,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"8px",paraId:3,tocIndex:5},{value:"--gap-horizontal",paraId:3,tocIndex:5},{value:"\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5},{value:"--gap-vertical",paraId:3,tocIndex:5},{value:"\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F",paraId:3,tocIndex:5},{value:"var(--gap)",paraId:3,tocIndex:5}]},6458:function(e,t){"use strict";t.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

type AntButtonProps = {
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


export const Button: FC<AntButtonProps> = (
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
`},77306:function(e,t){"use strict";t.Z=`import {Button} from "./button";

export default Button
`},73008:function(e,t){"use strict";t.Z=`button::after {
  content: none;
  width: 100%;
}

$buttonCls: 'triones-antm-button';
.#{$buttonCls} {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  height: auto;
  line-height: normal;
  padding: 7Px 12Px;
  border-radius: 4Px;
  border: 1Px none;
  box-sizing: border-box;
  font-size: 14Px;
  z-index: 2;

  &:active {
    filter: brightness(92%);
  }

  &[disabled] {
    opacity: 0.4;

    &:active {
      filter: none;
    }
  }

  &-color {
    &-default {
      background-color: #ffffff;

      &.#{$buttonCls} {
        &-variant {
          &-solid {
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.75);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.75);
          }

          &-outlined {
            color: rgba(0, 0, 0, 0.75);
            border: 1px solid rgba(0, 0, 0, 0.75);
            background-color: white;
          }

          &-dashed {
            color: rgba(0, 0, 0, 0.75);
            border: 1px dashed rgba(0, 0, 0, 0.75);
            background-color: #ffffff;
          }

          &-filled {
            color: rgba(0, 0, 0, 0.75);
            background-color: rgba(0, 0, 0, 0.06);
          }

          &-text {
            color: rgba(0, 0, 0, 0.75);
            background-color: #ffffff;
          }

          &-link {
            color: rgba(0, 0, 0, 0.75);
            background-color: #ffffff;

            &:active {
              filter: none;
            }
          }
        }
      }
    }

    &-primary {
      &.#{$buttonCls} {
        &-variant {
          &-solid {
            color: #ffffff;
            background-color: #1677ff;
            box-shadow: inset 0 0 0 1px #1677ff;
          }

          &-outlined {
            color: #1677ff;
            background-color: white;
            border: 1px solid #1677ff;
          }

          &-dashed {
            color: #1677ff;
            border: 1px dashed #1677ff;
            background-color: #ffffff;
          }

          &-filled {
            color: #1677ff;
            background-color: #bae0ff;
          }

          &-text {
            color: #1677ff;
            background-color: #ffffff;
          }

          &-link {
            color: #1677ff;
            background-color: #ffffff;

            &:active {
              filter: none;
            }
          }
        }
      }
    }

    &-danger {
      &.#{$buttonCls} {
        &-variant {
          &-solid {
            color: #ffffff;
            background-color: #ff4d4f;
            box-shadow: inset 0 0 0 1px #ff4d4f;
          }

          &-outlined {
            color: #ff4d4f;
            background-color: #ffffff;
            border: 1px solid #ff4d4f;
          }

          &-dashed {
            color: #ff4d4f;
            border: 1px dashed #ff4d4f;
            background-color: #ffffff;
          }

          &-filled {
            color: #ff4d4f;
            background-color: #ffdfdc;
          }

          &-text {
            color: #ff4d4f;
            background-color: #ffffff;
          }

          &-link {
            color: #ff4d4f;
            background-color: #ffffff;

            &:active {
              filter: none;
            }
          }
        }
      }
    }
  }

  &-variant {
    &-solid {
    }

    &-outlined {
      background-color: #ffffff;
    }

    &-dashed {
      border: 1px dashed #d9d9d9;
      background-color: #ffffff;
    }

    &-text {
      background-color: #ffffff;
    }

    &-link {
      background-color: #ffffff;
    }
  }

  &-block {
    display: flex;
    width: 100%;
  }
}
`},21791:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},7761:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},35248:function(e,t){"use strict";t.Z=`import { DemoBlock } from '../../DemoBlock';
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
`},55033:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},12636:function(e,t){"use strict";t.Z=`import React, { AriaAttributes } from 'react'
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
`},62055:function(e,t){"use strict";t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},84176:function(e,t,n){var u=n(75863);function r(a,s){if(a==null)return{};var i=u(a,s),o,d;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(d=0;d<v.length;d++)o=v[d],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(i[o]=a[o])}return i}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},75863:function(e){function t(n,u){if(n==null)return{};var r={},a=Object.keys(n),s,i;for(i=0;i<a.length;i++)s=a[i],!(u.indexOf(s)>=0)&&(r[s]=n[s]);return r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
