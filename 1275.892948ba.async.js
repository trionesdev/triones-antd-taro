"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[1275],{42611:function(e,n,t){t.r(n),t.d(n,{DemoBlock:function(){return a}});var i=t(44194),s=t(30565),o=t(31549),a=function(r){return(0,o.jsxs)("div",{className:"demoBlock",children:[(0,o.jsx)("div",{className:"demoTitle",children:r.title}),(0,o.jsx)("div",{className:"demoMain",style:{padding:"12px 12px",background:"#ffffff"},children:r.children})]})}},30565:function(e,n,t){t.r(n)},16653:function(e,n){n.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode
  /**
   * block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean
  /**
   * \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled?: boolean
  /**
   * \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  className?: string,
  style?: React.CSSProperties
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  loading?: boolean
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link',
  onClick?: MouseEventHandler<HTMLButtonElement>
}


export const Button: FC<ButtonProps> = (
  {
    children,
    block = false,
    type = 'default',
    color,
    danger = false,
    disabled,
    className,
    style,
    icon,
    iconPosition = 'start',
    loading,
    variant,
    onClick,
    ...props
  }
) => {
  const clsPrefix = "triones-antm-button"
  let finalColor = color
  let finalVariant = variant
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary'
      } else if (type === 'default') {
        finalColor = 'default'
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid'
      } else if (type === 'default') {
        finalVariant = 'outlined'
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type
      }
    }

  }
  if (danger) {
    finalColor = 'danger'
  }
  return <button
    onClick={onClick}
    className={classNames(clsPrefix,
      {
        [\`\${clsPrefix}-block\`]: block,
        [\`\${clsPrefix}-type-\${type}\`]: type,
        [\`\${clsPrefix}-color-\${finalColor}\`]: finalColor,
        [\`\${clsPrefix}-variant-\${finalVariant}\`]: finalVariant,

      })}
    disabled={disabled}>
    {iconPosition == 'start' && icon}
    {children}
    {iconPosition == 'end' && icon}
  </button>
}
`},76482:function(e,n){n.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},13696:function(e,n){n.Z=`import React, { FC, ReactNode, useContext } from 'react'
import { Locale } from '../locales/base'
import zhCN from '../locales/zh-CN'


type Config = {
  locale: Locale
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

`},918:function(e,n){n.Z=`import { ConfigProvider } from './config-provider'

export type { ConfigProviderProps } from './config-provider'

export {
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './config-provider'

export default ConfigProvider
`},45209:function(e,n){n.Z=`import React from 'react'
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
`},19695:function(e,n){n.Z=`import { animated, useSpring } from '@react-spring/web';
import { useUnmountedRef } from 'ahooks';
import type { FC, ReactNode } from 'react';
import React, { useMemo, useRef, useState } from 'react';
import { useConfig } from '../ConfigProvider';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { GetContainer, renderToContainer } from '../utils/render-to-container';
import { ShouldRender } from '../utils/should-render';
import { useLockScroll } from '../utils/use-lock-scroll';
import { mergeProps } from '../utils/with-default-props';
import {
  PropagationEvent,
  withStopPropagation,
} from '../utils/with-stop-propagation';

const classPrefix = \`triones-antm-mask\`;

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
};
const colorRecord: Record<string, string> = {
  black: '0, 0, 0',
  white: '255, 255, 255',
};

export type MaskProps = {
  visible?: boolean;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  disableBodyScroll?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  color?: 'white' | 'black' | (string & {});
  opacity?: 'default' | 'thin' | 'thick' | number;
  getContainer?: GetContainer;
  afterShow?: () => void;
  afterClose?: () => void;
  stopPropagation?: PropagationEvent[];
  children?: ReactNode;
} & NativeProps<'--z-index'>;

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click'],
};

export const Mask: FC<MaskProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const { locale } = useConfig();

  const ref = useRef<HTMLDivElement>(null);

  useLockScroll(ref, props.visible && props.disableBodyScroll);

  const background = useMemo(() => {
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = colorRecord[props.color];
    return rgb ? \`rgba(\${rgb}, \${opacity})\` : props.color;
  }, [props.color, props.opacity]);

  const [active, setActive] = useState(props.visible);

  const unmountedRef = useUnmountedRef();
  const { opacity } = useSpring({
    opacity: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: true,
    },
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      if (unmountedRef.current) return;
      setActive(props.visible);
      if (props.visible) {
        props.afterShow?.();
      } else {
        props.afterClose?.();
      }
    },
  });

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <animated.div
        className={classPrefix}
        ref={ref}
        aria-hidden
        style={{
          ...props.style,
          background,
          opacity,
          display: active ? undefined : 'none',
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.target === e.currentTarget) {
            props.onMaskClick?.(e);
          }
        }}
      >
        {props.onMaskClick && (
          <div
            className={\`\${classPrefix}-aria-button\`}
            role="button"
            aria-label={locale.Mask.name}
            onClick={props.onMaskClick}
          />
        )}
        <div className={\`\${classPrefix}-content\`}>{props.children}</div>
      </animated.div>,
    ),
  );

  return (
    <ShouldRender
      active={active}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  );
};
`},45919:function(e,n){n.Z=`import { Locale } from './base'

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
`},20933:function(e,n){n.Z=`export const canUseDom = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
);
`},37903:function(e,n){n.Z=`export type GetContainer = () => HTMLElement;

export function resolveContainer(
  getContainer: HTMLElement | GetContainer | undefined | null,
) {
  const container =
    typeof getContainer === 'function'
      ? (getContainer as GetContainer)()
      : getContainer;
  return container || document.body;
}
`},48697:function(e,n){n.Z=`import { canUseDom } from './can-use-dom';

type ScrollElement = HTMLElement | Window;

const defaultRoot = canUseDom ? window : undefined;

const overflowStylePatterns = ['scroll', 'auto', 'overlay'];

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}
export function getScrollParent(
  el: Element,
  root: ScrollElement | null | undefined = defaultRoot,
): Window | Element | null | undefined {
  let node = el;

  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    const { overflowY } = window.getComputedStyle(node);
    if (
      overflowStylePatterns.includes(overflowY) &&
      node.scrollHeight > node.clientHeight
    ) {
      return node;
    }
    node = node.parentNode as Element;
  }
  return root;
}
`},90431:function(e,n){n.Z=`import React, { AriaAttributes } from 'react'
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
`},22962:function(e,n){n.Z=`import type { ReactElement, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { canUseDom } from './can-use-dom';
import { resolveContainer } from './get-container';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(
  getContainer: GetContainer,
  node: ReactElement,
) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container) as ReactPortal;
  }
  return node;
}
`},80009:function(e,n){n.Z=`import type { FC, ReactElement } from 'react';
import { useInitialized } from './use-initialized';
interface Props {
  active: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children: ReactElement;
}
export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean,
) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}

export const ShouldRender: FC<Props> = (props) => {
  const shouldRender = useShouldRender(
    props.active,
    props.forceRender,
    props.destroyOnClose,
  );
  return shouldRender ? props.children : null;
};
`},81286:function(e,n){n.Z=`import { canUseDom } from './can-use-dom';

export let supportsPassive = false;

if (canUseDom) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
  } catch (e) {}
}
`},99061:function(e,n){n.Z=`import { useRef } from 'react';

export function useInitialized(check?: boolean) {
  const initializedRef = useRef(check);
  if (check) {
    initializedRef.current = true;
  }
  return !!initializedRef.current;
}
`},98417:function(e,n){n.Z=`import { RefObject, useEffect } from 'react';
import { getScrollParent } from './get-scroll-parent';
import { supportsPassive } from './supports-passive';
import { useTouch } from './use-touch';

let totalLockCount = 0;

const BODY_LOCK_CLASS = 'triones-antm-overflow-hidden';

function getScrollableElement(el: HTMLElement | null) {
  let current = el?.parentElement;

  while (current) {
    if (current.clientHeight < current.scrollHeight) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}

// \u79FB\u690D\u81EAvant\uFF1Ahttps://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts
export function useLockScroll(
  rootRef: RefObject<HTMLElement>,
  shouldLock: boolean | 'strict',
) {
  const touch = useTouch();

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event);

    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const el = getScrollParent(
      event.target as Element,
      rootRef.current,
    ) as HTMLElement;
    if (!el) return;

    // This has perf cost but we have to compatible with iOS 12
    if (shouldLock === 'strict') {
      const scrollableParent = getScrollableElement(
        event.target as HTMLElement,
      );
      if (
        scrollableParent === document.body ||
        scrollableParent === document.documentElement
      ) {
        event.preventDefault();
        return;
      }
    }

    const { scrollHeight, offsetHeight, scrollTop } = el;
    const { height } = el.getBoundingClientRect();
    let status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollHeight <= Math.round(height + scrollTop)) {
      status = '10';
    }

    if (
      status !== '11' &&
      touch.isVertical() &&
      !(parseInt(status, 2) & parseInt(direction, 2))
    ) {
      if (event.cancelable && supportsPassive) {
        // https://github.com/ant-design/ant-design-mobile/issues/6282
        event.preventDefault();
      }
    }
  };

  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener(
      'touchmove',
      onTouchMove,
      supportsPassive ? { passive: false } : false,
    );

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);

      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  useEffect(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock]);
}
`},76834:function(e,n){n.Z=`import { useRef } from 'react';

const MIN_DISTANCE = 10;

type Direction = '' | 'vertical' | 'horizontal';

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

export function useTouch() {
  const startX = useRef(0);
  const startY = useRef(0);
  const deltaX = useRef(0);
  const deltaY = useRef(0);
  const offsetX = useRef(0);
  const offsetY = useRef(0);
  const direction = useRef<Direction>('');

  const isVertical = () => direction.current === 'vertical';
  const isHorizontal = () => direction.current === 'horizontal';

  const reset = () => {
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    direction.current = '';
  };

  const start = ((event: TouchEvent) => {
    reset();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    // Fix: Safari back will set clientX to negative number
    deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current;
    deltaY.current = touch.clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);

    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
}
`},43453:function(e,n){n.Z=`export function mergeProps<A, B>(a: A, b: B): B & A;
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
`},35461:function(e,n){n.Z=`import React from 'react'
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
`}}]);
