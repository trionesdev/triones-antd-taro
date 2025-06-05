(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[2122],{80215:function(t,e,n){"use strict";n.r(e),n.d(e,{Button:function(){return P}});var d=n(10154),s=n.n(d),a=n(84176),c=n.n(a),_=n(7827),f=n(44194),m=n(51865),p=n.n(m),o=n(31549),i=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],P=function(u){var b=u.children,C=u.block,v=C===void 0?!1:C,y=u.type,l=y===void 0?"default":y,R=u.color,A=u.danger,g=A===void 0?!1:A,N=u.disabled,B=u.className,W=u.style,E=u.icon,O=u.iconPosition,M=O===void 0?"start":O,j=u.loading,I=u.variant,T=u.onClick,L=c()(u,i),h="triones-antm-button",x=R,D=I;return l&&(R||(l==="primary"||l==="link"?x="primary":l==="default"&&(x="default")),I||(l==="primary"?D="solid":l==="default"?D="outlined":(l==="dashed"||l==="link"||l==="text")&&(D=l))),g&&(x="danger"),(0,o.jsxs)("button",{onClick:T,className:p()(h,s()(s()(s()(s()({},"".concat(h,"-block"),v),"".concat(h,"-type-").concat(l),l),"".concat(h,"-color-").concat(x),x),"".concat(h,"-variant-").concat(D),D)),disabled:N,children:[M=="start"&&E,b,M=="end"&&E]})}},20945:function(t,e,n){"use strict";n.r(e);var d=n(80215);e.default=d.Button},95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return c}});var d=n(44194),s=n(3837),a=n(31549),c=function(f){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:f.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:f.children})]})}},49632:function(t,e,n){"use strict";n.r(e);var d=n(6990);e.default=d.Popup},36958:function(t,e,n){"use strict";n.r(e),n.d(e,{PopupModal:function(){return i}});var d=n(45332),s=n.n(d),a=n(44194),c=n(51865),_=n.n(c),f=n(72995),m=n(93794),p=n(31549),o="triones-antm-popup",i=function(r){var u=r.children,b=r.styles,C=r.afterClose,v=r.open,y=r.position,l=y===void 0?"bottom":y,R=r.closable,A=R===void 0?!1:R,g=r.maskClosable,N=g===void 0?!0:g,B=r.destroyOnClose,W=B===void 0?!1:B,E=r.zIndex,O=E===void 0?1e3:E,M=r.afterOpenChange,j=r.onDestroy,I=(0,a.useMemo)(function(){if(l==="bottom")return"bottom";if(l==="top")return"top"},[l]),T=a.useState(v||!1),L=s()(T,2),h=L[0],x=L[1],D=function(){x(!1),C==null||C()};return(0,a.useEffect)(function(){M==null||M(h),h||W&&(j==null||j())},[h]),(0,a.useEffect)(function(){v!==void 0&&v!==h&&x(v)},[v]),(0,p.jsxs)("div",{className:_()(o),style:{zIndex:O,display:h?"block":"none"},children:[(0,p.jsx)("div",{className:_()("".concat(o,"-mask")),onClick:function(){N&&D()}}),(0,p.jsxs)("div",{className:_()("".concat(o,"-body"),"".concat(o,"-").concat(l)),style:b==null?void 0:b.body,children:[A&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f.CloseOutline,{className:_()("".concat(o,"-close")),onClick:function(){D()}})}),(0,p.jsx)(m.default,{position:I,children:u})]})]})}},6990:function(t,e,n){"use strict";n.r(e),n.d(e,{Popup:function(){return r}});var d=n(73193),s=n.n(d),a=n(45332),c=n.n(a),_=n(84176),f=n.n(_),m=n(44194),p=n(56321),o=n(36958),i=n(31549),P=["children","getContainer","open"],r=function(b){var C=b.children,v=b.getContainer,y=b.open,l=y===void 0?!1:y,R=f()(b,P),A=m.useState(!1),g=c()(A,2),N=g[0],B=g[1],W=m.useRef(null),E=m.useRef(null),O=(v==null?void 0:v())||W.current,M=function(){E.current||(E.current=document.createElement("div"),O.appendChild(E.current));var I=function(){O&&E.current&&O.removeChild(E.current),E.current=null,B(!1)};return(0,i.jsx)(i.Fragment,{children:(0,p.createPortal)((0,i.jsx)(o.PopupModal,s()(s()({},R),{},{onDestroy:I,open:l,children:C})),E.current)})};return(0,m.useEffect)(function(){l&&!N&&B(!0)},[l]),(0,i.jsxs)(i.Fragment,{children:[!(v!=null&&v())&&(0,i.jsx)("div",{ref:W}),N&&(0,i.jsx)(M,{})]})}},93794:function(t,e,n){"use strict";n.r(e);var d=n(82281),s=n(27318);e.default=d.SafeArea},82281:function(t,e,n){"use strict";n.r(e),n.d(e,{SafeArea:function(){return i}});var d=n(84176),s=n.n(d),a=n(44194),c=n(78252),_=n(51865),f=n.n(_),m=n(31549),p=["position"],o="triones-antm-safe-area",i=function(r){var u=r.position,b=u===void 0?"top":u,C=s()(r,p);return(0,c.withNativeProps)(C,(0,m.jsx)("div",{className:f()(o,"".concat(o,"-position-").concat(b)),children:C.children}))}},78252:function(t,e,n){"use strict";n.r(e),n.d(e,{attachPropertiesToComponent:function(){return m},toCSSLength:function(){return p},withNativeProps:function(){return f}});var d=n(73193),s=n.n(d),a=n(44194),c=n(51865),_=n.n(c);function f(o,i){var P=s()({},i.props);o.className&&(P.className=_()(i.props.className,o.className)),o.style&&(P.style=s()(s()({},P.style),o.style)),o.tabIndex!==void 0&&(P.tabIndex=o.tabIndex);for(var r in o)o.hasOwnProperty(r)&&(r.startsWith("data-")||r.startsWith("aria-"))&&(P[r]=o[r]);return a.cloneElement(i,P)}function m(o,i){var P=o;for(var r in i)i.hasOwnProperty(r)&&(P[r]=i[r]);return P}function p(o){return typeof o=="number"?"".concat(o,"px"):o}},7827:function(t,e,n){"use strict";n.r(e)},3837:function(t,e,n){"use strict";n.r(e)},27318:function(t,e,n){"use strict";n.r(e)},94156:function(t,e){"use strict";e.Z=`import "./style.scss"
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
`},99544:function(t,e){"use strict";e.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},72973:function(t,e){"use strict";e.Z=`.demoBlock {
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
`},23624:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},68609:function(t,e){"use strict";e.Z=`import {Popup,PopupProps} from "./popup";

export type {PopupProps}
export default Popup;
`},63166:function(t,e){"use strict";e.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect, useMemo} from "react";
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
`},56639:function(t,e){"use strict";e.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
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
`},75848:function(t,e){"use strict";e.Z=`import { SafeArea } from './safe-area';
import './style.scss';

export type { SafeAreaProps } from './safe-area';

export default SafeArea;
`},46451:function(t,e){"use strict";e.Z=`import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  /**
   * @description \u5B89\u5168\u533A\u4F4D\u7F6E
   * @default top
   */
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = ({ position = 'top', ...props }) => {
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, \`\${classPrefix}-position-\${position}\`)}
    >
      {props.children}
    </div>,
  );
};
`},4888:function(t,e){"use strict";e.Z=`@import "../style/variable";

$class-prefix-safe-area: 'triones-antm-safe-area';

.#{$class-prefix-safe-area} {
  --multiple: var($trionesSafeAreaMultiple, 1);
  display: block;
  width: 100%;

  &-position-top {
    padding-top: calc(env(safe-area-inset-top) * var(--multiple));
  }

  &-position-bottom {
    padding-bottom: calc(env(safe-area-inset-bottom) * var(--multiple));
  }
}
`},78892:function(t,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
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
`},84176:function(t,e,n){var d=n(75863);function s(a,c){if(a==null)return{};var _=d(a,c),f,m;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(m=0;m<p.length;m++)f=p[m],!(c.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(a,f)&&(_[f]=a[f])}return _}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,d){if(n==null)return{};var s={},a=Object.keys(n),c,_;for(_=0;_<a.length;_++)c=a[_],!(d.indexOf(c)>=0)&&(s[c]=n[c]);return s}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
