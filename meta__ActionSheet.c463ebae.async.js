(self.webpackChunk_trionesdev_antd_mobile_react=self.webpackChunk_trionesdev_antd_mobile_react||[]).push([[5622],{20807:function(t,o,n){"use strict";var a;n.r(o),n.d(o,{demos:function(){return E}});var d=n(90819),r=n.n(d),i=n(89933),_=n.n(i),l=n(44194),c=n(5432),m=n(92876),k=n(22241),$=n(84514),g=n(64568),x=n(51865),D=n.n(x),B=n(8608),e=n(52194),E={"actionsheet-demo-base":{component:l.memo(l.lazy(function(){return n.e(1910).then(n.bind(n,12815))})),asset:{type:"BLOCK",id:"actionsheet-demo-base",refAtomIds:["ActionSheet"],dependencies:{"index.tsx":{type:"FILE",value:n(80962).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(47047).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(3699).Z},"../index.tsx":{type:"FILE",value:n(89826).Z},"@trionesdev/antd-mobile-base-react":{type:"NPM",value:"0.0.2-beta.2"},"./button.tsx":{type:"FILE",value:n(62352).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(52964).Z},"./style.scss":{type:"FILE",value:n(58226).Z}},entry:"index.tsx"},context:{"../../Button.tsx":c,"../../DemoBlock.tsx":m,"../index.tsx":k,"./button.tsx":g,"./index.scss":B,"./style.scss":e,react:a||(a=n.t(l,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/ActionSheet/index.tsx":k,"@trionesdev/antd-mobile-base-react":$,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/button.tsx":g,classnames:x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/DemoBlock/index.scss":B,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-mobile-react/src/Button/style.scss":e},renderOpts:{compile:function(){var P=_()(r()().mark(function h(){var s,C=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.e(8036).then(n.bind(n,68036));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,C));case 3:case"end":return u.stop()}},h)}));function v(){return P.apply(this,arguments)}return v}()}}}},22241:function(t,o,n){"use strict";n.r(o);var a=n(84514);o.default=a.ActionSheet},64568:function(t,o,n){"use strict";n.r(o),n.d(o,{Button:function(){return D}});var a=n(10154),d=n.n(a),r=n(73193),i=n.n(r),_=n(84176),l=n.n(_),c=n(51865),m=n.n(c),k=n(44194),$=n(52194),g=n(31549),x=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","size","onClick"],D=function(e){var E=e.children,P=e.block,v=P===void 0?!1:P,h=e.type,s=h===void 0?"default":h,C=e.color,y=e.danger,u=y===void 0?!1:y,R=e.disabled,A=e.className,W=e.style,O=e.icon,M=e.iconPosition,T=M===void 0?"start":M,S=e.loading,L=e.variant,I=e.size,K=I===void 0?"middle":I,U=e.onClick,j=l()(e,x),b="triones-antm-button",p=C,f=L;return s&&(C||(s==="primary"||s==="link"?p="primary":s==="default"&&(p="default")),L||(s==="primary"?f="solid":s==="default"?f="outlined":(s==="dashed"||s==="link"||s==="text")&&(f=s))),u&&(p="danger"),(0,g.jsxs)("button",i()(i()({},i()({},j)),{},{type:"button",onClick:U,className:m()(b,"".concat(b,"-").concat(K),A,d()(d()(d()(d()({},"".concat(b,"-block"),v),"".concat(b,"-type-").concat(s),s),"".concat(b,"-color-").concat(p),p),"".concat(b,"-variant-").concat(f),f)),style:W,disabled:R,children:[T==="start"&&O,E,T==="end"&&O]}))}},5432:function(t,o,n){"use strict";n.r(o);var a=n(64568);o.default=a.Button},92876:function(t,o,n){"use strict";n.r(o),n.d(o,{DemoBlock:function(){return i}});var a=n(44194),d=n(8608),r=n(31549),i=function(l){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:l.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:l.children})]})}},52194:function(t,o,n){"use strict";n.r(o)},8608:function(t,o,n){"use strict";n.r(o)},29213:function(t,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return a}});const a=[]},80962:function(t,o){"use strict";o.Z=`import React from "react";
import {DemoBlock} from "../../DemoBlock";
import ActionSheet from "../index";
import Button from "../../Button";

export default () => {
  const [open, setOpen] = React.useState(false);
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <ActionSheet open={open} afterOpenChange={(o) => {
        setOpen(o)
      }}
                   title={\`\u64CD\u4F5C\u9762\u677F\`}
                   actions={[{
        key: '1', children: <>\u64CD\u4F5CA</>, onClick: () => {
        }
      },
        {
          key: '2', children: <>\u64CD\u4F5CB</>, onClick: () => {
          }
        }
      ]}/>
      <Button block={true} onClick={() => {
        setOpen(true)
      }}>\u6253\u5F00\u64CD\u4F5C\u9762\u677F</Button>
    </DemoBlock>
  </div>
}
`},89826:function(t,o){"use strict";o.Z=`import {ActionSheet,ActionSheetProps} from "@trionesdev/antd-mobile-base-react"

export type {ActionSheetProps}
export default ActionSheet
`},62352:function(t,o){"use strict";o.Z=`import classNames from 'classnames';
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
`},47047:function(t,o){"use strict";o.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps,}
export default Button
`},58226:function(t,o){"use strict";o.Z=`@use "../style/variable" as *;

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
}`},52964:function(t,o){"use strict";o.Z=`.demoBlock {
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
`},3699:function(t,o){"use strict";o.Z=`import React from 'react'
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
`},84176:function(t,o,n){var a=n(75863);function d(r,i){if(r==null)return{};var _=a(r,i),l,c;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(c=0;c<m.length;c++)l=m[c],!(i.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(_[l]=r[l])}return _}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function o(n,a){if(n==null)return{};var d={},r=Object.keys(n),i,_;for(_=0;_<r.length;_++)i=r[_],!(a.indexOf(i)>=0)&&(d[i]=n[i]);return d}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
