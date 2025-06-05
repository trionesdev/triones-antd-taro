(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7186],{52338:function(e,t,n){"use strict";var s;n.r(t),n.d(t,{demos:function(){return v}});var o=n(90819),r=n.n(o),i=n(89933),d=n.n(i),_=n(44194),b=n(10319),y=n(72995),I=n(26694),p=n(95676),O=n(9036),u=n(72161),T=n(51865),U=n.n(T),C=n(39378),l=n.n(C),D=n(28477),v={"tabbar-demo-base":{component:_.memo(_.lazy(function(){return n.e(8633).then(n.bind(n,29458))})),asset:{type:"BLOCK",id:"tabbar-demo-base",refAtomIds:["TabBar"],dependencies:{"index.tsx":{type:"FILE",value:n(18510).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"../index.tsx":{type:"FILE",value:n(62530).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./tab-bar.tsx":{type:"FILE",value:n(40669).Z},"./index.scss":{type:"FILE",value:n(68974).Z},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./TabBarContext.tsx":{type:"FILE",value:n(85656).Z}},entry:"index.tsx"},context:{"../index.tsx":I,"../../DemoBlock.tsx":p,"./tab-bar.tsx":O,"./index.scss":u,"./TabBarContext.tsx":D,react:s||(s=n.t(_,2)),"@trionesdev/antd-taro-icons-react":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/index.tsx":I,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/tab-bar.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/index.scss":u,classnames:T,lodash:C,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/TabBarContext.tsx":D},renderOpts:{compile:function(){var K=d()(r()().mark(function R(){var a,m=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.e(2740).then(n.bind(n,42740));case 2:return c.abrupt("return",(a=c.sent).default.apply(a,m));case 3:case"end":return c.stop()}},R)}));function A(){return K.apply(this,arguments)}return A}()}}}},95676:function(e,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return i}});var s=n(44194),o=n(3837),r=n(31549),i=function(_){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:_.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},28477:function(e,t,n){"use strict";n.r(t),n.d(t,{TabBarContext:function(){return o}});var s=n(44194),o=(0,s.createContext)({})},26694:function(e,t,n){"use strict";n.r(t);var s=n(9036),o=s.TabBar;t.default=o},9036:function(e,t,n){"use strict";n.r(t),n.d(t,{TabBar:function(){return A},TabBarItem:function(){return K}});var s=n(73193),o=n.n(s),r=n(45332),i=n.n(r),d=n(10154),_=n.n(d),b=n(84176),y=n.n(b),I=n(72161),p=n(44194),O=n(51865),u=n.n(O),T=n(28477),U=n(39378),C=n.n(U),l=n(31549),D=["className","antKey","label","icon","activeIcon","disabled","onClick","render"],v="triones-tab-bar",K=function(a){var m=a.className,E=a.antKey,c=a.label,M=a.icon,f=a.activeIcon,h=a.disabled,k=h===void 0?!1:h,P=a.onClick,B=a.render,x=y()(a,D),g=(0,p.useContext)(T.TabBarContext),j=g.activeKey,L=g.setActiveKey,W=g.onTabClick,N=E===j,F=N&&f!=null?f:M;return(0,l.jsx)("div",{className:u()("".concat(v,"-item"),m,_()({},"".concat(v,"-item-active"),N)),onClick:function(){L==null||L(E),P==null||P(E),W==null||W({antKey:E})},children:(B==null?void 0:B(N))||(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:u()("".concat(v,"-item-icon")),children:F}),(0,l.jsx)("div",{className:u()("".concat(v,"-item-label")),children:c})]})})},A=function(a){var m=a.activeKey,E=a.defaultActiveKey,c=a.items,M=a.children,f=a.onClick,h=p.useState(m!=null?m:E),k=i()(h,2),P=k[0],B=k[1];return(0,p.useEffect)(function(){B(m)},[m]),(0,l.jsx)(T.TabBarContext.Provider,{value:{activeKey:P,setActiveKey:B,onTabClick:f},children:(0,l.jsx)("div",{className:u()(v),children:(0,l.jsxs)("div",{className:u()("".concat(v,"-wrap")),children:[!C().isEmpty(c)&&c.map(function(x){return(0,p.createElement)(K,o()(o()({},x),{},{key:x.key,antKey:x.key,onClick:x.onClick}))}),C().isEmpty(c)&&M]})})})}},3837:function(e,t,n){"use strict";n.r(t)},72161:function(e,t,n){"use strict";n.r(t)},62123:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var s=n(10319);const o=[]},23624:function(e,t){"use strict";t.Z=`import React from 'react'
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
`},85656:function(e,t){"use strict";t.Z=`import {createContext} from "react";

type TabBarContextType = {
  activeKey?: string,
  setActiveKey?: (activeKey: string) => void,
  onTabClick?: (e: { antKey:string }) => void
}

export const TabBarContext = createContext<TabBarContextType>({})
`},18510:function(e,t){"use strict";t.Z=`import React from "react";
import { FaceRecognitionOutline } from "@trionesdev/antd-taro-icons-react";
import { DemoBlock } from '../../DemoBlock';
import TabBar from "../index";

export default () => {
  return <>
    <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
      <TabBar
        items={[{ key: 'home', label: '\u9996\u9875', icon: <FaceRecognitionOutline /> }, { key: 'save', label: '\u6536\u85CF' }, { key: 'my', label: '\u6211\u7684' }]}
      />
    </DemoBlock >
  </>
}
`},68974:function(e,t){"use strict";t.Z=`@import "../style/variable";
$tabBarCls: 'triones-tab-bar';
.#{$tabBarCls} {
  box-sizing: border-box;

  &-wrap {
    display: flex;
    background-color: #ffffff;
    width: 100%;
    justify-content: space-around;
  }

  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;

    &-active {
      color: $trionesColorPrimary;
    }

    &-icon {
      flex-grow: 1;
    }

    &-label {
      font-size: 10px;
    }
  }
}
`},62530:function(e,t){"use strict";t.Z=`import { TabBar as InternalTabBar, TabBarItem } from "./tab-bar"

type CompoundedComponent = typeof InternalTabBar & {
  Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent

export default TabBar
`},40669:function(e,t){"use strict";t.Z=`import "./index.scss"
import React, {FC, ReactNode, useContext, useEffect} from "react";
import classNames from "classnames";
import {TabBarContext} from "./TabBarContext";
import _ from "lodash";

type TabBarItemType = {
  key: string
  /**
   * @description \u6587\u672C
   */
  label?: React.ReactNode
  /**
   * @description \u56FE\u6807
   */
  icon?: React.ReactNode
  /**
   * @description \u6FC0\u6D3B\u72B6\u6001\u56FE\u6807
   */
  activeIcon?: React.ReactNode
  /**
   * @description \u7981\u7528
   * @default false
   */
  disabled?: boolean
  /**
   * @description \u70B9\u51FB\u56DE\u8C03
   * @param antKey tab\u7684key
   */
  onClick?: (antKey: string) => void
}

type TabBarItemProps = Omit<TabBarItemType, 'key'> & {
  className?: string,
  /**
   * @description \u552F\u4E00\u6807\u8BC6\uFF0C\u4E0Ekey\u4E00\u6837,\u907F\u514D\u4E8Ekey\u7684\u4F7F\u7528\u51B2\u7A81
   */
  antKey: string,
  /**
   * @description \u81EA\u5B9A\u4E49\u6E32\u67D3
   */
  render?: (active: boolean) => React.ReactNode
}


const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps> = ({
                                                  className,
                                                  antKey,
                                                  label,
                                                  icon,
                                                  activeIcon,
                                                  disabled = false,
                                                  onClick,
                                                  render,
                                                  ...props
                                                }) => {
  const {activeKey, setActiveKey, onTabClick} = useContext(TabBarContext)
  const active = antKey === activeKey
  const displayIcon = active ? (activeIcon ?? icon) : icon

  return <div className={classNames(\`\${tabBarCls}-item\`, className, {
    [\`\${tabBarCls}-item-active\`]: active
  })} onClick={() => {
    setActiveKey?.(antKey)
    onClick?.(antKey)
    onTabClick?.({antKey})
  }}>
    {render?.(active) || <>
      <div className={classNames(\`\${tabBarCls}-item-icon\`)}>{displayIcon}</div>
      <div className={classNames(\`\${tabBarCls}-item-label\`)}>{label}</div>
    </>}
  </div>
}

export type TabBarProps = {
  /**
   * @description \u9ED8\u8BA4\u6FC0\u6D3Bkey
   */
  defaultActiveKey?: string
  /**
   * @description \u6FC0\u6D3Bkey
   */
  activeKey?: string
  /**
   * @description \u5B50\u9879\u914D\u7F6E
   */
  items: TabBarItemType[]
  onClick?: (e: { antKey: string }) => void
  children?: ReactNode
}

export const TabBar: FC<TabBarProps> = ({activeKey, defaultActiveKey, items, children, onClick}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string | undefined>(activeKey ?? defaultActiveKey)

  useEffect(() => {
    setInnerActiveKey(activeKey)
  }, [activeKey]);

  return <TabBarContext.Provider
    value={{activeKey: innerActiveKey, setActiveKey: setInnerActiveKey, onTabClick: onClick}}>
    <div className={classNames(tabBarCls)}>
      <div className={classNames(\`\${tabBarCls}-wrap\`)}>
        {!_.isEmpty(items) && items.map(item => <TabBarItem {...item} key={item.key} antKey={item.key}
                                                            onClick={item.onClick}/>)}
        {_.isEmpty(items) && children}
      </div>
    </div>
  </TabBarContext.Provider>
}
`},84176:function(e,t,n){var s=n(75863);function o(r,i){if(r==null)return{};var d=s(r,i),_,b;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(b=0;b<y.length;b++)_=y[b],!(i.indexOf(_)>=0)&&Object.prototype.propertyIsEnumerable.call(r,_)&&(d[_]=r[_])}return d}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},75863:function(e){function t(n,s){if(n==null)return{};var o={},r=Object.keys(n),i,d;for(d=0;d<r.length;d++)i=r[d],!(s.indexOf(i)>=0)&&(o[i]=n[i]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
