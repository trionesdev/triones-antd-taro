(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{45011:function(t,e,n){"use strict";var u;n.r(e),n.d(e,{demos:function(){return P}});var r=n(90819),a=n.n(r),o=n(89933),s=n.n(o),_=n(44194),m=n(96465),l=n(14639),C=n(72982),f=n(57870),O=n(36583),v=n(51168),g=n(97798),d=n(51865),y=n.n(d),p=n(67560),i=n(39378),x=n.n(i),I=n(49858),h=n(78838),P={"input-demo-base":{component:_.memo(_.lazy(function(){return n.e(2091).then(n.bind(n,45061))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(85403).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(81722).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(96530).Z},"./index.scss":{type:"FILE",value:n(37984).Z},"./input-password.tsx":{type:"FILE",value:n(69741).Z},"./input-opt.tsx":{type:"FILE",value:n(91327).Z},"./input.tsx":{type:"FILE",value:n(49637).Z},classnames:{type:"NPM",value:"2.5.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},lodash:{type:"NPM",value:"4.17.21"},"./input-affix-wrapper.tsx":{type:"FILE",value:n(85974).Z},"./base-input.tsx":{type:"FILE",value:n(10461).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":C,"./index.scss":f,"./input-password.tsx":O,"./input-opt.tsx":v,"./input.tsx":g,"./input-affix-wrapper.tsx":I,"./base-input.tsx":h,react:u||(u=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":g,classnames:d,"@trionesdev/antd-taro-icons-react":p,lodash:i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":h},renderOpts:{compile:function(){var M=s()(a()().mark(function c(){var D,T=arguments;return a()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,n.e(6518).then(n.bind(n,86518));case 2:return B.abrupt("return",(D=B.sent).default.apply(D,T));case 3:case"end":return B.stop()}},c)}));function E(){return M.apply(this,arguments)}return E}()}}}},72982:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return o}});var u=n(44194),r=n(14368),a=n(31549),o=function(_){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:_.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},78838:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return m}});var u=n(45332),r=n.n(u),a=n(51865),o=n.n(a),s=n(44194),_=n(31549),m=(0,s.forwardRef)(function(l,C){var f=l.className,O=l.placeholder,v=l.type,g=l.value,d=l.onChange,y=(0,s.useState)(g||""),p=r()(y,2),i=p[0],x=p[1];(0,s.useImperativeHandle)(C,function(){return{clear:function(){x(""),d==null||d("")}}});var I="triones-antm-input";return(0,_.jsx)("input",{className:o()(["".concat(I),f]),placeholder:O,type:v,value:i,onChange:function(P){x(P.target.value),d==null||d(P)}})})},14639:function(t,e,n){"use strict";n.r(e);var u=n(36583),r=n(97798),a=n(51168),o=r.Input;o.Password=u.InputPassword,o.OPT=a.InputOPT,e.default=o},49858:function(t,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return d}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),m=n(67560),l=n(51865),C=n.n(l),f=n(44194),O=n(78838),v=n(31549),g=["prefix","suffix","allowClear","value","onChange"],d=function(p){var i=p.prefix,x=p.suffix,I=p.allowClear,h=p.value,P=p.onChange,M=_()(p,g),E=f.useState(h),c=o()(E,2),D=c[0],T=c[1],b=(0,f.useRef)({}),B="triones-antm-input-affix-wrapper",A="triones-antm-input";return(0,v.jsxs)("div",{className:C()([B]),children:[i&&(0,v.jsx)("div",{className:C()(["".concat(A,"-prefix")]),children:i}),(0,v.jsx)(O.BaseInput,r()(r()({ref:b},M),{},{value:h,onChange:function(R){T(R),P==null||P(R)}})),(x||I)&&(0,v.jsxs)("div",{className:C()(["".concat(A,"-suffix")]),children:[I&&D&&(0,v.jsx)(m.CloseCircleFill,{className:"clear-icon",onClick:function(){var R,W;(R=(W=b.current).clear)===null||R===void 0||R.call(W)}}),x]})]})}},51168:function(t,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return y}});var u=n(76711),r=n.n(u),a=n(45332),o=n.n(a),s=n(51865),_=n.n(s),m=n(44194),l=n(57870),C=n(39378),f=n.n(C),O=n(31549),v="triones-antm-pot",g="triones-antm-input",d=function(i){var x=i.index,I=i.focusIndex,h=i.value,P=i.onChange,M=i.onFocus,E=m.useRef(null);return(0,m.useEffect)(function(){if(I===x){var c;if(f().isFunction((c=E.current)===null||c===void 0?void 0:c.select)){var D;(D=E.current)===null||D===void 0||D.select()}else{var T;(T=E.current)===null||T===void 0||T.setSelectionRange(0,E.current.value.length)}}else{var b;(b=E.current)===null||b===void 0||b.blur()}},[I]),(0,O.jsx)("input",{ref:E,className:_()("".concat(g),"".concat(v,"-input"),"".concat(g,"-outlined")),size:1,type:"text",maxLength:1,value:h,onChange:function(D){P(D.target.value)},onInput:function(D){},onFocus:function(){M==null||M(x)}})},y=function(i){var x=i.className,I=i.style,h=i.length,P=h===void 0?6:h,M=m.useState(Array.from({length:P}).map(function(){return""})),E=o()(M,2),c=E[0],D=E[1],T=(0,m.useState)(0),b=o()(T,2),B=b[0],A=b[1];return(0,O.jsx)("div",{className:_()(v,x),style:I,children:Array.from({length:P}).map(function(K,R){return(0,O.jsx)(d,{index:R,focusIndex:B,value:(c==null?void 0:c[R])||"",onChange:function(L){c[R]=L,D(r()(c)),L&&A(R+1)},onFocus:function(L){A(L)}},R)})})}},36583:function(t,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return v}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),m=n(67560),l=n(44194),C=n(97798),f=n(31549),O=["iconRender","visibilityToggle","suffix"],v=function(d){var y=d.iconRender,p=d.visibilityToggle,i=p===void 0?!0:p,x=d.suffix,I=_()(d,O),h=(0,l.useState)(!1),P=o()(h,2),M=P[0],E=P[1],c=function(){return y?y(M):(0,f.jsx)(f.Fragment,{children:M?(0,f.jsx)(m.EyeOutline,{onClick:function(){return E(!1)}}):(0,f.jsx)(m.EyeInvisibleOutline,{onClick:function(){return E(!0)}})})};return(0,f.jsx)(C.Input,r()(r()({},I),{},{type:M?"text":"password",suffix:(0,f.jsxs)(f.Fragment,{children:[" ",i&&c()," ",x," "]})}))}},97798:function(t,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return _}});var u=n(78838),r=n(49858),a=n(44194),o=n(57870),s=n(31549),_=function(l){var C=l.className,f=l.style,O=l.placeholder,v=l.type,g=l.disabled,d=l.allowClear,y=l.prefix,p=l.suffix,i=l.value,x=l.onChange,I=function(){return y||p||d?(0,s.jsx)(r.InputAffixWrapper,{prefix:y,suffix:p,allowClear:d,type:v,value:i,onChange:x}):(0,s.jsx)(u.BaseInput,{className:C,placeholder:O,type:v,disabled:g,value:i,onChange:x})};return(0,s.jsx)(s.Fragment,{children:I()})}},14368:function(t,e,n){"use strict";n.r(e)},57870:function(t,e,n){"use strict";n.r(e)},6965:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});var u=n(96465);const r=[]},96530:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},10461:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
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
`},85403:function(t,e){"use strict";e.Z=`import {DemoBlock} from '../../DemoBlock';
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
`},37984:function(t,e){"use strict";e.Z=`$inputCls: 'triones-antm-input';
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
`},81722:function(t,e){"use strict";e.Z=`import {InputPassword, InputPasswordProps} from './input-password';
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
`},85974:function(t,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
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
`},91327:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
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
`},69741:function(t,e){"use strict";e.Z=`import {
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
`},49637:function(t,e){"use strict";e.Z=`import { BaseInput } from './base-input';
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
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},84176:function(t,e,n){var u=n(75863);function r(a,o){if(a==null)return{};var s=u(a,o),_,m;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(m=0;m<l.length;m++)_=l[m],!(o.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(a,_)&&(s[_]=a[_])}return s}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,u){if(n==null)return{};var r={},a=Object.keys(n),o,s;for(s=0;s<a.length;s++)o=a[s],!(u.indexOf(o)>=0)&&(r[o]=n[o]);return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var u=n(78445),r=n(26431),a=n(15274),o=n(93647);function s(_){return u(_)||r(_)||a(_)||o()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
