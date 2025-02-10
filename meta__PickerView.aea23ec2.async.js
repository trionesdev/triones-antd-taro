"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7658],{77910:function(l,e,n){var h;n.r(e),n.d(e,{demos:function(){return g}});var r=n(90819),o=n.n(r),i=n(89933),f=n.n(i),c=n(44194),w=n(72727),s=n(84550),E=n(72982),m=n(51865),D=n.n(m),C=n(39378),t=n.n(C),d=n(14368),_=n(70525),a=n(16275),M=n(9760),g={"pickerview-demo-base":{component:c.memo(c.lazy(function(){return n.e(4495).then(n.bind(n,3788))})),asset:{type:"BLOCK",id:"pickerview-demo-base",refAtomIds:["PickerView"],dependencies:{"index.tsx":{type:"FILE",value:n(37650).Z},react:{type:"NPM",value:"18.3.1"},"../picker-view.tsx":{type:"FILE",value:n(44042).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(96530).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./index.scss":{type:"FILE",value:n(12344).Z},"./style.scss":{type:"FILE",value:n(38637).Z},"./picker-view-column.tsx":{type:"FILE",value:n(53466).Z},"./picker-view-column-item.tsx":{type:"FILE",value:n(79129).Z}},entry:"index.tsx"},context:{"../picker-view.tsx":s,"../../DemoBlock.tsx":E,"./index.scss":d,"./style.scss":_,"./picker-view-column.tsx":a,"./picker-view-column-item.tsx":M,react:h||(h=n.t(c,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view.tsx":s,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":E,classnames:m,lodash:C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":d,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/style.scss":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column.tsx":a,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column-item.tsx":M},renderOpts:{compile:function(){var V=f()(o()().mark(function P(){var T,O=arguments;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(6518).then(n.bind(n,86518));case 2:return v.abrupt("return",(T=v.sent).default.apply(T,O));case 3:case"end":return v.stop()}},P)}));function k(){return V.apply(this,arguments)}return k}()}}}},72982:function(l,e,n){n.r(e),n.d(e,{DemoBlock:function(){return i}});var h=n(44194),r=n(14368),o=n(31549),i=function(c){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:c.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:c.children})]})}},9760:function(l,e,n){n.r(e),n.d(e,{PickerViewColumnItem:function(){return c}});var h=n(51865),r=n.n(h),o=n(44194),i=n(31549),f="triones-antm-picker-view",c=function(s){var E=s.option;return(0,i.jsx)("div",{className:r()("".concat(f,"-column-item")),children:(0,i.jsx)("div",{className:"".concat(f,"-column-item-label"),children:E.label})})}},16275:function(l,e,n){n.r(e),n.d(e,{PickerViewColumn:function(){return D}});var h=n(45332),r=n.n(h),o=n(44194),i=n(51865),f=n.n(i),c=n(9760),w=n(39378),s=n.n(w),E=n(31549),m="triones-antm-picker-view",D=o.memo(function(C){var t=C.options,d=C.labelInValue,_=C.value,a=C.onChange,M=(0,o.useState)(_||null),g=r()(M,2),V=g[0],k=g[1],P=34,T=0,O=0-P*(s().size(t)-1),R=(0,o.useState)(!1),v=r()(R,2),N=v[0],A=v[1],S=o.useState(),b=r()(S,2),Y=b[0],K=b[1],j=(0,o.useState)(0),W=r()(j,2),I=W[0],y=W[1],L=function(p){var u=s().findIndex(t,function(B){return d?B.value===p.value:B.value===p});y(0-u*P)};return(0,o.useEffect)(function(){_!=null&&_!=V&&(k(_),L(_))},[_]),(0,o.useEffect)(function(){if(_)L(_);else{var x=d?t==null?void 0:t[0]:t==null?void 0:t[0].value;k(x||null),a==null||a(x||null),L(x)}},[t]),(0,E.jsx)("div",{className:f()("".concat(m,"-column")),children:(0,E.jsx)("div",{className:f()("".concat(m,"-column-wheel")),style:{transform:"translate3d(0, ".concat(I,"px, 0)")},onTouchStart:function(p){A(!0);var u={clientX:p.touches[0].clientX,clientY:p.touches[0].clientY};K(u)},onTouchMove:function(p){if(N){var u={clientX:p.touches[0].clientX,clientY:p.touches[0].clientY};if(I>T||I<O)return;y(I+(u.clientY-Y.clientY)),K(u)}},onTouchEnd:function(p){A(!1);var u=0;if(I>0)y(0),u=0;else if(I<0-P*(s().size(t)-1))y(0-P*(s().size(t)-1)),u=s().size(t)-1;else{var B=Math.abs(Math.round(I/P));y(0-B*P),u=B}console.log("selectIndex",u);var U=d?t==null?void 0:t[u]:t==null?void 0:t[u].value;k(U),a==null||a(U)},children:!s().isEmpty(t)&&(t==null?void 0:t.map(function(x,p){return(0,E.jsx)(c.PickerViewColumnItem,{option:x},"view-column-".concat(p))}))})})})},84550:function(l,e,n){n.r(e),n.d(e,{PickerView:function(){return C}});var h=n(45332),r=n.n(h),o=n(51865),i=n.n(o),f=n(39378),c=n.n(f),w=n(16275),s=n(44194),E=n(70525),m=n(31549),D="triones-antm-picker-view",C=s.memo(function(t){var d=t.columns,_=t.labelInValue,a=t.value,M=t.onChange,g=(0,s.useState)(a||Array.from({length:c().size(d)}).map(function(){return null})),V=r()(g,2),k=V[0],P=V[1];return(0,s.useEffect)(function(){a!=null&&a!=k&&P(a)},[a]),(0,m.jsxs)("div",{className:i()("".concat(D)),children:[!c().isEmpty(d)&&(d==null?void 0:d.map(function(T,O){return(0,m.jsx)(w.PickerViewColumn,{labelInValue:_,options:T,value:a==null?void 0:a[O],onChange:function(v){k[O]=v,M==null||M(k)}},"column-".concat(O))})),(0,m.jsxs)("div",{className:i()("".concat(D,"-mask")),children:[(0,m.jsx)("div",{className:i()("".concat(D,"-mask-top"))}),(0,m.jsx)("div",{className:i()("".concat(D,"-mask-middle"))}),(0,m.jsx)("div",{className:i()("".concat(D,"-mask-bottom"))})]})]})})},14368:function(l,e,n){n.r(e)},70525:function(l,e,n){n.r(e)},15421:function(l,e,n){n.r(e),n.d(e,{texts:function(){return r}});var h=n(72727);const r=[]},12344:function(l,e){e.Z=`.demoBlock {
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
`},96530:function(l,e){e.Z=`import React from 'react'
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
`},37650:function(l,e){e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {PickerView} from "../picker-view";

export default () => {
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
      <div style={{height:240}}>
        <PickerView columns={basicColumns}/>
      </div>
    </DemoBlock>
  </>
}
`},79129:function(l,e){e.Z=`import classNames from "classnames";
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
`},53466:function(l,e){e.Z=`import React, {FC, useEffect, useState} from "react"
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
`},44042:function(l,e){e.Z=`import classNames from "classnames";
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
`},38637:function(l,e){e.Z=`$pickerViewCls: 'triones-antm-picker-view';
.#{$pickerViewCls} {
  width: 100%;
  height: var(--height,240Px);
  display: flex;
  position: relative;
  overflow: hidden;
  --item-height: 34Px;
  --item-font-size: 16Px;

  &-column {
    height: 100%;
    flex: 1 1;
    user-select: none;
    touch-action: none;
    position: relative;
    z-index: 0;
    &-wheel{
      width: 100%;
      cursor: grab;
      position: absolute;
      top: calc(50% - var(--item-height)/2);
      left: 0;
    }

    &-item {
      font-size: var(--item-font-size);
      padding: 0 6px;
      height: var(--item-height);
      display: flex;
      justify-content: center;
      align-items: center;
      &-label{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &-mask {
    position: absolute;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    pointer-events: none;

    &-top {
      background-color: white;
      flex: auto;
      mask: linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8) 50%, #000);
    }

    &-middle {
      height: var(--item-height);
      box-sizing: border-box;
      flex: none;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }

    &-bottom {
      background-color: white;
      flex: auto;
      mask: linear-gradient(180deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .8) 50%, #000);
    }
  }
}
`}}]);
