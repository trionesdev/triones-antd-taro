(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[793],{68095:function(r,e,n){"use strict";var d;n.r(e),n.d(e,{demos:function(){return C}});var a=n(90819),u=n.n(a),o=n(89933),s=n.n(o),v=n(44194),c=n(69836),E=n(45478),l=n(83168),p=n(51865),A=n.n(p),P=n(1213),t=n(11530),m=n(73298),M=n(73767),_=n(61864),f=n(72995),x=n(48345),h=n(69778),i=n(5854),C={"verificationcodeinput-demo-base":{component:v.memo(v.lazy(function(){return n.e(4990).then(n.bind(n,79137))})),asset:{type:"BLOCK",id:"verificationcodeinput-demo-base",refAtomIds:["VerificationCodeInput"],dependencies:{"index.tsx":{type:"FILE",value:n(1370).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(93920).Z},"./verification-code-input.tsx":{type:"FILE",value:n(74199).Z},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(29830).Z},"../Input.tsx":{type:"FILE",value:n(88197).Z},"./input-opt.tsx":{type:"FILE",value:n(29171).Z},"./input-password.tsx":{type:"FILE",value:n(30988).Z},"./input.tsx":{type:"FILE",value:n(90125).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./index.scss":{type:"FILE",value:n(48805).Z},"./input-affix-wrapper.tsx":{type:"FILE",value:n(68226).Z},"./base-input.tsx":{type:"FILE",value:n(9697).Z}},entry:"index.tsx"},context:{"../index.tsx":E,"./verification-code-input.tsx":l,"./style.scss":P,"../Input.tsx":t,"./input-opt.tsx":m,"./input-password.tsx":M,"./input.tsx":_,"./index.scss":x,"./input-affix-wrapper.tsx":h,"./base-input.tsx":i,react:d||(d=n.t(v,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/VerificationCodeInput/index.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/VerificationCodeInput/verification-code-input.tsx":l,classnames:p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/VerificationCodeInput/style.scss":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":t,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":_,"@trionesdev/antd-taro-icons-react":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":i},renderOpts:{compile:function(){var O=s()(u()().mark(function b(){var R,T=arguments;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,n.e(7215).then(n.bind(n,87215));case 2:return g.abrupt("return",(R=g.sent).default.apply(R,T));case 3:case"end":return g.stop()}},b)}));function I(){return O.apply(this,arguments)}return I}()}}}},5854:function(r,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return P}});var d=n(73193),a=n.n(d),u=n(45332),o=n.n(u),s=n(84176),v=n.n(s),c=n(51865),E=n.n(c),l=n(44194),p=n(31549),A=["className","style","placeholder","type","value","onChange"],P=(0,l.forwardRef)(function(t,m){var M=t.className,_=t.style,f=t.placeholder,x=t.type,h=t.value,i=t.onChange,C=v()(t,A),O=(0,l.useState)(0),I=o()(O,2),b=I[0],R=I[1],T=(0,l.useState)(h||""),D=o()(T,2),g=D[0],L=D[1];(0,l.useImperativeHandle)(m,function(){return{clear:function(){L(""),i==null||i("")}}});var j="triones-antm-input";return(0,l.useEffect)(function(){R(b+1)},[x]),(0,p.jsx)("input",a()(a()({},C),{},{className:E()(["".concat(j),M]),style:_,placeholder:f,type:x,value:g,onChange:function(K){L(K.target.value),i==null||i(K)}}),b)})},11530:function(r,e,n){"use strict";n.r(e);var d=n(73767),a=n(61864),u=n(73298),o=a.Input;o.Password=d.InputPassword,o.OPT=u.InputOPT,e.default=o},69778:function(r,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return m}});var d=n(73193),a=n.n(d),u=n(45332),o=n.n(u),s=n(84176),v=n.n(s),c=n(72995),E=n(51865),l=n.n(E),p=n(44194),A=n(5854),P=n(31549),t=["prefix","suffix","allowClear","value","onChange"],m=function(_){var f=_.prefix,x=_.suffix,h=_.allowClear,i=_.value,C=_.onChange,O=v()(_,t),I=p.useState(i),b=o()(I,2),R=b[0],T=b[1],D=(0,p.useRef)({}),g="triones-antm-input-affix-wrapper",L="triones-antm-input";return(0,P.jsxs)("div",{className:l()([g]),children:[f&&(0,P.jsx)("div",{className:l()(["".concat(L,"-prefix")]),children:f}),(0,P.jsx)(A.BaseInput,a()(a()({ref:D},O),{},{value:i,onChange:function(W){T(W),C==null||C(W)}})),(x||h)&&(0,P.jsxs)("div",{className:l()(["".concat(L,"-suffix")]),children:[h&&R&&(0,P.jsx)(c.CloseCircleFill,{className:"clear-icon",onClick:function(){var W,K;(W=(K=D.current).clear)===null||W===void 0||W.call(K)}}),x]})]})}},73298:function(r,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return A}});var d=n(45332),a=n.n(d),u=n(51865),o=n.n(u),s=n(44194),v=n(48345),c=n(31549),E="triones-antm-pot",l="triones-antm-input",p=function(t){var m=t.index,M=t.focusIndex,_=t.value,f=t.onFocus,x=s.useRef(null);return(0,c.jsx)("div",{ref:x,className:o()("".concat(l),"".concat(E,"-item"),"".concat(l,"-outlined")),onClick:function(){console.log("click",m),f==null||f(m)},children:_})},A=function(t){var m=t.className,M=t.style,_=t.length,f=_===void 0?6:_,x=t.value,h=t.onChange,i=(0,s.useRef)(),C=(0,s.useState)(x||""),O=a()(C,2),I=O[0],b=O[1],R=s.useState(Array.from({length:f}).map(function(){return""})),T=a()(R,2),D=T[0],g=T[1],L=(0,s.useState)(0),j=a()(L,2),W=j[0],K=j[1];return(0,s.useEffect)(function(){g(Array.from(I))},[I]),(0,c.jsxs)("div",{className:o()(E,m),style:M,children:[(0,c.jsx)("div",{className:o()("".concat(E,"-wrapper")),onClick:function(){var y;(y=i.current)===null||y===void 0||y.focus()},children:Array.from({length:f}).map(function(N,y){return(0,c.jsx)(p,{index:y,focusIndex:W,value:(D==null?void 0:D[y])||"",onFocus:function(V){K(V)}},y)})}),(0,c.jsx)("input",{ref:i,className:"".concat(E,"-input"),type:"number",value:I,onChange:function(y){y.target.value.length>f||(b(y.target.value),h==null||h(y.target.value))}})]})}},73767:function(r,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return P}});var d=n(73193),a=n.n(d),u=n(45332),o=n.n(u),s=n(84176),v=n.n(s),c=n(72995),E=n(44194),l=n(61864),p=n(31549),A=["iconRender","visibilityToggle","suffix"],P=function(m){var M=m.iconRender,_=m.visibilityToggle,f=_===void 0?!0:_,x=m.suffix,h=v()(m,A),i=(0,E.useState)(!1),C=o()(i,2),O=C[0],I=C[1],b=function(){return M?M(O):(0,p.jsx)(p.Fragment,{children:O?(0,p.jsx)(c.EyeOutline,{onClick:function(){return I(!1)}}):(0,p.jsx)(c.EyeInvisibleOutline,{onClick:function(){return I(!0)}})})};return(0,p.jsx)(l.Input,a()(a()({},h),{},{type:O?"text":"password",suffix:(0,p.jsxs)(p.Fragment,{children:[" ",f&&(0,p.jsx)("div",{style:{paddingLeft:4},children:b()})," ",x," "]})}))}},61864:function(r,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return A}});var d=n(73193),a=n.n(d),u=n(84176),o=n.n(u),s=n(5854),v=n(69778),c=n(44194),E=n(48345),l=n(31549),p=["className","style","placeholder","type","disabled","allowClear","prefix","suffix","value","onChange"],A=function(t){var m=t.className,M=t.style,_=t.placeholder,f=t.type,x=t.disabled,h=t.allowClear,i=t.prefix,C=t.suffix,O=t.value,I=t.onChange,b=o()(t,p),R=function(){return i||C||h?(0,l.jsx)(v.InputAffixWrapper,a()(a()({},b),{},{className:m,style:M,placeholder:_,prefix:i,suffix:C,allowClear:h,type:f,value:O,onChange:I})):(0,l.jsx)(s.BaseInput,a()(a()({},b),{},{className:m,style:M,placeholder:_,type:f,disabled:x,value:O,onChange:I}))};return(0,l.jsx)(l.Fragment,{children:R()})}},45478:function(r,e,n){"use strict";n.r(e);var d=n(83168);e.default=d.VerificationCodeInput},83168:function(r,e,n){"use strict";n.r(e),n.d(e,{VerificationCodeInput:function(){return x}});var d=n(73193),a=n.n(d),u=n(90819),o=n.n(u),s=n(89933),v=n.n(s),c=n(45332),E=n.n(c),l=n(84176),p=n.n(l),A=n(51865),P=n.n(A),t=n(44194),m=n(11530),M=n(1213),_=n(31549),f=["sendText","resendText","waitSeconds","onSend"],x=function(i){var C=i.sendText,O=C===void 0?"\u83B7\u53D6\u9A8C\u8BC1\u7801":C,I=i.resendText,b=I===void 0?"\u91CD\u65B0\u53D1\u9001":I,R=i.waitSeconds,T=R===void 0?60:R,D=i.onSend,g=p()(i,f),L=(0,t.useState)(!1),j=E()(L,2),W=j[0],K=j[1],N=(0,t.useState)(0),y=E()(N,2),S=y[0],V=y[1],w=(0,t.useRef)(0),U=(0,t.useRef)(null);(0,t.useEffect)(function(){S<1?(clearTimeout(U.current),U.current=null):K(!0)},[S]),(0,t.useEffect)(function(){return function(){clearTimeout(U.current)}},[]);var $="triones-antm-verification-code-input",F=function(){return S>0?(0,_.jsxs)("div",{className:P()("".concat($,"-counting")),children:[S,"s"]}):(0,_.jsx)("div",{className:P()("".concat($,"-send")),onClick:v()(o()().mark(function k(){return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(U.current){B.next=9;break}if(B.t0=D===void 0,B.t0){B.next=6;break}return B.next=5,D==null?void 0:D();case 5:B.t0=B.sent;case 6:if(!B.t0){B.next=9;break}w.current=T,U.current=setInterval(function(){w.current=w.current-1,V(w.current)},1e3);case 9:case"end":return B.stop()}},k)})),children:W?b:O})};return(0,_.jsx)(m.default,a()(a()({},g),{},{className:P()($,g.className),suffix:F()}))}},48345:function(r,e,n){"use strict";n.r(e)},1213:function(r,e,n){"use strict";n.r(e)},44978:function(r,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return a}});var d=n(69836);const a=[]},9697:function(r,e){"use strict";e.Z=`import classNames from 'classnames';
import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';

export type BaseInputProps = {
  className?: string;
  style?: React.CSSProperties;
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
  ({className, style, placeholder, type, value, onChange, ...props}, ref) => {
    const [keySequence, setKeySequence] = useState(0)
    const [innerValue, setInnerValue] = useState(value || '');

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';


    useEffect(() => {
      setKeySequence(keySequence + 1)
    }, [type]);

    return (
      <input key={keySequence}
             {...props}
             className={classNames([\`\${cls}\`, className])}
             style={style}
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
`},48805:function(r,e){"use strict";e.Z=`@import "../style/variable";

$inputCls: 'triones-antm-input';
$inputAffixWrapperCls: 'triones-antm-input-affix-wrapper';
$inputGroupWrapperCls: 'triones-antm-input-group-wrapper';
$inputPotCls: 'triones-antm-pot';

input {
  height: auto;
}

.#{$inputCls} {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 0;
  transition: all .2s;
  padding: $trionesInputPaddingBlock $trionesInputPaddingInline;
  outline: none;
  box-shadow: none;
  border: none;
  line-height: $trionesLineHeight;
  border-radius: $trionesBorderRadiusSm;
  font-size: 14Px;
  height: auto;

  &::placeholder {
    font-size: 14Px;
    color: #cccccc;
  }
}


.#{$inputAffixWrapperCls} {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  line-height: $trionesLineHeight;
  padding: $trionesInputPaddingBlock $trionesInputPaddingInline;
  gap: 4Px;

  &::before {

    display: inline-block;
    width: 0;
    visibility: hidden;
    content: "\\a0";
  }

  &::after {

  }

  .#{$inputCls} {
    padding: 0;
    background-color: transparent;

    &-prifix {
    }

    &-suffix {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
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
  position: relative;
  display: inline-flex;
  &-wrapper{
    position: relative;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 8Px;
  }
  &-input {
    position: absolute;
    background-color: transparent;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &-item {
    text-align: center;
    font-size: 14Px;
    height: 32Px;
    width: 32Px;
    display: inline-flex;
    align-items: center;
    justify-content: center;


    &::placeholder {
      font-size: 14Px;
    }
    &-focus{
      &::after{
        content: ' ';
        height: 100%;
        width: 0.5Px;
        background-color: #0a0a0a;
        transition: transform 0.1s ease;
        animation: blink 1s step-end infinite;
      }
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

@keyframes blink  {
  50% {
    background-color: transparent;
  }
}
`},88197:function(r,e){"use strict";e.Z=`import {InputPassword, InputPasswordProps} from './input-password';
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
`},68226:function(r,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
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
`},29171:function(r,e){"use strict";e.Z=`import classNames from 'classnames';
import React, {FC, useEffect, useRef, useState} from 'react';
import './index.scss';

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
  onFocus?: (index: number) => void;
};

const InputOPTItem: FC<InputOPTItemProps> = ({
                                               index,
                                               focusIndex,
                                               value,

                                               onFocus,
                                             }) => {
  const ref = React.useRef<HTMLInputElement>(null);


  return (
    <div ref={ref}
         className={classNames(
           \`\${inputCls}\`,
           \`\${cls}-item\`,
           \`\${inputCls}-outlined\`,
           // {
           //   [\`\${cls}-item-focus\`]: focusIndex === index,
           // }
         )}
         onClick={() => {
           console.log('click', index)
      onFocus?.(index)
    }}>{value}</div>
  );
};

export const InputOPT: FC<InputOPTProps> = ({
                                              className,
                                              style,
                                              length = 6,
                                              value,
                                              onChange
                                            }) => {
  const inputRef = useRef<any>()
  const [inputValue, setInputValue] = useState(value || '')
  const [internalValue, setInternalValue] = React.useState<any>(
    Array.from({length}).map(() => ''),
  );


  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    setInternalValue(Array.from(inputValue))
  }, [inputValue]);

  return (
    <div className={classNames(cls, className)} style={style}>
      <div className={classNames(\`\${cls}-wrapper\`)} onClick={() => {
        inputRef.current?.focus()
      }}>
        {Array.from({length}).map((_, index) => {
          return (
            <InputOPTItem
              key={index}
              index={index}
              focusIndex={focusIndex}
              value={internalValue?.[index] || ''}
              onFocus={(index) => {
                setFocusIndex(index);
              }}
            />
          );
        })}
      </div>
      <input ref={inputRef} className={\`\${cls}-input\`} type={\`number\`} value={inputValue} onChange={(e) => {
        if (e.target.value.length > length) {
          return
        }
        setInputValue(e.target.value)
        onChange?.(e.target.value)
      }}/>
    </div>
  );
};
`},30988:function(r,e){"use strict";e.Z=`import {
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
`},90125:function(r,e){"use strict";e.Z=`import { BaseInput } from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, {FC} from 'react';
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
  ...rest
}) => {

  const handleRender = () => {
    if (prefix || suffix || allowClear) {
      return (
        <InputAffixWrapper
          {...rest}
          className={className}
          style={style}
          placeholder={placeholder}
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
          {...rest}
          className={className}
          style={style}
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
`},1370:function(r,e){"use strict";e.Z=`import React from "react";
import ValidationCodeInput from "../index";

export default ()=>{
  return <div style={{backgroundColor:'rgb(244 244 244)'}}>
    <ValidationCodeInput placeholder={\`\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\`}/>
  </div>
}
`},93920:function(r,e){"use strict";e.Z=`import {VerificationCodeInput}  from "./verification-code-input";

export default VerificationCodeInput;
`},29830:function(r,e){"use strict";e.Z=`@import "../style/variable";

$verificationCodeInputCls: 'triones-antm-verification-code-input';

.#{$verificationCodeInputCls} {
  &-send {
    padding-inline: $trionesPaddingContentHorizontal;
    cursor: pointer;

    &:hover {
      color: $trionesColorPrimary;
    }
  }

  &-counting {
    padding-inline: $trionesPaddingContentHorizontal;
    cursor: not-allowed;
    color: $trionesColorTextDisabled;
  }
}
`},74199:function(r,e){"use strict";e.Z=`import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { InputProps } from '..';
import Input from '../Input';
import './style.scss';

type ValidationCodeInputProps = Omit<InputProps, 'suffix'> & {
  /**
   * @description \u53D1\u9001\u6587\u672C
   * @default \u83B7\u53D6\u9A8C\u8BC1\u7801
   */
  sendText?: string;
  /**
   * @description \u91CD\u65B0\u53D1\u9001\u6587\u672C
   * @default \u91CD\u65B0\u53D1\u9001
   */
  resendText?: string;
  /**
   * @description \u7B49\u5F85\u65F6\u95F4
   */
  waitSeconds?: number;
  /**
   * @description \u53D1\u9001\u4E8B\u4EF6
   */
  onSend?: () => Promise<boolean>;
};

export const VerificationCodeInput: FC<ValidationCodeInputProps> = ({
  sendText = '\u83B7\u53D6\u9A8C\u8BC1\u7801',
  resendText = '\u91CD\u65B0\u53D1\u9001',
  waitSeconds = 60,
  onSend,
  ...props
}) => {
  const [send, setSend] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<any>(0);
  const secondsRef = useRef<number>(0);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (seconds < 1) {
      clearTimeout(timer.current);
      timer.current = null;
    } else {
      setSend(true);
    }
  }, [seconds]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const prefixCls = 'triones-antm-verification-code-input';

  const handleSuffix = () => {
    if (seconds > 0) {
      return (
        <div className={classNames(\`\${prefixCls}-counting\`)}>{seconds}s</div>
      );
    }
    return (
      <div
        className={classNames(\`\${prefixCls}-send\`)}
        onClick={async () => {
          if (!timer.current) {
            if (onSend === undefined || (await onSend?.())) {
              secondsRef.current = waitSeconds;
              timer.current = setInterval(() => {
                secondsRef.current = secondsRef.current - 1;
                setSeconds(secondsRef.current);
              }, 1000);
            }
          }
        }}
      >
        {send ? resendText : sendText}
      </div>
    );
  };

  return (
    <Input
      {...props}
      className={classNames(prefixCls, props.className)}
      suffix={handleSuffix()}
    />
  );
};
`},84176:function(r,e,n){var d=n(75863);function a(u,o){if(u==null)return{};var s=d(u,o),v,c;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(u);for(c=0;c<E.length;c++)v=E[c],!(o.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(u,v)&&(s[v]=u[v])}return s}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports},75863:function(r){function e(n,d){if(n==null)return{};var a={},u=Object.keys(n),o,s;for(s=0;s<u.length;s++)o=u[s],!(d.indexOf(o)>=0)&&(a[o]=n[o]);return a}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
