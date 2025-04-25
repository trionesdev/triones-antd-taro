(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9710],{31610:function(o,e,n){"use strict";var d,l;n.r(e),n.d(e,{demos:function(){return K}});var a=n(90819),i=n.n(a),m=n(89933),p=n.n(m),f=n(44194),c=n(53560),O=n(76221),r=n(57180),C=n(65496),v=n(70030),t=n(56368),u=n(51865),P=n.n(u),s=n(39378),k=n.n(s),_=n(20530),y=n(92577),M=n(95922),h=n(11625),I=n(47371),x=n(56321),W=n(87900),E=n(52581),T=n(80150),g=n(11655),K={"picker-demo-base":{component:f.memo(f.lazy(function(){return n.e(9485).then(n.bind(n,23079))})),asset:{type:"BLOCK",id:"picker-demo-base",refAtomIds:["Picker"],dependencies:{"index.tsx":{type:"FILE",value:n(33893).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(94182).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(48873).Z},"../picker.tsx":{type:"FILE",value:n(25867).Z},"./button.tsx":{type:"FILE",value:n(3046).Z},"./index.scss":{type:"FILE",value:n(85634).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./style.scss":{type:"FILE",value:n(3668).Z},"../PickerView.tsx":{type:"FILE",value:n(19866).Z},"../Popup.tsx":{type:"FILE",value:n(23189).Z},"./picker-view.tsx":{type:"FILE",value:n(69919).Z},"./popup.tsx":{type:"FILE",value:n(64944).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./popup-modal.tsx":{type:"FILE",value:n(18913).Z},"./picker-view-column.tsx":{type:"FILE",value:n(87534).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./picker-view-column-item.tsx":{type:"FILE",value:n(50118).Z}},entry:"index.tsx"},context:{"../../Button.tsx":O,"../../DemoBlock.tsx":r,"../picker.tsx":C,"./button.tsx":v,"./index.scss":t,"./style.scss":_,"../PickerView.tsx":y,"../Popup.tsx":M,"./picker-view.tsx":h,"./popup.tsx":I,"./popup-modal.tsx":W,"./picker-view-column.tsx":E,"./picker-view-column-item.tsx":g,react:d||(d=n.t(f,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":r,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Picker/picker.tsx":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":t,classnames:u,lodash:s,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/style.scss":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/index.tsx":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/index.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view.tsx":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup.tsx":I,"react-dom":l||(l=n.t(x,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup-modal.tsx":W,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column.tsx":E,"@trionesdev/antd-taro-icons-react":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column-item.tsx":g},renderOpts:{compile:function(){var L=p()(i()().mark(function B(){var R,V=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,n.e(8029).then(n.bind(n,18029));case 2:return b.abrupt("return",(R=b.sent).default.apply(R,V));case 3:case"end":return b.stop()}},B)}));function A(){return L.apply(this,arguments)}return A}()}}}},70030:function(o,e,n){"use strict";n.r(e),n.d(e,{Button:function(){return C}});var d=n(10154),l=n.n(d),a=n(84176),i=n.n(a),m=n(13424),p=n(44194),f=n(51865),c=n.n(f),O=n(31549),r=["children","block","type","color","danger","disabled","className","style","icon","iconPosition","loading","variant","onClick"],C=function(t){var u=t.children,P=t.block,s=P===void 0?!1:P,k=t.type,_=k===void 0?"default":k,y=t.color,M=t.danger,h=M===void 0?!1:M,I=t.disabled,x=t.className,W=t.style,E=t.icon,T=t.iconPosition,g=T===void 0?"start":T,K=t.loading,L=t.variant,A=t.onClick,B=i()(t,r),R="triones-antm-button",V=y,D=L;return _&&(y||(_==="primary"||_==="link"?V="primary":_==="default"&&(V="default")),L||(_==="primary"?D="solid":_==="default"?D="outlined":(_==="dashed"||_==="link"||_==="text")&&(D=_))),h&&(V="danger"),(0,O.jsxs)("button",{onClick:A,className:c()(R,l()(l()(l()(l()({},"".concat(R,"-block"),s),"".concat(R,"-type-").concat(_),_),"".concat(R,"-color-").concat(V),V),"".concat(R,"-variant-").concat(D),D)),disabled:I,children:[g=="start"&&E,u,g=="end"&&E]})}},76221:function(o,e,n){"use strict";n.r(e);var d=n(70030);e.default=d.Button},57180:function(o,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return i}});var d=n(44194),l=n(56368),a=n(31549),i=function(p){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:p.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:p.children})]})}},65496:function(o,e,n){"use strict";n.r(e),n.d(e,{Picker:function(){return v}});var d=n(45332),l=n.n(d),a=n(44194),i=n(95922),m=n(51865),p=n.n(m),f=n(39378),c=n.n(f),O=n(92577),r=n(31549),C="triones-antm-picker",v=a.memo(function(t){var u=t.open,P=t.afterOpenChange,s=t.title,k=t.columns,_=t.labelInValue,y=_===void 0?!1:_,M=t.value,h=t.onOk,I=t.onCancel,x=t.onClose,W=(0,a.useState)(M||Array.from({length:c().size(k)}).map(function(){return null})),E=l()(W,2),T=E[0],g=E[1],K=a.useState(u||!1),L=l()(K,2),A=L[0],B=L[1],R=function(){B(!1),x==null||x()},V=function(){h==null||h(T),R()},D=function(){I==null||I(),R()};return(0,a.useEffect)(function(){P==null||P(A)},[A]),(0,a.useEffect)(function(){u!=null&&u!=A&&B(u)},[u]),(0,r.jsx)(i.default,{open:A,afterOpenChange:function(S){B(S)},styles:{body:{borderTopLeftRadius:6,borderTopRightRadius:6}},children:(0,r.jsxs)("div",{className:p()(C),children:[(0,r.jsxs)("div",{className:p()("".concat(C,"-header")),children:[(0,r.jsx)("a",{className:p()("".concat(C,"-header-button")),onClick:D,children:"\u53D6\u6D88"}),s&&(0,r.jsx)("div",{className:p()("".concat(C,"-header-title")),children:s}),(0,r.jsx)("a",{className:p()("".concat(C,"-header-button")),onClick:V,children:"\u786E\u5B9A"})]}),(0,r.jsx)("div",{className:p()("".concat(C,"-body")),children:(0,r.jsx)(O.default,{columns:k,labelInValue:y,value:T,onChange:function(S){g(S)}})})]})})})},92577:function(o,e,n){"use strict";n.r(e);var d=n(11625);e.default=d.PickerView},11655:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumnItem:function(){return p}});var d=n(51865),l=n.n(d),a=n(44194),i=n(31549),m="triones-antm-picker-view",p=function(c){var O=c.option;return(0,i.jsx)("div",{className:l()("".concat(m,"-column-item")),children:(0,i.jsx)("div",{className:"".concat(m,"-column-item-label"),children:O.label})})}},52581:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumn:function(){return C}});var d=n(45332),l=n.n(d),a=n(44194),i=n(51865),m=n.n(i),p=n(11655),f=n(39378),c=n.n(f),O=n(31549),r="triones-antm-picker-view",C=a.memo(function(v){var t=v.options,u=v.labelInValue,P=v.value,s=v.onChange,k=(0,a.useState)(P||null),_=l()(k,2),y=_[0],M=_[1],h=34,I=0,x=0-h*(c().size(t)-1),W=(0,a.useState)(!1),E=l()(W,2),T=E[0],g=E[1],K=a.useState(),L=l()(K,2),A=L[0],B=L[1],R=(0,a.useState)(0),V=l()(R,2),D=V[0],b=V[1],S=function(U){var N=c().findIndex(t,function($){return u?$.value===U.value:$.value===U});b(0-N*h)};return(0,a.useEffect)(function(){P!=null&&P!=y&&(M(P),S(P))},[P]),(0,a.useEffect)(function(){if(P)S(P);else{var j=u?t==null?void 0:t[0]:t==null?void 0:t[0].value;M(j||null),s==null||s(j||null),S(j)}},[t]),(0,O.jsx)("div",{className:m()("".concat(r,"-column")),children:(0,O.jsx)("div",{className:m()("".concat(r,"-column-wheel")),style:{transform:"translate3d(0, ".concat(D,"px, 0)")},onTouchStart:function(U){g(!0);var N={clientX:U.touches[0].clientX,clientY:U.touches[0].clientY};B(N)},onTouchMove:function(U){if(T){var N={clientX:U.touches[0].clientX,clientY:U.touches[0].clientY};if(D>I||D<x)return;b(D+(N.clientY-A.clientY)),B(N)}},onTouchEnd:function(U){g(!1);var N=0;if(D>0)b(0),N=0;else if(D<0-h*(c().size(t)-1))b(0-h*(c().size(t)-1)),N=c().size(t)-1;else{var $=Math.abs(Math.round(D/h));b(0-$*h),N=$}console.log("selectIndex",N);var w=u?t==null?void 0:t[N]:t==null?void 0:t[N].value;M(w),s==null||s(w)},children:!c().isEmpty(t)&&(t==null?void 0:t.map(function(j,U){return(0,O.jsx)(p.PickerViewColumnItem,{option:j},"view-column-".concat(U))}))})})})},11625:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerView:function(){return v}});var d=n(45332),l=n.n(d),a=n(51865),i=n.n(a),m=n(39378),p=n.n(m),f=n(52581),c=n(44194),O=n(10312),r=n(31549),C="triones-antm-picker-view",v=c.memo(function(t){var u=t.columns,P=t.labelInValue,s=t.value,k=t.onChange,_=(0,c.useState)(s||Array.from({length:p().size(u)}).map(function(){return null})),y=l()(_,2),M=y[0],h=y[1];return(0,c.useEffect)(function(){s!=null&&s!=M&&h(s)},[s]),(0,r.jsxs)("div",{className:i()("".concat(C)),children:[!p().isEmpty(u)&&(u==null?void 0:u.map(function(I,x){return(0,r.jsx)(f.PickerViewColumn,{labelInValue:P,options:I,value:s==null?void 0:s[x],onChange:function(E){M[x]=E,k==null||k(M)}},"column-".concat(x))})),(0,r.jsxs)("div",{className:i()("".concat(C,"-mask")),children:[(0,r.jsx)("div",{className:i()("".concat(C,"-mask-top"))}),(0,r.jsx)("div",{className:i()("".concat(C,"-mask-middle"))}),(0,r.jsx)("div",{className:i()("".concat(C,"-mask-bottom"))})]})]})})},95922:function(o,e,n){"use strict";n.r(e);var d=n(47371);e.default=d.Popup},87900:function(o,e,n){"use strict";n.r(e),n.d(e,{PopupModal:function(){return r}});var d=n(45332),l=n.n(d),a=n(44194),i=n(51865),m=n.n(i),p=n(20530),f=n(80150),c=n(31549),O="triones-antm-popup",r=function(v){var t=v.children,u=v.styles,P=v.afterClose,s=v.open,k=v.position,_=k===void 0?"bottom":k,y=v.closable,M=y===void 0?!1:y,h=v.maskClosable,I=h===void 0?!0:h,x=v.destroyOnClose,W=x===void 0?!1:x,E=v.zIndex,T=E===void 0?1e3:E,g=v.afterOpenChange,K=v.onDestroy,L=a.useState(s||!1),A=l()(L,2),B=A[0],R=A[1],V=function(){R(!1),P==null||P()};return(0,a.useEffect)(function(){g==null||g(B),B||W&&(K==null||K())},[B]),(0,a.useEffect)(function(){s!==void 0&&s!==B&&R(s)},[s]),(0,c.jsxs)("div",{className:m()(O),style:{zIndex:T,display:B?"block":"none"},children:[(0,c.jsx)("div",{className:m()("".concat(O,"-mask")),onClick:function(){I&&V()}}),(0,c.jsxs)("div",{className:m()("".concat(O,"-body"),"".concat(O,"-").concat(_)),style:u==null?void 0:u.body,children:[M&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(f.CloseOutline,{className:m()("".concat(O,"-close")),onClick:function(){V()}})}),t]})]})}},47371:function(o,e,n){"use strict";n.r(e),n.d(e,{Popup:function(){return v}});var d=n(73193),l=n.n(d),a=n(45332),i=n.n(a),m=n(84176),p=n.n(m),f=n(44194),c=n(56321),O=n(87900),r=n(31549),C=["children","getContainer","open"],v=function(u){var P=u.children,s=u.getContainer,k=u.open,_=k===void 0?!1:k,y=p()(u,C),M=f.useState(!1),h=i()(M,2),I=h[0],x=h[1],W=f.useRef(null),E=f.useRef(null),T=(s==null?void 0:s())||W.current,g=function(){E.current||(E.current=document.createElement("div"),T.appendChild(E.current));var L=function(){T&&E.current&&T.removeChild(E.current),E.current=null,x(!1)};return(0,r.jsx)(r.Fragment,{children:(0,c.createPortal)((0,r.jsx)(O.PopupModal,l()(l()({},y),{},{onDestroy:L,open:_,children:P})),E.current)})};return(0,f.useEffect)(function(){_&&!I&&x(!0)},[_]),(0,r.jsxs)(r.Fragment,{children:[!(s!=null&&s())&&(0,r.jsx)("div",{ref:W}),I&&(0,r.jsx)(g,{})]})}},13424:function(o,e,n){"use strict";n.r(e)},56368:function(o,e,n){"use strict";n.r(e)},10312:function(o,e,n){"use strict";n.r(e)},20530:function(o,e,n){"use strict";n.r(e)},58174:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return l}});var d=n(53560);const l=[]},3046:function(o,e){"use strict";e.Z=`import "./style.scss"
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
`},94182:function(o,e){"use strict";e.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},85634:function(o,e){"use strict";e.Z=`.demoBlock {
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
`},48873:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},33893:function(o,e){"use strict";e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {Picker} from "../picker";
import Button from "../../Button";

export default () => {
  const [open, setOpen] = React.useState(false);
  const basicColumns = [
    [
      {label: '\u5468\u4E00', value: 'Mon'},
      {label: '\u5468\u4E8C', value: 'Tues'},
      {label: '\u5468\u4E09', value: 'Wed'},
      {label: '\u5468\u56DB', value: 'Thur'},
      {label: '\u5468\u4E94', value: 'Fri'},
    ],
    [
      {label: '\u4E0A\u5348', value: 'am'},
      {label: '\u4E0B\u5348', value: 'pm'},
    ],
  ]
  return <>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Picker open={open} afterOpenChange={(o) => {
        setOpen(o);
      }} columns={basicColumns} value={["Fri"]} onOk={(v)=>{
        console.log(v)
      }}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>\u9009\u62E9</Button>
    </DemoBlock>
  </>
}
`},25867:function(o,e){"use strict";e.Z=`import React, {FC, useEffect, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import _ from "lodash";
import PickerView, {PickerColumnOption} from "../PickerView";

const pickerCls = "triones-antm-picker";

export type PickerProps = {
  open?: boolean
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode
  columns?: PickerColumnOption[][]
  /**
   * @description \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE string \u53D8\u4E3A { value: string, label: ReactNode } \u7684\u683C\u5F0F
   * @default false
   */
  labelInValue?: boolean
  value?: any[],
  onOk: (value: any[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export const Picker: FC<PickerProps> = React.memo(({
                                                     open,
                                                     afterOpenChange,
                                                     title,
                                                     columns,
                                                     labelInValue = false,
                                                     value, onOk,
                                                     onCancel,
                                                     onClose
                                                   }) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }
  const handleOk = () => {
    onOk?.(internalValue)
    handleClose()
  }

  const handelCancel = () => {
    onCancel?.()
    handleClose()
  }

  useEffect(() => {
    afterOpenChange?.(innerOpen)
  }, [innerOpen]);

  useEffect(() => {
    if (open == undefined) {
      return;
    }
    if (open == innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open]);

  return <Popup open={innerOpen} afterOpenChange={(o)=>{setInnerOpen(o)}} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(pickerCls)}>
      <div className={classNames(\`\${pickerCls}-header\`)}>
        <a className={classNames(\`\${pickerCls}-header-button\`)} onClick={handelCancel}>\u53D6\u6D88</a>
        {title && <div className={classNames(\`\${pickerCls}-header-title\`)}>{title}</div>}
        <a className={classNames(\`\${pickerCls}-header-button\`)} onClick={handleOk}>\u786E\u5B9A</a>
      </div>
      <div className={classNames(\`\${pickerCls}-body\`)}>
        <PickerView columns={columns}
                    labelInValue={labelInValue}
                    value={internalValue}
                    onChange={(v) => {
                      setInternalValue(v)
                    }}/>
      </div>
    </div>
  </Popup>
})
`},19866:function(o,e){"use strict";e.Z=`import {PickerView} from "./picker-view"
import {PickerColumnOption} from "./types"
export type {
  PickerColumnOption
}
export default PickerView
`},50118:function(o,e){"use strict";e.Z=`import classNames from "classnames";
import React, {FC} from "react";
import { PickerColumnOption} from "./types";

const pickerViewCls = "triones-antm-picker-view";

type PickerViewColumnItemProps = {
  option: PickerColumnOption
}
export const PickerViewColumnItem: FC<PickerViewColumnItemProps> = ({

                                                                      option,
                                                                    }) => {
  return <div className={classNames(\`\${pickerViewCls}-column-item\`)}>
    <div className={\`\${pickerViewCls}-column-item-label\`}>
      {option.label}
    </div>
  </div>
}
`},87534:function(o,e){"use strict";e.Z=`import React, {FC, useEffect, useState} from "react"
import classNames from "classnames";
import {PickerViewColumnItem} from "./picker-view-column-item";
import _ from "lodash";
import {PickerColumnOption} from "./types";

const pickerViewCls = "triones-antm-picker-view";

type PickerViewColumnProps = {
  options?: PickerColumnOption[]
  labelInValue?: boolean
  value?: any
  onChange?: (value: any, index?: number) => void
}

export const PickerViewColumn: FC<PickerViewColumnProps> = React.memo(
  ({
     options,
     labelInValue,
     value,
     onChange,
   }) => {
    const [internalValue, setInternalValue] = useState<any>(value || null);
    const itemHeight = 34;
    const max = 0;
    const min = 0 - (itemHeight * (_.size(options) - 1));
    const [touching, setTouching] = useState<boolean>(false);
    const [touchPoint, setTouchPoint] = React.useState<any>();
    const [translateY, setTranslateY] = useState(0)

    const handleSelectOption = (selectValue: any) => {
      const valueIndex = _.findIndex(options, (option) => {
        if (labelInValue) {
          return option.value === selectValue.value;
        }
        return option.value === selectValue
      })
      setTranslateY(0 - (valueIndex * itemHeight));
    }

    useEffect(() => {
      if (value == undefined) {
        return;
      }
      if (value == internalValue) {
        return;
      }
      setInternalValue(value)
      handleSelectOption(value)
    }, [value]);

    useEffect(() => {
      if (!value) {
        const selectValue = labelInValue ? options?.[0] : options?.[0].value
        setInternalValue(selectValue || null);
        onChange?.(selectValue || null);
        handleSelectOption(selectValue);
      } else {
        handleSelectOption(value);
      }
    }, [options]);

    return <div className={classNames(\`\${pickerViewCls}-column\`)}>
      <div className={classNames(\`\${pickerViewCls}-column-wheel\`)}
           style={{transform: \`translate3d(0, \${translateY}px, 0)\`}}
           onTouchStart={(event) => {
             setTouching(true);
             const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTouchPoint(startPoint);
           }}
           onTouchMove={(event) => {
             if (touching) {
               const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
               if (translateY > max || translateY < min) {
                 return;
               }
               setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
               setTouchPoint(movePoint);
             }
           }}
           onTouchEnd={(event) => {
             setTouching(false);
             let selectIndex = 0;
             if (translateY > 0) {
               setTranslateY(0);
               selectIndex = 0;
             } else if (translateY < (0 - itemHeight * (_.size(options) - 1))) {
               setTranslateY(0 - itemHeight * (_.size(options) - 1));
               selectIndex = _.size(options) - 1;
             } else {
               const num = Math.abs(Math.round(translateY / itemHeight));
               setTranslateY(0 - num * itemHeight);
               selectIndex = num;
             }
             console.log("selectIndex", selectIndex)
             const selectValue = labelInValue ? options?.[selectIndex] : options?.[selectIndex].value
             setInternalValue(selectValue);
             onChange?.(selectValue);
           }}
      >
        {!_.isEmpty(options) && options?.map((option: any, index: number) => {
          return <PickerViewColumnItem option={option} key={\`view-column-\${index}\`}/>
        })}
      </div>
    </div>
  }
)
`},69919:function(o,e){"use strict";e.Z=`import classNames from "classnames";
import _ from "lodash";
import {PickerViewColumn} from "./picker-view-column";
import React, {FC, useEffect, useState} from "react";
import { PickerColumnOption} from "./types";
import "./style.scss"

const pickerViewCls = "triones-antm-picker-view";
type PickerViewProps = {
  columns?: PickerColumnOption[][]
  labelInValue?: boolean
  value?: any[]
  onChange?: (value: any[]) => void
}
export const PickerView: FC<PickerViewProps> = React.memo(({columns, labelInValue, value, onChange}) => {
  const [internalValue, setInternalValue] = useState(value || Array.from({length: _.size(columns)}).map(() => null))
  useEffect(() => {
    if (value == undefined) {
      return;
    }
    if (value == internalValue) {
      return;
    }
    setInternalValue(value);
  }, [value]);
  return <div className={classNames(\`\${pickerViewCls}\`)}>
    {!_.isEmpty(columns) && columns?.map((column: any, index: number) => {
      return <PickerViewColumn key={\`column-\${index}\`} labelInValue={labelInValue}
                               options={column}
                               value={value?.[index]}
                               onChange={(v) => {
                                 internalValue[index] = v;
                                 onChange?.(internalValue)
                               }}
      />
    })}
    <div className={classNames(\`\${pickerViewCls}-mask\`)}>
      <div className={classNames(\`\${pickerViewCls}-mask-top\`)}/>
      <div className={classNames(\`\${pickerViewCls}-mask-middle\`)}/>
      <div className={classNames(\`\${pickerViewCls}-mask-bottom\`)}/>
    </div>
  </div>
})
`},23189:function(o,e){"use strict";e.Z=`import {Popup,PopupProps} from "./popup";

export type {PopupProps}
export default Popup;
`},18913:function(o,e){"use strict";e.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react";

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

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open === internalOpen) {
      return;
    }
    setInternalOpen(open);
  }, [open]);

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
`},64944:function(o,e){"use strict";e.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
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
`},3668:function(o,e){"use strict";e.Z=`$popupCls: 'triones-antm-popup';

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
`},84176:function(o,e,n){var d=n(75863);function l(a,i){if(a==null)return{};var m=d(a,i),p,f;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(f=0;f<c.length;f++)p=c[f],!(i.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(m[p]=a[p])}return m}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function e(n,d){if(n==null)return{};var l={},a=Object.keys(n),i,m;for(m=0;m<a.length;m++)i=a[m],!(d.indexOf(i)>=0)&&(l[i]=n[i]);return l}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
