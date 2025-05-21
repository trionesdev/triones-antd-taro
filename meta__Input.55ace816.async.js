(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{92868:function(t,e,n){"use strict";var u;n.r(e),n.d(e,{demos:function(){return O}});var r=n(90819),a=n.n(r),s=n(89933),o=n.n(s),_=n(44194),x=n(38113),l=n(11530),D=n(95676),c=n(48345),M=n(73298),f=n(73767),y=n(61864),d=n(51865),T=n.n(d),v=n(47323),i=n(39378),C=n.n(i),I=n(69778),P=n(5854),O={"input-demo-base":{component:_.memo(_.lazy(function(){return n.e(2091).then(n.bind(n,78595))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(22701).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(36768).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(92724).Z},"./index.scss":{type:"FILE",value:n(96071).Z},"./input-opt.tsx":{type:"FILE",value:n(61860).Z},"./input-password.tsx":{type:"FILE",value:n(83761).Z},"./input.tsx":{type:"FILE",value:n(94595).Z},classnames:{type:"NPM",value:"2.5.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"./input-affix-wrapper.tsx":{type:"FILE",value:n(66653).Z},"./base-input.tsx":{type:"FILE",value:n(51372).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":D,"./index.scss":c,"./input-opt.tsx":M,"./input-password.tsx":f,"./input.tsx":y,"./input-affix-wrapper.tsx":I,"./base-input.tsx":P,react:u||(u=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":y,classnames:d,"@trionesdev/antd-taro-icons-react":v,lodash:i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":P},renderOpts:{compile:function(){var h=o()(a()().mark(function p(){var E,b=arguments;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,n.e(8506).then(n.bind(n,48506));case 2:return g.abrupt("return",(E=g.sent).default.apply(E,b));case 3:case"end":return g.stop()}},p)}));function m(){return h.apply(this,arguments)}return m}()}}}},95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return s}});var u=n(44194),r=n(3837),a=n(31549),s=function(_){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:_.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},5854:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return x}});var u=n(45332),r=n.n(u),a=n(51865),s=n.n(a),o=n(44194),_=n(31549),x=(0,o.forwardRef)(function(l,D){var c=l.className,M=l.placeholder,f=l.type,y=l.value,d=l.onChange,T=(0,o.useState)(0),v=r()(T,2),i=v[0],C=v[1],I=(0,o.useState)(y||""),P=r()(I,2),O=P[0],h=P[1];(0,o.useImperativeHandle)(D,function(){return{clear:function(){h(""),d==null||d("")}}});var m="triones-antm-input";return(0,o.useEffect)(function(){C(i+1)},[f]),(0,_.jsx)("input",{className:s()(["".concat(m),c]),placeholder:M,type:f,value:O,onChange:function(E){h(E.target.value),d==null||d(E)}},i)})},11530:function(t,e,n){"use strict";n.r(e);var u=n(73767),r=n(61864),a=n(73298),s=r.Input;s.Password=u.InputPassword,s.OPT=a.InputOPT,e.default=s},69778:function(t,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return d}});var u=n(73193),r=n.n(u),a=n(45332),s=n.n(a),o=n(84176),_=n.n(o),x=n(47323),l=n(51865),D=n.n(l),c=n(44194),M=n(5854),f=n(31549),y=["prefix","suffix","allowClear","value","onChange"],d=function(v){var i=v.prefix,C=v.suffix,I=v.allowClear,P=v.value,O=v.onChange,h=_()(v,y),m=c.useState(P),p=s()(m,2),E=p[0],b=p[1],B=(0,c.useRef)({}),g="triones-antm-input-affix-wrapper",A="triones-antm-input";return(0,f.jsxs)("div",{className:D()([g]),children:[i&&(0,f.jsx)("div",{className:D()(["".concat(A,"-prefix")]),children:i}),(0,f.jsx)(M.BaseInput,r()(r()({ref:B},h),{},{value:P,onChange:function(R){b(R),O==null||O(R)}})),(C||I)&&(0,f.jsxs)("div",{className:D()(["".concat(A,"-suffix")]),children:[I&&E&&(0,f.jsx)(x.CloseCircleFill,{className:"clear-icon",onClick:function(){var R,W;(R=(W=B.current).clear)===null||R===void 0||R.call(W)}}),C]})]})}},73298:function(t,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return T}});var u=n(76711),r=n.n(u),a=n(45332),s=n.n(a),o=n(51865),_=n.n(o),x=n(44194),l=n(48345),D=n(39378),c=n.n(D),M=n(31549),f="triones-antm-pot",y="triones-antm-input",d=function(i){var C=i.index,I=i.focusIndex,P=i.value,O=i.onChange,h=i.onFocus,m=x.useRef(null);return(0,x.useEffect)(function(){if(I===C){var p,E;if(c().isFunction((p=m.current)===null||p===void 0?void 0:p.select)){var b;(b=m.current)===null||b===void 0||b.select()}else if(c().isFunction((E=m.current)===null||E===void 0?void 0:E.setSelectionRange)){var B;(B=m.current)===null||B===void 0||B.setSelectionRange(0,m.current.value.length)}else{var g;(g=m.current)===null||g===void 0||g.focus()}}else{var A;(A=m.current)===null||A===void 0||A.blur()}},[I]),(0,M.jsx)("input",{ref:m,className:_()("".concat(y),"".concat(f,"-input"),"".concat(y,"-outlined")),size:1,type:"text",maxLength:1,value:P,onChange:function(E){O(E.target.value)},onInput:function(E){},onFocus:function(){h==null||h(C)}})},T=function(i){var C=i.className,I=i.style,P=i.length,O=P===void 0?6:P,h=x.useState(Array.from({length:O}).map(function(){return""})),m=s()(h,2),p=m[0],E=m[1],b=(0,x.useState)(0),B=s()(b,2),g=B[0],A=B[1];return(0,M.jsx)("div",{className:_()(f,C),style:I,children:Array.from({length:O}).map(function(K,R){return(0,M.jsx)(d,{index:R,focusIndex:g,value:(p==null?void 0:p[R])||"",onChange:function(L){p[R]=L,E(r()(p)),L&&A(R+1)},onFocus:function(L){A(L)}},R)})})}},73767:function(t,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return f}});var u=n(73193),r=n.n(u),a=n(45332),s=n.n(a),o=n(84176),_=n.n(o),x=n(47323),l=n(44194),D=n(61864),c=n(31549),M=["iconRender","visibilityToggle","suffix"],f=function(d){var T=d.iconRender,v=d.visibilityToggle,i=v===void 0?!0:v,C=d.suffix,I=_()(d,M),P=(0,l.useState)(!1),O=s()(P,2),h=O[0],m=O[1],p=function(){return T?T(h):(0,c.jsx)(c.Fragment,{children:h?(0,c.jsx)(x.EyeOutline,{onClick:function(){return m(!1)}}):(0,c.jsx)(x.EyeInvisibleOutline,{onClick:function(){return m(!0)}})})};return(0,c.jsx)(D.Input,r()(r()({},I),{},{type:h?"text":"password",suffix:(0,c.jsxs)(c.Fragment,{children:[" ",i&&(0,c.jsx)("div",{style:{paddingLeft:4},children:p()})," ",C," "]})}))}},61864:function(t,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return _}});var u=n(5854),r=n(69778),a=n(44194),s=n(48345),o=n(31549),_=function(l){var D=l.className,c=l.style,M=l.placeholder,f=l.type,y=l.disabled,d=l.allowClear,T=l.prefix,v=l.suffix,i=l.value,C=l.onChange,I=function(){return T||v||d?(0,o.jsx)(r.InputAffixWrapper,{prefix:T,suffix:v,allowClear:d,type:f,value:i,onChange:C}):(0,o.jsx)(u.BaseInput,{className:D,placeholder:M,type:f,disabled:y,value:i,onChange:C})};return(0,o.jsx)(o.Fragment,{children:I()})}},3837:function(t,e,n){"use strict";n.r(e)},48345:function(t,e,n){"use strict";n.r(e)},50667:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});var u=n(38113);const r=[]},92724:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},51372:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';

export type BaseInputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  value?: any;
  onChange?: (e: any) => void;
};

export interface BaseInputHandle {
  clear?: () => void;
}

export const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
  ({ className, placeholder, type, value, onChange }, ref) => {
    const [keySequence,setKeySequence] = useState(0)
    const [innerValue, setInnerValue] = useState(value || '');

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';


    useEffect(() => {
      setKeySequence(keySequence+1)
    }, [type]);

    return (
      <input key={keySequence}
        className={classNames([\`\${cls}\`, className])}
        placeholder={placeholder}
        type={type}
        value={innerValue}
        onChange={(e) => {
          setInnerValue(e.target.value);
          onChange?.(e);
        }}
      />
    );
  },
);
`},22701:function(t,e){"use strict";e.Z=`import {DemoBlock} from '../../DemoBlock';
import React from 'react';
import Input from "../index";

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"/>
      </DemoBlock>
      <DemoBlock title="\u5E26\u6E05\u9664\u6309\u94AE">
        <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="\u5BC6\u7801\u6A21\u5F0F">
        <Input.Password placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" allowClear={true}/>
      </DemoBlock>
      <DemoBlock title="OPT\u6A21\u5F0F">
        <Input.OPT/>
      </DemoBlock>
    </>
  );
};
`},96071:function(t,e){"use strict";e.Z=`$inputCls: 'triones-antm-input';
$inputAffixWrapperCls: 'triones-antm-input-affix-wrapper';
$inputGroupWrapperCls: 'triones-antm-input-group-wrapper';
$inputPotCls: 'triones-antm-pot';

input{
  height: auto;
}
.#{$inputCls} {
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 0;
  transition: all .2s;
  padding: 4Px 0Px;
  outline: none;
  box-shadow: none;
  border: none;
  //line-height: 1.5714285714285714;
  border-radius: 6Px;
  font-size: 14Px;
  height: auto;

  &::placeholder {
    font-size: 14Px;
    color: #cccccc;
  }
}


.#{$inputAffixWrapperCls} {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4Px 0Px;

  .#{$inputCls} {
    padding: 0;

    &-prifix {
    }

    &-suffix {
      display: inline-flex;
      align-items: center;
      gap: 4Px;

      .clear-icon {
        color: rgba(0, 0, 0, 0.25);


        &:hover {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      .triones-antm-icon {
        cursor: pointer;
      }
    }
  }
}

.#{$inputGroupWrapperCls} {
}


.#{$inputPotCls} {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 8Px;

  &-input {
    text-align: center;
    padding-inline: 4Px;
    font-size: 14Px;
    height: auto;
    &::placeholder {
      font-size: 14Px;
    }
  }

  .#{$inputCls}-outlined {
    font-size: 14Px;
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
    border-width: 1Px;
    border-style: solid;
    border-color: #d9d9d9;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
`},36768:function(t,e){"use strict";e.Z=`import {InputPassword, InputPasswordProps} from './input-password';
import {Input as InternalInput, InputProps} from './input';
import {InputOPT, InputOPTProps} from './input-opt';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;

export type {
  InputProps,
  InputPasswordProps,
  InputOPTProps
}
export default Input;
`},66653:function(t,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import { BaseInput, BaseInputHandle, BaseInputProps } from './base-input';

export type InputAffixWrapperProps = BaseInputProps & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
};
export const InputAffixWrapper: FC<InputAffixWrapperProps> = ({
  prefix,
  suffix,
  allowClear,
  value,
  onChange,
  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const baseInputRef = useRef({} as BaseInputHandle);
  const cls = 'triones-antm-input-affix-wrapper';
  const inputCls = 'triones-antm-input';
  return (
    <div className={classNames([cls])}>
      {prefix && (
        <div className={classNames([\`\${inputCls}-prefix\`])}>{prefix}</div>
      )}
      <BaseInput
        ref={baseInputRef}
        {...rest}
        value={value}
        onChange={(value) => {
          setInnerValue(value);
          onChange?.(value);
        }}
      />
      {(suffix || allowClear) && (
        <div className={classNames([\`\${inputCls}-suffix\`])}>
          {allowClear && innerValue && (
            <CloseCircleFill
              className="clear-icon"
              onClick={() => {
                baseInputRef.current.clear?.();
              }}
            />
          )}
          {suffix}
        </div>
      )}
    </div>
  );
};
`},61860:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import './index.scss';
import _ from "lodash";

const cls = 'triones-antm-pot';
const inputCls = 'triones-antm-input';

export type InputOPTProps = {
  className?: string;
  style?: React.CSSProperties;
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
};

export type InputOPTItemProps = {
  index: number;
  focusIndex?: number;
  value?: string;
  onChange: (value: string) => void;
  onFocus?: (index: number) => void;
};

const InputOPTItem: FC<InputOPTItemProps> = ({
                                               index,
                                               focusIndex,
                                               value,
                                               onChange,
                                               onFocus,
                                             }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focusIndex === index) {
      if (_.isFunction(ref.current?.select)) {
        ref.current?.select();
      } else if(_.isFunction(ref.current?.setSelectionRange)) {
        ref.current?.setSelectionRange(0, ref.current!.value.length);
      }else {
        ref.current?.focus();
      }
    } else {
      ref.current?.blur();
    }
  }, [focusIndex]);

  return (
    <input
      ref={ref}
      className={classNames(
        \`\${inputCls}\`,
        \`\${cls}-input\`,
        \`\${inputCls}-outlined\`,
      )}
      size={1}
      type={\`text\`}
      maxLength={1}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onInput={(e) => {
        //onChange(e.target.value);
      }}
      onFocus={() => {
        onFocus?.(index);
      }}
    />
  );
};

export const InputOPT: FC<InputOPTProps> = ({
                                              className,
                                              style,
                                              length = 6,
                                            }) => {
  const [internalValue, setInternalValue] = React.useState<any>(
    Array.from({length}).map(() => ''),
  );

  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <div className={classNames(cls, className)} style={style}>
      {Array.from({length}).map((_, index) => {
        return (
          <InputOPTItem
            key={index}
            index={index}
            focusIndex={focusIndex}
            value={internalValue?.[index] || ''}
            onChange={(value) => {
              internalValue[index] = value;
              setInternalValue([...internalValue]);
              if (value) {
                setFocusIndex(index + 1);
              }
            }}
            onFocus={(index) => {
              setFocusIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
`},83761:function(t,e){"use strict";e.Z=`import {
  EyeInvisibleOutline,
  EyeOutline,
} from '@trionesdev/antd-taro-icons-react';
import React, { FC, useState } from 'react';
import { Input, InputProps } from './input';

export type InputPasswordProps = Omit<InputProps, 'type'> & {
  iconRender?: (visible: boolean) => React.ReactNode;
  visibilityToggle?: boolean;
};
export const InputPassword: FC<InputPasswordProps> = ({
  iconRender,
  visibilityToggle = true,
  suffix,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const toggleRender = () => {
    if (iconRender) {
      return iconRender(visible);
    } else {
      return (
        <>
          {visible ? (
            <EyeOutline onClick={() => setVisible(false)} />
          ) : (
            <EyeInvisibleOutline onClick={() => setVisible(true)} />
          )}
        </>
      );
    }
  };

  return (
    <Input
      {...rest}
      type={visible ? 'text' : 'password'}
      suffix={
        <>
          {' '}
          {visibilityToggle && <div style={{paddingLeft:4}}>{toggleRender()}</div>} {suffix}{' '}
        </>
      }
    />
  );
};
`},94595:function(t,e){"use strict";e.Z=`import { BaseInput } from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, {FC, useEffect} from 'react';
import './index.scss';

export type InputProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  type?: 'text' | 'password' | 'textarea';
  disabled?: boolean;
  allowClear?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: any;
  onChange?: (e: any) => void;
};
export const Input: FC<InputProps> = ({
  className,
  style,
  placeholder,
  type,
  disabled,
  allowClear,
  prefix,
  suffix,
  value,
  onChange,
}) => {

  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          prefix={prefix}
          suffix={suffix}
          allowClear={allowClear}
          type={type}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <BaseInput
          className={className}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return <>{handleRender()}</>;
};
`},78445:function(t,e,n){var u=n(88513);function r(a){if(Array.isArray(a))return u(a)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},26431:function(t){function e(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},93647:function(t){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},84176:function(t,e,n){var u=n(75863);function r(a,s){if(a==null)return{};var o=u(a,s),_,x;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(x=0;x<l.length;x++)_=l[x],!(s.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(a,_)&&(o[_]=a[_])}return o}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,u){if(n==null)return{};var r={},a=Object.keys(n),s,o;for(o=0;o<a.length;o++)s=a[o],!(u.indexOf(s)>=0)&&(r[s]=n[s]);return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var u=n(78445),r=n(26431),a=n(15274),s=n(93647);function o(_){return u(_)||r(_)||a(_)||s()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
