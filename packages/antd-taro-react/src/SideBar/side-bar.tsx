import classNames from 'classnames';
import React, {
  FC,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ScrollView from '../ScrollView';
import Taro from '@tarojs/taro';
import { useTaro } from '../hooks/useTaro';
import { BoundingClientRectType } from '../types';
import { SideBarContext } from './SideBarContext';
import './style.scss';

const sideBarCls = 'triones-antm-sidebar';

type sideBarMode = 'switch' | 'scroll';

type ScrollDetail = {
  /**
   * 是否是人为滚动
   */
  manual?: boolean;
  top?: number;
};

type SideBarTabProps = {
  tabKey: string;
  title?: string;
};
const SideBarTab: FC<SideBarTabProps> = ({
  tabKey,
  title,
}) => {
  const { activeKey, setActiveKey } = useContext(SideBarContext);
  const tabRef = useRef<any>();

  return (
    <div
      ref={tabRef}
      className={classNames(`${sideBarCls}-tab`, {
        [`${sideBarCls}-tab-active`]: activeKey === tabKey,
      })}
      onClick={() => {
        setActiveKey?.(tabKey);
      }}
    >
      {title}
    </div>
  );
};

type SideBarContentProps = {
  tabKey: string;
  content?: React.ReactNode;
};

const SideBarContent: FC<SideBarContentProps> = memo(({ tabKey, content }) => {
  const { isTaroEnv, isTaroWeApp } = useTaro();
  const [rendered, setRendered] = useState(false);
  const contentItemRef = useRef<any>();
  const frameRef = useRef<any>();
  const {
    activeKey,
    mode,
    activeChangeCallback,
    onMoveToTab,
    scrollDetail,
    asyncRender,
    contentRef,
    contentWheelRef,
    manual,
  } = useContext(SideBarContext);

  const computeContentOffsetTop = async (): Promise<number> => {
    if (isTaroWeApp) {
      console.log(Taro);
      // const contentWheelOffset = await contentWheelEl.offset();
      const contentWheelOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentWheelRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );
      // const itemOffset = await taroExtend.$(contentItemRef.current).offset();
      const itemOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentItemRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );
      return itemOffset!.top - contentWheelOffset!.top;
    } else {
      return contentItemRef.current.offsetTop;
    }
  };

  /**
   * 计算当前页顶部，距离可滚动区域顶部的距离
   */
  const computeReactiveOffsetTop = async () => {
    if (isTaroWeApp) {
      // const contentOffset = await contentEl.offset();
      // const itemOffset = await taroExtend.$(contentItemRef.current).offset();
      const contentOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );
      const itemOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentItemRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );
      return itemOffset.top - contentOffset?.top;
    } else {
      return contentItemRef.current.offsetTop - Math.abs(scrollDetail!.top!);
    }
  };

  /**
   * 计算当前页底部，距离可滚动区域顶部的距离
   */
  const computeReactiveOffsetBottom = async () => {
    if (isTaroWeApp) {
      // const contentOffset = await contentEl.offset();
      // const itemOffset = await taroExtend.$(contentItemRef.current).offset();

      const contentOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );
      const itemOffset: BoundingClientRectType = await new Promise(
        (resolve) => {
          Taro.createSelectorQuery()
            .select(`#${contentItemRef.current?.uid}`)
            .boundingClientRect()
            .exec((res) => {
              console.log(res);
              resolve(res?.[0]);
            });
        },
      );

      return itemOffset.top + itemOffset.height - contentOffset?.top;

    } else {
      return (
        contentItemRef.current.offsetTop +
        contentItemRef.current.offsetHeight -
        Math.abs(scrollDetail!.top!)
      );
    }
  };

  useEffect(() => {
    if (activeKey === tabKey) {
      setRendered(true);
      if (mode === 'scroll' && !manual) {
        Promise.all([]).then(async () => {
          if (!isTaroEnv || (isTaroEnv && contentWheelRef.current)) {
            activeChangeCallback?.(await computeContentOffsetTop());
          }
        });
      }
    }
  }, [activeKey]);

  /**
   * 监听滚动变化，只有在人为操作的时候才监听滚动的位置是否需要切换tab，如果是切换tab 引发的滚动则不执行
   */
  useEffect(() => {
    // return;
    if (mode === 'scroll' && manual) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(async () => {
        if (activeKey !== tabKey) {
          const reactiveOffsetTop = await computeReactiveOffsetTop(); //当前顶部相对于父容器顶部的偏移量
          const reactiveOffsetBottom = await computeReactiveOffsetBottom();
          if (
            (-50 <= reactiveOffsetTop && reactiveOffsetTop <= 0) ||
            (0 <= reactiveOffsetBottom && reactiveOffsetBottom <= 50)
          ) {
            onMoveToTab?.(tabKey);
          }
        }
      });
    }
  }, [scrollDetail]);

  return (
    <div
      ref={contentItemRef}
      id={contentItemRef.current?.uid}
      className={classNames(`${sideBarCls}-content-item`, {
        [`${sideBarCls}-content-item-active`]: activeKey === tabKey,
      })}
    >
      {asyncRender ? rendered && content : content}
    </div>
  );
});

type SideBarContentsProps = {
  items: any[];
};

const SideBarContents: FC<SideBarContentsProps> = memo(({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <SideBarContent
          key={`${item.tabKey}-content`}
          tabKey={item.tabKey}
          content={item.content}
          // activeChangeCallback={handleSelectScroll}
        />
      ))}
    </>
  );
});

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
  const { isTaroEnv } = useTaro();
  const contentRef = useRef<any>();
  const contentWheelRef = useRef<any>();
  const frameRef = useRef<any>();
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);


  const [manual, setManual] = useState(false);

  const [scrollDetail, setScrollDetail] = useState<ScrollDetail>({ top: 0 });

  const scrollTop = useMemo(() => {
    if (isTaroEnv) {
      return scrollDetail.top;
    } else {
      if (!scrollDetail.manual) {
        return scrollDetail.top;
      }
      return 0;
    }
  }, [scrollDetail?.top]);

  const handleSelectScroll = (scrollTop: number) => {
    if (mode === 'scroll' && !manual) {
      setScrollDetail({ manual: manual, top: scrollTop });
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

  useEffect(() => {
    console.log('Taro', Taro);

    if (mode === 'scroll') {
      // setContentEl(taroExtend.$(contentRef.current));
      // setContentWheelEl(taroExtend.$(contentWheelRef.current));
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        activeKey: internalActiveKey,
        setActiveKey: setInternalActiveKey,
        mode: mode,
        scrollDetail: scrollDetail,
        setScrollDetail: setScrollDetail,
        contentWheelRef: contentWheelRef,
        contentRef: contentRef,
        activeChangeCallback: handleSelectScroll,
        asyncRender: asyncRender,
        onMoveToTab: handleActiveChange,
        manual: manual,
        setManul: setManual,
      }}
    >
      <div
        className={classNames(`${sideBarCls}`, `${sideBarCls}-${mode}-mode`)}
      >
        <div
          className={classNames(`${sideBarCls}-tabs`)}
          style={{ width: tabWidth }}
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
          onTouchStart={(e) => {
            setManual(true);
          }}
          onTouchEnd={(e) => {
            setManual(false);
          }}
          onMouseEnter={(e) => {
            setManual(true);
          }}
          onMouseLeave={(e) => {
            setManual(false);
          }}
          onMouseOut={(e) => {
            setManual(false);
          }}
          onMouseOver={(e) => {
            setManual(true);
          }}
          onMouseMove={(e) => {
            setManual(true);
          }}
        >
          {mode === 'scroll' && (
            <ScrollView
              style={{ height: '100%' }}
              scrollY={true}
              scrollTop={scrollTop}
              onScroll={(e) => {
                //如果是脚本触发的滚动，则不处理,避免在滚动过程中，触发滚动事件，导致滚动停止
                if (manual) {
                  setScrollDetail({
                    manual: manual,
                    top: e.detail.scrollTop!,
                  });
                }
              }}
            >
              <div ref={contentWheelRef}>
                <SideBarContents items={internalItems} />
              </div>
            </ScrollView>
          )}
          {mode === 'switch' && (
            <SideBarContents items={internalItems} />
          )}
        </div>
      </div>
    </SideBarContext.Provider>
  );
};
