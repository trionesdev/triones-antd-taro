(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{1907:function(a,e,n){"use strict";var d;n.r(e),n.d(e,{demos:function(){return x}});var r=n(90819),s=n.n(r),o=n(89933),_=n.n(o),i=n(44194),m=n(70304),P=n(11530),l=n(95676),p=n(48345),M=n(73298),C=n(73767),t=n(61864),f=n(51865),b=n.n(f),u=n(72995),c=n(69778),I=n(5854),x={"input-demo-base":{component:i.memo(i.lazy(function(){return n.e(2091).then(n.bind(n,28069))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(39076).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(88197).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(87669).Z},"./index.scss":{type:"FILE",value:n(48805).Z},"./input-opt.tsx":{type:"FILE",value:n(29171).Z},"./input-password.tsx":{type:"FILE",value:n(30988).Z},"./input.tsx":{type:"FILE",value:n(90125).Z},classnames:{type:"NPM",value:"2.5.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./input-affix-wrapper.tsx":{type:"FILE",value:n(68226).Z},"./base-input.tsx":{type:"FILE",value:n(9697).Z}},entry:"index.tsx"},context:{"../index.tsx":P,"../../DemoBlock.tsx":l,"./index.scss":p,"./input-opt.tsx":M,"./input-password.tsx":C,"./input.tsx":t,"./input-affix-wrapper.tsx":c,"./base-input.tsx":I,react:d||(d=n.t(i,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":t,classnames:f,"@trionesdev/antd-taro-icons-react":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":I},renderOpts:{compile:function(){var v=_()(s()().mark(function g(){var E,D=arguments;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(7215).then(n.bind(n,87215));case 2:return h.abrupt("return",(E=h.sent).default.apply(E,D));case 3:case"end":return h.stop()}},g)}));function O(){return v.apply(this,arguments)}return O}()}}}},95676:function(a,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return o}});var d=n(44194),r=n(3837),s=n(31549),o=function(i){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:i.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:i.children})]})}},5854:function(a,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return C}});var d=n(73193),r=n.n(d),s=n(45332),o=n.n(s),_=n(84176),i=n.n(_),m=n(51865),P=n.n(m),l=n(44194),p=n(31549),M=["className","style","placeholder","type","value","onChange"],C=(0,l.forwardRef)(function(t,f){var b=t.className,u=t.style,c=t.placeholder,I=t.type,x=t.value,v=t.onChange,O=i()(t,M),g=(0,l.useState)(0),E=o()(g,2),D=E[0],T=E[1],h=(0,l.useState)(x||""),B=o()(h,2),j=B[0],A=B[1];(0,l.useImperativeHandle)(f,function(){return{clear:function(){A(""),v==null||v("")}}});var L="triones-antm-input";return(0,l.useEffect)(function(){T(D+1)},[I]),(0,p.jsx)("input",r()(r()({},O),{},{className:P()(["".concat(L),b]),style:u,placeholder:c,type:I,value:j,onChange:function(W){A(W.target.value),v==null||v(W)}}),D)})},11530:function(a,e,n){"use strict";n.r(e);var d=n(73767),r=n(61864),s=n(73298),o=r.Input;o.Password=d.InputPassword,o.OPT=s.InputOPT,e.default=o},69778:function(a,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return f}});var d=n(73193),r=n.n(d),s=n(45332),o=n.n(s),_=n(84176),i=n.n(_),m=n(72995),P=n(51865),l=n.n(P),p=n(44194),M=n(5854),C=n(31549),t=["prefix","suffix","allowClear","value","onChange"],f=function(u){var c=u.prefix,I=u.suffix,x=u.allowClear,v=u.value,O=u.onChange,g=i()(u,t),E=p.useState(v),D=o()(E,2),T=D[0],h=D[1],B=(0,p.useRef)({}),j="triones-antm-input-affix-wrapper",A="triones-antm-input";return(0,C.jsxs)("div",{className:l()([j]),children:[c&&(0,C.jsx)("div",{className:l()(["".concat(A,"-prefix")]),children:c}),(0,C.jsx)(M.BaseInput,r()(r()({ref:B},g),{},{value:v,onChange:function(R){h(R),O==null||O(R)}})),(I||x)&&(0,C.jsxs)("div",{className:l()(["".concat(A,"-suffix")]),children:[x&&T&&(0,C.jsx)(m.CloseCircleFill,{className:"clear-icon",onClick:function(){var R,W;(R=(W=B.current).clear)===null||R===void 0||R.call(W)}}),I]})]})}},73298:function(a,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return M}});var d=n(45332),r=n.n(d),s=n(51865),o=n.n(s),_=n(44194),i=n(48345),m=n(31549),P="triones-antm-pot",l="triones-antm-input",p=function(t){var f=t.index,b=t.focusIndex,u=t.value,c=t.onFocus,I=_.useRef(null);return(0,m.jsx)("div",{ref:I,className:o()("".concat(l),"".concat(P,"-item"),"".concat(l,"-outlined")),onClick:function(){console.log("click",f),c==null||c(f)},children:u})},M=function(t){var f=t.className,b=t.style,u=t.length,c=u===void 0?6:u,I=t.value,x=t.onChange,v=(0,_.useRef)(),O=(0,_.useState)(I||""),g=r()(O,2),E=g[0],D=g[1],T=_.useState(Array.from({length:c}).map(function(){return""})),h=r()(T,2),B=h[0],j=h[1],A=(0,_.useState)(0),L=r()(A,2),R=L[0],W=L[1];return(0,_.useEffect)(function(){j(Array.from(E))},[E]),(0,m.jsxs)("div",{className:o()(P,f),style:b,children:[(0,m.jsx)("div",{className:o()("".concat(P,"-wrapper")),onClick:function(){var y;(y=v.current)===null||y===void 0||y.focus()},children:Array.from({length:c}).map(function(K,y){return(0,m.jsx)(p,{index:y,focusIndex:R,value:(B==null?void 0:B[y])||"",onFocus:function(U){W(U)}},y)})}),(0,m.jsx)("input",{ref:v,className:"".concat(P,"-input"),type:"number",value:E,onChange:function(y){y.target.value.length>c||(D(y.target.value),x==null||x(y.target.value))}})]})}},73767:function(a,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return C}});var d=n(73193),r=n.n(d),s=n(45332),o=n.n(s),_=n(84176),i=n.n(_),m=n(72995),P=n(44194),l=n(61864),p=n(31549),M=["iconRender","visibilityToggle","suffix"],C=function(f){var b=f.iconRender,u=f.visibilityToggle,c=u===void 0?!0:u,I=f.suffix,x=i()(f,M),v=(0,P.useState)(!1),O=o()(v,2),g=O[0],E=O[1],D=function(){return b?b(g):(0,p.jsx)(p.Fragment,{children:g?(0,p.jsx)(m.EyeOutline,{onClick:function(){return E(!1)}}):(0,p.jsx)(m.EyeInvisibleOutline,{onClick:function(){return E(!0)}})})};return(0,p.jsx)(l.Input,r()(r()({},x),{},{type:g?"text":"password",suffix:(0,p.jsxs)(p.Fragment,{children:[" ",c&&(0,p.jsx)("div",{style:{paddingLeft:4},children:D()})," ",I," "]})}))}},61864:function(a,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return M}});var d=n(73193),r=n.n(d),s=n(84176),o=n.n(s),_=n(5854),i=n(69778),m=n(44194),P=n(48345),l=n(31549),p=["className","style","placeholder","type","disabled","allowClear","prefix","suffix","value","onChange"],M=function(t){var f=t.className,b=t.style,u=t.placeholder,c=t.type,I=t.disabled,x=t.allowClear,v=t.prefix,O=t.suffix,g=t.value,E=t.onChange,D=o()(t,p),T=function(){return v||O||x?(0,l.jsx)(i.InputAffixWrapper,r()(r()({},D),{},{className:f,style:b,placeholder:u,prefix:v,suffix:O,allowClear:x,type:c,value:g,onChange:E})):(0,l.jsx)(_.BaseInput,r()(r()({},D),{},{className:f,style:b,placeholder:u,type:c,disabled:I,value:g,onChange:E}))};return(0,l.jsx)(l.Fragment,{children:T()})}},3837:function(a,e,n){"use strict";n.r(e)},48345:function(a,e,n){"use strict";n.r(e)},8276:function(a,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});var d=n(70304);const r=[]},87669:function(a,e){"use strict";e.Z=`import React from 'react'
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
`},9697:function(a,e){"use strict";e.Z=`import classNames from 'classnames';
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
`},39076:function(a,e){"use strict";e.Z=`import {DemoBlock} from '../../DemoBlock';
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
`},48805:function(a,e){"use strict";e.Z=`@import "../style/variable";

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
`},88197:function(a,e){"use strict";e.Z=`import {InputPassword, InputPasswordProps} from './input-password';
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
`},68226:function(a,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
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
`},29171:function(a,e){"use strict";e.Z=`import classNames from 'classnames';
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
`},30988:function(a,e){"use strict";e.Z=`import {
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
`},90125:function(a,e){"use strict";e.Z=`import { BaseInput } from './base-input';
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
`},84176:function(a,e,n){var d=n(75863);function r(s,o){if(s==null)return{};var _=d(s,o),i,m;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(s);for(m=0;m<P.length;m++)i=P[m],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(_[i]=s[i])}return _}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},75863:function(a){function e(n,d){if(n==null)return{};var r={},s=Object.keys(n),o,_;for(_=0;_<s.length;_++)o=s[_],!(d.indexOf(o)>=0)&&(r[o]=n[o]);return r}a.exports=e,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
