(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[871],{95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return d}});var f=n(44194),o=n(3837),r=n(31549),d=function(p){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:p.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:p.children})]})}},5854:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return O}});var f=n(45332),o=n.n(f),r=n(51865),d=n.n(r),l=n(44194),p=n(31549),O=(0,l.forwardRef)(function(a,b){var c=a.className,y=a.placeholder,v=a.type,M=a.value,_=a.onChange,R=(0,l.useState)(0),m=o()(R,2),s=m[0],I=m[1],E=(0,l.useState)(M||""),C=o()(E,2),h=C[0],x=C[1];(0,l.useImperativeHandle)(b,function(){return{clear:function(){x(""),_==null||_("")}}});var i="triones-antm-input";return(0,l.useEffect)(function(){I(s+1)},[v]),(0,p.jsx)("input",{className:d()(["".concat(i),c]),placeholder:y,type:v,value:h,onChange:function(P){x(P.target.value),_==null||_(P)}},s)})},11530:function(t,e,n){"use strict";n.r(e);var f=n(73767),o=n(61864),r=n(73298),d=o.Input;d.Password=f.InputPassword,d.OPT=r.InputOPT,e.default=d},69778:function(t,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return _}});var f=n(73193),o=n.n(f),r=n(45332),d=n.n(r),l=n(84176),p=n.n(l),O=n(47323),a=n(51865),b=n.n(a),c=n(44194),y=n(5854),v=n(31549),M=["prefix","suffix","allowClear","value","onChange"],_=function(m){var s=m.prefix,I=m.suffix,E=m.allowClear,C=m.value,h=m.onChange,x=p()(m,M),i=c.useState(C),u=d()(i,2),P=u[0],D=u[1],T=(0,c.useRef)({}),B="triones-antm-input-affix-wrapper",A="triones-antm-input";return(0,v.jsxs)("div",{className:b()([B]),children:[s&&(0,v.jsx)("div",{className:b()(["".concat(A,"-prefix")]),children:s}),(0,v.jsx)(y.BaseInput,o()(o()({ref:T},x),{},{value:C,onChange:function(g){D(g),h==null||h(g)}})),(I||E)&&(0,v.jsxs)("div",{className:b()(["".concat(A,"-suffix")]),children:[E&&P&&(0,v.jsx)(O.CloseCircleFill,{className:"clear-icon",onClick:function(){var g,W;(g=(W=T.current).clear)===null||g===void 0||g.call(W)}}),I]})]})}},73298:function(t,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return R}});var f=n(76711),o=n.n(f),r=n(45332),d=n.n(r),l=n(51865),p=n.n(l),O=n(44194),a=n(48345),b=n(39378),c=n.n(b),y=n(31549),v="triones-antm-pot",M="triones-antm-input",_=function(s){var I=s.index,E=s.focusIndex,C=s.value,h=s.onChange,x=s.onFocus,i=O.useRef(null);return(0,O.useEffect)(function(){if(E===I){var u,P;if(c().isFunction((u=i.current)===null||u===void 0?void 0:u.select)){var D;(D=i.current)===null||D===void 0||D.select()}else if(c().isFunction((P=i.current)===null||P===void 0?void 0:P.setSelectionRange)){var T;(T=i.current)===null||T===void 0||T.setSelectionRange(0,i.current.value.length)}else{var B;(B=i.current)===null||B===void 0||B.focus()}}else{var A;(A=i.current)===null||A===void 0||A.blur()}},[E]),(0,y.jsx)("input",{ref:i,className:p()("".concat(M),"".concat(v,"-input"),"".concat(M,"-outlined")),size:1,type:"text",maxLength:1,value:C,onChange:function(P){h(P.target.value)},onInput:function(P){},onFocus:function(){x==null||x(I)}})},R=function(s){var I=s.className,E=s.style,C=s.length,h=C===void 0?6:C,x=O.useState(Array.from({length:h}).map(function(){return""})),i=d()(x,2),u=i[0],P=i[1],D=(0,O.useState)(0),T=d()(D,2),B=T[0],A=T[1];return(0,y.jsx)("div",{className:p()(v,I),style:E,children:Array.from({length:h}).map(function(j,g){return(0,y.jsx)(_,{index:g,focusIndex:B,value:(u==null?void 0:u[g])||"",onChange:function(L){u[g]=L,P(o()(u)),L&&A(g+1)},onFocus:function(L){A(L)}},g)})})}},73767:function(t,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return v}});var f=n(73193),o=n.n(f),r=n(45332),d=n.n(r),l=n(84176),p=n.n(l),O=n(47323),a=n(44194),b=n(61864),c=n(31549),y=["iconRender","visibilityToggle","suffix"],v=function(_){var R=_.iconRender,m=_.visibilityToggle,s=m===void 0?!0:m,I=_.suffix,E=p()(_,y),C=(0,a.useState)(!1),h=d()(C,2),x=h[0],i=h[1],u=function(){return R?R(x):(0,c.jsx)(c.Fragment,{children:x?(0,c.jsx)(O.EyeOutline,{onClick:function(){return i(!1)}}):(0,c.jsx)(O.EyeInvisibleOutline,{onClick:function(){return i(!0)}})})};return(0,c.jsx)(b.Input,o()(o()({},E),{},{type:x?"text":"password",suffix:(0,c.jsxs)(c.Fragment,{children:[" ",s&&(0,c.jsx)("div",{style:{paddingLeft:4},children:u()})," ",I," "]})}))}},61864:function(t,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return p}});var f=n(5854),o=n(69778),r=n(44194),d=n(48345),l=n(31549),p=function(a){var b=a.className,c=a.style,y=a.placeholder,v=a.type,M=a.disabled,_=a.allowClear,R=a.prefix,m=a.suffix,s=a.value,I=a.onChange,E=function(){return R||m||_?(0,l.jsx)(o.InputAffixWrapper,{prefix:R,suffix:m,allowClear:_,type:v,value:s,onChange:I}):(0,l.jsx)(f.BaseInput,{className:b,placeholder:y,type:v,disabled:M,value:s,onChange:I})};return(0,l.jsx)(l.Fragment,{children:E()})}},3837:function(t,e,n){"use strict";n.r(e)},48345:function(t,e,n){"use strict";n.r(e)},92724:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},78445:function(t,e,n){var f=n(88513);function o(r){if(Array.isArray(r))return f(r)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},26431:function(t){function e(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},93647:function(t){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var f=n(78445),o=n(26431),r=n(15274),d=n(93647);function l(p){return f(p)||o(p)||r(p)||d()}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
