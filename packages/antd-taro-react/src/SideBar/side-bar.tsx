import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import './style.scss';

const sideBarCls = 'triones-antm-sidebar';

type SideBarTabProps = {
  tabKey: string;
  activeKey?: string;
  title?: string;
  onSelect?: (key: string) => void;
};
const SideBarTab: FC<SideBarTabProps> = ({
  tabKey,
  activeKey,
  title,
  onSelect,
}) => {
  return (
    <div
      className={classNames(`${sideBarCls}-tab`, {
        [`${sideBarCls}-tab-active`]: activeKey === tabKey,
      })}
      onClick={() => onSelect?.(tabKey)}
    >
      {title}
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
};
export const SideBar: FC<SideBarProps> = ({
  activeKey,
  defaultActiveKey,
  items = [],
}) => {
  const [internalItems, setInternalItems] = useState<any[]>([]);
  const [internalActiveKey, setInternalActiveKey] = useState<
    string | undefined
  >(activeKey || defaultActiveKey);

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
    <div className={classNames(`${sideBarCls}`)}>
      <div className={classNames(`${sideBarCls}-tabs`)}>
        {internalItems.map((item, index) => (
          <SideBarTab
            key={`${item.tabKey}-tab`}
            {...item}
            tabKey={item.tabKey}
            activeKey={internalActiveKey}
            onSelect={(key) => {
              setInternalActiveKey(key);
            }}
          />
        ))}
      </div>
      <div className={classNames(`${sideBarCls}-content`)}>
        {internalItems.map((item, index) => (
          <div
            key={`${item.tabKey}-content`}
            className={classNames(`${sideBarCls}-content-item`, {
              [`${sideBarCls}-content-item-active`]:
                internalActiveKey === item.tabKey,
            })}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};
