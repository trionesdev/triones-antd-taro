(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1439],{62276:function(r,e,n){"use strict";n.r(e),n.d(e,{ConfigProvider:function(){return x},defaultConfigRef:function(){return o},getDefaultConfig:function(){return f},setDefaultConfig:function(){return u},useConfig:function(){return P},useRtl:function(){return b}});var t=n(73193),d=n.n(t),s=n(84176),l=n.n(s),i=n(44194),a=n(64693),c=n(31549),p=["children"],o={current:{locale:a.default,direction:"ltr"}};function u(g){o.current=g}function f(){return o.current}var m=i.createContext(null);function P(){var g;return(g=(0,i.useContext)(m))!==null&&g!==void 0?g:f()}var b=function(){var v=P(),_=v.direction;return _==="rtl"},x=function(v){var _=v.children,C=l()(v,p),h=P();return(0,c.jsx)(m.Provider,{value:d()(d()({},h),C),children:_})}},50754:function(r,e,n){"use strict";n.r(e),n.d(e,{getDefaultConfig:function(){return t.getDefaultConfig},setDefaultConfig:function(){return t.setDefaultConfig},useConfig:function(){return t.useConfig}});var t=n(62276);e.default=t.ConfigProvider},95676:function(r,e,n){"use strict";n.r(e),n.d(e,{DemoBlock:function(){return l}});var t=n(44194),d=n(3837),s=n(31549),l=function(a){return(0,s.jsxs)("div",{className:"demoBlock",children:[(0,s.jsx)("div",{className:"demoTitle",children:a.title}),(0,s.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:a.children})]})}},43377:function(r,e,n){"use strict";n.r(e);var t=n(57481);e.default=t.NavBar},57481:function(r,e,n){"use strict";n.r(e),n.d(e,{NavBar:function(){return m}});var t=n(51865),d=n.n(t),s=n(44194),l=n(78252),i=n(50754),a=n(22045),c=n(72995),p=n(92292),o=n(31549),u="triones-antm-nav-bar",f=(0,o.jsx)(c.LeftOutline,{}),m=function(b){var x=(0,i.useConfig)(),g=x.navBar,v=g===void 0?{}:g,_=(0,a.mergeProps)(v,b),C=_.back,h=_.backIcon,y=v.backIcon||f,$=(0,a.mergeProp)(f,v.backIcon,h===!0?y:h);return(0,l.withNativeProps)(_,(0,o.jsxs)("div",{className:d()(u),children:[(0,o.jsxs)("div",{className:"".concat(u,"-left"),role:"button",children:[C!==null&&(0,o.jsxs)("div",{className:"".concat(u,"-back"),onClick:_.onBack,children:[$&&(0,o.jsx)("span",{className:"".concat(u,"-back-arrow"),children:$}),(0,o.jsx)("span",{"aria-hidden":"true",children:C})]}),_.left]}),(0,o.jsx)("div",{className:"".concat(u,"-title"),children:_.children}),(0,o.jsx)("div",{className:"".concat(u,"-right"),children:_.right})]}))}},64693:function(r,e,n){"use strict";n.r(e);var t="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",d={locale:"zh-CH",common:{confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88",loading:"\u52A0\u8F7D\u4E2D",close:"\u5173\u95ED"},Calendar:{title:"\u65E5\u671F\u9009\u62E9",confirm:"\u786E\u8BA4",start:"\u5F00\u59CB",end:"\u7ED3\u675F",today:"\u4ECA\u65E5",markItems:["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"],yearAndMonth:"${year}\u5E74${month}\u6708"},Cascader:{placeholder:"\u8BF7\u9009\u62E9"},Dialog:{ok:"\u6211\u77E5\u9053\u4E86"},DatePicker:{tillNow:"\u81F3\u4ECA"},ErrorBlock:{default:{title:"\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898",description:"\u5F85\u4F1A\u6765\u8BD5\u8BD5"},busy:{title:"\u524D\u65B9\u62E5\u5835",description:"\u5237\u65B0\u8BD5\u8BD5"},disconnected:{title:"\u7F51\u7EDC\u6709\u70B9\u5FD9",description:"\u52A8\u52A8\u624B\u6307\u5E2E\u5FD9\u4FEE\u590D"},empty:{title:"\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F",description:"\u627E\u627E\u5176\u4ED6\u7684\u5427"}},Form:{required:"\u5FC5\u586B",optional:"\u9009\u586B",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:t,method:t,array:t,object:t,number:t,date:t,boolean:t,integer:t,float:t,regexp:t,email:t,url:t,hex:t},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},ImageUploader:{uploading:"\u4E0A\u4F20\u4E2D...",upload:"\u4E0A\u4F20"},InfiniteScroll:{noMore:"\u6CA1\u6709\u66F4\u591A\u4E86",failedToLoad:"\u52A0\u8F7D\u5931\u8D25",retry:"\u91CD\u65B0\u52A0\u8F7D"},Input:{clear:"\u6E05\u9664"},Mask:{name:"\u80CC\u666F\u8499\u5C42"},Modal:{ok:"\u6211\u77E5\u9053\u4E86"},PasscodeInput:{name:"\u5BC6\u7801\u8F93\u5165\u6846"},PullToRefresh:{pulling:"\u4E0B\u62C9\u5237\u65B0",canRelease:"\u91CA\u653E\u7ACB\u5373\u5237\u65B0",complete:"\u5237\u65B0\u6210\u529F"},SearchBar:{name:"\u641C\u7D22\u6846"},Slider:{name:"\u6ED1\u52A8\u8F93\u5165\u6761"},Stepper:{decrease:"\u51CF\u5C11",increase:"\u589E\u52A0"},Switch:{name:"\u5F00\u5173"},Selector:{name:"\u9009\u62E9\u7EC4"}};e.default=d},78252:function(r,e,n){"use strict";n.r(e),n.d(e,{attachPropertiesToComponent:function(){return c},toCSSLength:function(){return p},withNativeProps:function(){return a}});var t=n(73193),d=n.n(t),s=n(44194),l=n(51865),i=n.n(l);function a(o,u){var f=d()({},u.props);o.className&&(f.className=i()(u.props.className,o.className)),o.style&&(f.style=d()(d()({},f.style),o.style)),o.tabIndex!==void 0&&(f.tabIndex=o.tabIndex);for(var m in o)o.hasOwnProperty(m)&&(m.startsWith("data-")||m.startsWith("aria-"))&&(f[m]=o[m]);return s.cloneElement(u,f)}function c(o,u){var f=o;for(var m in u)u.hasOwnProperty(m)&&(f[m]=u[m]);return f}function p(o){return typeof o=="number"?"".concat(o,"px"):o}},22045:function(r,e,n){"use strict";n.r(e),n.d(e,{mergeProp:function(){return d},mergeProps:function(){return t}});function t(){for(var s={},l=arguments.length,i=new Array(l),a=0;a<l;a++)i[a]=arguments[a];return i.forEach(function(c){c&&Object.keys(c).forEach(function(p){c[p]!==void 0&&(s[p]=c[p])})}),s}function d(s){for(var l=arguments.length,i=new Array(l>1?l-1:0),a=1;a<l;a++)i[a-1]=arguments[a];for(var c=i.length-1;c>=0;c-=1)if(i[c]!==void 0)return i[c];return s}},3837:function(r,e,n){"use strict";n.r(e)},92292:function(r,e,n){"use strict";n.r(e)},7003:function(r,e){"use strict";e.Z=`import React, { FC, ReactNode, useContext } from 'react'
import { Locale } from '../locales/base'
import zhCN from '../locales/zh-CN'

export type ConfigProviderDirection = 'ltr' | 'rtl' | undefined

type Config = {
  locale: Locale
  direction?: ConfigProviderDirection
  checkList?: {
    activeIcon?: ReactNode
  }
  collapse?: {
    arrowIcon?: ReactNode | ((active: boolean) => ReactNode)
  }
  dropdown?: {
    arrowIcon?: ReactNode
  }
  form?: {
    helpIcon?: ReactNode
  }
  input?: {
    clearIcon?: ReactNode
  }
  list?: {
    arrowIcon?: ReactNode
  }
  navBar?: {
    backIcon?: ReactNode
  }
  noticeBar?: {
    icon?: ReactNode
    closeIcon?: ReactNode
  }
  popup?: {
    closeIcon?: ReactNode
  }
  result?: {
    successIcon?: ReactNode
    errorIcon?: ReactNode
    infoIcon?: ReactNode
    waitingIcon?: ReactNode
    warningIcon?: ReactNode
  }
  searchBar?: {
    searchIcon?: ReactNode
  }
}

export const defaultConfigRef: {
  current: Config
} = {
  current: {
    locale: zhCN,
    direction: 'ltr',
  },
}

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config
}

export function getDefaultConfig() {
  return defaultConfigRef.current
}

const ConfigContext = React.createContext<Config | null>(null)

export type ConfigProviderProps = Partial<Config> & {
  children?: ReactNode
}


export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}

export const useRtl = () => {
  const { direction } = useConfig()
  return direction === 'rtl'
}

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...config } = props
  const parentConfig = useConfig()

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

`},77563:function(r,e){"use strict";e.Z=`import { ConfigProvider } from './config-provider'

export type { ConfigProviderProps } from './config-provider'

export {
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './config-provider'

export default ConfigProvider
`},87669:function(r,e){"use strict";e.Z=`import React from 'react'
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
`},4146:function(r,e){"use strict";e.Z=`import { NavBar } from './nav-bar'

export type { NavBarProps } from './nav-bar'

export default NavBar
`},85566:function(r,e){"use strict";e.Z=`import classNames from 'classnames'
import type {CSSProperties, FC, ReactNode} from 'react'
import React from 'react'
import { withNativeProps } from '../utils/native-props'
import { useConfig } from '../ConfigProvider'
import { mergeProp, mergeProps } from '../utils/with-default-props'
import { LeftOutline } from '@trionesdev/antd-taro-icons-react'

import './style.scss'

const classPrefix = \`triones-antm-nav-bar\`

export type NavBarProps = {
  /**
   * @description \u8FD4\u56DE\u533A\u57DF\u7684\u6587\u5B57\uFF0C\u5982\u679C\u4E3A \`null\` \u7684\u8BDD\uFF0C\`backIcon\` \u4E5F\u4E0D\u4F1A\u6E32\u67D3
   */
  back?: ReactNode
  /**
   * @description \u662F\u5426\u663E\u793A\u8FD4\u56DE\u533A\u57DF\u7684\u7BAD\u5934\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165 \`ReactNode\` \u8FDB\u884C\u81EA\u5B9A\u4E49
   * @default true
   */
  backIcon?: boolean | ReactNode
  /**
   * @description \u5DE6\u4FA7\u5185\u5BB9\uFF0C\u6E32\u67D3\u5728\u8FD4\u56DE\u533A\u57DF\u7684\u53F3\u4FA7
   */
  left?: ReactNode
  /**
   * @description \u53F3\u4FA7\u5185\u5BB9
   */
  right?: ReactNode
  /**
   * @description \u70B9\u51FB\u8FD4\u56DE\u533A\u57DF\u540E\u7684\u56DE\u8C03
   */
  onBack?: () => void
  /**
   * @description \u6807\u9898
   */
  children?: ReactNode,
  style?: CSSProperties
}

const defaultBackIcon = <LeftOutline />

export const NavBar: FC<NavBarProps> = props => {
  const { navBar: componentConfig = {} } = useConfig()
  const mergedProps = mergeProps(componentConfig, props)
  const { back, backIcon } = mergedProps

  const mergedDefaultBackIcon = componentConfig.backIcon || defaultBackIcon

  const mergedBackIcon = mergeProp<ReactNode>(
    defaultBackIcon,
    componentConfig.backIcon,
    backIcon === true ? mergedDefaultBackIcon : backIcon
  )

  return withNativeProps(
    mergedProps,
    <div className={classNames(classPrefix)}>
      <div className={\`\${classPrefix}-left\`} role='button'>
        {back !== null && (
          <div className={\`\${classPrefix}-back\`} onClick={mergedProps.onBack}>
            {mergedBackIcon && (
              <span className={\`\${classPrefix}-back-arrow\`}>
                {mergedBackIcon}
              </span>
            )}
            <span aria-hidden='true'>{back}</span>
          </div>
        )}
        {mergedProps.left}
      </div>
      <div className={\`\${classPrefix}-title\`}>{mergedProps.children}</div>
      <div className={\`\${classPrefix}-right\`}>{mergedProps.right}</div>
    </div>
  )
}
`},56548:function(r,e){"use strict";e.Z=`$class-prefix-nav-bar: 'triones-antm-nav-bar';
/* prettier-ignore */
.#{$class-prefix-nav-bar} {
  --height: 45PX;
  --border-bottom: none;
  display: flex;
  align-items: center;
  height: var(--height);
  border-bottom: var(--border-bottom);
  padding: 0 12PX;
  white-space: nowrap;

  &-left,
  &-right {
    flex: 1;
  }
  &-title {
    flex: auto;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-back {
    display: flex;
    align-items: center;
    margin-right: 16PX;
    padding: 6PX 0;
    cursor: pointer;
    &-arrow {
      font-size: 20PX;
      margin-right: 5PX;
      display: flex;
      align-items: center;
    }
  }

  &-left {
    font-size: var(--triones-antm-font-size-7);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &-title {
    justify-content: center;
    white-space: nowrap;
    font-size: var(--triones-antm-font-size-10);
    padding: 0 12PX;
  }

  &-right {
    text-align: right;
  }
}
`},5515:function(r,e){"use strict";e.Z=`import { Locale } from './base'

const typeTemplate = '\${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\${type}'

const zhCN: Locale = {
  locale: 'zh-CH',
  common: {
    confirm: '\u786E\u5B9A',
    cancel: '\u53D6\u6D88',
    loading: '\u52A0\u8F7D\u4E2D',
    close: '\u5173\u95ED',
  },
  Calendar: {
    title: '\u65E5\u671F\u9009\u62E9',
    confirm: '\u786E\u8BA4',
    start: '\u5F00\u59CB',
    end: '\u7ED3\u675F',
    today: '\u4ECA\u65E5',
    markItems: ['\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u65E5'],
    yearAndMonth: '\${year}\u5E74\${month}\u6708',
  },
  Cascader: {
    placeholder: '\u8BF7\u9009\u62E9',
  },
  Dialog: {
    ok: '\u6211\u77E5\u9053\u4E86',
  },
  DatePicker: {
    tillNow: '\u81F3\u4ECA',
  },
  ErrorBlock: {
    default: {
      title: '\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898',
      description: '\u5F85\u4F1A\u6765\u8BD5\u8BD5',
    },
    busy: {
      title: '\u524D\u65B9\u62E5\u5835',
      description: '\u5237\u65B0\u8BD5\u8BD5',
    },
    disconnected: {
      title: '\u7F51\u7EDC\u6709\u70B9\u5FD9',
      description: '\u52A8\u52A8\u624B\u6307\u5E2E\u5FD9\u4FEE\u590D',
    },
    empty: {
      title: '\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F',
      description: '\u627E\u627E\u5176\u4ED6\u7684\u5427',
    },
  },
  Form: {
    required: '\u5FC5\u586B',
    optional: '\u9009\u586B',
    defaultValidateMessages: {
      default: '\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF\${label}',
      required: '\u8BF7\u8F93\u5165\${label}',
      enum: '\${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[\${enum}]',
      whitespace: '\${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26',
      date: {
        format: '\${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548',
        parse: '\${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F',
        invalid: '\${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '\${label}\u987B\u4E3A\${len}\u4E2A\u5B57\u7B26',
        min: '\${label}\u6700\u5C11\${min}\u4E2A\u5B57\u7B26',
        max: '\${label}\u6700\u591A\${max}\u4E2A\u5B57\u7B26',
        range: '\${label}\u987B\u5728\${min}-\${max}\u5B57\u7B26\u4E4B\u95F4',
      },
      number: {
        len: '\${label}\u5FC5\u987B\u7B49\u4E8E\${len}',
        min: '\${label}\u6700\u5C0F\u503C\u4E3A\${min}',
        max: '\${label}\u6700\u5927\u503C\u4E3A\${max}',
        range: '\${label}\u987B\u5728\${min}-\${max}\u4E4B\u95F4',
      },
      array: {
        len: '\u987B\u4E3A\${len}\u4E2A\${label}',
        min: '\u6700\u5C11\${min}\u4E2A\${label}',
        max: '\u6700\u591A\${max}\u4E2A\${label}',
        range: '\${label}\u6570\u91CF\u987B\u5728\${min}-\${max}\u4E4B\u95F4',
      },
      pattern: {
        mismatch: '\${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D\${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: '\u4E0A\u4F20\u4E2D...',
    upload: '\u4E0A\u4F20',
  },
  InfiniteScroll: {
    noMore: '\u6CA1\u6709\u66F4\u591A\u4E86',
    failedToLoad: '\u52A0\u8F7D\u5931\u8D25',
    retry: '\u91CD\u65B0\u52A0\u8F7D',
  },
  Input: {
    clear: '\u6E05\u9664',
  },
  Mask: {
    name: '\u80CC\u666F\u8499\u5C42',
  },
  Modal: {
    ok: '\u6211\u77E5\u9053\u4E86',
  },
  PasscodeInput: {
    name: '\u5BC6\u7801\u8F93\u5165\u6846',
  },
  PullToRefresh: {
    pulling: '\u4E0B\u62C9\u5237\u65B0',
    canRelease: '\u91CA\u653E\u7ACB\u5373\u5237\u65B0',
    complete: '\u5237\u65B0\u6210\u529F',
  },
  SearchBar: {
    name: '\u641C\u7D22\u6846',
  },
  Slider: {
    name: '\u6ED1\u52A8\u8F93\u5165\u6761',
  },
  Stepper: {
    decrease: '\u51CF\u5C11',
    increase: '\u589E\u52A0',
  },
  Switch: {
    name: '\u5F00\u5173',
  },
  Selector: {
    name: '\u9009\u62E9\u7EC4',
  },
}

export default zhCN
`},8196:function(r,e){"use strict";e.Z=`import React, { AriaAttributes } from 'react'
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
`},65458:function(r,e){"use strict";e.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},84176:function(r,e,n){var t=n(75863);function d(s,l){if(s==null)return{};var i=t(s,l),a,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(s);for(c=0;c<p.length;c++)a=p[c],!(l.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(i[a]=s[a])}return i}r.exports=d,r.exports.__esModule=!0,r.exports.default=r.exports},75863:function(r){function e(n,t){if(n==null)return{};var d={},s=Object.keys(n),l,i;for(i=0;i<s.length;i++)l=s[i],!(t.indexOf(l)>=0)&&(d[l]=n[l]);return d}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
