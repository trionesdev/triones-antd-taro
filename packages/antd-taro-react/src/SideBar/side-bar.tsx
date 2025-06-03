import classNames from 'classnames';
import React, {FC, useEffect, useRef, useState} from 'react';
import {checkTaroEnv} from '../utils/taro-utils';
import './style.scss';

const sideBarCls = 'triones-antm-sidebar';

type sideBarMode = 'switch' | 'scroll';

type SideBarTabProps = {
  tabKey: string;
  activeKey?: string;
  title?: string;
  onActiveChange?: (key: string) => void;
};
const SideBarTab: FC<SideBarTabProps> = ({
                                           tabKey,
                                           activeKey,
                                           title,
                                           onActiveChange,
                                         }) => {
  const tabRef = useRef<any>();

  return (
    <div
      ref={tabRef}
      className={classNames(`${sideBarCls}-tab`, {
        [`${sideBarCls}-tab-active`]: activeKey === tabKey,
      })}
      onClick={() => onActiveChange?.(tabKey)}
    >
      {title}
    </div>
  );
};

type SideBarContentProps = {
  tabKey: string;
  activeKey?: string;
  content?: React.ReactNode;
  screenHeight?: number;
  scrollTop?: number;
  touching?: boolean;
  translateY?: number;
  mode?: sideBarMode;
  activeChangeCallback?: (offsetTop: number) => void;
  onScrollTop?: (activeKey: string) => void;
  onMoveToTab?: (activeKey: string) => void;
};

const SideBarContent: FC<SideBarContentProps> = ({
                                                   tabKey,
                                                   activeKey,
                                                   content,
                                                   scrollTop = 0,
                                                   touching = false,
                                                   screenHeight = 0,
                                                   translateY = 0,
                                                   mode,
                                                   activeChangeCallback,
                                                   onScrollTop,
                                                   onMoveToTab
                                                 }) => {
  const contentRef = useRef<any>();

  useEffect(() => {
    if (activeKey === tabKey) {
      activeChangeCallback?.(contentRef.current.offsetTop);
    }
  }, [activeKey]);

  useEffect(() => {
    // console.log('scrollTop', scrollTop, screenHeight);
    const reactiveOffsetTop1 = contentRef.current.offsetTop - Math.abs(translateY); //当前顶部相对于父容器顶部的偏移量
    const reactiveOffsetBottom1 = contentRef.current.offsetTop + contentRef.current.offsetHeight - Math.abs(translateY);
    console.log(tabKey, translateY, reactiveOffsetTop1, reactiveOffsetBottom1);
    if (touching) {
      if (activeKey !== tabKey) {
        const reactiveOffsetTop = contentRef.current.offsetTop - Math.abs(translateY); //当前顶部相对于父容器顶部的偏移量
        const reactiveOffsetBottom = contentRef.current.offsetTop + contentRef.current.offsetHeight - Math.abs(translateY);
        if (
          (-10 <= reactiveOffsetTop && reactiveOffsetTop <= 0) ||
          (0 <= reactiveOffsetBottom && reactiveOffsetBottom <= 10)
        ) {
          console.log("--------", scrollTop, contentRef.current.offsetTop, contentRef.current.offsetHeight);
          onMoveToTab?.(tabKey);
        }
      }
    }
  }, [translateY]);

  return (
    <div
      ref={contentRef}
      className={classNames(`${sideBarCls}-content-item`, {
        [`${sideBarCls}-content-item-active`]: activeKey === tabKey,
      })}
    >
      {content}
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
  /**
   * 交互模式 `switch` 页面切换，`scroll` 滚动展示
   */
  mode?: sideBarMode;
};
export const SideBar: FC<SideBarProps> = ({
                                            activeKey,
                                            defaultActiveKey,
                                            items = [],
                                            mode = 'switch',
                                          }) => {
  const isTaroEnv = checkTaroEnv();
  const contentRef = useRef<any>();
  const contentWheelRef = useRef<any>();
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);
  const max = 0;
  const [touching, setTouching] = React.useState(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateY, setTranslateY] = useState(0)

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>();

  const computeTranslateYMin = () => {
    return 0 - (contentWheelRef.current.offsetHeight - contentRef.current.offsetHeight);
  }

  // 内容栏滚动到指定位置
  const handleSelectScroll = (offsetTop: number) => {
    if (touching) {
      return
    }
    if (mode === 'scroll') {
      setTranslateY(0 - offsetTop);
    }
  };

  const handleActiveChange = (tabKey: string) => {
    setInternalActiveKey(tabKey);
    console.log(tabKey);
  };

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
    <div
      className={classNames(`${sideBarCls}`, `${sideBarCls}-${mode}-mode`, {})}
    >
      <div className={classNames(`${sideBarCls}-tabs`)}>
        {internalItems.map((item, index) => (
          <SideBarTab
            key={`${item.tabKey}-tab`}
            {...item}
            tabKey={item.tabKey}
            activeKey={internalActiveKey}
            onActiveChange={handleActiveChange}
          />
        ))}
      </div>
      <div ref={contentRef} id={contentRef.current?.uid} className={classNames(`${sideBarCls}-content`)}>
        <div ref={contentWheelRef}
             className={classNames(`${sideBarCls}-content-wheel`)}
             style={{transform: `translate3d(0, ${translateY}px, 0)`}}
             onTouchStart={(event) => {
               setTouching(true);
               const startPoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
               setTouchPoint(startPoint);
             }}
             onTouchMove={(event) => {
               console.log(event);
               if (mode === 'scroll') {
                 if (touching) {
                   const movePoint = {clientX: event.touches[0].clientX, clientY: event.touches[0].clientY}
                   console.log(touchPoint);
                   console.log(movePoint);
                   console.log((touchPoint.clientY - movePoint.clientY));
                   // setScrollTop();
                   // contentRef.current.scrollTo({top: scrollTop + (touchPoint.clientY-movePoint.clientY )})
                   if (translateY > max || translateY < computeTranslateYMin()) {
                     return;
                   }
                   setTranslateY(translateY + (movePoint.clientY - touchPoint.clientY));
                   setTouchPoint(movePoint);
                 }
               }
             }}
             onTouchEnd={() => {
               setTouching(false);
             }}
        >
          {internalItems.map((item, index) => (
            <SideBarContent
              key={`${item.tabKey}-content`}
              tabKey={item.tabKey}
              activeKey={internalActiveKey}
              content={item.content}
              scrollTop={scrollTop}
              touching={touching}
              translateY={translateY}
              screenHeight={screenHeight}
              activeChangeCallback={handleSelectScroll}
              onScrollTop={handleActiveChange}
              onMoveToTab={handleActiveChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
