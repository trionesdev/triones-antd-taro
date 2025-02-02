(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9710],{12538:function(o,e,n){"use strict";var d,l;n.r(e),n.d(e,{demos:function(){return S}});var a=n(90819),s=n.n(a),u=n(89933),r=n.n(u),v=n(44194),m=n(88107),O=n(93977),i=n(49387),p=n(61272),k=n(37180),t=n(91518),_=n(51865),P=n.n(_),c=n(39378),V=n.n(c),y=n(3687),R=n(99278),E=n(70162),h=n(44164),I=n(73079),x=n(56321),N=n(43427),g=n(13889),K=n(15272),L=n(95110),S={"picker-demo-base":{component:v.memo(v.lazy(function(){return n.e(9485).then(n.bind(n,99829))})),asset:{type:"BLOCK",id:"picker-demo-base",refAtomIds:["Picker"],dependencies:{"index.tsx":{type:"FILE",value:n(7513).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(77306).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"../picker.tsx":{type:"FILE",value:n(23115).Z},"./button.tsx":{type:"FILE",value:n(6458).Z},"./index.scss":{type:"FILE",value:n(21791).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./style.scss":{type:"FILE",value:n(98092).Z},"../PickerView.tsx":{type:"FILE",value:n(93452).Z},"../Popup.tsx":{type:"FILE",value:n(81891).Z},"./picker-view.tsx":{type:"FILE",value:n(40871).Z},"./popup.tsx":{type:"FILE",value:n(30226).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./popup-modal.tsx":{type:"FILE",value:n(67353).Z},"./picker-view-column.tsx":{type:"FILE",value:n(26585).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./picker-view-column-item.tsx":{type:"FILE",value:n(59105).Z}},entry:"index.tsx"},context:{"../../Button.tsx":O,"../../DemoBlock.tsx":i,"../picker.tsx":p,"./button.tsx":k,"./index.scss":t,"./style.scss":y,"../PickerView.tsx":R,"../Popup.tsx":E,"./picker-view.tsx":h,"./popup.tsx":I,"./popup-modal.tsx":N,"./picker-view-column.tsx":g,"./picker-view-column-item.tsx":L,react:d||(d=n.t(v,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Picker/picker.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":k,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":t,classnames:_,lodash:c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/style.scss":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/index.tsx":R,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/index.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view.tsx":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup.tsx":I,"react-dom":l||(l=n.t(x,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup-modal.tsx":N,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column.tsx":g,"@trionesdev/antd-taro-icons-react/src":K,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column-item.tsx":L},renderOpts:{compile:function(){var A=r()(s()().mark(function B(){var W,U=arguments;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,n.e(4521).then(n.bind(n,24521));case 2:return f.abrupt("return",(W=f.sent).default.apply(W,U));case 3:case"end":return f.stop()}},B)}));function T(){return A.apply(this,arguments)}return T}()}}}},49387:function(o,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return s}});var d=n(44194),l=n(91518),a=n(31549),s=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},61272:function(o,e,n){"use strict";n.r(e),n.d(e,{Picker:function(){return k}});var d=n(45332),l=n.n(d),a=n(44194),s=n(70162),u=n(51865),r=n.n(u),v=n(39378),m=n.n(v),O=n(99278),i=n(31549),p="triones-antm-picker",k=a.memo(function(t){var _=t.open,P=t.afterOpenChange,c=t.title,V=t.columns,y=t.labelInValue,R=y===void 0?!1:y,E=t.value,h=t.onOk,I=t.onCancel,x=t.onClose,N=(0,a.useState)(E||Array.from({length:m().size(V)}).map(function(){return null})),g=l()(N,2),K=g[0],L=g[1],S=a.useState(_||!1),A=l()(S,2),T=A[0],B=A[1],W=function(){B(!1),x==null||x()},U=function(){h==null||h(K),W()},D=function(){I==null||I(),W()};return(0,a.useEffect)(function(){P==null||P(T)},[T]),(0,a.useEffect)(function(){_!=null&&_!=T&&B(_)},[_]),(0,i.jsx)(s.default,{open:T,afterOpenChange:function(w){B(w)},styles:{body:{borderTopLeftRadius:6,borderTopRightRadius:6}},children:(0,i.jsxs)("div",{className:r()(p),children:[(0,i.jsxs)("div",{className:r()("".concat(p,"-header")),children:[(0,i.jsx)("a",{className:r()("".concat(p,"-header-button")),onClick:D,children:"\u53D6\u6D88"}),c&&(0,i.jsx)("div",{className:r()("".concat(p,"-header-title")),children:c}),(0,i.jsx)("a",{className:r()("".concat(p,"-header-button")),onClick:U,children:"\u786E\u5B9A"})]}),(0,i.jsx)("div",{className:r()("".concat(p,"-body")),children:(0,i.jsx)(O.default,{columns:V,labelInValue:R,value:K,onChange:function(w){L(w)}})})]})})})},99278:function(o,e,n){"use strict";n.r(e);var d=n(44164);e.default=d.PickerView},95110:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumnItem:function(){return r}});var d=n(51865),l=n.n(d),a=n(44194),s=n(31549),u="triones-antm-picker-view",r=function(m){var O=m.option;return(0,s.jsx)("div",{className:l()("".concat(u,"-column-item")),children:(0,s.jsx)("div",{className:"".concat(u,"-column-item-label"),children:O.label})})}},13889:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumn:function(){return p}});var d=n(45332),l=n.n(d),a=n(44194),s=n(51865),u=n.n(s),r=n(95110),v=n(39378),m=n.n(v),O=n(31549),i="triones-antm-picker-view",p=a.memo(function(k){var t=k.options,_=k.labelInValue,P=k.value,c=k.onChange,V=(0,a.useState)(P||null),y=l()(V,2),R=y[0],E=y[1],h=34,I=0,x=0-h*(m().size(t)-1),N=(0,a.useState)(!1),g=l()(N,2),K=g[0],L=g[1],S=a.useState(),A=l()(S,2),T=A[0],B=A[1],W=(0,a.useState)(0),U=l()(W,2),D=U[0],f=U[1],w=function(M){var C=m().findIndex(t,function(j){return _?j.value===M.value:j.value===M});f(0-C*h)};return(0,a.useEffect)(function(){P!=null&&P!=R&&(E(P),w(P))},[P]),(0,a.useEffect)(function(){if(P)w(P);else{var b=_?t==null?void 0:t[0]:t==null?void 0:t[0].value;E(b||null),c==null||c(b||null),w(b)}},[t]),(0,O.jsx)("div",{className:u()("".concat(i,"-column")),children:(0,O.jsx)("div",{className:u()("".concat(i,"-column-wheel")),style:{transform:"translate3d(0, ".concat(D,"px, 0)")},onTouchStart:function(M){L(!0);var C={clientX:M.touches[0].clientX,clientY:M.touches[0].clientY};B(C)},onTouchMove:function(M){if(K){var C={clientX:M.touches[0].clientX,clientY:M.touches[0].clientY};if(D>I||D<x)return;f(D+(C.clientY-T.clientY)),B(C),console.log(C)}},onTouchEnd:function(M){L(!1);var C=0;if(D>0)f(0),C=0;else if(D<0-h*(m().size(t)-1))f(0-h*(m().size(t)-1)),C=m().size(t)-1;else{var j=Math.abs(Math.round(D/h));f(0-j*h),C=j}console.log("selectIndex",C);var $=_?t==null?void 0:t[C]:t==null?void 0:t[C].value;E($),c==null||c($)},children:!m().isEmpty(t)&&(t==null?void 0:t.map(function(b,M){return(0,O.jsx)(r.PickerViewColumnItem,{option:b},"view-column-".concat(M))}))})})})},44164:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerView:function(){return k}});var d=n(45332),l=n.n(d),a=n(51865),s=n.n(a),u=n(39378),r=n.n(u),v=n(13889),m=n(44194),O=n(83740),i=n(31549),p="triones-antm-picker-view",k=m.memo(function(t){var _=t.columns,P=t.labelInValue,c=t.value,V=t.onChange,y=(0,m.useState)(c||Array.from({length:r().size(_)}).map(function(){return null})),R=l()(y,2),E=R[0],h=R[1];return(0,m.useEffect)(function(){c!=null&&c!=E&&h(c)},[c]),(0,i.jsxs)("div",{className:s()("".concat(p)),children:[!r().isEmpty(_)&&(_==null?void 0:_.map(function(I,x){return(0,i.jsx)(v.PickerViewColumn,{labelInValue:P,options:I,value:c==null?void 0:c[x],onChange:function(g){E[x]=g,V==null||V(E)}},"column-".concat(x))})),(0,i.jsxs)("div",{className:s()("".concat(p,"-mask")),children:[(0,i.jsx)("div",{className:s()("".concat(p,"-mask-top"))}),(0,i.jsx)("div",{className:s()("".concat(p,"-mask-middle"))}),(0,i.jsx)("div",{className:s()("".concat(p,"-mask-bottom"))})]})]})})},91518:function(o,e,n){"use strict";n.r(e)},83740:function(o,e,n){"use strict";n.r(e)},5658:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return l}});var d=n(88107);const l=[]},6458:function(o,e){"use strict";e.Z=`import "./style.scss"
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
`},77306:function(o,e){"use strict";e.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},21791:function(o,e){"use strict";e.Z=`.demoBlock {
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
`},7761:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},7513:function(o,e){"use strict";e.Z=`import React from "react"
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
`},23115:function(o,e){"use strict";e.Z=`import React, {FC, useEffect, useState} from "react"
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
`},93452:function(o,e){"use strict";e.Z=`import {PickerView} from "./picker-view"
import {PickerColumnOption} from "./types"
export type {
  PickerColumnOption
}
export default PickerView
`},59105:function(o,e){"use strict";e.Z=`import classNames from "classnames";
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
`},26585:function(o,e){"use strict";e.Z=`import React, {FC, useEffect, useState} from "react"
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
                         console.log(movePoint)
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
`},40871:function(o,e){"use strict";e.Z=`import classNames from "classnames";
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
`},81891:function(o,e){"use strict";e.Z=`import {Popup,PopupProps} from "./popup";

export type {PopupProps}
export default Popup;
`},67353:function(o,e){"use strict";e.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect} from "react";
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

  useEffect(() => {
    if (open == undefined) {
      return
    }
    if (open == internalOpen) {
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
`},30226:function(o,e){"use strict";e.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
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
`},98092:function(o,e){"use strict";e.Z=`$popupCls: 'triones-antm-popup';

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
`},84176:function(o,e,n){var d=n(75863);function l(a,s){if(a==null)return{};var u=d(a,s),r,v;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(v=0;v<m.length;v++)r=m[v],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(u[r]=a[r])}return u}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function e(n,d){if(n==null)return{};var l={},a=Object.keys(n),s,u;for(u=0;u<a.length;u++)s=a[u],!(d.indexOf(s)>=0)&&(l[s]=n[s]);return l}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
