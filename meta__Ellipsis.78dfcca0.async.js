(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[8844],{92463:function(_,t,n){"use strict";var I;n.r(t),n.d(t,{demos:function(){return D}});var f=n(90819),r=n.n(f),a=n(89933),l=n.n(a),o=n(44194),d=n(76591),v=n(61844),s=n(57180),x=n(87042),i=n(56368),u=n(94004),h=n(40199),M=n(187),T=n(13025),p=n(56800),R=n(81335),e=n(14451),c=n(3389),m=n(51865),E=n.n(m),S=n(7358),D={"src-ellipsis-demo-base":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9378),n.e(9),n.e(9877),n.e(1271),n.e(4316),n.e(150),n.e(3538),n.e(3411),n.e(1591),n.e(2433)]).then(n.bind(n,22444))})),asset:{type:"BLOCK",id:"src-ellipsis-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(86714).Z},react:{type:"NPM",value:"18.3.1"},"../index.ts":{type:"FILE",value:n(71831).Z},"../../DemoBlock.tsx":{type:"FILE",value:n(6682).Z},"./ellipsis.tsx":{type:"FILE",value:n(58761).Z},"./index.scss":{type:"FILE",value:n(49933).Z},"../utils/native-props.ts":{type:"FILE",value:n(43789).Z},"../utils/with-default-props.tsx":{type:"FILE",value:n(45876).Z},"../utils/use-resize-effect.tsx":{type:"FILE",value:n(92658).Z},"./useMeasure.tsx":{type:"FILE",value:n(9698).Z},"../utils/with-stop-propagation.tsx":{type:"FILE",value:n(97320).Z},"./style.scss":{type:"FILE",value:n(26462).Z},ahooks:{type:"NPM",value:"3.8.4"},"rc-util":{type:"NPM",value:"5.44.4"},classnames:{type:"NPM",value:"2.5.1"},runes2:{type:"NPM",value:"1.1.4"}},entry:"index.tsx"},context:{"../index.ts":v,"../../DemoBlock.tsx":s,"./ellipsis.tsx":x,"./index.scss":i,"../utils/native-props.ts":u,"../utils/with-default-props.tsx":h,"../utils/use-resize-effect.tsx":M,"./useMeasure.tsx":T,"../utils/with-stop-propagation.tsx":p,"./style.scss":R,react:I||(I=n.t(o,2)),"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Ellipsis/index.ts":v,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.tsx":s,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Ellipsis/ellipsis.tsx":x,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/DemoBlock/index.scss":i,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/native-props.ts":u,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-default-props.tsx":h,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/use-resize-effect.tsx":M,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Ellipsis/useMeasure.tsx":T,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/utils/with-stop-propagation.tsx":p,"/home/runner/work/triones-antd-taro/triones-antd-taro/packages/antd-taro-react/src/Ellipsis/style.scss":R,ahooks:e,"rc-util":c,classnames:m,runes2:S},renderOpts:{compile:function(){var P=l()(r()().mark(function L(){var k,U=arguments;return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,n.e(3092).then(n.bind(n,3092));case 2:return g.abrupt("return",(k=g.sent).default.apply(k,U));case 3:case"end":return g.stop()}},L)}));function C(){return P.apply(this,arguments)}return C}()}}}},57180:function(_,t,n){"use strict";n.r(t),n.d(t,{DemoBlock:function(){return a}});var I=n(44194),f=n(56368),r=n(31549),a=function(o){return(0,r.jsxs)("div",{className:"demoBlock",children:[(0,r.jsx)("div",{className:"demoTitle",children:o.title}),(0,r.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:o.children})]})}},87042:function(_,t,n){"use strict";n.r(t),n.d(t,{Ellipsis:function(){return h}});var I=n(45332),f=n.n(I),r=n(44194),a=n(13025),l=n(94004),o=n(187),d=n(56800),v=n(81335),s=n(40199),x=n(31549),i="triones-antm-ellipsis",u={direction:"end",rows:1,expandText:"",content:"",collapseText:"",stopPropagationForActionButtons:[],onContentClick:function(){},defaultExpanded:!1},h=function(T){var p=(0,s.mergeProps)(u,T),R=p.content,e=p.direction,c=e===void 0?"end":e,m=p.rows,E=m===void 0?1:m,S=p.expandText,D=p.collapseText,P=p.stopPropagationForActionButtons,C=P===void 0?[]:P,L=p.onContentClick,k=L===void 0?function(){}:L,U=p.defaultExpanded,A=U===void 0?!1:U,g=r.useRef(null),K=r.useState(A),W=f()(K,2),F=W[0],w=W[1],j=S?(0,d.withStopPropagation)(C,(0,x.jsx)("div",{className:"triones-antm-ellipsis-icon",onClick:function(){w(!0)},children:S})):null,H=D?(0,d.withStopPropagation)(C,(0,x.jsx)("div",{className:"triones-antm-ellipsis-icon",onClick:function(){w(!1)},children:D})):null,Z=(0,a.default)(g,R,E,c,F,j,H),O=f()(Z,2),y=O[0],B=O[1];return(0,o.useResizeEffect)(B,g),(0,l.withNativeProps)(p,(0,x.jsx)("div",{ref:g,className:i,onClick:function(b){b.target===b.currentTarget&&k(b)},children:y}))}},61844:function(_,t,n){"use strict";n.r(t);var I=n(87042);t.default=I.Ellipsis},13025:function(_,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var I=n(45332),f=n.n(I),r=n(3389),a=n(44194),l=n(7358),o=n(31549),d="...",v={visibility:"hidden",whiteSpace:"inherit",lineHeight:"inherit",fontSize:"inherit"};function s(x,i,u,h,M,T,p){var R=a.useMemo(function(){return(0,l.default)(i)},[i]),e=a.useState(0),c=f()(e,2),m=c[0],E=c[1],S=a.useState([0,0]),D=f()(S,2),P=D[0],C=D[1],L=Math.ceil((P[0]+P[1])/2),k=a.useState(100),U=f()(k,2),A=U[0],g=U[1],K=a.useRef(null),W=a.useRef(null),F=a.useRef(null),w=(0,r.useEvent)(function(){g(1),C([0,h==="middle"?Math.ceil(R.length/2):R.length])});a.useLayoutEffect(function(){w()},[R,u]),a.useLayoutEffect(function(){if(A===1){var O,y,B=((O=W.current)===null||O===void 0?void 0:O.offsetHeight)||0,N=((y=K.current)===null||y===void 0?void 0:y.offsetHeight)||0,b=N*u;B<=b?g(100):(E(b),g(2))}},[A]),a.useLayoutEffect(function(){if(A===2){var O,y=P[1]-P[0],B=((O=F.current)===null||O===void 0?void 0:O.offsetHeight)||0;y>1?B>m?C([P[0],L]):C([L,P[1]]):(B>m?C([P[0],P[0]]):C([P[1],P[1]]),g(99))}},[A,P]);var j=function(y){var B=R.slice(0,y),N=R.slice(R.length-y);return(0,o.jsxs)(o.Fragment,{children:[h==="start"&&(0,o.jsxs)(o.Fragment,{children:[T,d]}),h!=="start"&&B.join(""),h==="middle"&&(0,o.jsxs)(o.Fragment,{children:[d,T,d]}),h!=="end"&&N.join(""),h==="end"&&(0,o.jsxs)(o.Fragment,{children:[d,T]})]})},H=a.useMemo(function(){return M||A===100?(0,o.jsxs)(a.Fragment,{children:[i,A===99&&p]},"display"):A===99?j(L):null},[M,A,i,p,L]),Z=(0,o.jsxs)(o.Fragment,{children:[A===1&&(0,o.jsxs)("div",{"aria-hidden":!0,ref:W,style:v,children:[i,T]},"full"),A===1&&(0,o.jsx)("div",{"aria-hidden":!0,ref:K,style:v,children:"\xA0"},"stable"),A===2&&(0,o.jsx)("div",{"aria-hidden":!0,ref:F,style:v,children:j(L)},"walking-mid"),H]});return[Z,w]}},94004:function(_,t,n){"use strict";n.r(t),n.d(t,{attachPropertiesToComponent:function(){return d},toCSSLength:function(){return v},withNativeProps:function(){return o}});var I=n(73193),f=n.n(I),r=n(44194),a=n(51865),l=n.n(a);function o(s,x){var i=f()({},x.props);s.className&&(i.className=l()(x.props.className,s.className)),s.style&&(i.style=f()(f()({},i.style),s.style)),s.tabIndex!==void 0&&(i.tabIndex=s.tabIndex);for(var u in s)s.hasOwnProperty(u)&&(u.startsWith("data-")||u.startsWith("aria-"))&&(i[u]=s[u]);return r.cloneElement(x,i)}function d(s,x){var i=s;for(var u in x)x.hasOwnProperty(u)&&(i[u]=x[u]);return i}function v(s){return typeof s=="number"?"".concat(s,"px"):s}},187:function(_,t,n){"use strict";n.r(t),n.d(t,{useResizeEffect:function(){return r}});var I=n(27229),f=n(12162);function r(a,l){var o=(0,I.Z)(a);(0,f.Z)(function(){var d=l.current;if(d)if(window.ResizeObserver){var v,s=new ResizeObserver(function(){v=window.requestAnimationFrame(function(){return o(d)})});return s.observe(d),function(){window.cancelAnimationFrame(v),s.disconnect()}}else o(d)},[l])}},40199:function(_,t,n){"use strict";n.r(t),n.d(t,{mergeProp:function(){return f},mergeProps:function(){return I}});function I(){for(var r={},a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return l.forEach(function(d){d&&Object.keys(d).forEach(function(v){d[v]!==void 0&&(r[v]=d[v])})}),r}function f(r){for(var a=arguments.length,l=new Array(a>1?a-1:0),o=1;o<a;o++)l[o-1]=arguments[o];for(var d=l.length-1;d>=0;d-=1)if(l[d]!==void 0)return l[d];return r}},56800:function(_,t,n){"use strict";n.r(t),n.d(t,{withStopPropagation:function(){return d}});var I=n(86222),f=n.n(I),r=n(73193),a=n.n(r),l=n(44194),o={click:"onClick",touchstart:"onTouchStart"};function d(v,s){var x=a()({},s.props),i=f()(v),u;try{var h=function(){var T=u.value,p=o[T];x[p]=function(R){var e,c;R.stopPropagation(),(e=(c=s.props)[p])===null||e===void 0||e.call(c,R)}};for(i.s();!(u=i.n()).done;)h()}catch(M){i.e(M)}finally{i.f()}return l.cloneElement(s,x)}},56368:function(_,t,n){"use strict";n.r(t)},81335:function(_,t,n){"use strict";n.r(t)},6925:function(_,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return f}});var I=n(76591);const f=[{value:"\u5C55\u793A\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u9690\u53BB\u90E8\u5206\u5185\u5BB9\u5E76\u7528\u201C...\u201D\u66FF\u4EE3\u3002",paraId:0,tocIndex:0},{value:"\u6587\u672C\u5185\u5BB9\u957F\u5EA6\u6216\u9AD8\u5EA6\u8D85\u8FC7\u5217\u5BBD\u6216\u884C\u9AD8\u3002",paraId:1,tocIndex:1},{value:"\u56FE\u8868\u4E2D\u7A7A\u95F4\u6709\u9650\uFF0C\u6587\u672C\u5185\u5BB9\u65E0\u6CD5\u5B8C\u5168\u663E\u793A\u3002",paraId:1,tocIndex:1},{value:"\u81EA\u9002\u5E94\u8C03\u6574\u65F6\u5BBD\u5EA6\u53D8\u5C0F\u3002",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"collapseText",paraId:2,tocIndex:4},{value:"\u6536\u8D77\u64CD\u4F5C\u7684\u6587\u6848",paraId:2,tocIndex:4},{value:"React.ReactNode",paraId:2,tocIndex:4},{value:"''",paraId:2,tocIndex:4},{value:"content",paraId:2,tocIndex:4},{value:"\u6587\u672C\u5185\u5BB9",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u7701\u7565\u4F4D\u7F6E",paraId:2,tocIndex:4},{value:"'start' | 'end' | 'middle'",paraId:2,tocIndex:4},{value:"'end'",paraId:2,tocIndex:4},{value:"expandText",paraId:2,tocIndex:4},{value:"\u5C55\u5F00\u64CD\u4F5C\u7684\u6587\u6848",paraId:2,tocIndex:4},{value:"React.ReactNode",paraId:2,tocIndex:4},{value:"''",paraId:2,tocIndex:4},{value:"onContentClick",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u6587\u672C\u5185\u5BB9\u65F6\u89E6\u53D1",paraId:2,tocIndex:4},{value:"(e: React.MouseEvent) => void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"rows",paraId:2,tocIndex:4},{value:"\u5C55\u793A\u51E0\u884C",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"1",paraId:2,tocIndex:4},{value:"stopPropagationForActionButtons",paraId:2,tocIndex:4},{value:"\u963B\u6B62\u5C55\u5F00\u64CD\u4F5C\uFF0C\u6536\u8D77\u64CD\u4F5C\u5F15\u53D1\u7684\u4E8B\u4EF6\u5192\u6CE1",paraId:2,tocIndex:4},{value:"PropagationEvent[]",paraId:2,tocIndex:4},{value:"[]",paraId:2,tocIndex:4},{value:"defaultExpanded",paraId:2,tocIndex:4},{value:"\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"Ellipsis",paraId:3,tocIndex:6},{value:" \u7EC4\u4EF6\u5185\u90E8\u4F1A\u8BFB\u53D6 ",paraId:3,tocIndex:6},{value:"word-break",paraId:3,tocIndex:6},{value:" \u8FD9\u4E2A CSS \u5C5E\u6027\u7684\u503C\uFF0C\u5982\u679C\u672A\u8BBE\u7F6E\u8BE5\u6837\u5F0F\u5C5E\u6027\u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A\uFF1A",paraId:3,tocIndex:6},{value:"normal",paraId:3,tocIndex:6},{value:"\u3002\u6240\u4EE5\uFF0C\u5F53\u6587\u672C\u5185\u5BB9\u4E2D\u5305\u542B\u5927\u91CF\u6570\u5B57\u6216\u82F1\u6587\u65F6\uFF0C\u6587\u672C\u5185\u5BB9\u65E0\u6CD5\u7701\u7565\uFF08\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF09\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u9700\u8981\u8BA9\u6587\u672C\u7701\u7565\u751F\u6548\uFF0C\u53EF\u4EE5\u624B\u52A8\u5728 ",paraId:3,tocIndex:6},{value:"Ellipsis",paraId:3,tocIndex:6},{value:" \u7EC4\u4EF6\u6216\u5176\u5916\u5C42\u5143\u7D20\u4E2D\uFF0C\u6DFB\u52A0 ",paraId:3,tocIndex:6},{value:"word-break",paraId:3,tocIndex:6},{value:" \u6837\u5F0F\uFF08\u6BD4\u5982\uFF0C",paraId:3,tocIndex:6},{value:"word-break: break-word",paraId:3,tocIndex:6},{value:"\uFF09\uFF0C",paraId:3,tocIndex:6},{value:"Ellipsis",paraId:3,tocIndex:6},{value:" \u7EC4\u4EF6\u4F1A\u5B8C\u5168\u9075\u5FAA\u6837\u5F0F\u7EE7\u627F\u884C\u4E3A\uFF0C\u62FF\u5230\u4F60\u8BBE\u7F6E\u7684 ",paraId:3,tocIndex:6},{value:"word-break",paraId:3,tocIndex:6},{value:"\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u52A8\u7701\u7565\u3002",paraId:3,tocIndex:6}]},49933:function(_,t){"use strict";t.Z=`.demoBlock {
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
`},6682:function(_,t){"use strict";t.Z=`import React from 'react'
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
`},86714:function(_,t){"use strict";t.Z=`import { DemoBlock } from '../../DemoBlock';
import React from 'react'
import Ellipsis from "../index";

const content =
  '\u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002'

export default () => {
  return (
    <>
      <DemoBlock title='\u5C3E\u90E8\u7701\u7565'>
        <Ellipsis direction='end' content={content} />
      </DemoBlock>

      <DemoBlock title='\u5934\u90E8\u7701\u7565'>
        <Ellipsis direction='start' content={content} />
      </DemoBlock>

      <DemoBlock title='\u4E2D\u95F4\u7701\u7565'>
        <Ellipsis direction='middle' content={content} />
      </DemoBlock>

      <DemoBlock title='\u591A\u884C\u7701\u7565'>
        <Ellipsis direction='end' rows={3} content={content} />
      </DemoBlock>

      <DemoBlock title='\u5C55\u5F00\u6536\u8D77'>
        <Ellipsis
          direction='end'
          content={content}
          expandText='\u5C55\u5F00'
          collapseText='\u6536\u8D77'
        />
      </DemoBlock>

      <DemoBlock title='\u4EC5\u5C55\u5F00'>
        <div style={{ marginBottom: 10 }}>
          <Ellipsis direction='end' content={content} expandText='\u5C55\u5F00' />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Ellipsis direction='start' content={content} expandText='\u5C55\u5F00' />
        </div>
        <div>
          <Ellipsis direction='middle' content={content} expandText='\u5C55\u5F00' />
        </div>
      </DemoBlock>

      <DemoBlock title='\u9ED8\u8BA4\u5C55\u5F00'>
        <Ellipsis
          content={content}
          defaultExpanded={true}
          expandText='\u5C55\u5F00'
          collapseText='\u6536\u8D77'
        />
      </DemoBlock>

      <DemoBlock title='emoji'>
        <Ellipsis
          direction='end'
          content={
            '\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}\u{1F389}'
          }
          expandText='\u5C55\u5F00'
          collapseText='\u6536\u8D77'
        />
      </DemoBlock>
      <DemoBlock title='\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528icon\u7684\u4F8B\u5B50'>
        <Ellipsis
          direction='end'
          content={content}
          expandText={
            <>
              \u5C55\u5F00
            </>
          }
          collapseText={
            <>
              \u6536\u8D77
            </>
          }
        />
      </DemoBlock>
    </>
  )
}
`},58761:function(_,t){"use strict";t.Z=`
import type { FC, ReactNode } from 'react'
import React from 'react'
import useMeasure from './useMeasure'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { useResizeEffect } from '../utils/use-resize-effect'
import { PropagationEvent, withStopPropagation } from '../utils/with-stop-propagation'

import './style.scss'
import { mergeProps } from '../utils/with-default-props'

const classPrefix = \`triones-antm-ellipsis\`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: ReactNode
  collapseText?: ReactNode
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  defaultExpanded?: boolean
} & NativeProps

const defaultProps = {
  direction: 'end' as const,
  rows: 1,
  expandText: '',
  content: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => { },
  defaultExpanded: false,
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p) as EllipsisProps

  const {
    content,
    direction = 'end',
    rows = 1,
    expandText,
    collapseText,
    stopPropagationForActionButtons = [],
    onContentClick = () => { },
    defaultExpanded = false,
  } = props

  // ============================ Refs ============================
  const rootRef = React.useRef<HTMLDivElement>(null)

  // ========================== Expanded ==========================
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded)

  const expandNode = expandText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <div
        className='triones-antm-ellipsis-icon'
        onClick={() => {
          setExpanded(true)
        }}
      >
        {expandText}
      </div>
    )
    : null

  const collapseNode = collapseText
    ? withStopPropagation(
      stopPropagationForActionButtons,
      <div
        className='triones-antm-ellipsis-icon'
        onClick={() => {
          setExpanded(false)
        }}
      >
        {collapseText}
      </div>
    )
    : null

  // ========================== Ellipsis ==========================
  const [measureNodes, forceResize] = useMeasure(
    rootRef,
    content,
    rows,
    direction,
    expanded,
    expandNode,
    collapseNode
  )

  useResizeEffect(forceResize, rootRef)

  // =========================== Render ===========================
  return withNativeProps(
    props,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onContentClick(e)
        }
      }}
    >
      {measureNodes}
    </div>
  )
}
`},71831:function(_,t){"use strict";t.Z=`import { Ellipsis } from './ellipsis'

export type { EllipsisProps } from './ellipsis'

export default Ellipsis
`},26462:function(_,t){"use strict";t.Z=`$class-prefix-ellipsis: 'triones-antm-ellipsis';
/* prettier-ignore */
.#{$class-prefix-ellipsis} {
  overflow: hidden;
  line-height: 1.5;
  word-break: break-word;

  &-icon {
    display: inline-block;
    color: #1677ff;
    cursor: pointer;
  }
}
`},9698:function(_,t){"use strict";t.Z=`import { useEvent } from 'rc-util'
import React from 'react'
import runes from 'runes2'

const enum MEASURE_STATUS {
  PREPARE = 1,
  MEASURE_WALKING = 2,
  STABLE_ELLIPSIS = 99,
  STABLE_NO_ELLIPSIS = 100,
}

const ELLIPSIS_TEXT = '...'

const measureStyle: React.CSSProperties = {
  visibility: 'hidden',
  whiteSpace: 'inherit',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}

export default function useMeasure(
  containerRef: React.RefObject<HTMLDivElement>,
  content: string,
  rows: number,
  direction: 'start' | 'end' | 'middle',
  expanded: boolean,
  expandNode: React.ReactElement | null,
  collapseNode: React.ReactElement | null
) {
  const contentChars = React.useMemo(() => runes(content), [content])

  const [maxHeight, setMaxHeight] = React.useState<number>(0)

  const [walkingIndexes, setWalkingIndexes] = React.useState<
    [startOffset: number, endOffset: number]
  >([0, 0])
  const midIndex = Math.ceil((walkingIndexes[0] + walkingIndexes[1]) / 2)

  const [status, setStatus] = React.useState<MEASURE_STATUS>(
    MEASURE_STATUS.STABLE_NO_ELLIPSIS
  )

  // ============================ Refs ============================
  const singleRowMeasureRef = React.useRef<HTMLDivElement>(null)
  const fullMeasureRef = React.useRef<HTMLDivElement>(null)
  const midMeasureRef = React.useRef<HTMLDivElement>(null)

  const startMeasure = useEvent(() => {
    setStatus(MEASURE_STATUS.PREPARE)
    setWalkingIndexes([
      0,
      direction === 'middle'
        ? Math.ceil(contentChars.length / 2)
        : contentChars.length,
    ])
  })

  // Initialize
  React.useLayoutEffect(() => {
    startMeasure()
  }, [contentChars, rows])

  // Measure element height
  React.useLayoutEffect(() => {
    if (status === MEASURE_STATUS.PREPARE) {
      const fullMeasureHeight = fullMeasureRef.current?.offsetHeight || 0
      const singleRowMeasureHeight =
        singleRowMeasureRef.current?.offsetHeight || 0
      const rowMeasureHeight = singleRowMeasureHeight * rows

      if (fullMeasureHeight <= rowMeasureHeight) {
        setStatus(MEASURE_STATUS.STABLE_NO_ELLIPSIS)
      } else {
        setMaxHeight(rowMeasureHeight)
        setStatus(MEASURE_STATUS.MEASURE_WALKING)
      }
    }
  }, [status])

  // Walking measure
  React.useLayoutEffect(() => {
    if (status === MEASURE_STATUS.MEASURE_WALKING) {
      const diff = walkingIndexes[1] - walkingIndexes[0]
      const midHeight = midMeasureRef.current?.offsetHeight || 0

      if (diff > 1) {
        if (midHeight > maxHeight) {
          setWalkingIndexes([walkingIndexes[0], midIndex])
        } else {
          setWalkingIndexes([midIndex, walkingIndexes[1]])
        }
      } else {
        if (midHeight > maxHeight) {
          setWalkingIndexes([walkingIndexes[0], walkingIndexes[0]])
        } else {
          setWalkingIndexes([walkingIndexes[1], walkingIndexes[1]])
        }
        setStatus(MEASURE_STATUS.STABLE_ELLIPSIS)
      }
    }
  }, [status, walkingIndexes])

  // =========================== Render ===========================
  /** Render by cut index */
  const renderContent = (index: number) => {
    const prefixContent = contentChars.slice(0, index)
    const suffixContent = contentChars.slice(contentChars.length - index)

    return (
      <>
        {direction === 'start' && (
          <>
            {expandNode}
            {ELLIPSIS_TEXT}
          </>
        )}
        {direction !== 'start' && prefixContent.join('')}
        {direction === 'middle' && (
          <>
            {ELLIPSIS_TEXT}
            {expandNode}
            {ELLIPSIS_TEXT}
          </>
        )}
        {direction !== 'end' && suffixContent.join('')}
        {direction === 'end' && (
          <>
            {ELLIPSIS_TEXT}
            {expandNode}
          </>
        )}
      </>
    )
  }

  const finalContent = React.useMemo(() => {
    if (expanded || status === MEASURE_STATUS.STABLE_NO_ELLIPSIS) {
      return (
        <React.Fragment key='display'>
          {content}
          {status === MEASURE_STATUS.STABLE_ELLIPSIS && collapseNode}
        </React.Fragment>
      )
    }

    if (status === MEASURE_STATUS.STABLE_ELLIPSIS) {
      return renderContent(midIndex)
    }

    return null
  }, [expanded, status, content, collapseNode, midIndex])

  const allNodes = (
    <>
      {/******************* Measure Prepare *******************/}
      {/* Origin full content */}
      {status === MEASURE_STATUS.PREPARE && (
        <div key='full' aria-hidden ref={fullMeasureRef} style={measureStyle}>
          {content}
          {expandNode}
        </div>
      )}

      {/* Row measure */}
      {status === MEASURE_STATUS.PREPARE && (
        <div
          key='stable'
          aria-hidden
          ref={singleRowMeasureRef}
          style={measureStyle}
        >
          {'\\u00A0'}
        </div>
      )}

      {/******************* Measure Walking *******************/}
      {status === MEASURE_STATUS.MEASURE_WALKING && (
        <div
          key='walking-mid'
          aria-hidden
          ref={midMeasureRef}
          style={measureStyle}
        >
          {renderContent(midIndex)}
        </div>
      )}

      {/*********************** Display ***********************/}
      {/* Display content */}
      {finalContent}
    </>
  )

  return [allNodes, startMeasure] as const
}
`},43789:function(_,t){"use strict";t.Z=`import React, { AriaAttributes } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key]
    }
  }
  return React.cloneElement(element, p)
}

export function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P {
  const ret = component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key]
    }
  }
  return ret
}


export function toCSSLength(val: string | number) {
  return typeof val === 'number' ? \`\${val}px\` : val
}
`},92658:function(_,t){"use strict";t.Z=`import { RefObject } from 'react'
import { useIsomorphicLayoutEffect, useMemoizedFn } from 'ahooks'

export function useResizeEffect<T extends HTMLElement>(
  effect: (target: T) => void,
  targetRef: RefObject<T>
) {
  const fn = useMemoizedFn(effect)
  useIsomorphicLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window.ResizeObserver) {
      let animationFrame: number
      const observer = new ResizeObserver(() => {
        animationFrame = window.requestAnimationFrame(() => fn(target))
      })
      observer.observe(target)
      return () => {
        window.cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    } else {
      fn(target)
    }
  }, [targetRef])
}
`},45876:function(_,t){"use strict";t.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps<A, B, C, D>(a: A, b: B, c: C, d: D): D & C & B & A;
export function mergeProps(...items: any[]) {
  const ret: any = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== undefined) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}

/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */
export function mergeProp<T, DefaultT extends T = T>(
  defaultProp: DefaultT,
  ...propList: T[]
): T | undefined {
  for (let i = propList.length - 1; i >= 0; i -= 1) {
    if (propList[i] !== undefined) {
      return propList[i];
    }
  }
  return defaultProp;
}
`},97320:function(_,t){"use strict";t.Z=`import React from 'react'
import type { ReactElement } from 'react'
export type PropagationEvent = 'click' | 'touchstart'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
  'touchstart': 'onTouchStart'
}

export function withStopPropagation(
  events: PropagationEvent[],
  element: ReactElement
) {
  const props: Record<string, any> = { ...element.props }
  for (const key of events) {
    const prop = eventToPropRecord[key]
    props[prop] = function (e: Event) {
      e.stopPropagation()
      element.props[prop]?.(e)
    }
  }
  return React.cloneElement(element, props)
}
`},86222:function(_,t,n){var I=n(15274);function f(r,a){var l=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!l){if(Array.isArray(r)||(l=I(r))||a&&r&&typeof r.length=="number"){l&&(r=l);var o=0,d=function(){};return{s:d,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(u){throw u},f:d}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v=!0,s=!1,x;return{s:function(){l=l.call(r)},n:function(){var u=l.next();return v=u.done,u},e:function(u){s=!0,x=u},f:function(){try{!v&&l.return!=null&&l.return()}finally{if(s)throw x}}}}_.exports=f,_.exports.__esModule=!0,_.exports.default=_.exports},7358:function(_,t,n){"use strict";n.r(t),n.d(t,{EnumCodeUnits:function(){return r},EnumRunesCode:function(){return I},GRAPHEMES:function(){return f},betweenInclusive:function(){return p},codePointFromSurrogatePair:function(){return T},default:function(){return a},isDiacriticalMark:function(){return i},isFirstOfSurrogatePair:function(){return o},isFitzpatrickModifier:function(){return s},isGrapheme:function(){return h},isRegionalIndicator:function(){return d},isSubdivisionFlag:function(){return v},isSupplementarySpecialpurposePlane:function(){return u},isVariationSelector:function(){return x},isZeroWidthJoiner:function(){return M},nextUnits:function(){return l},runes:function(){return a},substr:function(){return R},substring:function(){return R}});var I;(function(e){e[e.HIGH_SURROGATE_START=55296]="HIGH_SURROGATE_START",e[e.HIGH_SURROGATE_END=56319]="HIGH_SURROGATE_END",e[e.LOW_SURROGATE_START=56320]="LOW_SURROGATE_START",e[e.REGIONAL_INDICATOR_START=127462]="REGIONAL_INDICATOR_START",e[e.REGIONAL_INDICATOR_END=127487]="REGIONAL_INDICATOR_END",e[e.FITZPATRICK_MODIFIER_START=127995]="FITZPATRICK_MODIFIER_START",e[e.FITZPATRICK_MODIFIER_END=127999]="FITZPATRICK_MODIFIER_END",e[e.VARIATION_MODIFIER_START=65024]="VARIATION_MODIFIER_START",e[e.VARIATION_MODIFIER_END=65039]="VARIATION_MODIFIER_END",e[e.DIACRITICAL_MARKS_START=8400]="DIACRITICAL_MARKS_START",e[e.DIACRITICAL_MARKS_END=8447]="DIACRITICAL_MARKS_END",e[e.SUBDIVISION_INDICATOR_START=127988]="SUBDIVISION_INDICATOR_START",e[e.TAGS_START=917504]="TAGS_START",e[e.TAGS_END=917631]="TAGS_END",e[e.ZWJ=8205]="ZWJ"})(I||(I={}));const f=Object.freeze([776,2359,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520]);var r;function a(e){if(typeof e!="string")throw new TypeError("string cannot be undefined or null");const c=[];let m=0,E=0;for(;m<e.length;)E+=l(m+E,e),h(e[m+E])&&E++,x(e[m+E])&&E++,i(e[m+E])&&E++,M(e[m+E])?E++:(c.push(e.substring(m,m+E)),m+=E,E=0);return c}function l(e,c){const m=c[e];if(!o(m)||e===c.length-1)return 1;const E=m+c[e+1];let S=c.substring(e+2,e+5);return d(E)&&d(S)?4:v(E)&&u(S)?c.slice(e).indexOf(String.fromCodePoint(917631))+2:s(S)?4:2}function o(e){return e&&p(e[0].charCodeAt(0),55296,56319)}function d(e){return p(T(e),127462,127487)}function v(e){return p(T(e),127988,127988)}function s(e){return p(T(e),127995,127999)}function x(e){return typeof e=="string"&&p(e.charCodeAt(0),65024,65039)}function i(e){return typeof e=="string"&&p(e.charCodeAt(0),8400,8447)}function u(e){const c=e.codePointAt(0);return typeof e=="string"&&typeof c=="number"&&p(c,917504,917631)}function h(e){return typeof e=="string"&&f.includes(e.charCodeAt(0))}function M(e){return typeof e=="string"&&e.charCodeAt(0)===8205}function T(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536}function p(e,c,m){return e>=c&&e<=m}function R(e,c,m){const E=a(e);if(c===void 0)return e;if(c>=E.length)return"";const S=E.length-c;let D=c+(m===void 0?S:m);return D>c+S&&(D=void 0),E.slice(c,D).join("")}(function(e){e[e.unit_1=1]="unit_1",e[e.unit_2=2]="unit_2",e[e.unit_4=4]="unit_4"})(r||(r={}))}}]);
