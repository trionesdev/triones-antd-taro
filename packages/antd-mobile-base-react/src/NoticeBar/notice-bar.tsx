import {
  CloseCircleOutline,
  SetOutline,
} from '../../../antd-mobile-icons-react';
import { useTimeout } from 'ahooks';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { memo, useRef, useState } from 'react';
import { useConfig } from '../ConfigProvider';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { useMutationEffect } from '../utils/use-mutation-effect';
import { useResizeEffect } from '../utils/use-resize-effect';
import { mergeProp, mergeProps } from '../utils/with-default-props';

import './style.scss';

const classPrefix = `triones-antm-notice-bar`;

export type NoticeBarProps = {
  /**
   * @description 通告栏的类型
   */
  color?: 'default' | 'alert' | 'error' | 'success' | 'info';
  /**
   * @description 延时展示，单位 ms
   * @default 2000
   */
  delay?: number;
  /**
   * @description 滚动速度，单位 px/s
   * @default 50
   */
  speed?: number;
  /**
   * @description 公告内容
   */
  content: ReactNode;
  /**
   * @description 是否可关闭
   */
  closeable?: boolean;
  /**
   * @description 自定义关闭按钮图标
   */
  closeIcon?: ReactNode;
  /**
   * @description 关闭时的回调
   */
  onClose?: () => void;
  /**
   * @description 点击事件
   */
  onClick?: () => void;
  /**
   * @description 额外操作区域，显示在关闭按钮左侧
   */
  extra?: ReactNode;
  /**
   * @description 左侧广播图标
   */
  icon?: ReactNode;
  /**
   * @description 是否多行展示
   * @default false
   */
  wrap?: boolean;
  /**
   * @description 形状 (rectangular: 直角; neutral: 圆角; rounded: 圆形)
   * @default rectangular
   */
  shape?: 'rectangular' | 'neutral' | 'rounded';
  /**
   * @description 边框可见性 (`block`: 上下边框; `true`: 全边框; `false`: 无边框)
   * @default block
   */
  bordered?: 'block' | boolean;
} & NativeProps;

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
  icon: <SetOutline />,
  wrap: false,
  shape: 'rectangular',
  bordered: 'block' as 'block' | boolean,
};

export const NoticeBar = memo<NoticeBarProps>((props) => {
  const { noticeBar: componentConfig = {} } = useConfig();
  const mergedProps = mergeProps(defaultProps, componentConfig, props);
  const closeIcon = mergeProp(
    <CloseCircleOutline className={`${classPrefix}-close-icon`} />,
    componentConfig.closeIcon,
    props.closeIcon,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(true);

  const speed = mergedProps.speed;

  const delayLockRef = useRef(true);
  const animatingRef = useRef(false);

  function start() {
    if (delayLockRef.current || mergedProps.wrap) return;

    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    if (container.offsetWidth >= text.offsetWidth) {
      animatingRef.current = false;
      text.style.removeProperty('transition-duration');
      text.style.removeProperty('transform');
      return;
    }

    if (animatingRef.current) return;

    const initial = !text.style.transform;
    text.style.transitionDuration = '0s';
    if (initial) {
      text.style.transform = 'translateX(0)';
    } else {
      text.style.transform = `translateX(${container.offsetWidth}px)`;
    }

    const distance = initial
      ? text.offsetWidth
      : container.offsetWidth + text.offsetWidth;
    animatingRef.current = true;

    text.style.transitionDuration = `${Math.round(distance / speed)}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
  }

  useTimeout(() => {
    delayLockRef.current = false;
    start();
  }, mergedProps.delay);

  useResizeEffect(() => {
    start();
  }, containerRef);

  useMutationEffect(
    () => {
      start();
    },
    textRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    },
  );

  if (!visible) return null;

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${mergedProps.color}`,
        `${classPrefix}-${mergedProps.shape}`,
        {
          [`${classPrefix}-wrap`]: mergedProps.wrap,
          [`${classPrefix}-bordered`]: mergedProps.bordered === true,
          [`${classPrefix}-without-border`]: mergedProps.bordered === false,
        },
      )}
      onClick={mergedProps.onClick}
    >
      {mergedProps.icon && (
        <div className={`${classPrefix}-left`}>{mergedProps.icon}</div>
      )}
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={`${classPrefix}-content`}
      >
        <div
          onTransitionEnd={() => {
            animatingRef.current = false;
            start();
          }}
          ref={textRef}
          className={`${classPrefix}-content-inner`}
        >
          {mergedProps.content}
        </div>
      </div>
      {(mergedProps.closeable || mergedProps.extra) && (
        <div className={`${classPrefix}-right`}>
          {mergedProps.extra}
          {mergedProps.closeable && (
            <div
              className={`${classPrefix}-close`}
              onClick={() => {
                setVisible(false);
                mergedProps.onClose?.();
              }}
            >
              {closeIcon}
            </div>
          )}
        </div>
      )}
    </div>,
  );
});
