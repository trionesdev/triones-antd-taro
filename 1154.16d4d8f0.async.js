(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1154],{80215:function(t,e,n){"use strict";n.r(e),n.d(e,{Button:function(){return P}});var d=n(10154),s=n.n(d),r=n(84176),c=n.n(r),l=n(7827),p=n(44194),_=n(51865),f=n.n(_),o=n(31549),u=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],P=function(m){var b=m.children,y=m.block,v=y===void 0?!1:y,h=m.type,i=h===void 0?"default":h,R=m.color,A=m.danger,g=A===void 0?!1:A,N=m.disabled,B=m.className,W=m.style,C=m.icon,O=m.iconPosition,M=O===void 0?"start":O,T=m.loading,I=m.variant,j=m.onClick,S=c()(m,u),E="triones-antm-button",x=R,D=I;return i&&(R||(i==="primary"||i==="link"?x="primary":i==="default"&&(x="default")),I||(i==="primary"?D="solid":i==="default"?D="outlined":(i==="dashed"||i==="link"||i==="text")&&(D=i))),g&&(x="danger"),(0,o.jsxs)("button",{onClick:j,className:f()(E,s()(s()(s()(s()({},"".concat(E,"-block"),v),"".concat(E,"-type-").concat(i),i),"".concat(E,"-color-").concat(x),x),"".concat(E,"-variant-").concat(D),D)),disabled:N,children:[M=="start"&&C,b,M=="end"&&C]})}},20945:function(t,e,n){"use strict";n.r(e);var d=n(80215);e.default=d.Button},95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return c}});var d=n(44194),s=n(3837),r=n(31549),c=function(p){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:p.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:p.children})]})}},49632:function(t,e,n){"use strict";n.r(e);var d=n(6990);e.default=d.Popup},36958:function(t,e,n){"use strict";n.r(e),n.d(e,{PopupModal:function(){return u}});var d=n(45332),s=n.n(d),r=n(44194),c=n(51865),l=n.n(c),p=n(47323),_=n(93794),f=n(31549),o="triones-antm-popup",u=function(a){var m=a.children,b=a.styles,y=a.afterClose,v=a.open,h=a.position,i=h===void 0?"bottom":h,R=a.closable,A=R===void 0?!1:R,g=a.maskClosable,N=g===void 0?!0:g,B=a.destroyOnClose,W=B===void 0?!1:B,C=a.zIndex,O=C===void 0?1e3:C,M=a.afterOpenChange,T=a.onDestroy,I=(0,r.useMemo)(function(){if(i==="bottom")return"bottom";if(i==="top")return"top"},[i]),j=r.useState(v||!1),S=s()(j,2),E=S[0],x=S[1],D=function(){x(!1),y==null||y()};return(0,r.useEffect)(function(){M==null||M(E),E||W&&(T==null||T())},[E]),(0,r.useEffect)(function(){v!==void 0&&v!==E&&x(v)},[v]),(0,f.jsxs)("div",{className:l()(o),style:{zIndex:O,display:E?"block":"none"},children:[(0,f.jsx)("div",{className:l()("".concat(o,"-mask")),onClick:function(){N&&D()}}),(0,f.jsxs)("div",{className:l()("".concat(o,"-body"),"".concat(o,"-").concat(i)),style:b==null?void 0:b.body,children:[A&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(p.CloseOutline,{className:l()("".concat(o,"-close")),onClick:function(){D()}})}),(0,f.jsx)(_.default,{position:I,children:m})]})]})}},6990:function(t,e,n){"use strict";n.r(e),n.d(e,{Popup:function(){return a}});var d=n(73193),s=n.n(d),r=n(45332),c=n.n(r),l=n(84176),p=n.n(l),_=n(44194),f=n(56321),o=n(36958),u=n(31549),P=["children","getContainer","open"],a=function(b){var y=b.children,v=b.getContainer,h=b.open,i=h===void 0?!1:h,R=p()(b,P),A=_.useState(!1),g=c()(A,2),N=g[0],B=g[1],W=_.useRef(null),C=_.useRef(null),O=(v==null?void 0:v())||W.current,M=function(){C.current||(C.current=document.createElement("div"),O.appendChild(C.current));var I=function(){O&&C.current&&O.removeChild(C.current),C.current=null,B(!1)};return(0,u.jsx)(u.Fragment,{children:(0,f.createPortal)((0,u.jsx)(o.PopupModal,s()(s()({},R),{},{onDestroy:I,open:i,children:y})),C.current)})};return(0,_.useEffect)(function(){i&&!N&&B(!0)},[i]),(0,u.jsxs)(u.Fragment,{children:[!(v!=null&&v())&&(0,u.jsx)("div",{ref:W}),N&&(0,u.jsx)(M,{})]})}},93794:function(t,e,n){"use strict";n.r(e);var d=n(82281),s=n(27318);e.default=d.SafeArea},82281:function(t,e,n){"use strict";n.r(e),n.d(e,{SafeArea:function(){return _}});var d=n(44194),s=n(78252),r=n(51865),c=n.n(r),l=n(31549),p="triones-antm-safe-area",_=function(o){return(0,s.withNativeProps)(o,(0,l.jsx)("div",{className:c()(p,"".concat(p,"-position-").concat(o.position)),children:o.children}))}},78252:function(t,e,n){"use strict";n.r(e),n.d(e,{attachPropertiesToComponent:function(){return _},toCSSLength:function(){return f},withNativeProps:function(){return p}});var d=n(73193),s=n.n(d),r=n(44194),c=n(51865),l=n.n(c);function p(o,u){var P=s()({},u.props);o.className&&(P.className=l()(u.props.className,o.className)),o.style&&(P.style=s()(s()({},P.style),o.style)),o.tabIndex!==void 0&&(P.tabIndex=o.tabIndex);for(var a in o)o.hasOwnProperty(a)&&(a.startsWith("data-")||a.startsWith("aria-"))&&(P[a]=o[a]);return r.cloneElement(u,P)}function _(o,u){var P=o;for(var a in u)u.hasOwnProperty(a)&&(P[a]=u[a]);return P}function f(o){return typeof o=="number"?"".concat(o,"px"):o}},7827:function(t,e,n){"use strict";n.r(e)},3837:function(t,e,n){"use strict";n.r(e)},27318:function(t,e,n){"use strict";n.r(e)},69387:function(t,e){"use strict";e.Z=`import "./style.scss"
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
`},3275:function(t,e){"use strict";e.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},63119:function(t,e){"use strict";e.Z=`.demoBlock {
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
`},92724:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},5548:function(t,e){"use strict";e.Z=`import {Popup,PopupProps} from "./popup";

export type {PopupProps}
export default Popup;
`},99144:function(t,e){"use strict";e.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect, useMemo} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react";
import SafeArea from "../SafeArea";

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
  const safeAreaPosition = useMemo(() => {
    if (position === 'bottom') {
      return 'bottom'
    } else if (position === 'top') {
      return 'top'
    }
    return undefined
  }, [position])
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

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open === internalOpen) {
      return;
    }
    setInternalOpen(open);
  }, [open]);

  return (<div className={classNames(popupCls)} style={{zIndex, display: internalOpen ? 'block' : 'none'}}>
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
      <SafeArea position={safeAreaPosition}>
        {children}
      </SafeArea>
    </div>
  </div>)

}
`},87949:function(t,e){"use strict";e.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
import {createPortal} from "react-dom";
import {PopupModal, PopupModalProps} from "./popup-modal";


export type PopupProps = Omit<PopupModalProps, 'onDestroy'> & {
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
`},22211:function(t,e){"use strict";e.Z=`import { SafeArea } from './safe-area';
import './style.scss';

export type { SafeAreaProps } from './safe-area';

export default SafeArea;
`},65826:function(t,e){"use strict";e.Z=`import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = (props) => {
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        \`\${classPrefix}-position-\${props.position}\`,
      )}
    >{props.children}</div>,
  );
};
`},69825:function(t,e){"use strict";e.Z=`$class-prefix-safe-area: 'triones-antm-safe-area';

.#{$class-prefix-safe-area} {
  --multiple: var(--triones-antm-safe-area-multiple, 1);
  display: block;
  width: 100%;
  &-position-top {
    padding-top: calc(env(safe-area-inset-top) * var(--multiple));
  }
  &-position-bottom {
    padding-bottom: calc(env(safe-area-inset-bottom) * var(--multiple));
  }
}
`},27930:function(t,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
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
`},84176:function(t,e,n){var d=n(75863);function s(r,c){if(r==null)return{};var l=d(r,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(r,p)&&(l[p]=r[p])}return l}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,d){if(n==null)return{};var s={},r=Object.keys(n),c,l;for(l=0;l<r.length;l++)c=r[l],!(d.indexOf(c)>=0)&&(s[c]=n[c]);return s}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
