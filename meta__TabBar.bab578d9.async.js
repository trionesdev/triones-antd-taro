(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[7186],{9894:function(t,e,n){"use strict";var i;n.r(e),n.d(e,{demos:function(){return v}});var o=n(90819),a=n.n(o),_=n(89933),d=n.n(_),r=n(44194),m=n(45882),E=n(65694),y=n(68791),T=n(42611),O=n(28934),u=n(66840),c=n(51865),x=n.n(c),v={"tabbar-demo-base":{component:r.memo(r.lazy(function(){return n.e(8633).then(n.bind(n,47988))})),asset:{type:"BLOCK",id:"tabbar-demo-base",refAtomIds:["TabBar"],dependencies:{"index.tsx":{type:"FILE",value:n(92220).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"../index.tsx":{type:"FILE",value:n(6513).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(45209).Z},"./tab-bar.tsx":{type:"FILE",value:n(20306).Z},"./index.scss":{type:"FILE",value:n(39669).Z},classnames:{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},context:{"../index.tsx":y,"../../DemoBlock.tsx":T,"./tab-bar.tsx":O,"./index.scss":u,react:i||(i=n.t(r,2)),"@trionesdev/antd-taro-icons-react":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/index.tsx":y,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/tab-bar.tsx":O,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/TabBar/index.scss":u,classnames:c},renderOpts:{compile:function(){var D=d()(a()().mark(function C(){var s,B=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(5754).then(n.bind(n,25754));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,B));case 3:case"end":return l.stop()}},C)}));function M(){return D.apply(this,arguments)}return M}()}}}},42611:function(t,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return _}});var i=n(44194),o=n(30565),a=n(31549),_=function(r){return(0,a.jsxs)("div",{className:"demoBlock",children:[(0,a.jsx)("div",{className:"demoTitle",children:r.title}),(0,a.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},68791:function(t,e,n){"use strict";n.r(e);var i=n(28934),o=i.TabBar;e.default=o},28934:function(t,e,n){"use strict";n.r(e),n.d(e,{TabBar:function(){return M},TabBarItem:function(){return D}});var i=n(73193),o=n.n(i),a=n(45332),_=n.n(a),d=n(10154),r=n.n(d),m=n(84176),E=n.n(m),y=n(66840),T=n(44194),O=n(51865),u=n.n(O),c=n(31549),x=["label","icon","activeIcon","activeKey","active","onClick"],v="triones-tab-bar",D=function(s){var B=s.label,p=s.icon,l=s.activeIcon,I=s.activeKey,f=s.active,P=s.onClick,b=E()(s,x);console.log(b);var h=f&&l!=null?l:p;return(0,c.jsxs)("div",{className:u()("".concat(v,"-item"),r()({},"".concat(v,"-item-active"),f)),onClick:function(){return P==null?void 0:P()},children:[(0,c.jsx)("div",{children:h}),(0,c.jsx)("div",{className:u()("".concat(v,"-item-label")),children:B})]})},M=function(s){var B=s.items,p=s.onClick,l=T.useState(),I=_()(l,2),f=I[0],P=I[1];return(0,c.jsx)("div",{className:u()(v),children:(0,c.jsx)("div",{className:u()("".concat(v,"-wrap")),children:B.map(function(b){return(0,c.jsx)(D,o()(o()({},b),{},{activeKey:f,active:b.key===f,onClick:function(){p==null||p({item:b}),P(b.key),console.log(),console.log(b)}}))})})})}},30565:function(t,e,n){"use strict";n.r(e)},66840:function(t,e,n){"use strict";n.r(e)},12392:function(t,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return o}});var i=n(45882);const o=[]},45209:function(t,e){"use strict";e.Z=`import React from 'react'
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
`},92220:function(t,e){"use strict";e.Z=`import React from "react";
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
`},39669:function(t,e){"use strict";e.Z=`$tabBarCls: 'triones-tab-bar';
.#{$tabBarCls} {
  box-sizing: border-box;

  &-wrap {
    display: flex;
    align-items: end;
    background-color: #ffffff;
    width: 100%;
    justify-content: space-around;
  }

  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;

    &-active {
      color: #1677ff;
    }

    &-label {
      font-size: 10px;
    }
  }
}
`},6513:function(t,e){"use strict";e.Z=`import { TabBar as InternalTabBar, TabBarItem } from "./tab-bar"

type CompoundedComponent = typeof InternalTabBar & {
  Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent

export default TabBar
`},20306:function(t,e){"use strict";e.Z=`import "./index.scss"
import React, {FC} from "react";
import classNames from "classnames";

type TabBarItemType = {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  disabled?: boolean
  active?: boolean
  activeKey?: string
  onClick?: () => void
}

type TabBarItemProps = Omit<TabBarItemType, 'key'> & {}

export type TabBarProps = {
  items: TabBarItemType[]
  onClick?: (e: { item?: TabBarItemType }) => void
}
const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps> = ({
                                                  label,
                                                  icon,
                                                  activeIcon,
                                                  activeKey,
                                                  active,
                                                  onClick,
                                                  ...props
                                                }) => {
  console.log(props)

  const displayIcon = active ? (activeIcon ?? icon) : icon
  return <div className={classNames(\`\${tabBarCls}-item\`, {
    [\`\${tabBarCls}-item-active\`]: active
  })} onClick={() => onClick?.()}>
    <div>{displayIcon}</div>
    <div className={classNames(\`\${tabBarCls}-item-label\`)}>{label}</div>
  </div>
}


export const TabBar: FC<TabBarProps> = ({items, onClick}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string | undefined>()


  return <div className={classNames(tabBarCls)}>
    <div className={classNames(\`\${tabBarCls}-wrap\`)}>
      {items.map(item => <TabBarItem {...item} activeKey={innerActiveKey} active={item.key === innerActiveKey}
                                     onClick={() => {
                                       onClick?.({item})
                                       setInnerActiveKey(item.key)
                                       console.log()
                                       console.log(item)
                                     }}/>)}
    </div>
  </div>
}
`},84176:function(t,e,n){var i=n(75863);function o(a,_){if(a==null)return{};var d=i(a,_),r,m;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(a);for(m=0;m<E.length;m++)r=E[m],!(_.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(d[r]=a[r])}return d}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},75863:function(t){function e(n,i){if(n==null)return{};var o={},a=Object.keys(n),_,d;for(d=0;d<a.length;d++)_=a[d],!(i.indexOf(_)>=0)&&(o[_]=n[_]);return o}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
