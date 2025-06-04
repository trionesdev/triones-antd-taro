import classNames from 'classnames';
import _, {min} from 'lodash';
import React, {FC, useEffect, useRef, useState} from 'react';
import {checkTaroEnv} from '../utils/taro-utils';
import './style.scss';
import {ScrollView} from "@tarojs/components";

const taroExtend = require('@tarojs/extend');

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
  touching?: boolean;
  translateY?: number;
  mode?: sideBarMode;
  activeChangeCallback?: (offsetTop: number) => void;
  onMoveToTab?: (activeKey: string) => void;
  asyncRender?: boolean;
  contentEl?: any
  contentWheelEl?: any
};

const SideBarContent: FC<SideBarContentProps> = ({
                                                   tabKey,
                                                   activeKey,
                                                   content,
                                                   touching = false,
                                                   translateY = 0,
                                                   mode,
                                                   activeChangeCallback,
                                                   onMoveToTab,
                                                   asyncRender = false,
                                                   contentEl,
                                                   contentWheelEl
                                                 }) => {
  const isTaroEnv = true;
  const [rendered, setRendered] = useState(false);
  const contentRef = useRef<any>();
  const frameRef = useRef<any>();

  const computeContentOffsetTop = async (): Promise<number> => {
    if (isTaroEnv) {
      const contentWheelOffset = await contentWheelEl.offset();
      const itemOffset = await taroExtend.$(contentRef.current).offset();
      return itemOffset.top - contentWheelOffset!.top;
    } else {
      return contentRef.current.offsetTop;
    }
  };

  const computeReactiveOffsetTop = async () => {
    if (isTaroEnv) {
      const contentOffset = await contentEl.offset();
      const itemOffset = await taroExtend.$(contentRef.current).offset();
      return itemOffset.top - contentOffset?.top;
    } else {
      return contentRef.current.offsetTop - Math.abs(translateY);
    }
  };

  const computeReactiveOffsetBottom = async () => {
    if (isTaroEnv) {
      const contentOffset = await contentEl.offset();
      const itemOffset = await taroExtend.$(contentRef.current).offset();
      return ((itemOffset.top - contentOffset?.top) + itemOffset.height);
    } else {
      return (
        contentRef.current.offsetTop +
        contentRef.current.offsetHeight -
        Math.abs(translateY)
      );
    }
  };

  useEffect(() => {
    if (activeKey === tabKey) {
      setRendered(true);
      if (mode === 'scroll') {
        Promise.all([]).then(async () => {
          if (!isTaroEnv || (isTaroEnv && contentWheelEl)) {
            activeChangeCallback?.(await computeContentOffsetTop());
          }
        });
      }
    }
  }, [activeKey]);

  useEffect(() => {
    if (mode === 'scroll') {
      if (touching) {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        frameRef.current = requestAnimationFrame(async () => {
          // const contentWheelOffset = await contentWheelEl.offset();
          // const itemOffset = await taroExtend.$(contentRef.current).offset();
          // console.log(tabKey, 'translateY', translateY, 'contentWheelOffset', contentWheelOffset, 'itemOffset', itemOffset);
          // console.log(tabKey, await computeReactiveOffsetTop(), await computeReactiveOffsetBottom())

          if (activeKey !== tabKey) {
            const reactiveOffsetTop = await computeReactiveOffsetTop(); //当前顶部相对于父容器顶部的偏移量
            const reactiveOffsetBottom = await computeReactiveOffsetBottom();
            // console.log(
            //   tabKey,
            //   'reactiveOffsetTop',
            //   reactiveOffsetTop,
            //   'reactiveOffsetBottom',
            //   reactiveOffsetBottom,
            // );
            if (
              (-50 <= reactiveOffsetTop && reactiveOffsetTop <= 0) ||
              (0 <= reactiveOffsetBottom && reactiveOffsetBottom <= 50)
            ) {
              onMoveToTab?.(tabKey);
            }
          }
        });

      }
    }
  }, [translateY]);

  return (
    <div
      ref={contentRef}
      id={contentRef.current?.uid}
      className={classNames(`${sideBarCls}-content-item`, {
        [`${sideBarCls}-content-item-active`]: activeKey === tabKey,
      })}
    >
      {asyncRender ? rendered && content : content}
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
  /**
   * @description 是否异步渲染内容
   * @default false
   */
  asyncRender?: boolean;
  tabWidth?: number;
};
export const SideBar: FC<SideBarProps> = ({
                                            activeKey,
                                            defaultActiveKey,
                                            items = [],
                                            mode = 'switch',
                                            asyncRender = false,
                                            tabWidth = 100,
                                          }) => {
  const isTaroEnv = true;
  const contentRef = useRef<any>();
  const contentWheelRef = useRef<any>();
  const frameRef = useRef<any>();
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);
  const max = 0;
  const minRef = useRef(0);
  const [touching, setTouching] = React.useState(false);
  const [touchPoint, setTouchPoint] = React.useState<any>();
  const [translateY, setTranslateY] = useState(0);
  const [contentEl, setContentEl] = useState<any>();
  const [contentWheelEl, setContentWheelEl] = useState<any>();

  const computeTranslateYMin = async () => {
    if (isTaroEnv) {
      return (
        0 -
        ((await taroExtend.$(contentWheelRef.current).height()) -
          (await taroExtend.$(contentRef.current).height()))
      );
    } else {
      return (
        0 -
        (contentWheelRef.current.offsetHeight - contentRef.current.offsetHeight)
      );
    }
  };

  // 内容栏滚动到指定位置
  const handleSelectScroll = (absTranslateY: number) => {
    if (touching) {
      return;
    }
    if (mode === 'scroll') {
      console.log('absTranslateY', absTranslateY, _.isNumber(absTranslateY))
      if (_.isNumber(absTranslateY)) {
        const newTranslateY = 0 - absTranslateY;
        console.log("sss", newTranslateY, max, minRef.current)
        if (newTranslateY < minRef.current) {
          setTranslateY(minRef.current);
        } else if (newTranslateY > max) {
          setTranslateY(max)
        } else {
          setTranslateY(newTranslateY);
        }
      }
    }
  };

  const handleActiveChange = (tabKey: string) => {
    setInternalActiveKey(tabKey);
  };

  // const handleSyncContentOffset = async () => {
  //   if (isTaroEnv) {
  //     setContentOffset(await .offset());
  //   }
  // };

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

  useEffect(() => {
    console.log(taroExtend.$(contentWheelRef.current))

    setContentEl(taroExtend.$(contentRef.current))
    setContentWheelEl(taroExtend.$(contentWheelRef.current))

    Promise.all([]).then(async () => {
      minRef.current = await computeTranslateYMin();
    })

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className={classNames(`${sideBarCls}`, `${sideBarCls}-${mode}-mode`, {})}
    >
      <div
        className={classNames(`${sideBarCls}-tabs`)}
        style={{width: tabWidth}}
      >
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
      <div
        ref={contentRef}
        id={contentRef.current?.uid}
        className={classNames(`${sideBarCls}-content`)}
      >
        <div
          ref={contentWheelRef}
          className={classNames(`${sideBarCls}-content-wheel`)}
          style={{transform: `translate3d(0, ${translateY}px, 0)`}}
          onTouchStart={async (event) => {
            console.log('onTouchStart', event);
            if (mode === 'scroll') {
              minRef.current = await computeTranslateYMin();
              // await handleSyncContentOffset();
              setTouching(true);
              const startPoint = {
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
              };
              setTouchPoint(startPoint);
            }
          }}
          onTouchMove={(event) => {
            console.log('onTouchMove', event);
            if (mode === 'scroll') {
              if (touching) {
                if (frameRef.current) {
                  cancelAnimationFrame(frameRef.current);
                }
                frameRef.current = requestAnimationFrame(() => {
                  const movePoint = {
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY,
                  };
                  console.log('move', translateY, max, minRef.current);
                  if (translateY > max || translateY < minRef.current) {
                    return;
                  }
                  setTranslateY(
                    translateY + (movePoint.clientY - touchPoint.clientY),
                  );
                  setTouchPoint(movePoint);
                });
              }
            }
          }}
          onTouchEnd={async (event) => {
            console.log('onTouchEnd', event);
            if (mode === 'scroll') {
              setTouching(false);
              const min = await computeTranslateYMin();
              if (translateY > max) {
                setTranslateY(max);
              } else if (translateY < min) {
                setTranslateY(min);
              }
            }
          }}
        >
          {internalItems.map((item, index) => (
            <SideBarContent
              key={`${item.tabKey}-content`}
              tabKey={item.tabKey}
              activeKey={internalActiveKey}
              content={item.content}
              mode={mode}
              touching={touching}
              translateY={translateY}
              activeChangeCallback={handleSelectScroll}
              onMoveToTab={handleActiveChange}
              asyncRender={asyncRender}
              contentEl={contentEl}
              contentWheelEl={contentWheelEl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
