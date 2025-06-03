import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { checkTaroEnv } from '../utils/taro-utils';
import './style.scss';
import Taro from '@tarojs/taro';

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
  scrollTop?: number;
  mode?: sideBarMode;
  activeChangeCallback?: (offsetTop: number) => void;
  onScrollTop?: (activeKey: string) => void;
};

const SideBarContent: FC<SideBarContentProps> = ({
  tabKey,
  activeKey,
  content,
  scrollTop = 0,
  mode,
  activeChangeCallback,
  onScrollTop,
}) => {
  const contentRef = useRef<any>();

  useEffect(() => {
    if (activeKey === tabKey) {
      activeChangeCallback?.(contentRef.current.offsetTop);
    }
  }, [activeKey]);

  useEffect(() => {
    console.log('scrollTop', scrollTop);
    if (activeKey !== tabKey) {
      if (
        scrollTop >= contentRef.current.offsetTop &&
        scrollTop <
          contentRef.current.offsetTop + contentRef.current.offsetHeight
      ) {
        onScrollTop?.(tabKey);
      }
    }
  }, [scrollTop]);

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
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);

  const [scrollTop, setScrollTop] = useState<number>(0);

  // 内容栏滚动到指定位置
  const handleSelectScroll = (offsetTop: number) => {

    if (mode==='scroll'){
      if (isTaroEnv){
        Taro.createSelectorQuery().select(`#${contentRef.current?.id}`)
      }else {
        contentRef.current.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleActiveChange = (tabKey: string) => {
    setInternalActiveKey(tabKey);
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
      <div
        ref={contentRef}
        id={contentRef.current?.id}
        className={classNames(`${sideBarCls}-content`)}
        onWheel={(e) => {
          console.log(e);
          if (mode === 'scroll') {
            setScrollTop(contentRef.current.scrollTop);
          }
        }}
      >
        {internalItems.map((item, index) => (
          <SideBarContent
            key={`${item.tabKey}-content`}
            tabKey={item.tabKey}
            activeKey={internalActiveKey}
            content={item.content}
            scrollTop={scrollTop}
            activeChangeCallback={handleSelectScroll}
            onScrollTop={handleActiveChange}
          />
        ))}
      </div>
    </div>
  );
};
