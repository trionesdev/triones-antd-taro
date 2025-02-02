"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7658],{15814:function(s,e,n){var h;n.r(e),n.d(e,{demos:function(){return I}});var u=n(90819),a=n.n(u),l=n(89933),P=n.n(l),r=n(44194),T=n(49444),i=n(44164),E=n(49387),m=n(51865),M=n.n(m),f=n(39378),t=n.n(f),d=n(91518),c=n(83740),o=n(13889),O=n(95110),I={"pickerview-demo-base":{component:r.memo(r.lazy(function(){return n.e(4495).then(n.bind(n,65353))})),asset:{type:"BLOCK",id:"pickerview-demo-base",refAtomIds:["PickerView"],dependencies:{"index.tsx":{type:"FILE",value:n(72089).Z},react:{type:"NPM",value:"18.3.1"},"../picker-view.tsx":{type:"FILE",value:n(40871).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./index.scss":{type:"FILE",value:n(21791).Z},"./style.scss":{type:"FILE",value:n(42237).Z},"./picker-view-column.tsx":{type:"FILE",value:n(26585).Z},"./picker-view-column-item.tsx":{type:"FILE",value:n(59105).Z}},entry:"index.tsx"},context:{"../picker-view.tsx":i,"../../DemoBlock.tsx":E,"./index.scss":d,"./style.scss":c,"./picker-view-column.tsx":o,"./picker-view-column-item.tsx":O,react:h||(h=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":E,classnames:m,lodash:f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":d,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/style.scss":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column.tsx":o,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/PickerView/picker-view-column-item.tsx":O},renderOpts:{compile:function(){var V=P()(a()().mark(function k(){var g,x=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(4521).then(n.bind(n,24521));case 2:return v.abrupt("return",(g=v.sent).default.apply(g,x));case 3:case"end":return v.stop()}},k)}));function C(){return V.apply(this,arguments)}return C}()}}}},49387:function(s,e,n){n.r(e),n.d(e,{DemoBlock:function(){return l}});var h=n(44194),u=n(91518),a=n(31549),l=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},95110:function(s,e,n){n.r(e),n.d(e,{PickerViewColumnItem:function(){return r}});var h=n(51865),u=n.n(h),a=n(44194),l=n(31549),P="triones-antm-picker-view",r=function(i){var E=i.option;return(0,l.jsx)("div",{className:u()("".concat(P,"-column-item")),children:(0,l.jsx)("div",{className:"".concat(P,"-column-item-label"),children:E.label})})}},13889:function(s,e,n){n.r(e),n.d(e,{PickerViewColumn:function(){return M}});var h=n(45332),u=n.n(h),a=n(44194),l=n(51865),P=n.n(l),r=n(95110),T=n(39378),i=n.n(T),E=n(31549),m="triones-antm-picker-view",M=a.memo(function(f){var t=f.options,d=f.labelInValue,c=f.value,o=f.onChange,O=(0,a.useState)(c||null),I=u()(O,2),V=I[0],C=I[1],k=34,g=a.useState(),x=u()(g,2),R=x[0],v=x[1],K=(0,a.useState)(0),A=u()(K,2),w=A[0],y=A[1],L=function(p){var _=i().findIndex(t,function(B){return d?B.value===p.value:B.value===p});y(0-_*k)};return(0,a.useEffect)(function(){c!=null&&c!=V&&(C(c),L(c))},[c]),(0,a.useEffect)(function(){if(c)L(c);else{var D=d?t==null?void 0:t[0]:t==null?void 0:t[0].value;C(D||null),o==null||o(D||null),L(D)}},[t]),(0,E.jsx)("div",{className:P()("".concat(m,"-column")),children:(0,E.jsx)("div",{className:P()("".concat(m,"-column-wheel")),style:{transform:"translate3d(0, ".concat(w,"px, 0)")},onTouchStart:function(p){var _={clientX:p.touches[0].clientX,clientY:p.touches[0].clientY};v(_)},onTouchMove:function(p){var _={clientX:p.touches[0].clientX,clientY:p.touches[0].clientY};y(w+(_.clientY-R.clientY)),v(_)},onTouchEnd:function(p){var _=0;if(w>0)y(0),_=0;else if(w<0-k*(i().size(t)-1))y(0-k*(i().size(t)-1)),_=i().size(t)-1;else{var B=Math.abs(Math.round(w/k));y(0-B*k),_=B}console.log("selectIndex",_);var b=d?t==null?void 0:t[_]:t==null?void 0:t[_].value;C(b),o==null||o(b)},children:!i().isEmpty(t)&&(t==null?void 0:t.map(function(D,p){return(0,E.jsx)(r.PickerViewColumnItem,{option:D},"view-column-".concat(p))}))})})})},44164:function(s,e,n){n.r(e),n.d(e,{PickerView:function(){return f}});var h=n(45332),u=n.n(h),a=n(51865),l=n.n(a),P=n(39378),r=n.n(P),T=n(13889),i=n(44194),E=n(83740),m=n(31549),M="triones-antm-picker-view",f=i.memo(function(t){var d=t.columns,c=t.labelInValue,o=t.value,O=t.onChange,I=(0,i.useState)(o||Array.from({length:r().size(d)}).map(function(){return null})),V=u()(I,2),C=V[0],k=V[1];return(0,i.useEffect)(function(){o!=null&&o!=C&&k(o)},[o]),(0,m.jsxs)("div",{className:l()("".concat(M)),children:[!r().isEmpty(d)&&(d==null?void 0:d.map(function(g,x){return(0,m.jsx)(T.PickerViewColumn,{labelInValue:c,options:g,value:o==null?void 0:o[x],onChange:function(v){C[x]=v,O==null||O(C)}},"column-".concat(x))})),(0,m.jsxs)("div",{className:l()("".concat(M,"-mask")),children:[(0,m.jsx)("div",{className:l()("".concat(M,"-mask-top"))}),(0,m.jsx)("div",{className:l()("".concat(M,"-mask-middle"))}),(0,m.jsx)("div",{className:l()("".concat(M,"-mask-bottom"))})]})]})})},91518:function(s,e,n){n.r(e)},83740:function(s,e,n){n.r(e)},10218:function(s,e,n){n.r(e),n.d(e,{texts:function(){return u}});var h=n(49444);const u=[]},21791:function(s,e){e.Z=`.demoBlock {
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
`},7761:function(s,e){e.Z=`import React from 'react'
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
`},72089:function(s,e){e.Z=`import React from "react"
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
`},59105:function(s,e){e.Z=`import classNames from "classnames";
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
`},26585:function(s,e){e.Z=`import React, {FC, useEffect, useState} from "react"
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
`},40871:function(s,e){e.Z=`import classNames from "classnames";
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
`},42237:function(s,e){e.Z=`$pickerViewCls: 'triones-antm-picker-view';
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
