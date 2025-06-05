"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[625],{81821:function(t,e,n){var a;n.r(e),n.d(e,{demos:function(){return C}});var l=n(90819),o=n.n(l),i=n(89933),c=n.n(i),r=n(44194),B=n(70358),g=n(95258),d=n(66876),_=n(95676),m=n(89206),x=n(72995),u=n(3837),p=n(51865),h=n.n(p),f=n(86359),C={"alert-demo-base":{component:r.memo(r.lazy(function(){return n.e(5031).then(n.bind(n,64597))})),asset:{type:"BLOCK",id:"alert-demo-base",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:n(46054).Z},react:{type:"NPM",value:"18.3.1"},"@trionesdev/antd-taro-react":{type:"NPM",value:"0.0.0"},"../index.tsx":{type:"FILE",value:n(23484).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(23624).Z},"./alert.tsx":{type:"FILE",value:n(69571).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"./index.scss":{type:"FILE",value:n(72973).Z},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:n(5860).Z}},entry:"index.tsx"},context:{"../index.tsx":d,"../../DemoBlock.tsx":_,"./alert.tsx":m,"./index.scss":u,"./style.scss":f,react:a||(a=n.t(r,2)),"@trionesdev/antd-taro-react":g,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Alert/index.tsx":d,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":_,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Alert/alert.tsx":m,"@trionesdev/antd-taro-icons-react":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":u,classnames:p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Alert/style.scss":f},renderOpts:{compile:function(){var E=c()(o()().mark(function A(){var v,P=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(2740).then(n.bind(n,42740));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,P));case 3:case"end":return s.stop()}},A)}));function D(){return E.apply(this,arguments)}return D}()}}}},95676:function(t,e,n){n.r(e),n.d(e,{DemoBlock:function(){return i}});var a=n(44194),l=n(3837),o=n(31549),i=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},3837:function(t,e,n){n.r(e)},86186:function(t,e,n){n.r(e),n.d(e,{texts:function(){return l}});var a=n(70358);const l=[]},69571:function(t,e){e.Z=`import {
  CheckCircleFill,
  CloseCircleFill,
  CloseOutline,
  ExclamationCircleFill,
  InformationCircleFill,
} from '@trionesdev/antd-taro-icons-react';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import './style.scss';

export type AlertProps = {
  type?: 'success' | 'info' | 'warning' | 'error';
  /**
   * @description \u544A\u8B66\u4FE1\u606F
   */
  message: React.ReactNode;
  /**
   * @description \u544A\u8B66\u4FE1\u606F\u8BE6\u60C5
   */
  description?: React.ReactNode;
  /**
   * @description \u662F\u5426\u663E\u793A\u56FE\u6807
   * @default false
   */
  showIcon?: boolean;
  /**
   * @description \u662F\u5426\u53EF\u4EE5\u5173\u95ED
   * @default false
   */
  closable?: boolean;
  /**
   * @description \u5173\u95ED\u56DE\u8C03
   */
  onClose?: () => void;
  /**
   * @description \u5173\u95ED\u540E\u56DE\u8C03
   */
  afterClose?: () => void;
};
export const Alert: FC<AlertProps> = ({
  type = 'success',
  showIcon = false,
  closable = false,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const alertCls = 'triones-antm-alert';

  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(\`\${alertCls}\`, \`\${alertCls}-\${type}\`, {})}>
      {showIcon && (
        <div className={\`\${alertCls}-icon\`}>
          {type === 'success' && <CheckCircleFill />}
          {type === 'info' && <InformationCircleFill />}
          {type === 'warning' && <ExclamationCircleFill />}
          {type === 'error' && <CloseCircleFill />}
        </div>
      )}
      <div className={\`\${alertCls}-content\`}>
        <div className={\`\${alertCls}-message\`}>{props.message}</div>
        {props.description && (
          <div className={\`\${alertCls}-description\`}>{props.description}</div>
        )}
      </div>
      {closable && (
        <div
          className={\`\${alertCls}-close-icon\`}
          onClick={() => {
            props.onClose?.();
            setVisible(false);
            props.afterClose?.();
          }}
        >
          <CloseOutline />
        </div>
      )}
    </div>
  );
};
`},46054:function(t,e){e.Z=`import React from "react";
import {DemoBlock} from "../../DemoBlock";
import Alert from "../index";
import {Space} from "@trionesdev/antd-taro-react";

export default () => {
  return <div>
    <DemoBlock title={\`\u57FA\u672C\u4F7F\u7528\`}>
      <Alert message={\`Success Text\`}/>
    </DemoBlock>
    <DemoBlock title={\`\u56DB\u79CD\u6837\u5F0F\`}>
      <Space direction={'vertical'} block={true}>
        <Alert message={\`Success Text\`}/>
        <Alert type={'info'} message={\`Info Text\`}/>
        <Alert type={\`warning\`} message={\`Warring Text\`}/>
        <Alert type={\`error\`} message={\`Error Text\`}/>
      </Space>
    </DemoBlock>
    <DemoBlock title={\`\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A\`}>
      <Space direction={\`vertical\`} block={true}>
        <Alert type={\`warning\`}
               message={\`Warning Text Warning Text Warning Text Warning Text Warning Text Warning TextWarning Text\`}
               closable/>
      </Space>
    </DemoBlock>
    <DemoBlock title={\`\u56FE\u6807\`}>
      <Space direction={'vertical'} block={true}>
        <Alert showIcon={true} message={\`Success Text\`}/>
        <Alert showIcon={true} type={'info'} message={\`Info Text\`}/>
        <Alert showIcon={true} type={\`warning\`} message={\`Warring Text\`}/>
        <Alert showIcon={true} type={\`error\`} message={\`Error Text\`}/>
      </Space>
    </DemoBlock>
  </div>
}
`},23484:function(t,e){e.Z=`import {Alert, AlertProps} from "./alert"

export type {
  AlertProps
}
export default Alert
`},5860:function(t,e){e.Z=`@import "../style/variable";

$trionesAlertCls: 'triones-antm-alert';

$trionesAlertDefaultPadding: 8Px 12Px;

.#{$trionesAlertCls} {
  padding: $trionesAlertDefaultPadding;
  border-radius: $trionesBorderRadius;
  display: flex;
  flex: 1 auto;
  border: 1Px solid;
  align-items: center;
  justify-content: center;
  gap: 4Px;

  &-success {
    border-color: $trionesColorSuccessBorder;
    background-color: $trionesColorSuccessBg;

    .#{$trionesAlertCls}-icon {
      color: $trionesColorSuccess;
    }
  }

  &-info {
    border-color: $trionesColorInfoBorder;
    background-color: $trionesColorInfoBg;

    .#{$trionesAlertCls}-icon {
      color: $trionesColorInfo;
    }
  }

  &-warning {
    border-color: $trionesColorWarningBorder;
    background-color: $trionesColorWarningBg;

    .#{$trionesAlertCls}-icon {
      color: $trionesColorWarning;
    }
  }

  &-error {
    border-color: $trionesColorErrorBorder;
    background-color: $trionesColorErrorBg;

    .#{$trionesAlertCls}-icon {
      color: $trionesColorError;
    }
  }

  &-icon {
  }

  &-content {
    flex: 1 auto;
  }

  &-close-icon {
    color: $trionesColorIcon;
    font-size: $trionesFontSizeIcon;
    cursor: pointer;

    .triones-antm-icon {
      font-size: $trionesFontSizeIcon;
    }
  }
}
`},72973:function(t,e){e.Z=`.demoBlock {
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
`},23624:function(t,e){e.Z=`import React from 'react'
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
`}}]);
