(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1141],{78083:function(e,t,n){"use strict";var l,a;n.r(t),n.d(t,{demos:function(){return g}});var o=n(90819),r=n.n(o),s=n(89933),i=n.n(s),p=n(44194),c=n(99735),_=n(70162),u=n(49387),m=n(93977),f=n(73079),P=n(37180),h=n(91518),v=n(56321),O=n(51865),B=n.n(O),E=n(3687),C=n(43427),y=n(15272),g={"popup-demo-base":{component:p.memo(p.lazy(function(){return n.e(8613).then(n.bind(n,49963))})),asset:{type:"BLOCK",id:"popup-demo-base",refAtomIds:["Popup"],dependencies:{"index.tsx":{type:"FILE",value:n(26107).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(81891).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"../../Button.tsx":{type:"FILE",value:n(77306).Z},"./popup.tsx":{type:"FILE",value:n(30226).Z},"./button.tsx":{type:"FILE",value:n(6458).Z},"./index.scss":{type:"FILE",value:n(21791).Z},"react-dom":{type:"NPM",value:"18.3.1"},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(98092).Z},"./popup-modal.tsx":{type:"FILE",value:n(67353).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../index.tsx":_,"../../DemoBlock.tsx":u,"../../Button.tsx":m,"./popup.tsx":f,"./button.tsx":P,"./index.scss":h,"./style.scss":E,"./popup-modal.tsx":C,react:l||(l=n.t(p,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup.tsx":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":h,"react-dom":a||(a=n.t(v,2)),classnames:O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/style.scss":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup-modal.tsx":C,"@trionesdev/antd-taro-icons-react/src":y},renderOpts:{compile:function(){var b=i()(r()().mark(function k(){var x,D=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(4521).then(n.bind(n,24521));case 2:return d.abrupt("return",(x=d.sent).default.apply(x,D));case 3:case"end":return d.stop()}},k)}));function M(){return b.apply(this,arguments)}return M}()}}}},49387:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return r}});var l=n(44194),a=n(91518),o=n(31549),r=function(i){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:i.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:i.children})]})}},91518:function(e,t,n){"use strict";n.r(t)},20941:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return a}});var l=n(99735);const a=[]},6458:function(e,t){"use strict";t.Z=`import "./style.scss"
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
`},26107:function(e,t){"use strict";t.Z=`import {DemoBlock} from '../../DemoBlock';
import React, {useEffect} from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);

  useEffect(() => {
    console.log("topOpen", topOpen)
  }, [topOpen])
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Popup open={topOpen} destroyOnClose={true} afterOpenChange={(o) => {
          setTopOpen(o);
        }}>
          <div style={{minHeight: "200px"}}>
            \u9876\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setTopOpen(true)
        }}>\u9876\u90E8\u5F39\u51FA</Button>

        <Popup open={bottomOpen} position={\`bottom\`} afterOpenChange={(o) => {
          setBottomOpen(o);
        }}>
          <div style={{minHeight: "200px"}}>
            \u5E95\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setBottomOpen(true)
        }}>\u5E95\u90E8\u5F39\u51FA</Button>

        <Popup open={leftOpen} position={\`left\`} afterOpenChange={(o) => {
          setLeftOpen(o);
        }}>
          <div style={{minWidth: "200px"}}>
            \u5DE6\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setLeftOpen(true)
        }}>\u5DE6\u90E8\u5F39\u51FA</Button>
        <Popup open={rightOpen} position={\`right\`} afterOpenChange={(o) => {
          setRightOpen(o);
        }}>
          <div style={{minWidth: "200px"}}>
            \u53F3\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setRightOpen(true)
        }}>\u53F3\u90E8\u5F39\u51FA</Button>
      </DemoBlock>
    </>
  );
};
`},81891:function(e,t){"use strict";t.Z=`import {Popup} from "./popup";

export default Popup;
`},67353:function(e,t){"use strict";t.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react/src";

const popupCls = "triones-antm-popup";

export type Position = "top" | "bottom" | "left" | "right";


export type PopupModalProps = {
  /**
   * @description \u6837\u5F0F
   * @default horizontal
   */
  styles?: {
    body?: CSSProperties;
  }
  /**
   * @description Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03
   * @default
   */
  afterClose?: () => void;
  /**
   * @description \u662F\u5426\u6253\u5F00
   * @default false
   */
  open?: boolean,
  /**
   * @description \u6253\u5F00\u4F4D\u7F6E
   * @default bottom
   */
  position?: Position
  /**
   * @description \u662F\u5426\u53EF\u4EE5\u5173\u95ED(\u663E\u793A\u5173\u95ED\u6309\u94AE)
   * @default false
   */
  closable?: boolean
  /**
   * @description \u662F\u5426\u8499\u5C42\u5173\u95ED
   * @default true
   */
  maskClosable?: boolean
  /**
   * @description \u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20
   * @default false
   */
  destroyOnClose?: boolean
  /**
   * @description \u8BBE\u7F6E Modal \u7684 z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * @description \u6253\u5F00\u548C\u5173\u95ED Modal \u65F6\u52A8\u753B\u7ED3\u675F\u540E\u7684\u56DE\u8C03
   * @default
   */
  afterOpenChange?: (open: boolean) => void;
  onDestroy?: () => void;

}

export const PopupModal: FC<PropsWithChildren<PopupModalProps>> = ({
                                                                     children,
                                                                     styles,
                                                                     afterClose,
                                                                     open,
                                                                     position = 'bottom',
                                                                     closable = false,
                                                                     maskClosable = true,
                                                                     destroyOnClose = false,
                                                                     zIndex = 1000,
                                                                     afterOpenChange,
                                                                     onDestroy
                                                                   }) => {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(open || false);
  const handleClose = () => {
    setInternalOpen(false);
    afterClose?.()
  }

  useEffect(() => {
    afterOpenChange?.(internalOpen!);
    if (!internalOpen) {
      if (destroyOnClose) {
        onDestroy?.()
      }
    }
  }, [internalOpen]);

  return <div className={classNames(popupCls)} style={{zIndex, display: internalOpen ? 'block' : 'none'}}>
    <div className={classNames(\`\${popupCls}-mask\`)} onClick={() => {
      if (maskClosable) {
        handleClose();
      }
    }}></div>
    <div className={classNames(\`\${popupCls}-body\`, \`\${popupCls}-\${position}\`)} style={styles?.body}>
      {closable && <>
        <CloseOutline className={classNames(\`\${popupCls}-close\`)} onClick={() => {
          handleClose()
        }}/>
      </>}
      {children}
    </div>
  </div>
}
`},30226:function(e,t){"use strict";t.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
import {createPortal} from "react-dom";
import {PopupModal, PopupModalProps} from "./popup-modal";


type PopupProps = Omit<PopupModalProps, 'onDestroy'> & {
  /**
   * @description \u83B7\u53D6\u5BB9\u5668
   * @default null
   */
  getContainer?: () => HTMLElement,
}
export const Popup: FC<PropsWithChildren<PopupProps>> = ({
                                                           children,
                                                           getContainer,
                                                           open = false,
                                                           ...rest
                                                         }) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || containerRef.current!;

  const Portal = () => {
    if (!mountRef.current) {
      mountRef.current = document.createElement("div");
      rootContainer.appendChild(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
      mountRef.current = null;
      setRenderEnable(false);
    }

    return <>{createPortal(<PopupModal {...rest} onDestroy={destroy}
                                       open={open}>{children}</PopupModal>, mountRef.current!)}</>

  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);


  return <>
    {!getContainer?.() && <div ref={containerRef}></div>}
    {renderEnable && <Portal/>}</>;
}
`},98092:function(e,t){"use strict";t.Z=`$popupCls: 'triones-antm-popup';

.#{$popupCls} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &-mask {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .55);
  }

  &-close {
    position: absolute;
    right: 10Px;
    top: 10Px;
  }

  &-body {
    background-color: white;

    position: fixed;
  }

  &-top {
    top: 0;
    left: 0;
    right: 0;
  }

  &-bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }

  &-left {
    left: 0;
    top: 0;
    bottom: 0;
  }

  &-right {
    right: 0;
    top: 0;
    bottom: 0;
  }
}
`},84176:function(e,t,n){var l=n(75863);function a(o,r){if(o==null)return{};var s=l(o,r),i,p;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(p=0;p<c.length;p++)i=c[p],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(o,i)&&(s[i]=o[i])}return s}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},75863:function(e){function t(n,l){if(n==null)return{};var a={},o=Object.keys(n),r,s;for(s=0;s<o.length;s++)r=o[s],!(l.indexOf(r)>=0)&&(a[r]=n[r]);return a}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
