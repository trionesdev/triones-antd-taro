(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[9461],{20973:function(o,t,n){"use strict";var l;n.r(t),n.d(t,{demos:function(){return E}});var d=n(90819),e=n.n(d),a=n(89933),u=n.n(a),i=n(44194),c=n(5432),p=n(92876),v=n(64568),P=n(51865),C=n.n(P),B=n(8608),x=n(52194),E={"button-demo-base":{component:i.memo(i.lazy(function(){return n.e(7570).then(n.bind(n,99239))})),asset:{type:"BLOCK",id:"button-demo-base",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:n(45885).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(47047).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"./button.tsx":{type:"FILE",value:n(62352).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(52964).Z},"./style.scss":{type:"FILE",value:n(58226).Z}},entry:"index.tsx"},context:{"../index.tsx":c,"../../DemoBlock.tsx":p,"./button.tsx":v,"./index.scss":B,"./style.scss":x,react:l||(l=n.t(i,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/button.tsx":v,classnames:P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/style.scss":x},renderOpts:{compile:function(){var r=u()(e()().mark(function g(){var y,k=arguments;return e()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,n.e(8036).then(n.bind(n,68036));case 2:return _.abrupt("return",(y=_.sent).default.apply(y,k));case 3:case"end":return _.stop()}},g)}));function h(){return r.apply(this,arguments)}return h}()}}}},64568:function(o,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return x}});var l=n(10154),d=n.n(l),e=n(73193),a=n.n(e),u=n(84176),i=n.n(u),c=n(51865),p=n.n(c),v=n(44194),P=n(52194),C=n(31549),B=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","size","onClick"],x=function(r){var h=r.children,g=r.block,y=g===void 0?!1:g,k=r.type,s=k===void 0?"default":k,_=r.color,D=r.danger,W=D===void 0?!1:D,I=r.disabled,R=r.className,j=r.style,$=r.icon,O=r.iconPosition,T=O===void 0?"start":O,N=r.loading,M=r.variant,L=r.size,A=L===void 0?"middle":L,K=r.onClick,U=i()(r,B),m="triones-antm-button",f=_,b=M;return s&&(_||(s==="primary"||s==="link"?f="primary":s==="default"&&(f="default")),M||(s==="primary"?b="solid":s==="default"?b="outlined":(s==="dashed"||s==="link"||s==="text")&&(b=s))),W&&(f="danger"),(0,C.jsxs)("button",a()(a()({},a()({},U)),{},{type:"button",onClick:K,className:p()(m,"".concat(m,"-").concat(A),R,d()(d()(d()(d()({},"".concat(m,"-block"),y),"".concat(m,"-type-").concat(s),s),"".concat(m,"-color-").concat(f),f),"".concat(m,"-variant-").concat(b),b)),style:j,disabled:I,children:[T==="start"&&$,h,T==="end"&&$]}))}},5432:function(o,t,n){"use strict";n.r(t);var l=n(64568);t.default=l.Button},92876:function(o,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return a}});var l=n(44194),d=n(8608),e=n(31549),a=function(i){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:i.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:i.children})]})}},52194:function(o,t,n){"use strict";n.r(t)},8608:function(o,t,n){"use strict";n.r(t)},85238:function(o,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return l}});const l=[]},62352:function(o,t){"use strict";t.Z=`import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import './style.scss';

export type ButtonProps = {
  /**
   * @description block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean;
  /**
   * @description \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string;
  /**
   * @description \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean;
  /**
   * @description \u662F\u5426\u7981\u7528
   */
  disabled?: boolean;
  /**
   * @description \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean;
  /**
   * @description \u6309\u94AE\u7C7B\u578B
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description \u56FE\u6807
   */
  icon?: React.ReactNode;
  /**
   * @description \u56FE\u6807\u4F4D\u7F6E
   */
  iconPosition?: 'start' | 'end';
  /**
   * @description \u52A0\u8F7D\u4E2D
   */
  loading?: boolean;
  /**
   * @description \u6309\u94AE\u6837\u5F0F
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   */
  onClick?: (e: any) => void;
  [key: string]: any;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
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
                                          size = 'middle',
                                          onClick,
                                          ...props
                                        }) => {
  const clsPrefix = 'triones-antm-button';
  let finalColor = color;
  let finalVariant = variant;
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary';
      } else if (type === 'default') {
        finalColor = 'default';
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid';
      } else if (type === 'default') {
        finalVariant = 'outlined';
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type;
      }
    }
  }
  if (danger) {
    finalColor = 'danger';
  }

  return <button
    {...{...props}}
    type={'button'}
    onClick={onClick}
    className={classNames(clsPrefix, \`\${clsPrefix}-\${size}\`, className, {
      [\`\${clsPrefix}-block\`]: block,
      [\`\${clsPrefix}-type-\${type}\`]: type,
      [\`\${clsPrefix}-color-\${finalColor}\`]: finalColor,
      [\`\${clsPrefix}-variant-\${finalVariant}\`]: finalVariant,
    })}
    style={style}
    disabled={disabled}
  >
    {iconPosition === 'start' && icon}
    {children}
    {iconPosition === 'end' && icon}
  </button>
};
`},45885:function(o,t){"use strict";t.Z="import { DemoBlock } from '../../DemoBlock';\nimport React from 'react';\nimport Button from \"../index\";\n\n\nexport default () => {\n  return <>\n    <DemoBlock title='\u6309\u94AE\u7C7B\u578B'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`}>Primary</Button>\n        <Button type={`default`}>Default</Button>\n        <Button type={`dashed`}>Dashed</Button>\n        <Button type={`text`}>Text</Button>\n        <Button type={`link`}>Link</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u989C\u8272\u4E0E\u53D8\u4F53'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`default`} variant={`solid`}>Solid</Button>\n          <Button color={`default`} variant={`outlined`}>Outlined</Button>\n          <Button color={`default`} variant={`dashed`}>Dashed</Button>\n          <Button color={`default`} variant={`filled`}>Filled</Button>\n          <Button color={`default`} variant={`text`}>Text</Button>\n          <Button color={`default`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`primary`} variant={`solid`}>Solid</Button>\n          <Button color={`primary`} variant={`outlined`}>Outlined</Button>\n          <Button color={`primary`} variant={`dashed`}>Dashed</Button>\n          <Button color={`primary`} variant={`filled`}>Filled</Button>\n          <Button color={`primary`} variant={`text`}>Text</Button>\n          <Button color={`primary`} variant={`link`}>Link</Button>\n        </div>\n        <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n          <Button color={`danger`} variant={`solid`}>Solid</Button>\n          <Button color={`danger`} variant={`outlined`}>Outlined</Button>\n          <Button color={`danger`} variant={`dashed`}>Dashed</Button>\n          <Button color={`danger`} variant={`filled`}>Filled</Button>\n          <Button color={`danger`} variant={`text`}>Text</Button>\n          <Button color={`danger`} variant={`link`}>Link</Button>\n        </div>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5757\u7EA7\u6309\u94AE'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button block={true} type='primary'>\u6309\u94AE</Button>\n        <Button block={true} color='primary'>\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u7981\u7528'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} disabled>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} disabled>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} disabled>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n    <DemoBlock title='\u5371\u9669'>\n      <div style={{ gap: '8px', rowGap: '8px', display: 'flex', flexWrap: 'wrap' }}>\n        <Button type={`primary`} danger>\u4E3B\u8981\u6309\u94AE</Button>\n        <Button type={`default`} danger>\u6B21\u8981\u6309\u94AE</Button>\n        <Button type={`text`} danger>\u6587\u672C\u6309\u94AE</Button>\n      </div>\n    </DemoBlock>\n  </>\n}\n"},47047:function(o,t){"use strict";t.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps,}
export default Button
`},58226:function(o,t){"use strict";t.Z=`@use "../style/variable" as *;

$trionesButtonPendingInlineSm: 7Px;
$trionesButtonHeightSm: 24Px;

$trionesButtonPendingInline: 15Px;
$trionesButtonHeight: 32Px;

$trionesButtonContentFontSizeLg: $trionesFontSizeLg;
$trionesButtonPendingInlineLg: 15Px;
$trionesButtonHeightLg: 40Px;

// \u5B9A\u4E49\u5E38\u7528\u989C\u8272\u53D8\u91CF\u4EE5\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027
$buttonBackgroundColor: #ffffff;
$buttonDarkTextColor: rgba(0, 0, 0, 0.75);
$buttonLightTextColor: rgba(0, 0, 0, 0.06);

button::after {
  content: none;
  width: 100%;
}

$buttonCls: 'triones-antm-button';
.#{$buttonCls} {
  width: auto;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
  height: auto;
  line-height: normal;
  border-radius: 4Px;
  border: 1Px none;
  box-sizing: border-box;
  font-size: 14Px;
  z-index: 2;
  margin-top: 0;

  &:active {
    filter: brightness(92%);
  }
  &::after{
    content: none;
  }

  &[disabled] {
    opacity: 0.4;

    &:active {
      filter: none;
    }
  }

  &-color {
    &-default {
      background-color: $buttonBackgroundColor;

      &.#{$buttonCls} {
        &-variant {
          &-solid {
            color: $buttonBackgroundColor;
            background-color: $buttonDarkTextColor;
            box-shadow: inset 0 0 0 1px $buttonDarkTextColor;
          }

          &-outlined {
            color: $buttonDarkTextColor;
            border: 1px solid $buttonDarkTextColor;
            background-color: $buttonBackgroundColor;
          }

          &-dashed {
            color: $buttonDarkTextColor;
            border: 1px dashed $buttonDarkTextColor;
            background-color: $buttonBackgroundColor;
          }

          &-filled {
            color: $buttonDarkTextColor;
            background-color: $buttonLightTextColor;
          }

          &-text {
            color: $buttonDarkTextColor;
            background-color: $buttonBackgroundColor;
          }

          &-link {
            color: $buttonDarkTextColor;
            background-color: $buttonBackgroundColor;

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
            color: $buttonBackgroundColor;
            background-color: $trionesColorPrimaryText;
            box-shadow: inset 0 0 0 1px $trionesColorPrimaryText;
          }

          &-outlined {
            color: #1677ff;
            background-color: $buttonBackgroundColor;
            border: 1px solid $trionesColorPrimaryText;
          }

          &-dashed {
            color: $trionesColorPrimaryText;
            border: 1px dashed $trionesColorPrimaryText;
            background-color: $buttonBackgroundColor;
          }

          &-filled {
            color: $trionesColorPrimaryText;
            background-color: $trionesColorPrimaryBg;
          }

          &-text {
            color: $trionesColorPrimaryText;
            background-color: $buttonBackgroundColor;
          }

          &-link {
            color: $trionesColorPrimaryText;
            background-color: $buttonBackgroundColor;

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
            color: $buttonBackgroundColor;
            background-color: $trionesColorErrorText;
            box-shadow: inset 0 0 0 1px $trionesColorErrorText;
          }

          &-outlined {
            color: $trionesColorErrorText;
            background-color: $buttonBackgroundColor;
            border: 1px solid $trionesColorErrorText;
          }

          &-dashed {
            color: $trionesColorErrorText;
            border: 1px dashed $trionesColorErrorText;
            background-color: $buttonBackgroundColor;
          }

          &-filled {
            color: $trionesColorErrorText;
            background-color: #ffdfdc;
          }

          &-text {
            color: $trionesColorErrorText;
            background-color: $buttonBackgroundColor;
          }

          &-link {
            color: $trionesColorErrorText;
            background-color: $buttonBackgroundColor;

            &:active {
              filter: none;
            }
          }
        }
      }
    }
  }

  &-variant {
    &-outlined {
      background-color: $buttonBackgroundColor;
    }

    &-dashed {
      border: 1px dashed #d9d9d9;
      background-color: $buttonBackgroundColor;
    }

    &-text {
      background-color: $buttonBackgroundColor;
    }

    &-link {
      background-color: $buttonBackgroundColor;
    }
  }

  &-block {
    display: flex;
    width: 100%;
  }

  &-small {
    font-size: $trionesFontSizeSm;
    padding-inline: $trionesButtonPendingInlineSm;
    height: $trionesButtonHeightSm;
    border-radius: $trionesBorderRadiusSm;
  }

  &-middle {
    padding-inline: $trionesButtonPendingInline;
    height: $trionesButtonHeight;
    border-radius: $trionesBorderRadius;
  }

  &-large {
    font-size: $trionesButtonContentFontSizeLg;
    padding-inline: $trionesButtonPendingInlineLg;
    height: $trionesButtonHeightLg;
    border-radius: $trionesBorderRadiusLg;
  }
}`},52964:function(o,t){"use strict";t.Z=`.demoBlock {
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
`},3699:function(o,t){"use strict";t.Z=`import React from 'react'
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
`},84176:function(o,t,n){var l=n(75863);function d(e,a){if(e==null)return{};var u=l(e,a),i,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(c=0;c<p.length;c++)i=p[c],!(a.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(u[i]=e[i])}return u}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function t(n,l){if(n==null)return{};var d={},e=Object.keys(n),a,u;for(u=0;u<e.length;u++)a=e[u],!(l.indexOf(a)>=0)&&(d[a]=n[a]);return d}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
