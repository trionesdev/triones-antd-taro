(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6122],{41433:function(o,t,n){"use strict";var _;n.r(t),n.d(t,{demos:function(){return h}});var s=n(90819),r=n.n(s),a=n(89933),d=n.n(a),c=n(44194),f=n(36407),p=n(20945),B=n(95676),u=n(14691),E=n(80215),I=n(51865),e=n.n(I),x=n(3837),m=n(7827),h={"src-space-demo-base":{component:c.memo(c.lazy(function(){return Promise.all([n.e(9378),n.e(5586),n.e(396),n.e(8460),n.e(1919),n.e(1271),n.e(2995),n.e(4410),n.e(2264),n.e(656),n.e(8289),n.e(3188),n.e(2433)]).then(n.bind(n,62241))})),asset:{type:"BLOCK",id:"src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(68538).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(99544).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"../space.tsx":{type:"FILE",value:n(34289).Z},"./button.tsx":{type:"FILE",value:n(94156).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(72973).Z},"./style.scss":{type:"FILE",value:n(91324).Z}},entry:"index.tsx"},context:{"../../Button.tsx":p,"../../DemoBlock.tsx":B,"../space.tsx":u,"./button.tsx":E,"./index.scss":x,"./style.scss":m,react:_||(_=n.t(c,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":E,classnames:I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/style.scss":m},renderOpts:{compile:function(){var P=d()(r()().mark(function g(){var b,D=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(2740).then(n.bind(n,42740));case 2:return l.abrupt("return",(b=l.sent).default.apply(b,D));case 3:case"end":return l.stop()}},g)}));function i(){return P.apply(this,arguments)}return i}()}}}},80215:function(o,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return E}});var _=n(10154),s=n.n(_),r=n(84176),a=n.n(r),d=n(7827),c=n(44194),f=n(51865),p=n.n(f),B=n(31549),u=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],E=function(e){var x=e.children,m=e.block,h=m===void 0?!1:m,P=e.type,i=P===void 0?"default":P,g=e.color,b=e.danger,D=b===void 0?!1:b,M=e.disabled,l=e.className,T=e.style,v=e.icon,L=e.iconPosition,A=L===void 0?"start":L,k=e.loading,y=e.variant,S=e.onClick,W=a()(e,u),O="triones-antm-button",C=g,R=y;return i&&(g||(i==="primary"||i==="link"?C="primary":i==="default"&&(C="default")),y||(i==="primary"?R="solid":i==="default"?R="outlined":(i==="dashed"||i==="link"||i==="text")&&(R=i))),D&&(C="danger"),(0,B.jsxs)("button",{onClick:S,className:p()(O,s()(s()(s()(s()({},"".concat(O,"-block"),h),"".concat(O,"-type-").concat(i),i),"".concat(O,"-color-").concat(C),C),"".concat(O,"-variant-").concat(R),R)),disabled:M,children:[A=="start"&&v,x,A=="end"&&v]})}},20945:function(o,t,n){"use strict";n.r(t);var _=n(80215);t.default=_.Button},95676:function(o,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return a}});var _=n(44194),s=n(3837),r=n(31549),a=function(c){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:c.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:c.children})]})}},14691:function(o,t,n){"use strict";n.r(t),n.d(t,{Space:function(){return E}});var _=n(73193),s=n.n(_),r=n(10154),a=n.n(r),d=n(44194),c=n(51865),f=n.n(c),p=n(27608),B=n(31549),u="triones-antm-space",E=function(e){var x=e.children,m=e.direction,h=m===void 0?"horizontal":m,P=e.align,i=e.justify,g=e.wrap,b=e.block,D=e.onClick,M=e.size,l=M===void 0?"small":M,T=e.style,v=function(y){if(typeof y=="number")return"".concat(y,"Px");if(y==="small")return"8Px";if(y==="middle")return"16Px";if(y==="large")return"24Px"},L=(0,d.useMemo)(function(){return Array.isArray(l)?v(l[1]):v(l)},[l]),A=(0,d.useMemo)(function(){return Array.isArray(l)?v(l[1]):v(l)},[l]);return(0,B.jsx)("div",{className:f()(u,a()(a()(a()(a()(a()({},"".concat(u,"-wrap"),g),"".concat(u,"-block"),b),"".concat(u,"-").concat(h),!0),"".concat(u,"-align-").concat(P),!!P),"".concat(u,"-justify-").concat(i),!!i)),style:s()(s()({},T),{},{columnGap:L,rowGap:A}),onClick:D,children:d.Children.map(x,function(k){return k!=null&&(0,B.jsx)("div",{className:"".concat(u,"-item"),children:k})})})}},7827:function(o,t,n){"use strict";n.r(t)},3837:function(o,t,n){"use strict";n.r(t)},27608:function(o,t,n){"use strict";n.r(t)},55360:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return s}});var _=n(36407);const s=[{value:"\u5143\u7D20\u6392\u5217\u4E2D\u4FDD\u6301\u76F8\u540C\u7684\u5BBD\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u591A\u4E2A\u5143\u7D20\u6309\u7167\u6C34\u5E73\u6216\u5782\u76F4\u65B9\u5411\u4FDD\u6301\u76F8\u540C\u7684\u95F4\u8DDD\u3002",paraId:1,tocIndex:1}]},94156:function(o,t){"use strict";t.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode
  /**
   * @description block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean
  /**
   * @description \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * @description \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean
  /**
   * @description \u662F\u5426\u7981\u7528
   */
  disabled?: boolean
  /**
   * @description \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean
  /**
   * @description \u6309\u94AE\u7C7B\u578B
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  className?: string,
  style?: React.CSSProperties
  /**
   * @description \u56FE\u6807
   */
  icon?: React.ReactNode
  /**
   * @description \u56FE\u6807\u4F4D\u7F6E
   */
  iconPosition?: 'start' | 'end'
  /**
   * @description \u52A0\u8F7D\u4E2D
   */
  loading?: boolean
  /**
   * @description \u6309\u94AE\u6837\u5F0F
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link',
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
  [key: string]: any
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
`},99544:function(o,t){"use strict";t.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},91324:function(o,t){"use strict";t.Z=`button::after {
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
`},72973:function(o,t){"use strict";t.Z=`.demoBlock {
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
`},23624:function(o,t){"use strict";t.Z=`import React from 'react'
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
`},68538:function(o,t){"use strict";t.Z=`import { DemoBlock } from '../../DemoBlock';
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
        <Space size={\`small\`}>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
        <Space size={\`middle\`}>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
        <Space size={\`large\`}>
          <Button type='primary'>\u6309\u94AE1</Button>
          <Button type='primary'>\u6309\u94AE2</Button>
          <Button type='primary'>\u6309\u94AE3</Button>
        </Space>
        <Space size={30}>
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
`},34289:function(o,t){"use strict";t.Z=`import {CSSProperties, FC, ReactNode, useMemo} from 'react'
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const classPrefix = \`triones-antm-space\`

export type Size = 'small' | 'middle' | 'large' | number

export type SpaceProps = {
  /**
   * @description \u95F4\u8DDD\u65B9\u5411
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F
   */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /**
   * @description \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F
   */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  /**
   * @description \u6362\u884C
   */
  wrap?: boolean
  /**
   * @description \u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20
   */
  block?: boolean
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   * @param event
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
  /**
   * @description \u95F4\u8DDD\u5927\u5C0F
   */
  size?: Size | Size[]
  style?: CSSProperties
}


export const Space: FC<SpaceProps> = ({
                                        children,
                                        direction = 'horizontal',
                                        align,
                                        justify,
                                        wrap,
                                        block,
                                        onClick,
                                        size = 'small',
                                        style,
                                      }) => {

  const sizeValue = (size: Size) => {
    if (typeof size === 'number') {
      return \`\${size}Px\`
    } else if (size === 'small') {
      return '8Px'
    } else if (size === 'middle') {
      return '16Px'
    } else if (size === 'large') {
      return '24Px'
    }
  }
  const columnGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1])
    } else {
      return sizeValue(size)
    }
  }, [size])

  const rowGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1])
    } else {
      return sizeValue(size)
    }
  }, [size])

  return (<div
    className={classNames(classPrefix, {
      [\`\${classPrefix}-wrap\`]: wrap,
      [\`\${classPrefix}-block\`]: block,
      [\`\${classPrefix}-\${direction}\`]: true,
      [\`\${classPrefix}-align-\${align}\`]: !!align,
      [\`\${classPrefix}-justify-\${justify}\`]: !!justify,
    })}
    style={{
      ...style,
      columnGap: columnGapValue,
      rowGap: rowGapValue
    }}
    onClick={onClick}
  >
    {React.Children.map(children, child => {
      return (
        child !== null &&
        child !== undefined && (
          <div className={\`\${classPrefix}-item\`}>{child}</div>
        )
      )
    })}
  </div>)
}
`},84176:function(o,t,n){var _=n(75863);function s(r,a){if(r==null)return{};var d=_(r,a),c,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);for(f=0;f<p.length;f++)c=p[f],!(a.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(d[c]=r[c])}return d}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function t(n,_){if(n==null)return{};var s={},r=Object.keys(n),a,d;for(d=0;d<r.length;d++)a=r[d],!(_.indexOf(a)>=0)&&(s[a]=n[a]);return s}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
