(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[62],{39058:function(t,e,n){"use strict";var l;n.r(e),n.d(e,{demos:function(){return D}});var c=n(90819),s=n.n(c),r=n(89933),i=n.n(r),o=n(44194),d=n(32045),y=n(72995),a=n(68413),_=n(95676),u=n(97663),m=n(80098),P=n(14691),f=n(3837),C=n(51865),N=n.n(C),T=n(18608),O=n(78252),v=n(22045),D={"rate-demo-base":{component:o.memo(o.lazy(function(){return n.e(1262).then(n.bind(n,63255))})),asset:{type:"BLOCK",id:"rate-demo-base",refAtomIds:["Rate"],dependencies:{"index.tsx":{type:"FILE",value:n(39997).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:n(32526).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(87669).Z},"../index.tsx":{type:"FILE",value:n(4753).Z},"./rate.tsx":{type:"FILE",value:n(12151).Z},"./space.tsx":{type:"FILE",value:n(38864).Z},"./index.scss":{type:"FILE",value:n(63498).Z},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(30632).Z},"../utils/native-props.ts":{type:"FILE",value:n(8196).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(65458).Z}},entry:"index.tsx"},context:{"../../Space.ts":a,"../../DemoBlock.tsx":_,"../index.tsx":u,"./rate.tsx":m,"./space.tsx":P,"./index.scss":f,"./style.scss":T,"../utils/native-props.ts":O,"../utils/with-default-props.tsx":v,"@trionesdev/antd-taro-icons-react":y,react:l||(l=n.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/index.ts":a,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/rate.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":f,classnames:C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Rate/style.scss":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":v},renderOpts:{compile:function(){var L=i()(s()().mark(function p(){var R,M=arguments;return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,n.e(7215).then(n.bind(n,87215));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},p)}));function S(){return L.apply(this,arguments)}return S}()}}}},95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return r}});var l=n(44194),c=n(3837),s=n(31549),r=function(o){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:o.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},97663:function(t,e,n){"use strict";n.r(e);var l=n(80098);e.default=l.Rate},80098:function(t,e,n){"use strict";n.r(e),n.d(e,{Rate:function(){return N}});var l=n(76711),c=n.n(l),s=n(10154),r=n.n(s),i=n(45332),o=n.n(i),d=n(72995),y=n(51865),a=n.n(y),_=n(44194),u=n(78252),m=n(22045),P=n(18608),f=n(31549),C={count:5,defaultValue:0,allowHalf:!1,readonly:!1,allowClear:!0,size:20},N=function(O){var v=(0,m.mergeProps)(C,O),D=v.value,L=v.defaultValue,S=v.count,p=v.allowHalf,R=v.readonly,M=v.allowClear,g=v.size,E=v.character,I=v.onChange,B=(0,_.useState)(L),k=o()(B,2),U=k[0],w=k[1],x="triones-antm-rate",b=D!=null?D:U,z=function(h,W){if(!R){var A=W?h+.5:h+1;if(M&&(!p&&b===A||p&&b===A&&b===h+(W?.5:1))){D||w(0),I==null||I(0);return}D||w(A),I==null||I(A)}};return(0,u.withNativeProps)(v,(0,f.jsx)("div",{className:a()(x,r()({},"".concat(x,"-readonly"),R)),children:c()(Array(S)).map(function(V,h){return(0,f.jsx)("div",{className:"".concat(x,"-star-wrapper"),onClick:function(A){if(!p){z(h,!1);return}var K=A.currentTarget.getBoundingClientRect(),j=A.clientX-K.left<K.width/2;z(h,j)},children:E?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:a()("".concat(x,"-star"),r()({},"".concat(x,"-star-active"),h+1<=b)),style:{fontSize:g},children:E}),p&&(0,f.jsx)("div",{className:a()("".concat(x,"-star"),"".concat(x,"-star-half-item"),r()({},"".concat(x,"-star-active"),h+.5<=b)),style:{fontSize:g},children:E})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.StarFill,{className:a()("".concat(x,"-star"),r()({},"".concat(x,"-star-active"),h+1<=b)),style:{fontSize:g}}),p&&(0,f.jsx)(d.StarFill,{className:a()("".concat(x,"-star"),"".concat(x,"-star-half-item"),r()({},"".concat(x,"-star-active"),h+.5<=b)),style:{fontSize:g}})]})},h)})}))}},68413:function(t,e,n){"use strict";n.r(e);var l=n(14691);e.default=l.Space},14691:function(t,e,n){"use strict";n.r(e),n.d(e,{Space:function(){return u}});var l=n(73193),c=n.n(l),s=n(10154),r=n.n(s),i=n(44194),o=n(51865),d=n.n(o),y=n(27608),a=n(31549),_="triones-antm-space",u=function(P){var f=P.children,C=P.direction,N=C===void 0?"horizontal":C,T=P.align,O=P.justify,v=P.wrap,D=P.block,L=P.onClick,S=P.size,p=S===void 0?"small":S,R=P.style,M=function(B){if(typeof B=="number")return"".concat(B,"Px");if(B==="small")return"8Px";if(B==="middle")return"16Px";if(B==="large")return"24Px"},g=(0,i.useMemo)(function(){return Array.isArray(p)?M(p[1]):M(p)},[p]),E=(0,i.useMemo)(function(){return Array.isArray(p)?M(p[1]):M(p)},[p]);return(0,a.jsx)("div",{className:d()(_,r()(r()(r()(r()(r()({},"".concat(_,"-wrap"),v),"".concat(_,"-block"),D),"".concat(_,"-").concat(N),!0),"".concat(_,"-align-").concat(T),!!T),"".concat(_,"-justify-").concat(O),!!O)),style:c()(c()({},R),{},{columnGap:g,rowGap:E}),onClick:L,children:i.Children.map(f,function(I){return I!=null&&(0,a.jsx)("div",{className:"".concat(_,"-item"),children:I})})})}},78252:function(t,e,n){"use strict";n.r(e),n.d(e,{attachPropertiesToComponent:function(){return d},toCSSLength:function(){return y},withNativeProps:function(){return o}});var l=n(73193),c=n.n(l),s=n(44194),r=n(51865),i=n.n(r);function o(a,_){var u=c()({},_.props);a.className&&(u.className=i()(_.props.className,a.className)),a.style&&(u.style=c()(c()({},u.style),a.style)),a.tabIndex!==void 0&&(u.tabIndex=a.tabIndex);for(var m in a)a.hasOwnProperty(m)&&(m.startsWith("data-")||m.startsWith("aria-"))&&(u[m]=a[m]);return s.cloneElement(_,u)}function d(a,_){var u=a;for(var m in _)_.hasOwnProperty(m)&&(u[m]=_[m]);return u}function y(a){return typeof a=="number"?"".concat(a,"px"):a}},22045:function(t,e,n){"use strict";n.r(e),n.d(e,{mergeProp:function(){return c},mergeProps:function(){return l}});function l(){for(var s={},r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.forEach(function(d){d&&Object.keys(d).forEach(function(y){d[y]!==void 0&&(s[y]=d[y])})}),s}function c(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];for(var d=i.length-1;d>=0;d-=1)if(i[d]!==void 0)return i[d];return s}},3837:function(t,e,n){"use strict";n.r(e)},18608:function(t,e,n){"use strict";n.r(e)},27608:function(t,e,n){"use strict";n.r(e)},43368:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return c}});var l=n(32045);const c=[{value:"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u652F\u6301\u9009\u62E9\u661F\u7EA7\u3002",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"defaultValue",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u8BC4\u5206\u503C",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"0",paraId:1,tocIndex:1},{value:"count",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u603B\u6570",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"5",paraId:1,tocIndex:1},{value:"allowHalf",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u534A\u661F",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"allowClear",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"true",paraId:1,tocIndex:1},{value:"readonly",paraId:1,tocIndex:1},{value:"\u662F\u5426\u53EA\u8BFB",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"size",paraId:1,tocIndex:1},{value:"\u661F\u661F\u5927\u5C0F",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"20",paraId:1,tocIndex:1},{value:"character",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26",paraId:1,tocIndex:1},{value:"React.ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:1},{value:"(value: number) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u53D8\u91CF",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"--active-color",paraId:2,tocIndex:2},{value:"\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#ffb400",paraId:2,tocIndex:2},{value:"--inactive-color",paraId:2,tocIndex:2},{value:"\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272",paraId:2,tocIndex:2},{value:"#e8e8e8",paraId:2,tocIndex:2}]},63498:function(t,e){"use strict";e.Z=`.demoBlock {
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
`},87669:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},39997:function(t,e){"use strict";e.Z=`import { PlayOutline } from '@trionesdev/antd-taro-icons-react';
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
`},4753:function(t,e){"use strict";e.Z=`import { Rate } from "./rate"

export default Rate;`},12151:function(t,e){"use strict";e.Z=`import { StarFill } from '@trionesdev/antd-taro-icons-react';
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
`},30632:function(t,e){"use strict";e.Z=`$rateCls: 'triones-antm-rate';

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
`},32526:function(t,e){"use strict";e.Z=`import { Space } from './space'

export type { SpaceProps } from './space'

export default Space
`},38864:function(t,e){"use strict";e.Z=`import {CSSProperties, FC, ReactNode, useMemo} from 'react'
import React from 'react'
import classNames from 'classnames'
import './style.scss'

const classPrefix = \`triones-antm-space\`

export type Size = 'small' | 'middle' | 'large' | number

export type SpaceProps = {
  /**
   * @description \u95F4\u8DDD\u65B9\u5411
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F
   */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /**
   * @description \u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F
   */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  /**
   * @description \u6362\u884C
   */
  wrap?: boolean
  /**
   * @description \u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20
   */
  block?: boolean
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   * @param event
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
  /**
   * @description \u95F4\u8DDD\u5927\u5C0F
   */
  size?: Size | Size[]
  style?: CSSProperties
}


export const Space: FC<SpaceProps> = ({
                                        children,
                                        direction = 'horizontal',
                                        align,
                                        justify,
                                        wrap,
                                        block,
                                        onClick,
                                        size = 'small',
                                        style,
                                      }) => {

  const sizeValue = (size: Size) => {
    if (typeof size === 'number') {
      return \`\${size}Px\`
    } else if (size === 'small') {
      return '8Px'
    } else if (size === 'middle') {
      return '16Px'
    } else if (size === 'large') {
      return '24Px'
    }
  }
  const columnGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1])
    } else {
      return sizeValue(size)
    }
  }, [size])

  const rowGapValue = useMemo(() => {
    if (Array.isArray(size)) {
      return sizeValue(size[1])
    } else {
      return sizeValue(size)
    }
  }, [size])

  return (<div
    className={classNames(classPrefix, {
      [\`\${classPrefix}-wrap\`]: wrap,
      [\`\${classPrefix}-block\`]: block,
      [\`\${classPrefix}-\${direction}\`]: true,
      [\`\${classPrefix}-align-\${align}\`]: !!align,
      [\`\${classPrefix}-justify-\${justify}\`]: !!justify,
    })}
    style={{
      ...style,
      columnGap: columnGapValue,
      rowGap: rowGapValue
    }}
    onClick={onClick}
  >
    {React.Children.map(children, child => {
      return (
        child !== null &&
        child !== undefined && (
          <div className={\`\${classPrefix}-item\`}>{child}</div>
        )
      )
    })}
  </div>)
}
`},8196:function(t,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
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
`},65458:function(t,e){"use strict";e.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},78445:function(t,e,n){var l=n(88513);function c(s){if(Array.isArray(s))return l(s)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},26431:function(t){function e(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},93647:function(t){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},76711:function(t,e,n){var l=n(78445),c=n(26431),s=n(15274),r=n(93647);function i(o){return l(o)||c(o)||s(o)||r()}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
