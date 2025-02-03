(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[8541],{96383:function(e,t,n){"use strict";var r;n.r(t),n.d(t,{demos:function(){return y}});var o=n(90819),a=n.n(o),m=n(89933),_=n.n(m),i=n(44194),f=n(50771),d=n(76148),M=n(77114),E=n(49387),p=n(91518),P=n(51865),x=n.n(P),v=n(39378),c=n.n(v),u=n(27556),T=n(98068),I=n(83912),h=n(53433),y={"tabs-demo-base":{component:i.memo(i.lazy(function(){return n.e(2066).then(n.bind(n,27449))})),asset:{type:"BLOCK",id:"tabs-demo-base",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(62099).Z},react:{type:"NPM",value:"18.3.1"},"../tab.tsx":{type:"FILE",value:n(12144).Z},"../tabs.tsx":{type:"FILE",value:n(13600).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(7761).Z},"./index.scss":{type:"FILE",value:n(21791).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./tab-pane.tsx":{type:"FILE",value:n(48885).Z},"./context.tsx":{type:"FILE",value:n(64957).Z},"./style.scss":{type:"FILE",value:n(75972).Z},"./tab-nav.tsx":{type:"FILE",value:n(18675).Z}},entry:"index.tsx"},context:{"../tab.tsx":d,"../tabs.tsx":M,"../../DemoBlock.tsx":E,"./index.scss":p,"./tab-pane.tsx":u,"./context.tsx":T,"./style.scss":I,"./tab-nav.tsx":h,react:r||(r=n.t(i,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab.tsx":d,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tabs.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":p,classnames:P,lodash:v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-pane.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/context.tsx":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/style.scss":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-nav.tsx":h},renderOpts:{compile:function(){var O=_()(a()().mark(function B(){var R,N=arguments;return a()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,n.e(4521).then(n.bind(n,24521));case 2:return b.abrupt("return",(R=b.sent).default.apply(R,N));case 3:case"end":return b.stop()}},B)}));function D(){return O.apply(this,arguments)}return D}()}}}},49387:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return m}});var r=n(44194),o=n(91518),a=n(31549),m=function(i){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:i.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:i.children})]})}},98068:function(e,t,n){"use strict";n.r(t),n.d(t,{TabsContext:function(){return o}});var r=n(44194),o=(0,r.createContext)({items:[]})},53433:function(e,t,n){"use strict";n.r(t),n.d(t,{TabNav:function(){return d}});var r=n(10154),o=n.n(r),a=n(44194),m=n(51865),_=n.n(m),i=n(31549),f="triones-antm-tabs",d=function(E){var p=E.label,P=E.active,x=E.stretch,v=E.onClick,c=(0,a.useRef)(null),u=(0,a.useRef)(null);return(0,i.jsx)("div",{ref:c,className:_()("".concat(f,"-tab"),o()(o()({},"".concat(f,"-tab-active"),P),"".concat(f,"-tab-stretch"),x)),onClick:function(I){v==null||v(I)},children:(0,i.jsx)("div",{ref:u,className:_()("".concat(f,"-tab-inner")),children:p})})}},27556:function(e,t,n){"use strict";n.r(t),n.d(t,{TabPane:function(){return M}});var r=n(10154),o=n.n(r),a=n(51865),m=n.n(a),_=n(44194),i=n(98068),f=n(31549),d="triones-antm-tabs",M=function(p){var P=p.children,x=p.tabKey,v=(0,_.useContext)(i.TabsContext),c=v.activeKey;return(0,f.jsx)("div",{className:m()("".concat(d,"-tab-pane"),o()({},"".concat(d,"-tab-pane-active"),c==x)),children:P})}},76148:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab:function(){return r}});var r=function(a){var m=a.children,_=a.key,i=a.label;return null}},77114:function(e,t,n){"use strict";n.r(t),n.d(t,{Tabs:function(){return I}});var r=n(76711),o=n.n(r),a=n(45332),m=n.n(a),_=n(44194),i=n(76148),f=n(51865),d=n.n(f),M=n(98068),E=n(83912),p=n(53433),P=n(27556),x=n(39378),v=n.n(x),c=n(31549),u="triones-antm-tabs",T=function(h){return h[h.SET_ITEMS=0]="SET_ITEMS",h[h.ADD_ITEM=1]="ADD_ITEM",h}(T||{}),I=function(y){var O=y.children,D=y.activeKey,B=y.defaultActiveKey,R=y.stretch,N=R===void 0?!0:R,k=y.items,b=y.onTabClick,g=y.onChange,Z=(0,_.useRef)(null),z=(0,_.useState)(),W=m()(z,2),A=W[0],X=W[1],H=(0,_.useState)(D||B||(k==null?void 0:k[0].key)),U=m()(H,2),K=U[0],L=U[1],G=(0,_.useReducer)(function(l,s){switch(s.type){case T.SET_ITEMS:return s.payload;case T.ADD_ITEM:return[].concat(o()(l),[s.payload])}return l},k||[]),S=m()(G,2),C=S[0],j=S[1],J=function(s,$){b==null||b(s,$),L(s)},F=function(s){j({type:T.SET_ITEMS,payload:s})},Q=function(s){j({type:T.ADD_ITEM,payload:s})};return(0,_.useEffect)(function(){D!=null&&D!=K&&L(D)},[D]),(0,_.useEffect)(function(){K&&(g==null||g(K))},[K]),(0,_.useEffect)(function(){debugger;if(O&&v().isArray(O)){var l=O.filter(function(s){return s.type==i.Tab}).map(function(s){return{key:s.key,label:s.props.label,children:s.props.children}});F(l),L(D||B||(l==null?void 0:l[0].key))}},[O]),(0,c.jsx)(M.TabsContext.Provider,{value:{activeKey:K,setActiveKey:L,items:C||[],setItems:F,addItem:Q},children:(0,c.jsxs)("div",{className:d()(u),children:[(0,c.jsx)("div",{className:d()("".concat(u,"-nav")),children:(0,c.jsx)("div",{className:d()("".concat(u,"-nav-wrap")),children:(0,c.jsxs)("div",{ref:Z,className:d()("".concat(u,"-nav-list")),children:[(0,c.jsx)("div",{className:d()("".concat(u,"-ink-bar"),"".concat(u,"-ink-bar-animated")),style:{left:A==null?void 0:A.left,width:A==null?void 0:A.width}}),C==null?void 0:C.map(function(l,s){return(0,c.jsx)(p.TabNav,{active:K==l.key,stretch:N,label:l.label,onClick:function(V){J(l.key,V)}},s)})]})})}),(0,c.jsx)("div",{className:d()("".concat(u,"-content-holder")),children:(0,c.jsx)("div",{className:d()("".concat(u,"-content")),children:C==null?void 0:C.map(function(l,s){return(0,c.jsx)(P.TabPane,{tabKey:l.key,children:l.children},l.key)})})})]})})}},91518:function(e,t,n){"use strict";n.r(t)},83912:function(e,t,n){"use strict";n.r(t)},92110:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var r=n(50771);const o=[]},21791:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},7761:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},64957:function(e,t){"use strict";t.Z=`import {createContext} from "react";
import {TabItemProps} from "./tab";

type TabsContextType = {
  activeKey?: string
  setActiveKey?: (activeKey?: string) => void
  items: TabItemProps[]
  setItems?: (tabItems: TabItemProps[]) => void
  addItem?: (tabItem: TabItemProps) => void
}
export const TabsContext = createContext<TabsContextType>({
  items: []
})
`},62099:function(e,t){"use strict";t.Z=`import React from "react"
import {Tabs} from "../tabs";
import {DemoBlock} from "../../DemoBlock";
import {Tab} from "../tab";

export default () => {
  const items = [
    {
      key: '1',
      label: 'Tab1',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2',
      children: <>2</>
    }
  ]

  const items2 = [
    {
      key: '1',
      label: 'Tab1-\u6D4B\u8BD5',
      children: <>1</>
    },
    {
      key: '2',
      label: 'Tab2-\u6D4B\u8BD5',
      children: <>2</>
    },
    {
      key: '3',
      label: 'Tab3-\u6D4B\u8BD5',
      children: <>2</>
    },
    {
      key: '4',
      label: 'Tab4-\u6D4B\u8BD5',
      children: <>2</>
    },
    {
      key: '5',
      label: 'Tab5-\u6D4B\u8BD5',
      children: <>2</>
    },
    {
      key: '6',
      label: 'Tab6-\u6D4B\u8BD5',
      children: <>2</>
    }
  ]
  return <>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Tabs items={items}/>
    </DemoBlock>
    <DemoBlock title={\`\u6EDA\u52A8\`}>
      <Tabs items={items2} stretch={false} />
    </DemoBlock>
    <DemoBlock title={\`Tab\`}>
      <Tabs stretch={false} >
        <Tab key={\`1\`} label={\`Tab1\`}>
          <div>1</div>
        </Tab>
        <Tab key={\`2\`} label={\`Tab2\`}>
          <div>2</div>
        </Tab>
      </Tabs>
    </DemoBlock>
  </>
}
`},75972:function(e,t){"use strict";t.Z=`$tabsCls: 'triones-antm-tabs';

.#{$tabsCls} {
  &-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;

    &::before {
      bottom: 0;
      position: absolute;
      right: 0;
      left: 0;
      border-bottom: 1Px solid #f0f0f0;
      content: ' ';
    }

    &-wrap {
      //position: relative;
      //display: flex;
      //flex: auto;
      //align-self: stretch;
      //overflow: hidden;
      //white-space: nowrap;
      //transform: translate(0);
      width: 100%;
    }

    &-list {
      position: relative;
      display: flex;
      flex: auto;
      overflow-y: auto;
      scrollbar-width: none;
    }
  }

  &-ink-bar {
    position: absolute;
    bottom: 0;
    background-color: #1677ff;
    height: 2px;
    //width: 100px;
    &-animated {

    }
  }

  &-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10Px 10Px;
    font-size: 14Px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.88);
    white-space: nowrap;

    &-stretch {
      flex: auto;
    }

    &-active {
      color: #1677ff;
      &::after{
        content: ' ';
        position: absolute;
        bottom: 0;
        width: calc(100% - 0.24rem * 2);
        height: 0.04rem;
        overflow: hidden;
        font-size: 0;
        border-radius: 50vh;
        box-sizing: border-box;
        background-color: var(--tabs-active-decorate-color, #1677ff);
      }
    }

  }

  &-content-holder {
    .#{$tabsCls} {
      &-content {
      }
    }
  }

  &-tab-pane {
    display: none;

    &-active {
      display: block;
    }
  }
}

`},18675:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useRef} from "react";
import classNames from "classnames";

const tabsCls = \`triones-antm-tabs\`

type TabNavProps = {
  label?: React.ReactNode;
  active?: boolean;
  stretch?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
export const TabNav: FC<TabNavProps> = ({label, active, stretch, onClick}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavInnerRef = useRef<HTMLDivElement>(null);

  return <div ref={tabNavRef} className={classNames(\`\${tabsCls}-tab\`, {
    [\`\${tabsCls}-tab-active\`]: active,
    [\`\${tabsCls}-tab-stretch\`]: stretch
  })}
              onClick={(e) => {
                onClick?.(e)
              }}
  >
    <div ref={tabNavInnerRef} className={classNames(\`\${tabsCls}-tab-inner\`)}>{label}</div>
  </div>
}
`},48885:function(e,t){"use strict";t.Z=`import classNames from "classnames";
import React, {FC, useContext} from "react";
import {TabsContext} from "./context";

const tabsCls = \`triones-antm-tabs\`

type  TabPaneProps = {
  children: React.ReactNode,
  tabKey: string
}
export const TabPane: FC<TabPaneProps> = ({children, tabKey}) => {
  const {activeKey} = useContext(TabsContext)
  return <div className={classNames(\`\${tabsCls}-tab-pane\`, {[\`\${tabsCls}-tab-pane-active\`]: activeKey == tabKey})}>
    {children}
  </div>
}
`},12144:function(e,t){"use strict";t.Z=`import React, {FC} from "react"

export type TabItemProps = {
  children?: React.ReactNode
  key: string
  label?: React.ReactNode
}
export const Tab: FC<TabItemProps> = ({children, key, label}) => {
  return null
}
`},13600:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useReducer, useRef, useState} from "react"
import {Tab, TabItemProps} from "./tab";
import classNames from "classnames";
import {TabsContext} from "./context";
import "./style.scss"
import {TabNav} from "./tab-nav";
import {TabPane} from "./tab-pane";
import _ from "lodash";

export type TabsProps = {
  children?: React.ReactNode
  activeKey?: string
  defaultActiveKey?: string
  stretch?: boolean
  items?: TabItemProps[]
  onTabClick?: (key: string, e: MouseEvent) => void
  onChange?: (activeKey: string) => void

}

const tabsCls = \`triones-antm-tabs\`

enum ITEMS_ACTION {
  SET_ITEMS,
  ADD_ITEM,
}

export const Tabs: FC<TabsProps> = ({
                                      children,
                                      activeKey,
                                      defaultActiveKey,
                                      stretch = true,
                                      items,
                                      onTabClick,
                                      onChange
                                    }) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState<{ left: number, width: number } | undefined>()
  const [internalActiveKey, setInternalActiveKey] = useState<string | undefined>(activeKey || defaultActiveKey || items?.[0].key)
  const [internalItems, dispatch] = useReducer((prevState: TabItemProps[], action: any) => {
    switch (action.type) {
      case ITEMS_ACTION.SET_ITEMS:
        return action.payload;
      case ITEMS_ACTION.ADD_ITEM:
        return [...prevState, action.payload];
    }
    return prevState
  }, (items || []))

  const handleTabClick = (key: string, e: MouseEvent<any>) => {
    onTabClick?.(key, e)
    setInternalActiveKey(key)
  }

  const handleSetItems = (items: any) => {
    dispatch({type: ITEMS_ACTION.SET_ITEMS, payload: items})
  }

  const handleAddItem = (item: any) => {
    dispatch({type: ITEMS_ACTION.ADD_ITEM, payload: item})
  }

  useEffect(() => {
    if (activeKey == undefined) {
      return
    }
    if (activeKey == internalActiveKey) {
      return;
    }
    setInternalActiveKey(activeKey)
  }, [activeKey])

  useEffect(() => {
    if (internalActiveKey) {
      onChange?.(internalActiveKey)
    }
  }, [internalActiveKey])

  useEffect(() => {
    debugger
    if (children) {
      if (_.isArray(children)) {
        const tabItems = children.filter(tab => {
          return tab.type == Tab
        }).map((tab) => {
          return {
            key: tab.key,
            label: tab.props.label,
            children: tab.props.children,
          }
        })
        handleSetItems(tabItems)
        setInternalActiveKey(activeKey || defaultActiveKey || tabItems?.[0].key)
      }
    }
  }, [children]);

  return <TabsContext.Provider
    value={{
      activeKey: internalActiveKey,
      setActiveKey: setInternalActiveKey,
      items: internalItems || [],
      setItems: handleSetItems,
      addItem: handleAddItem,
    }}>
    <div className={classNames(tabsCls)}>
      <div className={classNames(\`\${tabsCls}-nav\`)}>
        <div className={classNames(\`\${tabsCls}-nav-wrap\`)}>
          <div ref={tabNavRef} className={classNames(\`\${tabsCls}-nav-list\`)}>
            <div className={classNames(\`\${tabsCls}-ink-bar\`, \`\${tabsCls}-ink-bar-animated\`)}
                 style={{left: line?.left, width: line?.width}}/>
            {internalItems?.map((item: any, index: number) => {
              return <TabNav active={internalActiveKey == item.key} stretch={stretch} label={item.label} key={index}
                             onClick={(e) => {
                               handleTabClick(item.key, e)
                             }}
              />
            })}
          </div>
        </div>
      </div>
      <div className={classNames(\`\${tabsCls}-content-holder\`)}>
        <div className={classNames(\`\${tabsCls}-content\`)}>
          {internalItems?.map((item: any, index: number) => {
            return <TabPane key={item.key} tabKey={item.key} children={item.children}/>
          })}
        </div>
      </div>
    </div>
  </TabsContext.Provider>
}
`},78445:function(e,t,n){var r=n(88513);function o(a){if(Array.isArray(a))return r(a)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},26431:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93647:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},76711:function(e,t,n){var r=n(78445),o=n(26431),a=n(15274),m=n(93647);function _(i){return r(i)||o(i)||a(i)||m()}e.exports=_,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
