(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1592],{45491:function(t,e,n){"use strict";var l;n.r(e),n.d(e,{demos:function(){return O}});var c=n(90819),_=n.n(c),o=n(89933),f=n.n(o),d=n(44194),M=n(1850),L=n(68413),g=n(95676),r=n(18942),P=n(51865),C=n.n(P),s=n(14691),D=n(1667),h=n.n(D),m=n(3837),E=n(65728),p=n.n(E),y=n(3191),v=n(27608),O={"spinloading-demo-base":{component:d.memo(d.lazy(function(){return n.e(6679).then(n.bind(n,18400))})),asset:{type:"BLOCK",id:"spinloading-demo-base",refAtomIds:["SpinLoading"],dependencies:{"index.tsx":{type:"FILE",value:n(61761).Z},react:{type:"NPM",value:"18.3.1"},"../../Space.ts":{type:"FILE",value:n(41199).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"../spin-loading.tsx":{type:"FILE",value:n(47952).Z},classnames:{type:"NPM",value:"2.5.1"},"./space.tsx":{type:"FILE",value:n(34289).Z},"crypto-js":{type:"NPM",value:"4.2.0"},"./index.scss":{type:"FILE",value:n(72973).Z},"./spin-loading.scss":{type:"FILE",value:n(5784).Z},"./style.scss":{type:"FILE",value:n(5915).Z}},entry:"index.tsx"},context:{"../../Space.ts":L,"../../DemoBlock.tsx":g,"../spin-loading.tsx":r,"./space.tsx":s,"./index.scss":m,"./spin-loading.scss":y,"./style.scss":v,react:l||(l=n.t(d,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/index.ts":L,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":g,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SpinLoading/spin-loading.tsx":r,classnames:P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/space.tsx":s,"crypto-js/enc-base64":D,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m,"crypto-js/enc-utf8":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SpinLoading/spin-loading.scss":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Space/style.scss":v},renderOpts:{compile:function(){var a=f()(_()().mark(function B(){var x,k=arguments;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(2740).then(n.bind(n,42740));case 2:return i.abrupt("return",(x=i.sent).default.apply(x,k));case 3:case"end":return i.stop()}},B)}));function u(){return a.apply(this,arguments)}return u}()}}}},95676:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return o}});var l=n(44194),c=n(3837),_=n(31549),o=function(d){return(0,_.jsxs)("div",{className:"demoBlock",children:[(0,_.jsx)("div",{className:"demoTitle",children:d.title}),(0,_.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},68413:function(t,e,n){"use strict";n.r(e);var l=n(14691);e.default=l.Space},14691:function(t,e,n){"use strict";n.r(e),n.d(e,{Space:function(){return P}});var l=n(73193),c=n.n(l),_=n(10154),o=n.n(_),f=n(44194),d=n(51865),M=n.n(d),L=n(27608),g=n(31549),r="triones-antm-space",P=function(s){var D=s.children,h=s.direction,m=h===void 0?"horizontal":h,E=s.align,p=s.justify,y=s.wrap,v=s.block,O=s.onClick,a=s.size,u=a===void 0?"small":a,B=s.style,x=function(S){if(typeof S=="number")return"".concat(S,"Px");if(S==="small")return"8Px";if(S==="middle")return"16Px";if(S==="large")return"24Px"},k=(0,f.useMemo)(function(){return Array.isArray(u)?x(u[1]):x(u)},[u]),z=(0,f.useMemo)(function(){return Array.isArray(u)?x(u[1]):x(u)},[u]);return(0,g.jsx)("div",{className:M()(r,o()(o()(o()(o()(o()({},"".concat(r,"-wrap"),y),"".concat(r,"-block"),v),"".concat(r,"-").concat(m),!0),"".concat(r,"-align-").concat(E),!!E),"".concat(r,"-justify-").concat(p),!!p)),style:c()(c()({},B),{},{columnGap:k,rowGap:z}),onClick:O,children:f.Children.map(D,function(i){return i!=null&&(0,g.jsx)("div",{className:"".concat(r,"-item"),children:i})})})}},18942:function(t,e,n){"use strict";n.r(e),n.d(e,{SpinLoading:function(){return C},createSvgStr:function(){return P}});var l=n(51865),c=n.n(l),_=n(1667),o=n.n(_),f=n(65728),d=n.n(f),M=n(44194),L=n(3191),g=n(31549),r="triones-antm-spin-loading";function P(s){return`<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"
                stroke-width="2"
                stroke="`.concat(s.stroke,`"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="`).concat(15*3.14159265358979*2,`"
                stroke-dashoffset="`).concat(15*3.14159265358979*.5,`"></circle>
        </svg>`)}var C=function(D){var h=D.size,m=h===void 0?"middle":h,E=D.color,p=E===void 0?"default":E,y=M.useMemo(function(){var a=null;return m==="small"?a="24Px":m==="middle"?a="32Px":m==="large"?a="48Px":a=m,typeof a=="number"?"".concat(a,"Px"):a},[m]),v=M.useMemo(function(){return p==="default"?"#9D9D9D":p==="primary"?"#1677ff":p==="white"?"#ffffff":p},[p]),O=M.useMemo(function(){var a=P({stroke:v});return{"--size":y,"--color":v,"--maskImage":"url(data:image/svg+xml;base64,".concat(o().stringify(d().parse(a)),")")}},[y,v]);return(0,g.jsx)("div",{className:c()(r),style:O,children:(0,g.jsx)("i",{className:c()("".concat(r,"-loading"))})})}},3837:function(t,e,n){"use strict";n.r(e)},27608:function(t,e,n){"use strict";n.r(e)},3191:function(t,e,n){"use strict";n.r(e)},54523:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return c}});var l=n(1850);const c=[]},72973:function(t,e){"use strict";e.Z=`.demoBlock {
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
`},23624:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},41199:function(t,e){"use strict";e.Z=`import { Space } from './space'

export type { SpaceProps } from './space'

export default Space
`},34289:function(t,e){"use strict";e.Z=`import {CSSProperties, FC, ReactNode, useMemo} from 'react'
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
`},5915:function(t,e){"use strict";e.Z=`$class-prefix-space: 'triones-antm-space';

.#{$class-prefix-space}-item {
  flex: none;
  display: inline-flex;
}
/* prettier-ignore */
.#{$class-prefix-space} {
  display: flex;
  width: 100%;

  &-vertical {
    flex-direction: column;
    > .#{$class-prefix-space}-item {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-horizontal {
    flex-direction: row;
    > .#{$class-prefix-space}-item {
      &:last-child {

      }
    }
    &.#{$class-prefix-space}-wrap {
      flex-wrap: wrap;
      > .#{$class-prefix-space}-item {

      }
    }
  }
  &.#{$class-prefix-space}-block {
    .#{$class-prefix-space}-item{
      display: flex;
    }

  }
  &-align {
    &-center {
      align-items: center;
    }
    &-start {
      align-items: flex-start;
    }
    &-end {
      align-items: flex-end;
    }
    &-baseline {
      align-items: baseline;
    }
  }
  &-justify {
    &-center {
      justify-content: center;
    }
    &-start {
      justify-content: flex-start;
    }
    &-end {
      justify-content: flex-end;
    }
    &-between {
      justify-content: space-between;
    }
    &-around {
      justify-content: space-around;
    }
    &-evenly {
      justify-content: space-evenly;
    }
    &-stretch {
      justify-content: stretch;
    }
  }
}
`},61761:function(t,e){"use strict";e.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import {SpinLoading} from "../spin-loading";
import Space from "../../Space";

export default () => {
  return <>
    <DemoBlock title={\`\u57FA\u7840\u4F7F\u7528\`}>
      <SpinLoading/>
    </DemoBlock>
    <DemoBlock title={\`\u989C\u8272\`}>
      <Space>
        <SpinLoading/>
        <SpinLoading color={\`primary\`}/>
        <SpinLoading color={\`white\`}/>
      </Space>
    </DemoBlock>

    <DemoBlock title={\`\u5927\u5C0F\`}>
      <Space>
        <SpinLoading size={\`small\`}/>
        <SpinLoading/>
        <SpinLoading size={\`large\`}/>
      </Space>
    </DemoBlock>
  </>
}
`},5784:function(t,e){"use strict";e.Z=`$spinLoadingCls: triones-antm-spin-loading;

.#{$spinLoadingCls} {
  --size: 32Px;
  --color: #1677ff;
  width: var(--size);
  height: var(--size);

  &-svg {
    width: 100%;
    height: 100%;
    //animation: adm-spin-loading-rotate 0.8s infinite linear;

    > .#{$spinLoadingCls}-circle {
      //stroke: #1677ff;
      stroke: var(--color);
    }
  }

  &-loading {
    color: var(--color);
    display: inline-block;
    height: 100%;
    width: 100%;
    background: currentColor;
    mask-image: var(--maskImage);
    -webkit-mask-image: var(--maskImage);
    animation: adm-spin-loading-rotate 2s infinite linear;
  }

}

@keyframes adm-spin-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`},47952:function(t,e){"use strict";e.Z=`import classNames from 'classnames';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import React, { FC } from 'react';
import './spin-loading.scss';

const spinLoadingCls = 'triones-antm-spin-loading';
export type SpinLoadingProps = {
  size?: 'small' | 'middle' | 'large' | number;
  color?: 'default' | 'primary' | 'white' | string;
};

export function createSvgStr(props: { stroke: string }) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%" viewBox="0 0 32 32">
            <circle r="15" cx="16" cy="16"
                stroke-width="2"
                stroke="\${props.stroke}"
                fill="transparent"
                stroke-linecap="round"
                stroke-dasharray="\${15 * 3.14159265358979 * 2}"
                stroke-dashoffset="\${15 * 3.14159265358979 * 0.5}"></circle>
        </svg>\`;
}

export const SpinLoading: FC<SpinLoadingProps> = ({
  size = 'middle',
  color = 'default',
}) => {
  const computedSize = React.useMemo(() => {
    let resSize = null;
    if (size === 'small') {
      resSize = '24Px';
    } else if (size === 'middle') {
      resSize = '32Px';
    } else if (size === 'large') {
      resSize = '48Px';
    } else {
      resSize = size;
    }
    if (typeof resSize === 'number') {
      return \`\${resSize}Px\`;
    } else {
      return resSize;
    }
  }, [size]);

  const computedColor = React.useMemo(() => {
    if (color === 'default') {
      return '#9D9D9D';
    } else if (color === 'primary') {
      return '#1677ff';
    } else if (color === 'white') {
      return '#ffffff';
    } else {
      return color;
    }
  }, [color]);

  const completedStyle: any = React.useMemo(() => {
    const maskImageSvg = createSvgStr({ stroke: computedColor });

    return {
      '--size': computedSize,
      '--color': computedColor,
      '--maskImage': \`url(data:image/svg+xml;base64,\${Base64.stringify(Utf8.parse(maskImageSvg))})\`,
    };
  }, [computedSize, computedColor]);

  return (
    <div className={classNames(spinLoadingCls)} style={completedStyle}>
      <i className={classNames(\`\${spinLoadingCls}-loading\`)} />
    </div>
  );
};
`},7091:function(){}}]);
