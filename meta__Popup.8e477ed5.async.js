"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1141],{48768:function(_,n,t){var a,e;t.r(n),t.d(n,{demos:function(){return L}});var x=t(90819),s=t.n(x),B=t(89933),f=t.n(B),r=t(44194),A=t(34408),d=t(49632),p=t(95676),u=t(20945),c=t(6990),i=t(80215),m=t(3837),M=t(56321),l=t(51865),k=t.n(l),E=t(27318),O=t(36958),g=t(72995),P=t(93794),v=t(82281),h=t(78252),L={"popup-demo-base":{component:r.memo(r.lazy(function(){return t.e(8613).then(t.bind(t,72686))})),asset:{type:"BLOCK",id:"popup-demo-base",refAtomIds:["Popup"],dependencies:{"index.tsx":{type:"FILE",value:t(61437).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:t(74155).Z},"../../DemoBlock.tsx":{type:"FILE",value:t(87669).Z},"../../Button.tsx":{type:"FILE",value:t(13790).Z},"./popup.tsx":{type:"FILE",value:t(90668).Z},"./button.tsx":{type:"FILE",value:t(56243).Z},"./index.scss":{type:"FILE",value:t(63498).Z},"react-dom":{type:"NPM",value:"18.3.1"},classnames:{type:"NPM",value:"2.5.1"},"./style.scss":{type:"FILE",value:t(46507).Z},"./popup-modal.tsx":{type:"FILE",value:t(81366).Z},"@trionesdev/antd-taro-icons-react":{type:"NPM",value:"0.0.1"},"../SafeArea.tsx":{type:"FILE",value:t(23623).Z},"./safe-area.tsx":{type:"FILE",value:t(32287).Z},"../utils/native-props.ts":{type:"FILE",value:t(8196).Z}},entry:"index.tsx"},context:{"../index.tsx":d,"../../DemoBlock.tsx":p,"../../Button.tsx":u,"./popup.tsx":c,"./button.tsx":i,"./index.scss":m,"./style.scss":E,"./popup-modal.tsx":O,"../SafeArea.tsx":P,"./safe-area.tsx":v,"../utils/native-props.ts":h,react:a||(a=t.t(r,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/index.tsx":d,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/index.tsx":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup.tsx":c,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Button/button.tsx":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":m,"react-dom":e||(e=t.t(M,2)),classnames:l,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SafeArea/style.scss":E,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Popup/popup-modal.tsx":O,"@trionesdev/antd-taro-icons-react":g,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SafeArea/index.tsx":P,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/SafeArea/safe-area.tsx":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":h},renderOpts:{compile:function(){var I=f()(s()().mark(function R(){var D,y=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.e(7215).then(t.bind(t,87215));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,y));case 3:case"end":return o.stop()}},R)}));function C(){return I.apply(this,arguments)}return C}()}}}},23e3:function(_,n,t){t.r(n),t.d(n,{texts:function(){return e}});var a=t(34408);const e=[]},61437:function(_,n){n.Z=`import {DemoBlock} from '../../DemoBlock';
import React, {useEffect} from 'react';
import Button from "../../Button";
import Popup from "../index";

export default () => {
  const [topOpen, setTopOpen] = React.useState(false);
  const [bottomOpen, setBottomOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);

  useEffect(() => {
    console.log("topOpen", topOpen)
  }, [topOpen])
  return (
    <>
      <DemoBlock title="\u57FA\u7840\u7528\u6CD5">
        <Popup open={topOpen} destroyOnClose={true} afterOpenChange={(o) => {
          setTopOpen(o);
        }}>
          <div style={{minHeight: "200px"}}>
            \u9876\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setTopOpen(true)
        }}>\u9876\u90E8\u5F39\u51FA</Button>

        <Popup open={bottomOpen} position={\`bottom\`} closable={true} afterOpenChange={(o) => {
          setBottomOpen(o);
        }}>
          <div style={{minHeight: "200px"}}>
            \u5E95\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setBottomOpen(true)
        }}>\u5E95\u90E8\u5F39\u51FA</Button>

        <Popup open={leftOpen} position={\`left\`} afterOpenChange={(o) => {
          setLeftOpen(o);
        }}>
          <div style={{minWidth: "200px"}}>
            \u5DE6\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setLeftOpen(true)
        }}>\u5DE6\u90E8\u5F39\u51FA</Button>
        <Popup open={rightOpen} position={\`right\`} afterOpenChange={(o) => {
          setRightOpen(o);
        }}>
          <div style={{minWidth: "200px"}}>
            \u53F3\u90E8\u5F39\u51FA
          </div>
        </Popup>
        <Button block={true} onClick={() => {
          setRightOpen(true)
        }}>\u53F3\u90E8\u5F39\u51FA</Button>
      </DemoBlock>
    </>
  );
};
`}}]);
