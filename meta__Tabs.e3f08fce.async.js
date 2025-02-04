(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[8541],{69188:function(e,t,n){"use strict";var l;n.r(t),n.d(t,{demos:function(){return f}});var _=n(90819),o=n.n(_),u=n(89933),i=n.n(u),d=n(44194),y=n(64705),c=n(451),x=n(70668),p=n(72982),h=n(14368),D=n(51865),I=n.n(D),v=n(39378),m=n.n(v),b=n(29494),T=n(87033),O=n(68466),P=n(73804),f={"tabs-demo-base":{component:d.memo(d.lazy(function(){return n.e(2066).then(n.bind(n,65650))})),asset:{type:"BLOCK",id:"tabs-demo-base",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:n(26364).Z},react:{type:"NPM",value:"18.3.1"},"../tab.tsx":{type:"FILE",value:n(17637).Z},"../tabs.tsx":{type:"FILE",value:n(1538).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(92107).Z},"./index.scss":{type:"FILE",value:n(49614).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./tab-pane.tsx":{type:"FILE",value:n(62604).Z},"./context.tsx":{type:"FILE",value:n(76202).Z},"./style.scss":{type:"FILE",value:n(8992).Z},"./tab-nav.tsx":{type:"FILE",value:n(91936).Z}},entry:"index.tsx"},context:{"../tab.tsx":c,"../tabs.tsx":x,"../../DemoBlock.tsx":p,"./index.scss":h,"./tab-pane.tsx":b,"./context.tsx":T,"./style.scss":O,"./tab-nav.tsx":P,react:l||(l=n.t(d,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tabs.tsx":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":h,classnames:D,lodash:v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-pane.tsx":b,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/context.tsx":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/style.scss":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Tabs/tab-nav.tsx":P},renderOpts:{compile:function(){var N=i()(o()().mark(function W(){var L,M=arguments;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,n.e(3483).then(n.bind(n,93483));case 2:return C.abrupt("return",(L=C.sent).default.apply(L,M));case 3:case"end":return C.stop()}},W)}));function K(){return N.apply(this,arguments)}return K}()}}}},72982:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return u}});var l=n(44194),_=n(14368),o=n(31549),u=function(d){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:d.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:d.children})]})}},87033:function(e,t,n){"use strict";n.r(t),n.d(t,{TabsContext:function(){return _}});var l=n(44194),_=(0,l.createContext)({items:[]})},73804:function(e,t,n){"use strict";n.r(t),n.d(t,{TabNav:function(){return c}});var l=n(10154),_=n.n(l),o=n(44194),u=n(51865),i=n.n(u),d=n(31549),y="triones-antm-tabs",c=function(p){var h=p.label,D=p.active,I=p.stretch,v=p.onClick,m=(0,o.useRef)(null),b=(0,o.useRef)(null);return(0,d.jsx)("div",{ref:m,className:i()("".concat(y,"-tab"),_()(_()({},"".concat(y,"-tab-active"),D),"".concat(y,"-tab-stretch"),I)),onClick:function(O){v==null||v(O)},children:(0,d.jsx)("div",{ref:b,className:i()("".concat(y,"-tab-inner")),children:h})})}},29494:function(e,t,n){"use strict";n.r(t),n.d(t,{TabPane:function(){return x}});var l=n(10154),_=n.n(l),o=n(51865),u=n.n(o),i=n(44194),d=n(87033),y=n(31549),c="triones-antm-tabs",x=function(h){var D=h.children,I=h.tabKey,v=(0,i.useContext)(d.TabsContext),m=v.activeKey;return(0,y.jsx)("div",{className:u()("".concat(c,"-tab-pane"),_()({},"".concat(c,"-tab-pane-active"),m==I)),children:D})}},451:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab:function(){return l}});var l=function(o){var u=o.children,i=o.key,d=o.label;return null}},70668:function(e,t,n){"use strict";n.r(t),n.d(t,{Tabs:function(){return O}});var l=n(76711),_=n.n(l),o=n(45332),u=n.n(o),i=n(44194),d=n(451),y=n(51865),c=n.n(y),x=n(87033),p=n(68466),h=n(73804),D=n(29494),I=n(39378),v=n.n(I),m=n(31549),b="triones-antm-tabs",T=function(P){return P[P.SET_ITEMS=0]="SET_ITEMS",P[P.ADD_ITEM=1]="ADD_ITEM",P}(T||{}),O=function(f){var N,K=f.children,W=f.className,L=f.style,M=f.activeKey,U=f.defaultActiveKey,C=f.stretch,J=C===void 0?!0:C,s=f.items,S=f.onTabClick,j=f.onChange,Q=(0,i.useRef)(null),V=(0,i.useState)(),Z=u()(V,2),A=Z[0],tn=Z[1],X=(0,i.useState)(M||U||(s==null||(N=s[0])===null||N===void 0?void 0:N.key)),$=u()(X,2),R=$[0],k=$[1],Y=(0,i.useReducer)(function(r,a){switch(a.type){case T.SET_ITEMS:return a.payload;case T.ADD_ITEM:return[].concat(_()(r),[a.payload])}return r},s||[]),z=u()(Y,2),E=z[0],H=z[1],w=function(a,B){S==null||S(a,B),k(a)},F=function(a){H({type:T.SET_ITEMS,payload:a})},q=function(a){H({type:T.ADD_ITEM,payload:a})},G=function(a){j==null||j(a)};return(0,i.useEffect)(function(){M!=null&&M!=R&&k(M)},[M]),(0,i.useEffect)(function(){s!=null&&(v().isEqual(s,E)||F(s))},[s]),(0,i.useEffect)(function(){if(R){if(!(s!=null&&s.map(function(nn){return nn.key}).includes(R))){var r,a;k(s==null||(r=s[0])===null||r===void 0?void 0:r.key),G(s==null||(a=s[0])===null||a===void 0?void 0:a.key)}}else{var B,g;k(s==null||(B=s[0])===null||B===void 0?void 0:B.key),G(s==null||(g=s[0])===null||g===void 0?void 0:g.key)}},[R,E]),(0,i.useEffect)(function(){if(K&&v().isArray(K)){var r=K.filter(function(a){return a.type==d.Tab}).map(function(a){return{key:a.key,label:a.props.label,children:a.props.children}});F(r),k(M||U||(r==null?void 0:r[0].key))}},[K]),(0,m.jsx)(x.TabsContext.Provider,{value:{activeKey:R,setActiveKey:k,items:E||[],setItems:F,addItem:q},children:(0,m.jsxs)("div",{className:c()(b,W),style:L,children:[(0,m.jsx)("div",{className:c()("".concat(b,"-nav")),children:(0,m.jsx)("div",{className:c()("".concat(b,"-nav-wrap")),children:(0,m.jsxs)("div",{ref:Q,className:c()("".concat(b,"-nav-list")),children:[(0,m.jsx)("div",{className:c()("".concat(b,"-ink-bar"),"".concat(b,"-ink-bar-animated")),style:{left:A==null?void 0:A.left,width:A==null?void 0:A.width}}),!v().isEmpty(E)&&(E==null?void 0:E.map(function(r,a){return(0,m.jsx)(h.TabNav,{active:R==r.key,stretch:J,label:r.label,onClick:function(g){w(r.key,g)}},a)}))]})})}),(0,m.jsx)("div",{className:c()("".concat(b,"-content-holder")),children:(0,m.jsx)("div",{className:c()("".concat(b,"-content")),children:!v().isEmpty(E)&&(E==null?void 0:E.map(function(r,a){return(0,m.jsx)(D.TabPane,{tabKey:r.key,children:r.children},r.key)}))})})]})})}},14368:function(e,t,n){"use strict";n.r(t)},68466:function(e,t,n){"use strict";n.r(t)},26204:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return _}});var l=n(64705);const _=[]},49614:function(e,t){"use strict";t.Z=`.demoBlock {
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
`},92107:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},76202:function(e,t){"use strict";t.Z=`import {createContext} from "react";
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
`},26364:function(e,t){"use strict";t.Z=`import React from "react"
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
`},8992:function(e,t){"use strict";t.Z=`$tabsCls: 'triones-antm-tabs';

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

`},91936:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useRef} from "react";
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
`},62604:function(e,t){"use strict";t.Z=`import classNames from "classnames";
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
`},17637:function(e,t){"use strict";t.Z=`import React, {FC} from "react"

export type TabItemProps = {
  children?: React.ReactNode
  key: string
  label?: React.ReactNode
}
export const Tab: FC<TabItemProps> = ({children, key, label}) => {
  return null
}
`},1538:function(e,t){"use strict";t.Z=`import React, {FC, MouseEvent, useEffect, useReducer, useRef, useState} from "react"
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
  stretch?: boolean
  items?: TabItemProps[]
  onTabClick?: (key: string, e: MouseEvent) => void
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
  const [line, setLine] = useState<{ left: number, width: number } | undefined>()
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

  const handleChange = (activeKey?:any) => {
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
    if (internalActiveKey){
      if (!items?.map(item => item.key).includes(internalActiveKey)){
        setInternalActiveKey(items?.[0]?.key)
        handleChange(items?.[0]?.key)
      }
    }else {
      setInternalActiveKey(items?.[0]?.key)
      handleChange(items?.[0]?.key)
    }
  }, [internalActiveKey,internalItems]);

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
    <div className={classNames(tabsCls, className)} style={style}>
      <div className={classNames(\`\${tabsCls}-nav\`)}>
        <div className={classNames(\`\${tabsCls}-nav-wrap\`)}>
          <div ref={tabNavRef} className={classNames(\`\${tabsCls}-nav-list\`)}>
            <div className={classNames(\`\${tabsCls}-ink-bar\`, \`\${tabsCls}-ink-bar-animated\`)}
                 style={{left: line?.left, width: line?.width}}/>
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
`},78445:function(e,t,n){var l=n(88513);function _(o){if(Array.isArray(o))return l(o)}e.exports=_,e.exports.__esModule=!0,e.exports.default=e.exports},26431:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93647:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},76711:function(e,t,n){var l=n(78445),_=n(26431),o=n(15274),u=n(93647);function i(d){return l(d)||_(d)||o(d)||u()}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
