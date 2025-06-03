"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[152],{38486:function(a,t,n){var o;n.r(t),n.d(t,{demos:function(){return b}});var d=n(90819),s=n.n(d),m=n(89933),c=n.n(m),_=n(44194),E=n(81135),p=n(95676),x=n(54686),r=n(84660),f=n(3837),h=n(51865),u=n.n(h),i=n(72995),l=n(25321),b={"inputnumber-demo-base":{component:_.memo(_.lazy(function(){return n.e(2901).then(n.bind(n,63423))})),asset:{type:"BLOCK",id:"inputnumber-demo-base",refAtomIds:["InputNumber"],dependencies:{"index.tsx":{type:"FILE",value:n(71388).Z},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(87669).Z},"../index.tsx":{type:"FILE",value:n(66745).Z},"./input-number.tsx":{type:"FILE",value:n(16891).Z},"./index.scss":{type:"FILE",value:n(63498).Z},classnames:{type:"NPM",value:"2.5.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./style.scss":{type:"FILE",value:n(51679).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":p,"../index.tsx":x,"./input-number.tsx":r,"./index.scss":f,"./style.scss":l,react:o||(o=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/InputNumber/index.tsx":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/InputNumber/input-number.tsx":r,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":f,classnames:h,"@trionesdev/antd-taro-icons-react":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/InputNumber/style.scss":l},renderOpts:{compile:function(){var D=c()(s()().mark(function O(){var I,C=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7215).then(n.bind(n,87215));case 2:return e.abrupt("return",(I=e.sent).default.apply(I,C));case 3:case"end":return e.stop()}},O)}));function M(){return D.apply(this,arguments)}return M}()}}}},95676:function(a,t,n){n.r(t),n.d(t,{DemoBlock:function(){return m}});var o=n(44194),d=n(3837),s=n(31549),m=function(_){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:_.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},54686:function(a,t,n){n.r(t);var o=n(84660);t.default=o.InputNumber},84660:function(a,t,n){n.r(t),n.d(t,{InputNumber:function(){return f}});var o=n(10154),d=n.n(o),s=n(45332),m=n.n(s),c=n(44194),_=n(51865),E=n.n(_),p=n(72995),x=n(25321),r=n(31549),f=function(u){var i=u.value,l=u.onChange,b=u.step,D=u.min,M=u.max,O=u.className,I=u.style,C=c.useState(i||0),N=m()(C,2),e=N[0],P=N[1];(0,c.useEffect)(function(){i!==void 0&&i!==e&&P(i)},[i]);var B=D!==void 0&&e<=D,g=M!==void 0&&e>=M,v="triones-antm-input-number";return(0,r.jsxs)("div",{className:E()(v,O),style:I,children:[(0,r.jsx)("div",{className:E()("".concat(v,"-button"),d()({},"".concat(v,"-button-disabled"),B)),onClick:function(){B||P(e-(b||1))},children:(0,r.jsx)(p.MinusOutline,{})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"number",value:e,onChange:function(T){var R=Number(T.target.value);P(R),l==null||l(R)}})}),(0,r.jsx)("div",{className:E()("".concat(v,"-button"),d()({},"".concat(v,"-button-disabled"),g)),onClick:function(){g||P(e+(b||1))},children:(0,r.jsx)(p.AddOutline,{})})]})}},3837:function(a,t,n){n.r(t)},25321:function(a,t,n){n.r(t)},90944:function(a,t,n){n.r(t),n.d(t,{texts:function(){return d}});var o=n(81135);const d=[]},63498:function(a,t){t.Z=`.demoBlock {
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
`},87669:function(a,t){t.Z=`import React from 'react'
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
`},71388:function(a,t){t.Z=`import React from "react";
import InputNumber from "../index";
import {DemoBlock} from "../../DemoBlock";

export default ()=>{
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <InputNumber/>
    </DemoBlock>
    <DemoBlock title={\`\u6700\u5927\u503C\u6700\u5C0F\u503C\`}>
      <InputNumber min={0} max={10}/>
    </DemoBlock>
  </div>
}
`},66745:function(a,t){t.Z=`import {InputNumber,InputNumberProps} from "./input-number"
export  type {InputNumberProps}
export default InputNumber
`},16891:function(a,t){t.Z=`import React, {useEffect} from "react";
import {FC} from "react";
import classNames from "classnames";
import {AddOutline, MinusOutline} from "@trionesdev/antd-taro-icons-react";
import "./style.scss"

export type InputNumberProps = {
  value?: number,
  onChange?: (value: number) => void
  step?: number
  min?: number
  max?: number
  className?: string
  style?: React.CSSProperties
}
export const InputNumber: FC<InputNumberProps> = ({value, onChange, step, min, max, className, style}) => {
  const [internalValue, setInternalValue] = React.useState<number>(value || 0);

  useEffect(() => {
    if (value !== undefined) {
      if (value !== internalValue) {
        setInternalValue(value)
      }
    }
  }, [value]);

  const minMatch = min !== undefined && internalValue <= min;
  const maxMatch = max !== undefined && internalValue >= max;

  const trionesInputNumberCls = 'triones-antm-input-number';
  return <div className={classNames(trionesInputNumberCls, className)} style={style}>
    <div
      className={classNames(\`\${trionesInputNumberCls}-button\`, {[\`\${trionesInputNumberCls}-button-disabled\`]: minMatch})}
      onClick={() => {
        if (minMatch) {
          return
        }
        setInternalValue(internalValue - (step || 1));
      }}>
      <MinusOutline/>
    </div>
    <div>
      <input type={\`number\`} value={internalValue} onChange={(e) => {
        const newVal = Number(e.target.value);
        setInternalValue(newVal);
        onChange?.(newVal)
      }}/>
    </div>
    <div
      className={classNames(\`\${trionesInputNumberCls}-button\`, {[\`\${trionesInputNumberCls}-button-disabled\`]: maxMatch})}
      onClick={() => {
        if (maxMatch) {
          return
        }
        setInternalValue(internalValue + (step || 1));
      }}>
      <AddOutline/>
    </div>
  </div>
}
`},51679:function(a,t){t.Z=`@import "../style/variable";
$trionesInputNumberCls: 'triones-antm-input-number';

.#{$trionesInputNumberCls} {
  display: inline-flex;
  align-items: center;
  gap: 4Px;

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    border: 0;
    text-align: center;
    width: 30Px;

    &:focus {
      outline: none;
    }
  }

  &-button {
    cursor: pointer;
    &-disabled{
      cursor: not-allowed;
      color: $trionesColorTextDisabled;
    }
  }
}
`}}]);
