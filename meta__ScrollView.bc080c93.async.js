(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[6491],{43842:function(){},69244:function(t,o,n){"use strict";n.r(o);var e=n(43842),a=n.n(e),l={};for(var d in e)d!=="default"&&(l[d]=function(s){return e[s]}.bind(0,d));n.d(o,l)},83583:function(t,o,n){"use strict";var e;n.r(o),n.d(o,{demos:function(){return M}});var a=n(90819),l=n.n(a),d=n(89933),s=n.n(d),i=n(44194),D=n(64012),P=n(15402),R=n(95676),E=n(56508),T=n(3837),_=n(69244),m=n(51865),S=n.n(m),v=n(54090),h=n(42195),u=n(60396),C=n.n(u),M={"scrollview-demo-base":{component:i.memo(i.lazy(function(){return n.e(5318).then(n.bind(n,16869))})),asset:{type:"BLOCK",id:"scrollview-demo-base",refAtomIds:["ScrollView"],dependencies:{"index.tsx":{type:"FILE",value:n(7823).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(16079).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./scroll-view.tsx":{type:"FILE",value:n(11630).Z},"./index.scss":{type:"FILE",value:n(72973).Z},"@tarojs/components":{type:"NPM",value:"4.0.9"},classnames:{type:"NPM",value:"2.5.1"},"../utils/taro-utils.ts":{type:"FILE",value:n(65812).Z},"./style.scss":{type:"FILE",value:n(65085).Z},"@tarojs/taro":{type:"NPM",value:"4.0.9"}},entry:"index.tsx"},context:{"../index.tsx":P,"../../DemoBlock.tsx":R,"./scroll-view.tsx":E,"./index.scss":T,"../utils/taro-utils.ts":v,"./style.scss":h,react:e||(e=n.t(i,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/ScrollView/index.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":R,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/ScrollView/scroll-view.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":T,"@tarojs/components":_,classnames:m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/taro-utils.ts":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/ScrollView/style.scss":h,"@tarojs/taro":u},renderOpts:{compile:function(){var g=s()(l()().mark(function f(){var p,y=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.e(2740).then(n.bind(n,42740));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,y));case 3:case"end":return c.stop()}},f)}));function O(){return g.apply(this,arguments)}return O}()}}}},95676:function(t,o,n){"use strict";n.r(o),n.d(o,{DemoBlock:function(){return d}});var e=n(44194),a=n(3837),l=n(31549),d=function(i){return(0,l.jsxs)("div",{className:"demoBlock",children:[(0,l.jsx)("div",{className:"demoTitle",children:i.title}),(0,l.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:i.children})]})}},15402:function(t,o,n){"use strict";n.r(o);var e=n(56508);o.default=e.ScrollView},56508:function(t,o,n){"use strict";n.r(o),n.d(o,{ScrollView:function(){return T}});var e=n(10154),a=n.n(e),l=n(43842),d=n.n(l),s=n(51865),i=n.n(s),D=n(44194),P=n(54090),R=n(42195),E=n(31549),T=(0,D.forwardRef)(function(_,m){var S=_.className,v=_.style,h=_.children,u=_.onScroll,C=_.showScrollbar,M=C===void 0?!0:C,g=_.scrollX,O=_.scrollY,f=_.scrollTop,p=(0,P.checkTaroEnv)(),y=(0,D.useRef)(),x=function(r){y.current=r,m&&(typeof m=="function"?m(r):m.current=r)};(0,D.useEffect)(function(){console.log("scrollTop",f),f!==void 0&&(p||y.current.scrollTo({top:f,behavior:"smooth"}))},[f]);var c="triones-antm-scroll-view";return p?(0,E.jsx)(l.ScrollView,{ref:x,className:i()(S),style:v,onScroll:function(r){u==null||u({detail:{deltaX:r.detail.deltaX,deltaY:r.detail.deltaY,scrollLeft:r.detail.scrollLeft,scrollTop:r.detail.scrollTop,scrollHeight:r.detail.scrollHeight,scrollWidth:r.detail.scrollWidth}})},showScrollbar:M,scrollX:g,scrollY:O,scrollTop:f,children:h}):(0,E.jsx)("div",{ref:x,className:i()("".concat(c),S,a()(a()(a()({},"".concat(c,"-scroll-x"),g),"".concat(c,"-scroll-y"),O),"".concat(c,"-scroll-bar-hidden"),!M)),style:v,onScroll:function(r){u==null||u({detail:{scrollLeft:r.target.scrollLeft,scrollTop:r.target.scrollTop,scrollHeight:r.target.scrollHeight,scrollWidth:r.target.scrollWidth}})},children:h})})},54090:function(t,o,n){"use strict";n.r(o),n.d(o,{checkTaroEnv:function(){return l}});var e=n(60396),a=n.n(e),l=function(){var s=a().getEnv();return console.log("env",s),s&&(s==null?void 0:s.toString())!=="Unknown"}},3837:function(t,o,n){"use strict";n.r(o)},42195:function(t,o,n){"use strict";n.r(o)},18837:function(t,o,n){"use strict";n.r(o),n.d(o,{texts:function(){return a}});var e=n(64012);const a=[{value:"\u517C\u5BB9\u5C0F\u7A0B\u5E8F\u548C\u666E\u901A\u6D4F\u89C8\u5668\u4E0B\u7684\u6EDA\u52A8\u89C6\u56FE\uFF0C\u65E0\u9700\u5F15\u5165@taro/components,\u76F4\u63A5\u5728h5\u9879\u76EE\u4E2D\u53EF\u4EE5\u4F7F\u7528\u3002",paraId:0,tocIndex:0}]},72973:function(t,o){"use strict";o.Z=`.demoBlock {
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
`},23624:function(t,o){"use strict";o.Z=`import React from 'react'
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
`},7823:function(t,o){"use strict";o.Z=`import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import ScrollView from '../index';

export default () => {
  return (
    <div>
      <DemoBlock title={\`\u4E00\u822C\u4F7F\u7528\`}>
        <ScrollView style={{ height: 300 }} scrollY={true}>
          <div>
            <div style={{ height: 100, backgroundColor: 'blue' }}>
              <div style={{ height: 100, backgroundColor: 'yellow' }} />
              <div style={{ height: 100, backgroundColor: 'gray' }} />
              <div style={{ height: 100, backgroundColor: 'green' }} />
              <div style={{ height: 100, backgroundColor: 'beige' }} />
              <div style={{ height: 100, backgroundColor: 'black' }} />
            </div>
          </div>
        </ScrollView>
      </DemoBlock>
    </div>
  );
};
`},16079:function(t,o){"use strict";o.Z=`import {ScrollView,ScrollViewProps} from "./scroll-view"

export type {ScrollViewProps}

export default ScrollView
`},11630:function(t,o){"use strict";o.Z=`import { ScrollView as TaroScrollView } from '@tarojs/components';
import classNames from 'classnames';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { checkTaroEnv } from '../utils/taro-utils';
import './style.scss';

export type ScrollEvent = {
  target?: any;
  detail: {
    deltaX?: number;
    deltaY?: number;
    scrollLeft?: number;
    scrollTop?: number;
    scrollHeight?: number;
    scrollWidth?: number;
  };
};

export type ScrollViewProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  onScroll?: (e: ScrollEvent) => void;
  showScrollbar?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  scrollTop?: number;
};

export const ScrollView: FC<ScrollViewProps> = forwardRef(
  (
    {
      className,
      style,
      children,
      onScroll,
      showScrollbar = true,
      scrollX,
      scrollY,
      scrollTop,
    },
    ref: ForwardedRef<any>,
  ) => {
    const isTaroEnv = checkTaroEnv();
    const scrollRef = useRef<any>();
    const handleRef = (node: any) => {
      scrollRef.current = node;
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    };

    useEffect(() => {
      console.log('scrollTop', scrollTop);
      if (scrollTop !== undefined) {
        if (!isTaroEnv) {
          scrollRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
          });
        }
      }
    }, [scrollTop]);

    const trionesScrollViewCls = 'triones-antm-scroll-view';

    if (isTaroEnv) {
      return (
        <TaroScrollView
          ref={handleRef}
          className={classNames(className)}
          style={style}
          onScroll={(e) => {
            onScroll?.({
              detail: {
                deltaX: e.detail.deltaX,
                deltaY: e.detail.deltaY,
                scrollLeft: e.detail.scrollLeft,
                scrollTop: e.detail.scrollTop,
                scrollHeight: e.detail.scrollHeight,
                scrollWidth: e.detail.scrollWidth,
              },
            });
          }}
          showScrollbar={showScrollbar}
          scrollX={scrollX}
          scrollY={scrollY}
          scrollTop={scrollTop}
        >
          {children}
        </TaroScrollView>
      );
    } else {
      return (
        <div
          ref={handleRef}
          className={classNames(\`\${trionesScrollViewCls}\`, className, {
            [\`\${trionesScrollViewCls}-scroll-x\`]: scrollX,
            [\`\${trionesScrollViewCls}-scroll-y\`]: scrollY,
            [\`\${trionesScrollViewCls}-scroll-bar-hidden\`]: !showScrollbar,
          })}
          style={style}
          onScroll={(e: any) => {
            // console.log(e);
            onScroll?.({
              detail: {
                scrollLeft: e.target.scrollLeft,
                scrollTop: e.target.scrollTop,
                scrollHeight: e.target.scrollHeight,
                scrollWidth: e.target.scrollWidth,
              },
            });
          }}
        >
          {children}
        </div>
      );
    }
  },
);
`},65085:function(t,o){"use strict";o.Z=`$trionesScrollViewCls: 'triones-antm-scroll-view';

.#{$trionesScrollViewCls} {
  scrollbar-width: thin;

  &-scroll-x {
    overflow-x: auto;
    overflow-y: hidden;
  }

  &-scroll-y {
    overflow-x: hidden;
    overflow-y: auto;
  }

  &-scroll-bar-hidden {
    scrollbar-width: none;
  }
}
`},65812:function(t,o){"use strict";o.Z=`import Taro from '@tarojs/taro'

export const checkTaroEnv = () => {
  const env = Taro.getEnv()
  console.log("env", env)
  return env && "Unknown" !== env?.toString()
}
`}}]);
