(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1808],{77942:function(t,e,n){"use strict";var u;n.r(e),n.d(e,{demos:function(){return C}});var r=n(90819),a=n.n(r),o=n(89933),s=n.n(o),_=n(44194),f=n(20199),l=n(16379),P=n(49387),c=n(33550),D=n(63346),I=n(55888),g=n(95587),d=n(51865),m=n.n(d),i=n(27311),E=n(21497),v=n(85279),C={"input-demo-base":{component:_.memo(_.lazy(function(){return n.e(2091).then(n.bind(n,75088))})),asset:{type:"BLOCK",id:"input-demo-base",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:n(99517).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(68217).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(28667).Z},"./index.scss":{type:"FILE",value:n(12823).Z},"./input-opt.tsx":{type:"FILE",value:n(1039).Z},"./input-password.tsx":{type:"FILE",value:n(71558).Z},"./input.tsx":{type:"FILE",value:n(6870).Z},classnames:{type:"NPM",value:"2.5.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./input-affix-wrapper.tsx":{type:"FILE",value:n(10793).Z},"./base-input.tsx":{type:"FILE",value:n(83165).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"../../DemoBlock.tsx":P,"./index.scss":c,"./input-opt.tsx":D,"./input-password.tsx":I,"./input.tsx":g,"./input-affix-wrapper.tsx":E,"./base-input.tsx":v,react:u||(u=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.tsx":l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/index.scss":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-opt.tsx":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-password.tsx":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input.tsx":g,classnames:d,"@trionesdev/antd-taro-icons-react":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/input-affix-wrapper.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Input/base-input.tsx":v},renderOpts:{compile:function(){var O=s()(a()().mark(function p(){var h,R=arguments;return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,n.e(6566).then(n.bind(n,66566));case 2:return M.abrupt("return",(h=M.sent).default.apply(h,R));case 3:case"end":return M.stop()}},p)}));function x(){return O.apply(this,arguments)}return x}()}}}},49387:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return o}});var u=n(44194),r=n(91518),a=n(31549),o=function(_){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:_.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},85279:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseInput:function(){return f}});var u=n(45332),r=n.n(u),a=n(51865),o=n.n(a),s=n(44194),_=n(31549),f=(0,s.forwardRef)(function(l,P){var c=l.className,D=l.placeholder,I=l.type,g=l.value,d=l.onChange,m=(0,s.useState)(g||""),i=r()(m,2),E=i[0],v=i[1];(0,s.useImperativeHandle)(P,function(){return{clear:function(){v(""),d==null||d("")}}});var C="triones-antm-input";return(0,_.jsx)("input",{className:o()(["".concat(C),c]),placeholder:D,type:I,value:E,onChange:function(x){v(x.target.value),d==null||d(x)}})})},16379:function(t,e,n){"use strict";n.r(e);var u=n(55888),r=n(95587),a=n(63346),o=r.Input;o.Password=u.InputPassword,o.OPT=a.InputOPT,e.default=o},21497:function(t,e,n){"use strict";n.r(e),n.d(e,{InputAffixWrapper:function(){return d}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),f=n(27311),l=n(51865),P=n.n(l),c=n(44194),D=n(85279),I=n(31549),g=["prefix","suffix","allowClear","value","onChange"],d=function(i){var E=i.prefix,v=i.suffix,C=i.allowClear,O=i.value,x=i.onChange,p=_()(i,g),h=c.useState(O),R=o()(h,2),T=R[0],M=R[1],B=(0,c.useRef)({}),W="triones-antm-input-affix-wrapper",b="triones-antm-input";return(0,I.jsxs)("div",{className:P()([W]),children:[E&&(0,I.jsx)("div",{className:P()(["".concat(b,"-prefix")]),children:E}),(0,I.jsx)(D.BaseInput,r()(r()({ref:B},p),{},{value:O,onChange:function(y){M(y),x==null||x(y)}})),(v||C)&&(0,I.jsxs)("div",{className:P()(["".concat(b,"-suffix")]),children:[C&&T&&(0,I.jsx)(f.CloseCircleFill,{className:"clear-icon",onClick:function(){var y,L;(y=(L=B.current).clear)===null||y===void 0||y.call(L)}}),v]})]})}},63346:function(t,e,n){"use strict";n.r(e),n.d(e,{InputOPT:function(){return g}});var u=n(76711),r=n.n(u),a=n(45332),o=n.n(a),s=n(51865),_=n.n(s),f=n(44194),l=n(33550),P=n(31549),c="triones-antm-pot",D="triones-antm-input",I=function(m){var i=m.index,E=m.focusIndex,v=m.value,C=m.onChange,O=m.onFocus,x=f.useRef(null);return(0,f.useEffect)(function(){if(E===i){var p;(p=x.current)===null||p===void 0||p.select()}else{var h;(h=x.current)===null||h===void 0||h.blur()}},[E]),(0,P.jsx)("input",{ref:x,className:_()("".concat(D),"".concat(c,"-input"),"".concat(D,"-outlined")),size:1,type:"text",maxLength:1,value:v,onChange:function(h){C(h.target.value)},onInput:function(h){},onFocus:function(){O==null||O(i)}})},g=function(m){var i=m.className,E=m.style,v=m.length,C=v===void 0?6:v,O=f.useState(Array.from({length:C}).map(function(){return""})),x=o()(O,2),p=x[0],h=x[1],R=(0,f.useState)(0),T=o()(R,2),M=T[0],B=T[1];return(0,P.jsx)("div",{className:_()(c,i),style:E,children:Array.from({length:C}).map(function(W,b){return(0,P.jsx)(I,{index:b,focusIndex:M,value:(p==null?void 0:p[b])||"",onChange:function(y){p[b]=y,h(r()(p)),y&&B(b+1)},onFocus:function(y){B(y)}},b)})})}},55888:function(t,e,n){"use strict";n.r(e),n.d(e,{InputPassword:function(){return I}});var u=n(73193),r=n.n(u),a=n(45332),o=n.n(a),s=n(84176),_=n.n(s),f=n(27311),l=n(44194),P=n(95587),c=n(31549),D=["iconRender","visibilityToggle","suffix"],I=function(d){var m=d.iconRender,i=d.visibilityToggle,E=i===void 0?!0:i,v=d.suffix,C=_()(d,D),O=(0,l.useState)(!1),x=o()(O,2),p=x[0],h=x[1],R=function(){return m?m(p):(0,c.jsx)(c.Fragment,{children:p?(0,c.jsx)(f.EyeOutline,{onClick:function(){return h(!1)}}):(0,c.jsx)(f.EyeInvisibleOutline,{onClick:function(){return h(!0)}})})};return(0,c.jsx)(P.Input,r()(r()({},C),{},{type:p?"text":"password",suffix:(0,c.jsxs)(c.Fragment,{children:[" ",E&&R()," ",v," "]})}))}},95587:function(t,e,n){"use strict";n.r(e),n.d(e,{Input:function(){return _}});var u=n(85279),r=n(21497),a=n(44194),o=n(33550),s=n(31549),_=function(l){var P=l.className,c=l.style,D=l.placeholder,I=l.type,g=l.disabled,d=l.allowClear,m=l.prefix,i=l.suffix,E=l.value,v=l.onChange,C=function(){return m||i||d?(0,s.jsx)(r.InputAffixWrapper,{prefix:m,suffix:i,allowClear:d,type:I,value:E,onChange:v}):(0,s.jsx)(u.BaseInput,{className:P,placeholder:D,type:I,disabled:g,value:E,onChange:v})};return(0,s.jsx)(s.Fragment,{children:C()})}},91518:function(t,e,n){"use strict";n.r(e)},33550:function(t,e,n){"use strict";n.r(e)},71832:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});var u=n(20199);const r=[]},28667:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},83165:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
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
`},99517:function(t,e){"use strict";e.Z=`import {DemoBlock} from '../../DemoBlock';
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
`},12823:function(t,e){"use strict";e.Z=`$inputCls: 'triones-antm-input';
$inputAffixWrapperCls: 'triones-antm-input-affix-wrapper';
$inputGroupWrapperCls: 'triones-antm-input-group-wrapper';
$inputPotCls: 'triones-antm-pot';


.#{$inputCls} {
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 0;
  transition: all .2s;
  padding: 4px 0px;
  outline: none;
  box-shadow: none;
  border: none;
  line-height: 1.5714285714285714;
  border-radius: 6px;

  &::placeholder {
    font-size: 17px;
    color: #cccccc;
  }
}


.#{$inputAffixWrapperCls} {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 0px;

  .#{$inputCls} {
    padding: 0;

    &-prifix {
    }

    &-suffix {
      display: inline-flex;
      align-items: center;
      gap: 4px;

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
  column-gap: 8px;

  &-input {
    text-align: center;
    padding-inline: 4px;
  }

  .#{$inputCls}-outlined {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.88);
    background: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
`},68217:function(t,e){"use strict";e.Z=`import { InputPassword } from './input-password';
import { Input as InternalInput } from './input';
import { InputOPT } from './input-opt';

type CompoundedComponent = typeof InternalInput & {
  Password: typeof InputPassword;
  OPT: typeof InputOPT;
};

const Input = InternalInput as CompoundedComponent;
Input.Password = InputPassword;
Input.OPT = InputOPT;

export default Input;
`},10793:function(t,e){"use strict";e.Z=`import { CloseCircleFill } from '@trionesdev/antd-taro-icons-react';
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
`},1039:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
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
      ref.current?.select();
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
    Array.from({ length }).map(() => ''),
  );

  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <div className={classNames(cls, className)} style={style}>
      {Array.from({ length }).map((_, index) => {
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
`},71558:function(t,e){"use strict";e.Z=`import {
  EyeInvisibleOutline,
  EyeOutline,
} from '@trionesdev/antd-taro-icons-react';
import React, { FC, useState } from 'react';
import { Input, InputProps } from './input';

type InputPasswordProps = Omit<InputProps, 'type'> & {
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
`},6870:function(t,e){"use strict";e.Z=`import { BaseInput } from './base-input';
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
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},84176:function(t,e,n){var u=n(75863);function r(a,o){if(a==null)return{};var s=u(a,o),_,f;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(f=0;f<l.length;f++)_=l[f],!(o.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(a,_)&&(s[_]=a[_])}return s}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,u){if(n==null)return{};var r={},a=Object.keys(n),o,s;for(s=0;s<a.length;s++)o=a[s],!(u.indexOf(o)>=0)&&(r[o]=n[o]);return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var u=n(78445),r=n(26431),a=n(15274),o=n(93647);function s(_){return u(_)||r(_)||a(_)||o()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
