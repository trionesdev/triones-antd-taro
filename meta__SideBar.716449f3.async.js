"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[5214],{45291:function(o,e,n){var y;n.r(e),n.d(e,{demos:function(){return D}});var m=n(90819),l=n.n(m),E=n(89933),B=n.n(E),_=n(44194),O=n(27610),c=n(95676),u=n(59520),P=n(51865),v=n.n(P),r=n(3837),K=n(81434),D={"sidebar-demo-base":{component:_.memo(_.lazy(function(){return n.e(5527).then(n.bind(n,27507))})),asset:{type:"BLOCK",id:"sidebar-demo-base",refAtomIds:["SideBar"],dependencies:{"index.tsx":{type:"FILE",value:n(24957).Z},react:{type:"NPM",value:"18.3.1"},"../../DemoBlock.tsx":{type:"FILE",value:n(87669).Z},"../side-bar.tsx":{type:"FILE",value:n(86363).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.scss":{type:"FILE",value:n(63498).Z},"./style.scss":{type:"FILE",value:n(74747).Z}},entry:"index.tsx"},context:{"../../DemoBlock.tsx":c,"../side-bar.tsx":u,"./index.scss":r,"./style.scss":K,react:y||(y=n.t(_,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SideBar/side-bar.tsx":u,classnames:P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":r,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SideBar/style.scss":K},renderOpts:{compile:function(){var h=B()(l()().mark(function i(){var f,p=arguments;return l()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(7215).then(n.bind(n,87215));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,p));case 3:case"end":return d.stop()}},i)}));function s(){return h.apply(this,arguments)}return s}()}}}},95676:function(o,e,n){n.r(e),n.d(e,{DemoBlock:function(){return E}});var y=n(44194),m=n(3837),l=n(31549),E=function(_){return(0,l.jsxs)("div",{className:"demoBlock",children:[(0,l.jsx)("div",{className:"demoTitle",children:_.title}),(0,l.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:_.children})]})}},59520:function(o,e,n){n.r(e),n.d(e,{SideBar:function(){return D}});var y=n(73193),m=n.n(y),l=n(45332),E=n.n(l),B=n(10154),_=n.n(B),O=n(51865),c=n.n(O),u=n(44194),P=n(81434),v=n(31549),r="triones-antm-sidebar",K=function(s){var i=s.tabKey,f=s.activeKey,p=s.title,t=s.onSelect;return(0,v.jsx)("div",{className:c()("".concat(r,"-tab"),_()({},"".concat(r,"-tab-active"),f===i)),onClick:function(){return t==null?void 0:t(i)},children:p})},D=function(s){var i=s.activeKey,f=s.defaultActiveKey,p=s.items,t=p===void 0?[]:p,d=(0,u.useState)([]),x=E()(d,2),T=x[0],g=x[1],A=(0,u.useState)(i||f),I=E()(A,2),M=I[0],C=I[1];return(0,u.useEffect)(function(){if(g(t==null?void 0:t.map(function(b){return{tabKey:b.key,title:b.title,content:b.content}})),!M){var a;C(t==null||(a=t[0])===null||a===void 0?void 0:a.key)}},[t]),(0,u.useEffect)(function(){i!==void 0&&C(i)},[i]),(0,v.jsxs)("div",{className:c()("".concat(r)),children:[(0,v.jsx)("div",{className:c()("".concat(r,"-tabs")),children:T.map(function(a,b){return(0,v.jsx)(K,m()(m()({},a),{},{tabKey:a.tabKey,activeKey:M,onSelect:function(S){C(S)}}),"".concat(a.tabKey,"-tab"))})}),(0,v.jsx)("div",{className:c()("".concat(r,"-content")),children:T.map(function(a,b){return(0,v.jsx)("div",{className:c()("".concat(r,"-content-item"),_()({},"".concat(r,"-content-item-active"),M===a.tabKey)),children:a.content},"".concat(a.tabKey,"-content"))})})]})}},3837:function(o,e,n){n.r(e)},81434:function(o,e,n){n.r(e)},10574:function(o,e,n){n.r(e),n.d(e,{texts:function(){return m}});var y=n(27610);const m=[]},63498:function(o,e){e.Z=`.demoBlock {
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
`},87669:function(o,e){e.Z=`import React from 'react'
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
`},24957:function(o,e){e.Z=`import React from 'react';
import { DemoBlock } from '../../DemoBlock';
import { SideBar } from '../side-bar';

export default () => {
  return (
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <div style={{ height: 300 }}>
        <SideBar
          items={[
            { key: '1', title: 'Tab 1', content: 'Tab 1 Content' },
            { key: '2', title: 'Tab 2', content: 'Tab 2 Content' },
            { key: '3', title: 'Tab 3', content: 'Tab 3 Content' },
            { key: '4', title: 'Tab 4', content: 'Tab 4 Content' },
            { key: '5', title: 'Tab 5', content: 'Tab 5 Content' },
          ]}
        />
      </div>
    </DemoBlock>
  );
};
`},86363:function(o,e){e.Z=`import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import './style.scss';

const sideBarCls = 'triones-antm-sidebar';

type SideBarTabProps = {
  tabKey: string;
  activeKey?: string;
  title?: string;
  onSelect?: (key: string) => void;
};
const SideBarTab: FC<SideBarTabProps> = ({
  tabKey,
  activeKey,
  title,
  onSelect,
}) => {
  return (
    <div
      className={classNames(\`\${sideBarCls}-tab\`, {
        [\`\${sideBarCls}-tab-active\`]: activeKey === tabKey,
      })}
      onClick={() => onSelect?.(tabKey)}
    >
      {title}
    </div>
  );
};

export type SideBarItemProps = {
  key: string;
  title?: string;
  content?: React.ReactNode;
};
export type SideBarProps = {
  activeKey?: string;
  defaultActiveKey?: string;
  items?: SideBarItemProps[];
};
export const SideBar: FC<SideBarProps> = ({
  activeKey,
  defaultActiveKey,
  items = [],
}) => {
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);

  useEffect(() => {
    setInternalItems(
      items?.map((item) => {
        return {
          tabKey: item.key,
          title: item.title,
          content: item.content,
        };
      }),
    );
    if (!internalActiveKey) {
      setInternalActiveKey(items?.[0]?.key);
    }
  }, [items]);

  useEffect(() => {
    if (undefined !== activeKey) {
      setInternalActiveKey(activeKey);
    }
  }, [activeKey]);

  return (
    <div className={classNames(\`\${sideBarCls}\`)}>
      <div className={classNames(\`\${sideBarCls}-tabs\`)}>
        {internalItems.map((item, index) => (
          <SideBarTab
            key={\`\${item.tabKey}-tab\`}
            {...item}
            tabKey={item.tabKey}
            activeKey={internalActiveKey}
            onSelect={(key) => {
              setInternalActiveKey(key);
            }}
          />
        ))}
      </div>
      <div className={classNames(\`\${sideBarCls}-content\`)}>
        {internalItems.map((item, index) => (
          <div
            key={\`\${item.tabKey}-content\`}
            className={classNames(\`\${sideBarCls}-content-item\`, {
              [\`\${sideBarCls}-content-item-active\`]:
                internalActiveKey === item.tabKey,
            })}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
`},74747:function(o,e){e.Z=`@import "../style/variable";

$trionesSideBarCls: 'triones-antm-sidebar';

.#{$trionesSideBarCls} {
  display: flex;
  height: 100%;

  &-tabs {
    width: 100Px;
    min-width: 0;
    background-color: $trionesColorFill;
    overflow: auto;
    scrollbar-width: thin;
  }

  &-tab {
    cursor: pointer;
    padding: $trionesPadding $trionesPadding;
    color: $trionesColorTextSecondary;

    &-active {
      color: $trionesColorPrimaryText;
      background-color: $trionesColorBgBase;
    }

  }

  &-content {
    flex: 1 auto;
    min-width: 0;

    &-item {
      height: 100%;
      display: none;

      &-active {
        display: block;
      }
    }
  }
}
`}}]);
