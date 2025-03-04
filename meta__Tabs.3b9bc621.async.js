(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[8541],{55280:function(e,t,n){"use strict";var l;n.r(t),n.d(t,{demos:function(){return R}});var i=n(90819),a=n.n(i),c=n(89933),u=n.n(c),o=n(44194),p=n(58505),v=n(12662),m=n(62901),E=n(4222),C=n(2777),x=n(22811),D=n(51865),M=n.n(D),_=n(39378),y=n.n(_),h=n(16860),K=n(80751),P=n(68263),b=n(34638),R={"tabs-demo-base":{component:o.memo(o.lazy(function(){return n.e(2066).then(n.bind(n,97730))})),asset:{type:"BLOCK",id:"tabs-demo-base",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(53445).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(61029).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(70143).Z},"./tab.tsx":{type:"FILE",value:n(90715).Z},"./tabs.tsx":{type:"FILE",value:n(27156).Z},"./index.scss":{type:"FILE",value:n(68004).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./context.tsx":{type:"FILE",value:n(96118).Z},"./tab-pane.tsx":{type:"FILE",value:n(6808).Z},"./style.scss":{type:"FILE",value:n(75723).Z},"./tab-nav.tsx":{type:"FILE",value:n(15140).Z}},entry:"index.tsx"},context:{"../index.tsx":v,"../../DemoBlock.tsx":m,"./tab.tsx":E,"./tabs.tsx":C,"./index.scss":x,"./context.tsx":h,"./tab-pane.tsx":K,"./style.scss":P,"./tab-nav.tsx":b,react:l||(l=n.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/index.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":m,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab.tsx":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tabs.tsx":C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":x,classnames:D,lodash:_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/context.tsx":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-pane.tsx":K,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/style.scss":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-nav.tsx":b},renderOpts:{compile:function(){var A=u()(a()().mark(function N(){var T,g=arguments;return a()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,n.e(1026).then(n.bind(n,41026));case 2:return I.abrupt("return",(T=I.sent).default.apply(T,g));case 3:case"end":return I.stop()}},N)}));function L(){return A.apply(this,arguments)}return L}()}}}},62901:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return c}});var l=n(44194),i=n(22811),a=n(31549),c=function(o){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:o.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},16860:function(e,t,n){"use strict";n.r(t),n.d(t,{TabsContext:function(){return i}});var l=n(44194),i=(0,l.createContext)({items:[]})},12662:function(e,t,n){"use strict";n.r(t);var l=n(2777),i=n(4222),a=l.Tabs;a.Tab=i.Tab,t.default=a},34638:function(e,t,n){"use strict";n.r(t),n.d(t,{TabNav:function(){return v}});var l=n(10154),i=n.n(l),a=n(44194),c=n(51865),u=n.n(c),o=n(31549),p="triones-antm-tabs",v=function(E){var C=E.label,x=E.active,D=E.stretch,M=E.onClick,_=(0,a.useRef)(null),y=(0,a.useRef)(null);return(0,o.jsx)("div",{ref:_,className:u()("".concat(p,"-tab"),i()(i()({},"".concat(p,"-tab-active"),x),"".concat(p,"-tab-stretch"),D)),onClick:function(K){M==null||M(K)},children:(0,o.jsx)("div",{ref:y,className:u()("".concat(p,"-tab-inner")),children:C})})}},80751:function(e,t,n){"use strict";n.r(t),n.d(t,{TabPane:function(){return m}});var l=n(10154),i=n.n(l),a=n(51865),c=n.n(a),u=n(44194),o=n(16860),p=n(31549),v="triones-antm-tabs",m=function(C){var x=C.children,D=C.tabKey,M=(0,u.useContext)(o.TabsContext),_=M.activeKey;return(0,p.jsx)("div",{className:c()("".concat(v,"-tab-pane"),i()({},"".concat(v,"-tab-pane-active"),_==D)),children:x})}},4222:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab:function(){return l}});var l=function(a){var c=a.children,u=a.key,o=a.label;return null}},2777:function(e,t,n){"use strict";n.r(t),n.d(t,{Tabs:function(){return K}});var l=n(76711),i=n.n(l),a=n(45332),c=n.n(a),u=n(51865),o=n.n(u),p=n(39378),v=n.n(p),m=n(44194),E=n(16860),C=n(68263),x=n(4222),D=n(34638),M=n(80751),_=n(31549),y="triones-antm-tabs",h=function(P){return P[P.SET_ITEMS=0]="SET_ITEMS",P[P.ADD_ITEM=1]="ADD_ITEM",P}(h||{}),K=function(b){var R,A=b.children,L=b.className,N=b.style,T=b.activeKey,g=b.defaultActiveKey,W=b.stretch,I=W===void 0?!0:W,d=b.items,U=b.onTabClick,S=b.onChange,H=(0,m.useRef)(null),G=(0,m.useState)(T||g||(d==null||(R=d[0])===null||R===void 0?void 0:R.key)),F=c()(G,2),k=F[0],B=F[1],J=(0,m.useReducer)(function(r,s){switch(s.type){case h.SET_ITEMS:return s.payload;case h.ADD_ITEM:return[].concat(i()(r),[s.payload])}return r},d||[]),Z=c()(J,2),f=Z[0],$=Z[1],z=function(s){S==null||S(s)},Q=function(s,O){U==null||U(s,O),B(s),z(s)},j=function(s){$({type:h.SET_ITEMS,payload:s})},V=function(s){$({type:h.ADD_ITEM,payload:s})};return(0,m.useEffect)(function(){console.log("activeKey tabs",T),T!==void 0&&T!==k&&B(T)},[T]),(0,m.useEffect)(function(){d!==void 0&&(v().isEqual(d,f)||j(d))},[d]),(0,m.useEffect)(function(){if(!k){var r,s;B(d==null||(r=d[0])===null||r===void 0?void 0:r.key),z(d==null||(s=d[0])===null||s===void 0?void 0:s.key)}},[k,f]),(0,m.useEffect)(function(){if(A&&v().isArray(A)){var r,s=A.filter(function(O){return O.type===x.Tab}).map(function(O){return{key:O.key,label:O.props.label,children:O.props.children}});j(s),B(T||g||(s==null||(r=s[0])===null||r===void 0?void 0:r.key))}},[A]),(0,_.jsx)(E.TabsContext.Provider,{value:{activeKey:k,setActiveKey:B,items:f||[],setItems:j,addItem:V},children:(0,_.jsxs)("div",{className:o()(y,L),style:N,children:[(0,_.jsx)("div",{className:o()("".concat(y,"-nav")),children:(0,_.jsx)("div",{className:o()("".concat(y,"-nav-wrap")),children:(0,_.jsx)("div",{ref:H,className:o()("".concat(y,"-nav-list")),children:!v().isEmpty(f)&&(f==null?void 0:f.map(function(r,s){return(0,_.jsx)(D.TabNav,{active:k===r.key,stretch:I,label:r.label,onClick:function(X){Q(r.key,X)}},"tab-nav-".concat(s))}))})})}),(0,_.jsx)("div",{className:o()("".concat(y,"-content-holder")),children:(0,_.jsx)("div",{className:o()("".concat(y,"-content")),children:!v().isEmpty(f)&&(f==null?void 0:f.map(function(r,s){return(0,_.jsx)(M.TabPane,{tabKey:r.key,children:r.children},"tab-panel-".concat(r.key))}))})})]})})}},22811:function(e,t,n){"use strict";n.r(t)},68263:function(e,t,n){"use strict";n.r(t)},90276:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return i}});var l=n(58505);const i=[]},68004:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},70143:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},96118:function(e,t){"use strict";t.Z=`import {createContext} from "react";
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
`},53445:function(e,t){"use strict";t.Z=`import React from "react"
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
`},61029:function(e,t){"use strict";t.Z=`import {Tabs as InternalTabs,TabsProps} from "./tabs"
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
`},75723:function(e,t){"use strict";t.Z=`$tabsCls: 'triones-antm-tabs';

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

`},15140:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useRef} from "react";
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
`},6808:function(e,t){"use strict";t.Z=`import classNames from "classnames";
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
`},90715:function(e,t){"use strict";t.Z=`import React, {FC} from "react"

export type TabItemProps = {
  children?: React.ReactNode
  key: string
  label?: React.ReactNode
}
export const Tab: FC<TabItemProps> = ({children, key, label}) => {
  return null
}
`},27156:function(e,t){"use strict";t.Z=`import classNames from 'classnames';
import _ from 'lodash';
import React, {
  FC,
  MouseEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { TabsContext } from './context';
import './style.scss';
import { Tab, TabItemProps } from './tab';
import { TabNav } from './tab-nav';
import { TabPane } from './tab-pane';

export type TabsProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  activeKey?: string;
  defaultActiveKey?: string;
  /**
   * @description \u662F\u5426\u62C9\u4F38
   * @default true
   */
  stretch?: boolean;
  items?: TabItemProps[];
  /**
   * @description Tab \u70B9\u51FB\u56DE\u8C03
   */
  onTabClick?: (key: string, e: MouseEvent) => void;
  /**
   * @description \u6FC0\u6D3Bkey\u53D8\u5316\u56DE\u8C03
   */
  onChange?: (activeKey?: string) => void;
};

const tabsCls = \`triones-antm-tabs\`;

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
  onChange,
}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey || items?.[0]?.key);
  const [internalItems, dispatch] = useReducer(
    (prevState: TabItemProps[], action: any) => {
      switch (action.type) {
        case ITEMS_ACTION.SET_ITEMS:
          return action.payload;
        case ITEMS_ACTION.ADD_ITEM:
          return [...prevState, action.payload];
      }
      return prevState;
    },
    items || [],
  );

  const handleChange = (activeKey?: any) => {
    onChange?.(activeKey);
  };

  const handleTabClick = (key: string, e: MouseEvent<any>) => {
    onTabClick?.(key, e);
    setInternalActiveKey(key);
    handleChange(key);
  };

  const handleSetItems = (items: any) => {
    dispatch({ type: ITEMS_ACTION.SET_ITEMS, payload: items });
  };

  const handleAddItem = (item: any) => {
    dispatch({ type: ITEMS_ACTION.ADD_ITEM, payload: item });
  };

  useEffect(() => {
    console.log('activeKey tabs', activeKey);
    if (activeKey === undefined) {
      return;
    }
    if (activeKey === internalActiveKey) {
      return;
    }
    setInternalActiveKey(activeKey);
  }, [activeKey]);

  useEffect(() => {
    if (items === undefined) {
      return;
    }
    if (_.isEqual(items, internalItems)) {
      return;
    }
    handleSetItems(items);
  }, [items]);

  useEffect(() => {
    if (internalActiveKey) {
    } else {
      setInternalActiveKey(items?.[0]?.key);
      handleChange(items?.[0]?.key);
    }
  }, [internalActiveKey, internalItems]);

  useEffect(() => {
    if (children) {
      if (_.isArray(children)) {
        const tabItems = children
          .filter((tab) => {
            return tab.type === Tab;
          })
          .map((tab) => {
            return {
              key: tab.key,
              label: tab.props.label,
              children: tab.props.children,
            };
          });
        handleSetItems(tabItems);
        setInternalActiveKey(
          activeKey || defaultActiveKey || tabItems?.[0]?.key,
        );
      }
    }
  }, [children]);

  return (
    <TabsContext.Provider
      value={{
        activeKey: internalActiveKey,
        setActiveKey: setInternalActiveKey,
        items: internalItems || [],
        setItems: handleSetItems,
        addItem: handleAddItem,
      }}
    >
      <div className={classNames(tabsCls, className)} style={style}>
        <div className={classNames(\`\${tabsCls}-nav\`)}>
          <div className={classNames(\`\${tabsCls}-nav-wrap\`)}>
            <div ref={tabNavRef} className={classNames(\`\${tabsCls}-nav-list\`)}>
              {!_.isEmpty(internalItems) &&
                internalItems?.map((item: any, index: number) => {
                  return (
                    <TabNav
                      active={internalActiveKey === item.key}
                      stretch={stretch}
                      label={item.label}
                      key={\`tab-nav-\${index}\`}
                      onClick={(e) => {
                        handleTabClick(item.key, e);
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className={classNames(\`\${tabsCls}-content-holder\`)}>
          <div className={classNames(\`\${tabsCls}-content\`)}>
            {!_.isEmpty(internalItems) &&
              internalItems?.map((item: any, index: number) => {
                return (
                  <TabPane key={\`tab-panel-\${item.key}\`} tabKey={item.key}>
                    {item.children}
                  </TabPane>
                );
              })}
          </div>
        </div>
      </div>
    </TabsContext.Provider>
  );
};
`},78445:function(e,t,n){var l=n(88513);function i(a){if(Array.isArray(a))return l(a)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},26431:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93647:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},76711:function(e,t,n){var l=n(78445),i=n(26431),a=n(15274),c=n(93647);function u(o){return l(o)||i(o)||a(o)||c()}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
