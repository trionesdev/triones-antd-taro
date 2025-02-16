(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[8541],{17363:function(e,t,n){"use strict";var r;n.r(t),n.d(t,{demos:function(){return B}});var i=n(90819),a=n.n(i),v=n(89933),l=n.n(v),_=n(44194),T=n(14126),u=n(85260),O=n(42611),p=n(9660),y=n(20292),D=n(30565),M=n(51865),E=n.n(M),m=n(39378),h=n.n(m),P=n(42020),K=n(85998),C=n(16819),b=n(7016),B={"tabs-demo-base":{component:_.memo(_.lazy(function(){return n.e(2066).then(n.bind(n,4126))})),asset:{type:"BLOCK",id:"tabs-demo-base",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(99978).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(55270).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(45209).Z},"./tab.tsx":{type:"FILE",value:n(96261).Z},"./tabs.tsx":{type:"FILE",value:n(6828).Z},"./index.scss":{type:"FILE",value:n(37081).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./tab-pane.tsx":{type:"FILE",value:n(22334).Z},"./context.tsx":{type:"FILE",value:n(43260).Z},"./style.scss":{type:"FILE",value:n(8838).Z},"./tab-nav.tsx":{type:"FILE",value:n(32192).Z}},entry:"index.tsx"},context:{"../index.tsx":u,"../../DemoBlock.tsx":O,"./tab.tsx":p,"./tabs.tsx":y,"./index.scss":D,"./tab-pane.tsx":P,"./context.tsx":K,"./style.scss":C,"./tab-nav.tsx":b,react:r||(r=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tabs.tsx":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":D,classnames:M,lodash:m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-pane.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/context.tsx":K,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/style.scss":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-nav.tsx":b},renderOpts:{compile:function(){var A=l()(a()().mark(function W(){var x,L=arguments;return a()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,n.e(5754).then(n.bind(n,25754));case 2:return I.abrupt("return",(x=I.sent).default.apply(x,L));case 3:case"end":return I.stop()}},W)}));function N(){return A.apply(this,arguments)}return N}()}}}},42611:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return v}});var r=n(44194),i=n(30565),a=n(31549),v=function(_){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:_.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},85998:function(e,t,n){"use strict";n.r(t),n.d(t,{TabsContext:function(){return i}});var r=n(44194),i=(0,r.createContext)({items:[]})},85260:function(e,t,n){"use strict";n.r(t);var r=n(20292),i=n(9660),a=r.Tabs;a.Tab=i.Tab,t.default=a},7016:function(e,t,n){"use strict";n.r(t),n.d(t,{TabNav:function(){return u}});var r=n(10154),i=n.n(r),a=n(44194),v=n(51865),l=n.n(v),_=n(31549),T="triones-antm-tabs",u=function(p){var y=p.label,D=p.active,M=p.stretch,E=p.onClick,m=(0,a.useRef)(null),h=(0,a.useRef)(null);return(0,_.jsx)("div",{ref:m,className:l()("".concat(T,"-tab"),i()(i()({},"".concat(T,"-tab-active"),D),"".concat(T,"-tab-stretch"),M)),onClick:function(K){E==null||E(K)},children:(0,_.jsx)("div",{ref:h,className:l()("".concat(T,"-tab-inner")),children:y})})}},42020:function(e,t,n){"use strict";n.r(t),n.d(t,{TabPane:function(){return O}});var r=n(10154),i=n.n(r),a=n(51865),v=n.n(a),l=n(44194),_=n(85998),T=n(31549),u="triones-antm-tabs",O=function(y){var D=y.children,M=y.tabKey,E=(0,l.useContext)(_.TabsContext),m=E.activeKey;return(0,T.jsx)("div",{className:v()("".concat(u,"-tab-pane"),i()({},"".concat(u,"-tab-pane-active"),m==M)),children:D})}},9660:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab:function(){return r}});var r=function(a){var v=a.children,l=a.key,_=a.label;return null}},20292:function(e,t,n){"use strict";n.r(t),n.d(t,{Tabs:function(){return K}});var r=n(76711),i=n.n(r),a=n(45332),v=n.n(a),l=n(44194),_=n(9660),T=n(51865),u=n.n(T),O=n(85998),p=n(16819),y=n(7016),D=n(42020),M=n(39378),E=n.n(M),m=n(31549),h="triones-antm-tabs",P=function(C){return C[C.SET_ITEMS=0]="SET_ITEMS",C[C.ADD_ITEM=1]="ADD_ITEM",C}(P||{}),K=function(b){var B,A=b.children,N=b.className,W=b.style,x=b.activeKey,L=b.defaultActiveKey,U=b.stretch,I=U===void 0?!0:U,d=b.items,S=b.onTabClick,j=b.onChange,G=(0,l.useRef)(null),J=(0,l.useState)(x||L||(d==null||(B=d[0])===null||B===void 0?void 0:B.key)),Z=v()(J,2),R=Z[0],k=Z[1],Q=(0,l.useReducer)(function(o,s){switch(s.type){case P.SET_ITEMS:return s.payload;case P.ADD_ITEM:return[].concat(i()(o),[s.payload])}return o},d||[]),$=v()(Q,2),c=$[0],z=$[1],V=function(s,f){S==null||S(s,f),k(s)},F=function(s){z({type:P.SET_ITEMS,payload:s})},X=function(s){z({type:P.ADD_ITEM,payload:s})},H=function(s){j==null||j(s)};return(0,l.useEffect)(function(){x!=null&&x!=R&&k(x)},[x]),(0,l.useEffect)(function(){d!=null&&(E().isEqual(d,c)||F(d))},[d]),(0,l.useEffect)(function(){if(R){if(!(c!=null&&c.map(function(Y){return Y.key}).includes(R))){var o,s;k(d==null||(o=d[0])===null||o===void 0?void 0:o.key),H(c==null||(s=c[0])===null||s===void 0?void 0:s.key)}}else{var f,g;k(d==null||(f=d[0])===null||f===void 0?void 0:f.key),H(d==null||(g=d[0])===null||g===void 0?void 0:g.key)}},[R,c]),(0,l.useEffect)(function(){if(A&&E().isArray(A)){var o,s=A.filter(function(f){return f.type==_.Tab}).map(function(f){return{key:f.key,label:f.props.label,children:f.props.children}});F(s),k(x||L||(s==null||(o=s[0])===null||o===void 0?void 0:o.key))}},[A]),(0,m.jsx)(O.TabsContext.Provider,{value:{activeKey:R,setActiveKey:k,items:c||[],setItems:F,addItem:X},children:(0,m.jsxs)("div",{className:u()(h,N),style:W,children:[(0,m.jsx)("div",{className:u()("".concat(h,"-nav")),children:(0,m.jsx)("div",{className:u()("".concat(h,"-nav-wrap")),children:(0,m.jsx)("div",{ref:G,className:u()("".concat(h,"-nav-list")),children:!E().isEmpty(c)&&(c==null?void 0:c.map(function(o,s){return(0,m.jsx)(y.TabNav,{active:R==o.key,stretch:I,label:o.label,onClick:function(g){V(o.key,g)}},s)}))})})}),(0,m.jsx)("div",{className:u()("".concat(h,"-content-holder")),children:(0,m.jsx)("div",{className:u()("".concat(h,"-content")),children:!E().isEmpty(c)&&(c==null?void 0:c.map(function(o,s){return(0,m.jsx)(D.TabPane,{tabKey:o.key,children:o.children},o.key)}))})})]})})}},30565:function(e,t,n){"use strict";n.r(t)},16819:function(e,t,n){"use strict";n.r(t)},64575:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return i}});var r=n(14126);const i=[]},37081:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},45209:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},43260:function(e,t){"use strict";t.Z=`import {createContext} from "react";
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
`},99978:function(e,t){"use strict";t.Z=`import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Tabs from "../index";

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
      children: <>3</>
    },
    {
      key: '4',
      label: 'Tab4-\u6D4B\u8BD5',
      children: <>4</>
    },
    {
      key: '5',
      label: 'Tab5-\u6D4B\u8BD5',
      children: <>5</>
    },
    {
      key: '6',
      label: 'Tab6-\u6D4B\u8BD5',
      children: <>6</>
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
        <Tabs.Tab key={\`1\`} label={\`Tab1\`}>
          <div>1</div>
        </Tabs.Tab>
        <Tabs.Tab key={\`2\`} label={\`Tab2\`}>
          <div>2</div>
        </Tabs.Tab>
      </Tabs>
    </DemoBlock>
  </>
}
`},55270:function(e,t){"use strict";t.Z=`import {Tabs as InternalTabs,TabsProps} from "./tabs"
import {Tab} from "./tab";

type InternalTabsType = typeof InternalTabs
type CompoundedComponent = InternalTabsType & {
  Tab: typeof Tab
}


export type {
  TabsProps
}
const Tabs = InternalTabs as CompoundedComponent
Tabs.Tab = Tab
export default Tabs;
`},8838:function(e,t){"use strict";t.Z=`$tabsCls: 'triones-antm-tabs';

.#{$tabsCls} {
  display: flex;
  flex-direction: column;
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
    flex: auto;
    overflow: hidden;
    .#{$tabsCls} {
      &-content {
        height: 100%;
      }
    }
  }

  &-tab-pane {
    height: 100%;
    display: none;

    &-active {
      display: block;
    }
  }
}

`},32192:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useRef} from "react";
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
`},22334:function(e,t){"use strict";t.Z=`import classNames from "classnames";
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
`},96261:function(e,t){"use strict";t.Z=`import React, {FC} from "react"

export type TabItemProps = {
  children?: React.ReactNode
  key: string
  label?: React.ReactNode
}
export const Tab: FC<TabItemProps> = ({children, key, label}) => {
  return null
}
`},6828:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useReducer, useRef, useState} from "react"
import {Tab, TabItemProps} from "./tab";
import classNames from "classnames";
import {TabsContext} from "./context";
import "./style.scss"
import {TabNav} from "./tab-nav";
import {TabPane} from "./tab-pane";
import _ from "lodash";

export type TabsProps = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  activeKey?: string
  defaultActiveKey?: string
  /**
   * @description \u662F\u5426\u62C9\u4F38
   * @default true
   */
  stretch?: boolean
  items?: TabItemProps[]
  /**
   * @description Tab \u70B9\u51FB\u56DE\u8C03
   */
  onTabClick?: (key: string, e: MouseEvent) => void
  /**
   * @description \u6FC0\u6D3Bkey\u53D8\u5316\u56DE\u8C03
   */
  onChange?: (activeKey?: string) => void
}

const tabsCls = \`triones-antm-tabs\`

enum ITEMS_ACTION {
  SET_ITEMS,
  ADD_ITEM,
}

export const Tabs: FC<TabsProps> = ({
                                      children,
                                      className,
                                      style,
                                      activeKey,
                                      defaultActiveKey,
                                      stretch = true,
                                      items,
                                      onTabClick,
                                      onChange
                                    }) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [internalActiveKey, setInternalActiveKey] = useState<string | undefined>(activeKey || defaultActiveKey || items?.[0]?.key)
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

  const handleChange = (activeKey?: any) => {
    onChange?.(activeKey)
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
    if (items == undefined) {
      return;
    }
    if (_.isEqual(items, internalItems)) {
      return;
    }
    handleSetItems(items)
  }, [items]);

  useEffect(() => {
    if (internalActiveKey) {
      if (!internalItems?.map((item: TabItemProps) => item.key).includes(internalActiveKey)) {
        setInternalActiveKey(items?.[0]?.key)
        handleChange(internalItems?.[0]?.key)
      }
    } else {
      setInternalActiveKey(items?.[0]?.key)
      handleChange(items?.[0]?.key)
    }
  }, [internalActiveKey, internalItems]);

  useEffect(() => {
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
        setInternalActiveKey(activeKey || defaultActiveKey || tabItems?.[0]?.key)
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
    <div className={classNames(tabsCls, className)} style={style}>
      <div className={classNames(\`\${tabsCls}-nav\`)}>
        <div className={classNames(\`\${tabsCls}-nav-wrap\`)}>
          <div ref={tabNavRef} className={classNames(\`\${tabsCls}-nav-list\`)}>
            {!_.isEmpty(internalItems) && internalItems?.map((item: any, index: number) => {
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
          {!_.isEmpty(internalItems) && internalItems?.map((item: any, index: number) => {
            return <TabPane key={item.key} tabKey={item.key} children={item.children}/>
          })}
        </div>
      </div>
    </div>
  </TabsContext.Provider>
}
`},78445:function(e,t,n){var r=n(88513);function i(a){if(Array.isArray(a))return r(a)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},26431:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93647:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},76711:function(e,t,n){var r=n(78445),i=n(26431),a=n(15274),v=n(93647);function l(_){return r(_)||i(_)||a(_)||v()}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
