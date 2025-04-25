(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{44647:function(t,e,n){"use strict";var u;n.r(e),n.d(e,{demos:function(){return P}});var r=n(90819),a=n.n(r),o=n(89933),s=n.n(o),_=n(44194),c=n(38067),l=n(18358),C=n(57180),m=n(27199),O=n(93439),f=n(19310),R=n(32222),d=n(80150),M=n(51865),v=n.n(M),i=n(39378),x=n.n(i),I=n(16841),h=n(63164),P={"input-demo-base":{component:_.memo(_.lazy(function(){return n.e(2091).then(n.bind(n,43611))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(54235).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(99064).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(48873).Z},"./index.scss":{type:"FILE",value:n(83301).Z},"./input-opt.tsx":{type:"FILE",value:n(34225).Z},"./input-password.tsx":{type:"FILE",value:n(55944).Z},"./input.tsx":{type:"FILE",value:n(10387).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./input-affix-wrapper.tsx":{type:"FILE",value:n(36049).Z},"./base-input.tsx":{type:"FILE",value:n(24823).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":C,"./index.scss":m,"./input-opt.tsx":O,"./input-password.tsx":f,"./input.tsx":R,"./input-affix-wrapper.tsx":I,"./base-input.tsx":h,react:u||(u=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":R,"@trionesdev/antd-taro-icons-react":d,classnames:M,lodash:i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":h},renderOpts:{compile:function(){var g=s()(a()().mark(function p(){var D,T=arguments;return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,n.e(8029).then(n.bind(n,18029));case 2:return B.abrupt("return",(D=B.sent).default.apply(D,T));case 3:case"end":return B.stop()}},p)}));function E(){return g.apply(this,arguments)}return E}()}}}},57180:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return o}});var u=n(44194),r=n(56368),a=n(31549),o=function(_){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:_.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},63164:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return c}});var u=n(45332),r=n.n(u),a=n(51865),o=n.n(a),s=n(44194),_=n(31549),c=(0,s.forwardRef)(function(l,C){var m=l.className,O=l.placeholder,f=l.type,R=l.value,d=l.onChange,M=(0,s.useState)(R||""),v=r()(M,2),i=v[0],x=v[1];(0,s.useImperativeHandle)(C,function(){return{clear:function(){x(""),d==null||d("")}}});var I="triones-antm-input";return(0,_.jsx)("input",{className:o()(["".concat(I),m]),placeholder:O,type:f,value:i,onChange:function(P){x(P.target.value),d==null||d(P)}})})},18358:function(t,e,n){"use strict";n.r(e);var u=n(19310),r=n(32222),a=n(93439),o=r.Input;o.Password=u.InputPassword,o.OPT=a.InputOPT,e.default=o},16841:function(t,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return d}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),c=n(80150),l=n(51865),C=n.n(l),m=n(44194),O=n(63164),f=n(31549),R=["prefix","suffix","allowClear","value","onChange"],d=function(v){var i=v.prefix,x=v.suffix,I=v.allowClear,h=v.value,P=v.onChange,g=_()(v,R),E=m.useState(h),p=o()(E,2),D=p[0],T=p[1],b=(0,m.useRef)({}),B="triones-antm-input-affix-wrapper",A="triones-antm-input";return(0,f.jsxs)("div",{className:C()([B]),children:[i&&(0,f.jsx)("div",{className:C()(["".concat(A,"-prefix")]),children:i}),(0,f.jsx)(O.BaseInput,r()(r()({ref:b},g),{},{value:h,onChange:function(y){T(y),P==null||P(y)}})),(x||I)&&(0,f.jsxs)("div",{className:C()(["".concat(A,"-suffix")]),children:[I&&D&&(0,f.jsx)(c.CloseCircleFill,{className:"clear-icon",onClick:function(){var y,W;(y=(W=b.current).clear)===null||y===void 0||y.call(W)}}),x]})]})}},93439:function(t,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return M}});var u=n(76711),r=n.n(u),a=n(45332),o=n.n(a),s=n(51865),_=n.n(s),c=n(44194),l=n(27199),C=n(39378),m=n.n(C),O=n(31549),f="triones-antm-pot",R="triones-antm-input",d=function(i){var x=i.index,I=i.focusIndex,h=i.value,P=i.onChange,g=i.onFocus,E=c.useRef(null);return(0,c.useEffect)(function(){if(I===x){var p;if(m().isFunction((p=E.current)===null||p===void 0?void 0:p.select)){var D;(D=E.current)===null||D===void 0||D.select()}else{var T;(T=E.current)===null||T===void 0||T.setSelectionRange(0,E.current.value.length)}}else{var b;(b=E.current)===null||b===void 0||b.blur()}},[I]),(0,O.jsx)("input",{ref:E,className:_()("".concat(R),"".concat(f,"-input"),"".concat(R,"-outlined")),size:1,type:"text",maxLength:1,value:h,onChange:function(D){P(D.target.value)},onInput:function(D){},onFocus:function(){g==null||g(x)}})},M=function(i){var x=i.className,I=i.style,h=i.length,P=h===void 0?6:h,g=c.useState(Array.from({length:P}).map(function(){return""})),E=o()(g,2),p=E[0],D=E[1],T=(0,c.useState)(0),b=o()(T,2),B=b[0],A=b[1];return(0,O.jsx)("div",{className:_()(f,x),style:I,children:Array.from({length:P}).map(function(K,y){return(0,O.jsx)(d,{index:y,focusIndex:B,value:(p==null?void 0:p[y])||"",onChange:function(L){p[y]=L,D(r()(p)),L&&A(y+1)},onFocus:function(L){A(L)}},y)})})}},19310:function(t,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return f}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),c=n(80150),l=n(44194),C=n(32222),m=n(31549),O=["iconRender","visibilityToggle","suffix"],f=function(d){var M=d.iconRender,v=d.visibilityToggle,i=v===void 0?!0:v,x=d.suffix,I=_()(d,O),h=(0,l.useState)(!1),P=o()(h,2),g=P[0],E=P[1],p=function(){return M?M(g):(0,m.jsx)(m.Fragment,{children:g?(0,m.jsx)(c.EyeOutline,{onClick:function(){return E(!1)}}):(0,m.jsx)(c.EyeInvisibleOutline,{onClick:function(){return E(!0)}})})};return(0,m.jsx)(C.Input,r()(r()({},I),{},{type:g?"text":"password",suffix:(0,m.jsxs)(m.Fragment,{children:[" ",i&&p()," ",x," "]})}))}},32222:function(t,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return _}});var u=n(63164),r=n(16841),a=n(44194),o=n(27199),s=n(31549),_=function(l){var C=l.className,m=l.style,O=l.placeholder,f=l.type,R=l.disabled,d=l.allowClear,M=l.prefix,v=l.suffix,i=l.value,x=l.onChange,I=function(){return M||v||d?(0,s.jsx)(r.InputAffixWrapper,{prefix:M,suffix:v,allowClear:d,type:f,value:i,onChange:x}):(0,s.jsx)(u.BaseInput,{className:C,placeholder:O,type:f,disabled:R,value:i,onChange:x})};return(0,s.jsx)(s.Fragment,{children:I()})}},56368:function(t,e,n){"use strict";n.r(e)},27199:function(t,e,n){"use strict";n.r(e)},21596:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});var u=n(38067);const r=[]},48873:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},24823:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

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
    const [innerValue, setInnerValue] = useState(value || '');

    useImperativeHandle(ref, () => ({
      clear: () => {
        setInnerValue('');
        onChange?.('');
      },
    }));

    const cls = 'triones-antm-input';
    return (
      <input
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
`},54235:function(t,e){"use strict";e.Z=`import {DemoBlock} from '../../DemoBlock';
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
`},83301:function(t,e){"use strict";e.Z=`$inputCls: 'triones-antm-input';
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
`},99064:function(t,e){"use strict";e.Z=`import {InputPassword, InputPasswordProps} from './input-password';
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
`},36049:function(t,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
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
`},34225:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
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
      } else {
        ref.current?.setSelectionRange(0, ref.current!.value.length);
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
`},55944:function(t,e){"use strict";e.Z=`import {
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
          {visibilityToggle && toggleRender()} {suffix}{' '}
        </>
      }
    />
  );
};
`},10387:function(t,e){"use strict";e.Z=`import { BaseInput } from './base-input';
import { InputAffixWrapper } from './input-affix-wrapper';
import React, { FC } from 'react';
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
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},84176:function(t,e,n){var u=n(75863);function r(a,o){if(a==null)return{};var s=u(a,o),_,c;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(c=0;c<l.length;c++)_=l[c],!(o.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(a,_)&&(s[_]=a[_])}return s}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,u){if(n==null)return{};var r={},a=Object.keys(n),o,s;for(s=0;s<a.length;s++)o=a[s],!(u.indexOf(o)>=0)&&(r[o]=n[o]);return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var u=n(78445),r=n(26431),a=n(15274),o=n(93647);function s(_){return u(_)||r(_)||a(_)||o()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
