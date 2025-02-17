(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[62],{84103:function(t,e,n){"use strict";var _;n.r(e),n.d(e,{demos:function(){return D}});var o=n(90819),s=n.n(o),l=n(89933),c=n.n(l),r=n(44194),d=n(33924),x=n(65694),a=n(94267),i=n(42611),u=n(74005),p=n(86427),A=n(46652),m=n(30565),f=n(51865),T=n.n(f),R=n(38850),h=n(70222),v=n(10452),D={"rate-demo-base":{component:r.memo(r.lazy(function(){return n.e(1262).then(n.bind(n,30053))})),asset:{type:"BLOCK",id:"rate-demo-base",refAtomIds:["Rate"],dependencies:{"index.tsx":{type:"FILE",value:n(45094).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:n(71543).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(45209).Z},"../index.tsx":{type:"FILE",value:n(68205).Z},"./space.tsx":{type:"FILE",value:n(60484).Z},"./rate.tsx":{type:"FILE",value:n(20716).Z},"./index.scss":{type:"FILE",value:n(37081).Z},classnames:{type:"NPM",value:"2.5.1"},"../utils/with-default-props.tsx":{type:"FILE",value:n(43453).Z},"../utils/native-props.ts":{type:"FILE",value:n(90431).Z},"./style.scss":{type:"FILE",value:n(98456).Z}},entry:"index.tsx"},context:{"../../Space.ts":a,"../../DemoBlock.tsx":i,"../index.tsx":u,"./space.tsx":p,"./rate.tsx":A,"./index.scss":m,"../utils/with-default-props.tsx":R,"../utils/native-props.ts":h,"./style.scss":v,"@trionesdev/antd-taro-icons-react":x,react:_||(_=n.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/index.ts":a,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/rate.tsx":A,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m,classnames:f,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":R,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/style.scss":v},renderOpts:{compile:function(){var b=c()(s()().mark(function y(){var g,S=arguments;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,n.e(5754).then(n.bind(n,25754));case 2:return I.abrupt("return",(g=I.sent).default.apply(g,S));case 3:case"end":return I.stop()}},y)}));function L(){return b.apply(this,arguments)}return L}()}}}},42611:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return l}});var _=n(44194),o=n(30565),s=n(31549),l=function(r){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:r.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},74005:function(t,e,n){"use strict";n.r(e);var _=n(46652);e.default=_.Rate},46652:function(t,e,n){"use strict";n.r(e),n.d(e,{Rate:function(){return T}});var _=n(76711),o=n.n(_),s=n(10154),l=n.n(s),c=n(45332),r=n.n(c),d=n(65694),x=n(51865),a=n.n(x),i=n(44194),u=n(70222),p=n(38850),A=n(10452),m=n(31549),f={count:5,defaultValue:0,allowHalf:!1,readonly:!1,allowClear:!0,size:20},T=function(h){var v=(0,p.mergeProps)(f,h),D=v.value,b=v.defaultValue,L=v.count,y=v.allowHalf,g=v.readonly,S=v.allowClear,B=v.size,I=v.character,O=v.onChange,w=(0,i.useState)(b),W=r()(w,2),j=W[0],K=W[1],P="triones-antm-rate",C=D!=null?D:j,U=function(E,N){if(!g){var M=N?E+.5:E+1;if(S&&(!y&&C===M||y&&C===M&&C===E+(N?.5:1))){D||K(0),O==null||O(0);return}D||K(M),O==null||O(M)}};return(0,u.withNativeProps)(v,(0,m.jsx)("div",{className:a()(P,l()({},"".concat(P,"-readonly"),g)),children:o()(Array(L)).map(function(V,E){return(0,m.jsx)("div",{className:"".concat(P,"-star-wrapper"),onClick:function(M){if(!y){U(E,!1);return}var k=M.currentTarget.getBoundingClientRect(),z=M.clientX-k.left<k.width/2;U(E,z)},children:I?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:a()("".concat(P,"-star"),l()({},"".concat(P,"-star-active"),E+1<=C)),style:{fontSize:B},children:I}),y&&(0,m.jsx)("div",{className:a()("".concat(P,"-star"),"".concat(P,"-star-half-item"),l()({},"".concat(P,"-star-active"),E+.5<=C)),style:{fontSize:B},children:I})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.StarFill,{className:a()("".concat(P,"-star"),l()({},"".concat(P,"-star-active"),E+1<=C)),style:{fontSize:B}}),y&&(0,m.jsx)(d.StarFill,{className:a()("".concat(P,"-star"),"".concat(P,"-star-half-item"),l()({},"".concat(P,"-star-active"),E+.5<=C)),style:{fontSize:B}})]})},E)})}))}},94267:function(t,e,n){"use strict";n.r(e);var _=n(86427);e.default=_.Space},86427:function(t,e,n){"use strict";n.r(e),n.d(e,{Space:function(){return p}});var _=n(10154),o=n.n(_),s=n(44194),l=n(51865),c=n.n(l),r=n(70222),d=n(96425),x=n(38850),a=n(31549),i="triones-antm-space",u={direction:"horizontal"},p=function(m){var f=(0,x.mergeProps)(u,m),T=f.direction,R=f.onClick;return(0,r.withNativeProps)(f,(0,a.jsx)("div",{className:c()(i,o()(o()(o()(o()(o()({},"".concat(i,"-wrap"),f.wrap),"".concat(i,"-block"),f.block),"".concat(i,"-").concat(T),!0),"".concat(i,"-align-").concat(f.align),!!f.align),"".concat(i,"-justify-").concat(f.justify),!!f.justify)),onClick:R,children:s.Children.map(f.children,function(h){return h!=null&&(0,a.jsx)("div",{className:"".concat(i,"-item"),children:h})})}))}},70222:function(t,e,n){"use strict";n.r(e),n.d(e,{attachPropertiesToComponent:function(){return d},toCSSLength:function(){return x},withNativeProps:function(){return r}});var _=n(73193),o=n.n(_),s=n(44194),l=n(51865),c=n.n(l);function r(a,i){var u=o()({},i.props);a.className&&(u.className=c()(i.props.className,a.className)),a.style&&(u.style=o()(o()({},u.style),a.style)),a.tabIndex!==void 0&&(u.tabIndex=a.tabIndex);for(var p in a)a.hasOwnProperty(p)&&(p.startsWith("data-")||p.startsWith("aria-"))&&(u[p]=a[p]);return s.cloneElement(i,u)}function d(a,i){var u=a;for(var p in i)i.hasOwnProperty(p)&&(u[p]=i[p]);return u}function x(a){return typeof a=="number"?"".concat(a,"px"):a}},38850:function(t,e,n){"use strict";n.r(e),n.d(e,{mergeProp:function(){return o},mergeProps:function(){return _}});function _(){for(var s={},l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return c.forEach(function(d){d&&Object.keys(d).forEach(function(x){d[x]!==void 0&&(s[x]=d[x])})}),s}function o(s){for(var l=arguments.length,c=new Array(l>1?l-1:0),r=1;r<l;r++)c[r-1]=arguments[r];for(var d=c.length-1;d>=0;d-=1)if(c[d]!==void 0)return c[d];return s}},30565:function(t,e,n){"use strict";n.r(e)},10452:function(t,e,n){"use strict";n.r(e)},96425:function(t,e,n){"use strict";n.r(e)},31778:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return o}});var _=n(33924);const o=[{value:"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u652F\u6301\u9009\u62E9\u661F\u7EA7\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"defaultValue",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"0",paraId:1,tocIndex:1},{value:"count",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u603B\u6570",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"5",paraId:1,tocIndex:1},{value:"allowHalf",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u534A\u661F",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"allowClear",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"true",paraId:1,tocIndex:1},{value:"readonly",paraId:1,tocIndex:1},{value:"\u662F\u5426\u53EA\u8BFB",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u661F\u661F\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"20",paraId:1,tocIndex:1},{value:"character",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26",paraId:1,tocIndex:1},{value:"React.ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:1},{value:"(value: number) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--active-color",paraId:2,tocIndex:2},{value:"\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#ffb400",paraId:2,tocIndex:2},{value:"--inactive-color",paraId:2,tocIndex:2},{value:"\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e8e8e8",paraId:2,tocIndex:2}]},37081:function(t,e){"use strict";e.Z=`.demoBlock {
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
`},45209:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},45094:function(t,e){"use strict";e.Z=`import { PlayOutline } from '@trionesdev/antd-taro-icons-react';
import { DemoBlock } from '../../DemoBlock';
import React from 'react';
import Rate from "../index";
import Space from "../../Space";

export default () => {
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Rate />
      </DemoBlock>

      <DemoBlock title="\u9ED8\u8BA4\u503C">
        <Rate defaultValue={3} />
      </DemoBlock>

      <DemoBlock title="\u534A\u661F">
        <Rate allowHalf defaultValue={2.5} />
      </DemoBlock>

      <DemoBlock title="\u53EA\u8BFB">
        <Rate value={4} readonly />
      </DemoBlock>

      <DemoBlock title="\u6E05\u9664">
        <Space direction="vertical">
          <Space>
            <Rate allowClear defaultValue={3} />
            <div>\u53EF\u6E05\u9664(\u70B9\u51FB\u540C\u4E00\u9897\u661F\u661F)</div>
          </Space>
          <Space>
            <Rate allowClear={false} defaultValue={2} />
            <div>\u4E0D\u53EF\u6E05\u9664</div>
          </Space>
        </Space>
      </DemoBlock>

      <DemoBlock title="\u81EA\u5B9A\u4E49\u6570\u91CF">
        <Rate count={10} defaultValue={5} />
      </DemoBlock>

      <DemoBlock title="\u81EA\u5B9A\u4E49\u5B57\u7B26">
        <Space direction="vertical">
          <Rate character="A" size={40} allowHalf />
          <Rate
            character={<PlayOutline style={{ fontSize: 20 }} />}
            allowHalf
            defaultValue={3.5}
            style={{
              '--active-color': '#46b37a',
              '--inactive-color': '#1d78c9',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  );
};
`},68205:function(t,e){"use strict";e.Z=`import { Rate } from "./rate"

export default Rate;`},20716:function(t,e){"use strict";e.Z=`import { StarFill } from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import './style.scss';

type RateProps = {
  /**
   * \u8BC4\u5206\u503C
   */
  value?: number;
  /**
   * \u9ED8\u8BA4\u8BC4\u5206\u503C
   */
  defaultValue?: number;
  /**
   * \u8BC4\u5206\u603B\u6570
   */
  count?: number;
  /**
   * \u662F\u5426\u5141\u8BB8\u534A\u661F
   */
  allowHalf?: boolean;
  /**
   * \u662F\u5426\u5141\u8BB8\u6E05\u9664
   */
  allowClear?: boolean;
  /**
   * \u662F\u5426\u53EA\u8BFB
   */
  readonly?: boolean;
  /**
   * \u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03
   */
  onChange?: (value: number) => void;
  /**
   * \u81EA\u5B9A\u4E49\u7C7B\u540D
   */
  className?: string;
  /**
   * \u661F\u661F\u5927\u5C0F
   */
  size?: number;
  /**
   * \u81EA\u5B9A\u4E49\u5B57\u7B26
   */
  character?: React.ReactNode;
  /**
   * \u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  style?: React.CSSProperties;
} & NativeProps<'--active-color' | '--inactive-color'>;

const defaultProps = {
  count: 5,
  defaultValue: 0,
  allowHalf: false,
  readonly: false,
  allowClear: true,
  size: 20,
};

export const Rate: FC<RateProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const {
    value,
    defaultValue,
    count,
    allowHalf,
    readonly,
    allowClear,
    size,
    character,
    onChange,
  } = props;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const clsPrefix = 'triones-antm-rate';

  const currentValue = value ?? internalValue;

  const handleClick = (index: number, isHalf: boolean) => {
    if (readonly) return;
    const newValue = isHalf ? index + 0.5 : index + 1;

    if (allowClear) {
      if (
        (!allowHalf && currentValue === newValue) ||
        (allowHalf &&
          currentValue === newValue &&
          currentValue === index + (isHalf ? 0.5 : 1))
      ) {
        if (!value) {
          setInternalValue(0);
        }
        onChange?.(0);
        return;
      }
    }

    if (!value) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return withNativeProps(
    props,
    <div
      className={classNames(clsPrefix, {
        [\`\${clsPrefix}-readonly\`]: readonly,
      })}
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={\`\${clsPrefix}-star-wrapper\`}
          onClick={(e) => {
            if (!allowHalf) {
              handleClick(index, false);
              return;
            }

            const rect = e.currentTarget.getBoundingClientRect();
            const isHalf = e.clientX - rect.left < rect.width / 2;
            handleClick(index, isHalf);
          }}
        >
          {character ? (
            <>
              <div
                className={classNames(\`\${clsPrefix}-star\`, {
                  [\`\${clsPrefix}-star-active\`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              >
                {character}
              </div>
              {allowHalf && (
                <div
                  className={classNames(
                    \`\${clsPrefix}-star\`,
                    \`\${clsPrefix}-star-half-item\`,
                    {
                      [\`\${clsPrefix}-star-active\`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                >
                  {character}
                </div>
              )}
            </>
          ) : (
            <>
              <StarFill
                className={classNames(\`\${clsPrefix}-star\`, {
                  [\`\${clsPrefix}-star-active\`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              />
              {allowHalf && (
                <StarFill
                  className={classNames(
                    \`\${clsPrefix}-star\`,
                    \`\${clsPrefix}-star-half-item\`,
                    {
                      [\`\${clsPrefix}-star-active\`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
`},98456:function(t,e){"use strict";e.Z=`$rateCls: 'triones-antm-rate';

.#{$rateCls} {
  display: inline-flex;
  align-items: center;

  &-star-wrapper {
    position: relative;
    padding: 0 2px;
    cursor: pointer;
  }

  &-star {
    font-size: 20px;
    color: var(--inactive-color, #e8e8e8);
    transition: color 0.3s;

    &-active {
      color: var(--active-color, #ffb400);
    }
  }

  &-star-half-item {
    position: absolute;
    left: 2px;
    top: 0;
    width: 42%;
    height: 100%;
    overflow: hidden;
  }

  &-readonly {
    .#{$rateCls}-star-wrapper {
      cursor: default;
    }
  }
}
`},71543:function(t,e){"use strict";e.Z=`import { Space } from './space'

export type { SpaceProps } from './space'

export default Space
`},60484:function(t,e){"use strict";e.Z=`import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../utils/native-props'
import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-space\`

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
  wrap?: boolean
  block?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

const defaultProps = {
  direction: 'horizontal' as const,
}

export const Space: FC<SpaceProps> = p => {
  const props = mergeProps(defaultProps, p) as SpaceProps
  const { direction, onClick } = props
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [\`\${classPrefix}-wrap\`]: props.wrap,
        [\`\${classPrefix}-block\`]: props.block,
        [\`\${classPrefix}-\${direction}\`]: true,
        [\`\${classPrefix}-align-\${props.align}\`]: !!props.align,
        [\`\${classPrefix}-justify-\${props.justify}\`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, child => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={\`\${classPrefix}-item\`}>{child}</div>
          )
        )
      })}
    </div>
  )
}
`},90431:function(t,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key]
    }
  }
  return React.cloneElement(element, p)
}

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key]
    }
  }
  return ret
}


export function toCSSLength(val: string | number) {
  return typeof val === 'number' ? \`\${val}px\` : val
}
`},43453:function(t,e){"use strict";e.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): D & C & B & A;
export function mergeProps(...items: any[]) {
  const ret: any = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}

/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */
export function mergeProp<T, DefaultT extends T = T>(
  defaultProp: DefaultT,
  ...propList: T[]
): T | undefined {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}
`},78445:function(t,e,n){var _=n(88513);function o(s){if(Array.isArray(s))return _(s)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},26431:function(t){function e(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},93647:function(t){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var _=n(78445),o=n(26431),s=n(15274),l=n(93647);function c(r){return _(r)||o(r)||s(r)||l()}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
