(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9461],{29345:function(o,t,n){"use strict";var c;n.r(t),n.d(t,{demos:function(){return h}});var l=n(90819),e=n.n(l),i=n(89933),s=n.n(i),d=n(44194),_=n(7717),u=n(80215),B=n(95676),b=n(3837),v=n(51865),L=n.n(v),r=n(7827),h={"button-demo-base":{component:d.memo(d.lazy(function(){return n.e(7570).then(n.bind(n,39249))})),asset:{type:"BLOCK",id:"button-demo-base",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:n(33429).Z},react:{type:"NPM",value:"18.3.1"},"../button.tsx":{type:"FILE",value:n(69387).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(92724).Z},"./index.scss":{type:"FILE",value:n(63119).Z},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(77019).Z}},entry:"index.tsx"},context:{"../button.tsx":u,"../../DemoBlock.tsx":B,"./index.scss":b,"./style.scss":r,react:c||(c=n.t(d,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":b,classnames:v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/style.scss":r},renderOpts:{compile:function(){var y=s()(e()().mark(function g(){var a,k=arguments;return e()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,n.e(8506).then(n.bind(n,48506));case 2:return f.abrupt("return",(a=f.sent).default.apply(a,k));case 3:case"end":return f.stop()}},g)}));function P(){return y.apply(this,arguments)}return P}()}}}},80215:function(o,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return v}});var c=n(10154),l=n.n(c),e=n(84176),i=n.n(e),s=n(7827),d=n(44194),_=n(51865),u=n.n(_),B=n(31549),b=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],v=function(r){var h=r.children,y=r.block,P=y===void 0?!1:y,g=r.type,a=g===void 0?"default":g,k=r.color,E=r.danger,f=E===void 0?!1:E,W=r.disabled,T=r.className,I=r.style,D=r.icon,O=r.iconPosition,M=O===void 0?"start":O,A=r.loading,C=r.variant,R=r.onClick,K=i()(r,b),p="triones-antm-button",m=k,x=C;return a&&(k||(a==="primary"||a==="link"?m="primary":a==="default"&&(m="default")),C||(a==="primary"?x="solid":a==="default"?x="outlined":(a==="dashed"||a==="link"||a==="text")&&(x=a))),f&&(m="danger"),(0,B.jsxs)("button",{onClick:R,className:u()(p,l()(l()(l()(l()({},"".concat(p,"-block"),P),"".concat(p,"-type-").concat(a),a),"".concat(p,"-color-").concat(m),m),"".concat(p,"-variant-").concat(x),x)),disabled:W,children:[M=="start"&&D,h,M=="end"&&D]})}},95676:function(o,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return i}});var c=n(44194),l=n(3837),e=n(31549),i=function(d){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:d.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},7827:function(o,t,n){"use strict";n.r(t)},3837:function(o,t,n){"use strict";n.r(t)},63466:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return l}});var c=n(7717);const l=[]},69387:function(o,t){"use strict";t.Z=`import "./style.scss"
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
`},33429:function(o,t){"use strict";t.Z="import { DemoBlock } from '../../DemoBlock';\nimport React from \"react\";\nimport { Button } from '../button';\n\nexport default () => {\n  return <>\n    <DemoBlock title='\u6309\u94AE\u7C7B\u578B'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`}>Primary</Button>\n        <Button type={`default`}>Default</Button>\n        <Button type={`dashed`}>Dashed</Button>\n        <Button type={`text`}>Text</Button>\n        <Button type={`link`}>Link</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u989C\u8272\u4E0E\u53D8\u4F53'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`default`} variant={`solid`}>Solid</Button>\n          <Button color={`default`} variant={`outlined`}>Outlined</Button>\n          <Button color={`default`} variant={`dashed`}>Dashed</Button>\n          <Button color={`default`} variant={`filled`}>Filled</Button>\n          <Button color={`default`} variant={`text`}>Text</Button>\n          <Button color={`default`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`primary`} variant={`solid`}>Solid</Button>\n          <Button color={`primary`} variant={`outlined`}>Outlined</Button>\n          <Button color={`primary`} variant={`dashed`}>Dashed</Button>\n          <Button color={`primary`} variant={`filled`}>Filled</Button>\n          <Button color={`primary`} variant={`text`}>Text</Button>\n          <Button color={`primary`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`danger`} variant={`solid`}>Solid</Button>\n          <Button color={`danger`} variant={`outlined`}>Outlined</Button>\n          <Button color={`danger`} variant={`dashed`}>Dashed</Button>\n          <Button color={`danger`} variant={`filled`}>Filled</Button>\n          <Button color={`danger`} variant={`text`}>Text</Button>\n          <Button color={`danger`} variant={`link`}>Link</Button>\n        </div>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5757\u7EA7\u6309\u94AE'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button block={true} type='primary'>\u6309\u94AE</Button>\n        <Button block={true} color='primary'>\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u7981\u7528'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} disabled>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} disabled>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} disabled>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5371\u9669'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} danger>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} danger>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} danger>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n  </>\n}\n"},77019:function(o,t){"use strict";t.Z=`button::after {
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
`},63119:function(o,t){"use strict";t.Z=`.demoBlock {
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
`},84176:function(o,t,n){var c=n(75863);function l(e,i){if(e==null)return{};var s=c(e,i),d,_;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(_=0;_<u.length;_++)d=u[_],!(i.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(e,d)&&(s[d]=e[d])}return s}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function t(n,c){if(n==null)return{};var l={},e=Object.keys(n),i,s;for(s=0;s<e.length;s++)i=e[s],!(c.indexOf(i)>=0)&&(l[i]=n[i]);return l}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
