import classNames from 'classnames';
import {isEmpty,isEqual,isArray} from 'lodash';
import React, {
  FC,
  MouseEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { TabsContext } from './context';
import './style.scss';
import { Tab, TabItemProps } from './tab';
import { TabNav } from './tab-nav';
import { TabPane } from './tab-pane';

export type TabsProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  activeKey?: string;
  defaultActiveKey?: string;
  /**
   * @description 是否拉伸
   * @default true
   */
  stretch?: boolean;
  items?: TabItemProps[];
  /**
   * @description Tab 点击回调
   */
  onTabClick?: (key: string, e: MouseEvent) => void;
  /**
   * @description 激活key变化回调
   */
  onChange?: (activeKey?: string) => void;
};

const tabsCls = `triones-antm-tabs`;

enum ITEMS_ACTION {
  SET_ITEMS,
  ADD_ITEM,
}

export const Tabs: FC<TabsProps> = ({
  children,
  className,
  style,
  activeKey,
  defaultActiveKey,
  stretch = true,
  items,
  onTabClick,
  onChange,
}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey || items?.[0]?.key);
  const [internalItems, dispatch] = useReducer(
    (prevState: TabItemProps[], action: any) => {
      switch (action.type) {
        case ITEMS_ACTION.SET_ITEMS:
          return action.payload;
        case ITEMS_ACTION.ADD_ITEM:
          return [...prevState, action.payload];
      }
      return prevState;
    },
    items || [],
  );

  const handleChange = (activeKey?: any) => {
    onChange?.(activeKey);
  };

  const handleTabClick = (key: string, e: MouseEvent<any>) => {
    onTabClick?.(key, e);
    setInternalActiveKey(key);
    handleChange(key);
  };

  const handleSetItems = (items: any) => {
    dispatch({ type: ITEMS_ACTION.SET_ITEMS, payload: items });
  };

  const handleAddItem = (item: any) => {
    dispatch({ type: ITEMS_ACTION.ADD_ITEM, payload: item });
  };

  useEffect(() => {
    console.log('activeKey tabs', activeKey);
    if (activeKey === undefined) {
      return;
    }
    if (activeKey === internalActiveKey) {
      return;
    }
    setInternalActiveKey(activeKey);
  }, [activeKey]);

  useEffect(() => {
    if (items === undefined) {
      return;
    }
    if (isEqual(items, internalItems)) {
      return;
    }
    handleSetItems(items);
  }, [items]);

  useEffect(() => {
    if (internalActiveKey) {
    } else {
      setInternalActiveKey(items?.[0]?.key);
      handleChange(items?.[0]?.key);
    }
  }, [internalActiveKey, internalItems]);

  useEffect(() => {
    if (children) {
      if (isArray(children)) {
        const tabItems = children
          .filter((tab) => {
            return tab.type === Tab;
          })
          .map((tab) => {
            return {
              key: tab.key,
              label: tab.props.label,
              children: tab.props.children,
            };
          });
        handleSetItems(tabItems);
        setInternalActiveKey(
          activeKey || defaultActiveKey || tabItems?.[0]?.key,
        );
      }
    }
  }, [children]);

  return (
    <TabsContext.Provider
      value={{
        activeKey: internalActiveKey,
        setActiveKey: setInternalActiveKey,
        items: internalItems || [],
        setItems: handleSetItems,
        addItem: handleAddItem,
      }}
    >
      <div className={classNames(tabsCls, className)} style={style}>
        <div className={classNames(`${tabsCls}-nav`)}>
          <div className={classNames(`${tabsCls}-nav-wrap`)}>
            <div ref={tabNavRef} className={classNames(`${tabsCls}-nav-list`)}>
              {!isEmpty(internalItems) &&
                internalItems?.map((item: any, index: number) => {
                  return (
                    <TabNav
                      active={internalActiveKey === item.key}
                      stretch={stretch}
                      label={item.label}
                      key={`tab-nav-${index}`}
                      onClick={(e) => {
                        handleTabClick(item.key, e);
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className={classNames(`${tabsCls}-content-holder`)}>
          <div className={classNames(`${tabsCls}-content`)}>
            {!isEmpty(internalItems) &&
              internalItems?.map((item: any, index: number) => {
                return (
                  <TabPane key={`tab-panel-${item.key}`} tabKey={item.key}>
                    {item.children}
                  </TabPane>
                );
              })}
          </div>
        </div>
      </div>
    </TabsContext.Provider>
  );
};
