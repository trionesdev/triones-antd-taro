(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[9710],{12538:function(o,e,n){"use strict";var d,l;n.r(e),n.d(e,{demos:function(){return B}});var a=n(90819),s=n.n(a),u=n(89933),r=n.n(u),h=n(44194),m=n(88107),M=n(93977),i=n(49387),_=n(61272),y=n(37180),t=n(51865),P=n.n(t),p=n(91518),c=n(39378),b=n.n(c),I=n(3687),T=n(99278),k=n(70162),E=n(44164),D=n(73079),x=n(56321),L=n(43427),g=n(13889),W=n(15272),A=n(95110),B={"picker-demo-base":{component:h.memo(h.lazy(function(){return n.e(9485).then(n.bind(n,99829))})),asset:{type:"BLOCK",id:"picker-demo-base",refAtomIds:["Picker"],dependencies:{"index.tsx":{type:"FILE",value:n(7513).Z},react:{type:"NPM",value:"18.3.1"},"../../Button.tsx":{type:"FILE",value:n(77306).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"../picker.tsx":{type:"FILE",value:n(23115).Z},"./button.tsx":{type:"FILE",value:n(6458).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(21791).Z},lodash:{type:"NPM",value:"4.17.21"},"./style.scss":{type:"FILE",value:n(98092).Z},"../PickerView.tsx":{type:"FILE",value:n(93452).Z},"../Popup.tsx":{type:"FILE",value:n(81891).Z},"./picker-view.tsx":{type:"FILE",value:n(40871).Z},"./popup.tsx":{type:"FILE",value:n(30226).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./popup-modal.tsx":{type:"FILE",value:n(67353).Z},"./picker-view-column.tsx":{type:"FILE",value:n(26585).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./picker-view-column-item.tsx":{type:"FILE",value:n(59105).Z}},entry:"index.tsx"},context:{"../../Button.tsx":M,"../../DemoBlock.tsx":i,"../picker.tsx":_,"./button.tsx":y,"./index.scss":p,"./style.scss":I,"../PickerView.tsx":T,"../Popup.tsx":k,"./picker-view.tsx":E,"./popup.tsx":D,"./popup-modal.tsx":L,"./picker-view-column.tsx":g,"./picker-view-column-item.tsx":A,react:d||(d=n.t(h,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Picker/picker.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":y,classnames:t,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":p,lodash:c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/style.scss":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/index.tsx":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/index.tsx":k,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup.tsx":D,"react-dom":l||(l=n.t(x,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup-modal.tsx":L,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column.tsx":g,"@trionesdev/antd-taro-icons-react/src":W,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column-item.tsx":A},renderOpts:{compile:function(){var V=r()(s()().mark(function C(){var v,f=arguments;return s()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,n.e(4521).then(n.bind(n,24521));case 2:return O.abrupt("return",(v=O.sent).default.apply(v,f));case 3:case"end":return O.stop()}},C)}));function R(){return V.apply(this,arguments)}return R}()}}}},49387:function(o,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return s}});var d=n(44194),l=n(91518),a=n(31549),s=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},61272:function(o,e,n){"use strict";n.r(e),n.d(e,{Picker:function(){return y}});var d=n(45332),l=n.n(d),a=n(44194),s=n(70162),u=n(51865),r=n.n(u),h=n(39378),m=n.n(h),M=n(99278),i=n(31549),_="triones-antm-picker",y=a.memo(function(t){var P=t.open,p=t.afterOpenChange,c=t.title,b=t.columns,I=t.labelInValue,T=I===void 0?!1:I,k=t.value,E=t.onOk,D=t.onCancel,x=t.onClose,L=(0,a.useState)(k||Array.from({length:m().size(b)}).map(function(){return null})),g=l()(L,2),W=g[0],A=g[1],B=a.useState(P||!1),V=l()(B,2),R=V[0],C=V[1],v=function(){C(!1),x==null||x()},f=function(){E==null||E(W),v()},N=function(){D==null||D(),v()};return(0,a.useEffect)(function(){p==null||p(R)},[R]),(0,a.useEffect)(function(){P!=null&&P!=R&&C(P)},[P]),(0,i.jsx)(s.default,{open:R,afterOpenChange:function(w){C(w)},styles:{body:{borderTopLeftRadius:6,borderTopRightRadius:6}},children:(0,i.jsxs)("div",{className:r()(_),children:[(0,i.jsxs)("div",{className:r()("".concat(_,"-header")),children:[(0,i.jsx)("a",{className:r()("".concat(_,"-header-button")),onClick:N,children:"\u53D6\u6D88"}),c&&(0,i.jsx)("div",{className:r()("".concat(_,"-header-title")),children:c}),(0,i.jsx)("a",{className:r()("".concat(_,"-header-button")),onClick:f,children:"\u786E\u5B9A"})]}),(0,i.jsx)("div",{className:r()("".concat(_,"-body")),children:(0,i.jsx)(M.default,{columns:b,labelInValue:T,value:W,onChange:function(w){A(w)}})})]})})})},99278:function(o,e,n){"use strict";n.r(e);var d=n(44164);e.default=d.PickerView},95110:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumnItem:function(){return r}});var d=n(51865),l=n.n(d),a=n(44194),s=n(31549),u="triones-antm-picker-view",r=function(m){var M=m.option;return(0,s.jsx)("div",{className:l()("".concat(u,"-column-item")),children:(0,s.jsx)("div",{className:"".concat(u,"-column-item-label"),children:M.label})})}},13889:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerViewColumn:function(){return _}});var d=n(45332),l=n.n(d),a=n(44194),s=n(51865),u=n.n(s),r=n(95110),h=n(39378),m=n.n(h),M=n(31549),i="triones-antm-picker-view",_=a.memo(function(y){var t=y.options,P=y.labelInValue,p=y.value,c=y.onChange,b=(0,a.useState)(p||null),I=l()(b,2),T=I[0],k=I[1],E=34,D=a.useState(),x=l()(D,2),L=x[0],g=x[1],W=(0,a.useState)(0),A=l()(W,2),B=A[0],V=A[1],R=function(v){var f=m().findIndex(t,function(N){return P?N.value===v.value:N.value===v});V(0-f*E)};return(0,a.useEffect)(function(){p!=null&&p!=T&&(k(p),R(p))},[p]),(0,a.useEffect)(function(){if(p)R(p);else{var C=P?t==null?void 0:t[0]:t==null?void 0:t[0].value;k(C||null),c==null||c(C||null),R(C)}},[t]),(0,M.jsx)("div",{className:u()("".concat(i,"-column")),children:(0,M.jsx)("div",{className:u()("".concat(i,"-column-wheel")),style:{transform:"translate3d(0, ".concat(B,"px, 0)")},onTouchStart:function(v){var f={clientX:v.touches[0].clientX,clientY:v.touches[0].clientY};g(f)},onTouchMove:function(v){var f={clientX:v.touches[0].clientX,clientY:v.touches[0].clientY};V(B+(f.clientY-L.clientY)),g(f)},onTouchEnd:function(v){var f=0;if(B>0)V(0),f=0;else if(B<0-E*(m().size(t)-1))V(0-E*(m().size(t)-1)),f=m().size(t)-1;else{var N=Math.abs(Math.round(B/E));V(0-N*E),f=N}console.log("selectIndex",f);var O=P?t==null?void 0:t[f]:t==null?void 0:t[f].value;k(O),c==null||c(O)},children:!m().isEmpty(t)&&(t==null?void 0:t.map(function(C,v){return(0,M.jsx)(r.PickerViewColumnItem,{option:C},"view-column-".concat(v))}))})})})},44164:function(o,e,n){"use strict";n.r(e),n.d(e,{PickerView:function(){return y}});var d=n(45332),l=n.n(d),a=n(51865),s=n.n(a),u=n(39378),r=n.n(u),h=n(13889),m=n(44194),M=n(83740),i=n(31549),_="triones-antm-picker-view",y=m.memo(function(t){var P=t.columns,p=t.labelInValue,c=t.value,b=t.onChange,I=(0,m.useState)(c||Array.from({length:r().size(P)}).map(function(){return null})),T=l()(I,2),k=T[0],E=T[1];return(0,m.useEffect)(function(){c!=null&&c!=k&&E(c)},[c]),(0,i.jsxs)("div",{className:s()("".concat(_)),children:[!r().isEmpty(P)&&(P==null?void 0:P.map(function(D,x){return(0,i.jsx)(h.PickerViewColumn,{labelInValue:p,options:D,value:c==null?void 0:c[x],onChange:function(g){k[x]=g,b==null||b(k)}},"column-".concat(x))})),(0,i.jsxs)("div",{className:s()("".concat(_,"-mask")),children:[(0,i.jsx)("div",{className:s()("".concat(_,"-mask-top"))}),(0,i.jsx)("div",{className:s()("".concat(_,"-mask-middle"))}),(0,i.jsx)("div",{className:s()("".concat(_,"-mask-bottom"))})]})]})})},91518:function(o,e,n){"use strict";n.r(e)},83740:function(o,e,n){"use strict";n.r(e)},5658:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return l}});var d=n(88107);const l=[]},6458:function(o,e){"use strict";e.Z=`import "./style.scss"
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
             const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTouchPoint(startPoint);
           }}
           onTouchMove={(event) => {
             const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
             setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
             setTouchPoint(movePoint);
           }}
           onTouchEnd={(event) => {
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
`},84176:function(o,e,n){var d=n(75863);function l(a,s){if(a==null)return{};var u=d(a,s),r,h;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(h=0;h<m.length;h++)r=m[h],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(u[r]=a[r])}return u}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports},75863:function(o){function e(n,d){if(n==null)return{};var l={},a=Object.keys(n),s,u;for(u=0;u<a.length;u++)s=a[u],!(d.indexOf(s)>=0)&&(l[s]=n[s]);return l}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
