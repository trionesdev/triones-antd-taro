"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[3733],{1959:function(o,t,n){var d;n.r(t),n.d(t,{demos:function(){return k}});var s=n(90819),e=n.n(s),i=n(89933),l=n.n(i),r=n(44194),E=n(97656),b=n(95258),c=n(20945),f=n(95676),_=n(80215),u=n(3837),m=n(51865),B=n.n(m),p=n(7827),k={"calendarpicker-demo-base":{component:r.memo(r.lazy(function(){return n.e(4676).then(n.bind(n,72374))})),asset:{type:"BLOCK",id:"calendarpicker-demo-base",refAtomIds:["CalendarPicker"],dependencies:{"index.tsx":{type:"FILE",value:n(39648).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../../Button.tsx":{type:"FILE",value:n(99544).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./button.tsx":{type:"FILE",value:n(94156).Z},"./index.scss":{type:"FILE",value:n(72973).Z},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(91324).Z}},entry:"index.tsx"},context:{"../../Button.tsx":c,"../../DemoBlock.tsx":f,"./button.tsx":_,"./index.scss":u,"./style.scss":p,react:d||(d=n.t(r,2)),"@trionesdev/antd-taro-react":b,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u,classnames:m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/style.scss":p},renderOpts:{compile:function(){var x=l()(e()().mark(function h(){var g,P=arguments;return e()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(2740).then(n.bind(n,42740));case 2:return a.abrupt("return",(g=a.sent).default.apply(g,P));case 3:case"end":return a.stop()}},h)}));function v(){return x.apply(this,arguments)}return v}()}}}},95676:function(o,t,n){n.r(t),n.d(t,{DemoBlock:function(){return i}});var d=n(44194),s=n(3837),e=n(31549),i=function(r){return(0,e.jsxs)("div",{className:"demoBlock",children:[(0,e.jsx)("div",{className:"demoTitle",children:r.title}),(0,e.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},3837:function(o,t,n){n.r(t)},15132:function(o,t,n){n.r(t),n.d(t,{texts:function(){return s}});var d=n(97656);const s=[]},94156:function(o,t){t.Z=`import "./style.scss"
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
`},99544:function(o,t){t.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},91324:function(o,t){t.Z=`button::after {
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
`},39648:function(o,t){t.Z=`import React from 'react';
import {DemoBlock} from '../../DemoBlock';
import Button from "../../Button";
import {CalendarPicker, Toast} from "@trionesdev/antd-taro-react";

export default () => {
  const toastContainer = React.useRef<any>()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <div ref={toastContainer}/>
      <DemoBlock title={\`\u65E5\u5386\u9009\u62E9\u5668\`}>
        <CalendarPicker open={open} afterOpenChange={(o) => {
          setOpen(o);
        }} onOk={(date) => {
          Toast.show({
            getContainer: () => toastContainer.current,
            content: \`\${date!.getFullYear()}-\${date!.getMonth()  +1}-\${date!.getDate()}\`,
          })
        }}/>
        <Button block={true} onClick={() => {
          setOpen(true);
        }}>
          \u65E5\u5386\u9009\u62E9\u5668
        </Button>
      </DemoBlock>
      <DemoBlock title={\`\u65E5\u5386\u9009\u62E9\u5668(\u533A\u95F4)\`}>
        <CalendarPicker.Range open={open2} afterOpenChange={(o) => {
          setOpen2(o);
        }} onOk={(date) => {
          Toast.show({
            getContainer: () => toastContainer.current,
            content: <div>
              <div>{\`\${date![0].getFullYear()}-\${date![0].getMonth() ?? +1}-\${date![0].getDate()}\`}</div>
              <div>{\`\${date![1].getFullYear()}-\${date![1].getMonth() ?? +1}-\${date![1].getDate()}\`}</div>
            </div>,
          })
        }}/>
        <Button block={true} onClick={() => {
          setOpen2(true);
        }}>
          \u65E5\u5386\u9009\u62E9\u5668(\u533A\u95F4)
        </Button>
      </DemoBlock>
    </div>
  );
};
`},72973:function(o,t){t.Z=`.demoBlock {
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
`},23624:function(o,t){t.Z=`import React from 'react'
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
`}}]);
