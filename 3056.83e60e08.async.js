"use strict";(self.webpackChunk_trionesdev_antd_taro_react=self.webpackChunk_trionesdev_antd_taro_react||[]).push([[3056],{94156:function(e,n){n.Z=`import "./style.scss"
import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode
  /**
   * @description block \u6309\u94AE\u5BBD\u9AD8\u81EA\u9002\u5E94
   */
  block?: boolean
  /**
   * @description \u989C\u8272
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * @description \u662F\u5426\u5371\u9669\u6309\u94AE\uFF0C\u4F1A\u4F7F\u7528 danger \u7684\u989C\u8272
   */
  danger?: boolean
  /**
   * @description \u662F\u5426\u7981\u7528
   */
  disabled?: boolean
  /**
   * @description \u5E7D\u7075\u6309\u94AE
   */
  ghost?: boolean
  /**
   * @description \u6309\u94AE\u7C7B\u578B
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  className?: string,
  style?: React.CSSProperties
  /**
   * @description \u56FE\u6807
   */
  icon?: React.ReactNode
  /**
   * @description \u56FE\u6807\u4F4D\u7F6E
   */
  iconPosition?: 'start' | 'end'
  /**
   * @description \u52A0\u8F7D\u4E2D
   */
  loading?: boolean
  /**
   * @description \u6309\u94AE\u6837\u5F0F
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link',
  /**
   * @description \u70B9\u51FB\u4E8B\u4EF6
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
  [key: string]: any
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
`},99544:function(e,n){n.Z=`import {Button, ButtonProps} from "./button";

export type {ButtonProps}
export default Button
`},85700:function(e,n){n.Z=`import React, {FC, useEffect, useState} from "react"
import Popup from "../Popup";
import classNames from "classnames";
import "./style.scss"
import _ from "lodash";
import CascaderView from "../CascaderView";
import {useConfig} from "../ConfigProvider";

const cascaderPickerCls = "triones-antm-cascader-picker";

export type CascaderPickerProps = {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode
  options?: any[]
  /**
   * @description \u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE string \u53D8\u4E3A { value: string, label: ReactNode } \u7684\u683C\u5F0F
   * @default false
   */
  labelInValue?: boolean
  value?: any[],
  onOk?: (value?: any[]) => void,
  onCancel?: () => void,
  onClose?: () => void,
}

export const CascaderPicker: FC<CascaderPickerProps> = React.memo(({
                                                                     className,
                                                                     style,
                                                                     open,
                                                                     afterOpenChange,
                                                                     title,
                                                                     options,
                                                                     labelInValue = false,
                                                                     value, onOk,
                                                                     onCancel,
                                                                     onClose
                                                                   }) => {
  const { locale } = useConfig();
  const [internalValue, setInternalValue] = useState(value)
  const [innerOpen, setInnerOpen] = React.useState(open || false);
  const handleClose = () => {
    setInnerOpen(false)
    onClose?.()
  }
  const handleOk = () => {
    onOk?.(internalValue)
    handleClose()
  }

  const handelCancel = () => {
    onCancel?.()
    handleClose()
  }

  useEffect(() => {
    afterOpenChange?.(innerOpen)
  }, [innerOpen]);

  useEffect(() => {
    if (open === undefined) {
      return;
    }
    if (open === innerOpen) {
      return;
    }
    setInnerOpen(open)
  }, [open]);

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (_.isEqual(value, internalValue)) {
      return;
    }
    setInternalValue(value)
  }, [value])

  return <Popup open={innerOpen} afterOpenChange={(o) => {
    setInnerOpen(o)
  }} styles={{
    body: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
    }
  }}>
    <div className={classNames(cascaderPickerCls, className)} style={style}>
      <div className={classNames(\`\${cascaderPickerCls}-header\`)}>
        <a className={classNames(\`\${cascaderPickerCls}-header-button\`)} onClick={handelCancel}>{locale.common.cancel}</a>
        {title && <div className={classNames(\`\${cascaderPickerCls}-header-title\`)}>{title}</div>}
        <a className={classNames(\`\${cascaderPickerCls}-header-button\`)} onClick={handleOk}>{locale.common.confirm}</a>
      </div>
      <div className={classNames(\`\${cascaderPickerCls}-body\`)}>
        <CascaderView options={options} labelInValue={labelInValue} value={internalValue} onChange={setInternalValue}
                      style={{height: '100%'}}/>
      </div>
    </div>
  </Popup>
})
`},15039:function(e,n){n.Z=`import React from "react";
import {FC} from "react";
import classNames from "classnames";
import { CheckOutline } from "@trionesdev/antd-taro-icons-react";

const cascaderViewCls = 'triones-antm-cascader-view'

type CascaderColumnItemProps = {
  option: any
  onClick?: (option: any) => void
  selected?: boolean
}
export const CascaderColumnItem: FC<CascaderColumnItemProps> = ({
                                                                  option,
                                                                  onClick,
                                                                  selected
                                                                }) => {
  return <div
    className={classNames(\`\${cascaderViewCls}-column-item\`, {[\`\${cascaderViewCls}-column-item-selected\`]: selected})}
    onClick={() => {
      onClick?.(option)
    }}>
    <div>{option.label}</div>
    {selected && <><CheckOutline/></>}
  </div>
}
`},61403:function(e,n){n.Z=`import classNames from 'classnames';
import React, { FC } from 'react';
import { CascaderColumnItem } from './cascader-column-item';

const cascaderViewCls = 'triones-antm-cascader-view';
type CascaderColumnProps = {
  index?: number;
  options?: any[];
  value: any;
  onSelect?: (option: any, columnIndex: number) => void;
};
export const CascaderColumn: FC<CascaderColumnProps> = ({
  index = 0,
  options,
  value,
  onSelect,
}) => {
  const handleOnSelect = (option: any) => {
    onSelect?.(option, index);
  };

  return (
    <div className={classNames(\`\${cascaderViewCls}-column\`)}>
      {options?.map((option: any, index: number) => {
        return (
          <CascaderColumnItem
            key={index}
            option={option}
            selected={value?.value === option.value}
            onClick={() => {
              handleOnSelect(option);
            }}
          />
        );
      })}
    </div>
  );
};
`},22797:function(e,n){n.Z=`import classNames from 'classnames';
import _ from 'lodash';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import Tabs from '../Tabs';
import { CascaderColumn } from './cascader-column';
import './style.scss';
import { Column, ColumnOption } from './types';

const cascaderViewCls = 'triones-antm-cascader-view';

export type CascaderViewProps = {
  className?: string;
  style?: CSSProperties;
  options?: any[];
  labelInValue?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
};

export const CascaderView: FC<CascaderViewProps> = ({
  className,
  style,
  options,
  value,
  onChange,
  asyncRequest,
}) => {
  const [activeKey, setActiveKey] = useState<any>();
  const [columns, setColumns] = useState<Column[]>([]);
  const [internalValue, setInternalValue] = useState<any>(value || []);

  const handleComputeValue = (columns: Column[]) => {
    return columns
      .filter((column) => {
        return column.value;
      })
      .map((column) => {
        return column.value?.value;
      });
  };

  const handleGenerateColumnsByValues = (value: any): Column[] => {
    if (!_.isEmpty(value) && _.isArray(value)) {
      let newColumns: Column[] = [{ options }];
      for (let i = 0; i < value.length; i++) {
        let column = newColumns[i];
        let option = _.find(column.options, (option: ColumnOption) => {
          return option.value === value[i];
        });
        if (option) {
          newColumns[i].value = option;
          if (option.children) {
            newColumns.push({ options: option.children });
          }
        }
      }
      return newColumns;
    }
    return [{ options }];
  };

  const handleSelectOption = (option: any, columnIndex: number) => {
    let newColumns = [];
    let activeIndex = \`\${columnIndex}\`;
    for (let i = 0; i < columnIndex; i++) {
      newColumns.push(columns[i]);
    }
    newColumns.push({ value: option, options: columns[columnIndex].options });
    if (!_.isEmpty(option.children)) {
      newColumns.push({ options: option.children });
      activeIndex = \`\${columnIndex + 1}\`;
    }
    setColumns(newColumns);
    setActiveKey(activeIndex);
    const newValue = handleComputeValue(newColumns);
    console.log('newValue', newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    const _columns = handleGenerateColumnsByValues(internalValue);
    setColumns(_columns);
    setActiveKey(\`\${_columns.length - 1}\`);
  }, [options]);

  return (
    <div className={classNames(cascaderViewCls, className)} style={style}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={columns.map((column, index) => {
          return {
            key: \`\${index}\`,
            label: column.value?.label || '\u8BF7\u9009\u62E9',
            children: (
              <CascaderColumn
                index={index}
                options={column.options}
                value={column.value}
                onSelect={handleSelectOption}
              />
            ),
          };
        })}
        stretch={false}
        style={{ height: '100%' }}
      />
    </div>
  );
};
`},39336:function(e,n){n.Z=`import {CascaderView,CascaderViewProps} from "./cascader-view"

export type {
  CascaderViewProps,
}
export default CascaderView
`},68609:function(e,n){n.Z=`import {Popup,PopupProps} from "./popup";

export type {PopupProps}
export default Popup;
`},63166:function(e,n){n.Z=`import React, {CSSProperties, FC, PropsWithChildren, useEffect, useMemo} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react";
import SafeArea from "../SafeArea";

const popupCls = "triones-antm-popup";

export type Position = "top" | "bottom" | "left" | "right";


export type PopupModalProps = {
  /**
   * @description \u6837\u5F0F
   * @default horizontal
   */
  styles?: {
    body?: CSSProperties;
  }
  /**
   * @description Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03
   * @default
   */
  afterClose?: () => void;
  /**
   * @description \u662F\u5426\u6253\u5F00
   * @default false
   */
  open?: boolean,
  /**
   * @description \u6253\u5F00\u4F4D\u7F6E
   * @default bottom
   */
  position?: Position
  /**
   * @description \u662F\u5426\u53EF\u4EE5\u5173\u95ED(\u663E\u793A\u5173\u95ED\u6309\u94AE)
   * @default false
   */
  closable?: boolean
  /**
   * @description \u662F\u5426\u8499\u5C42\u5173\u95ED
   * @default true
   */
  maskClosable?: boolean
  /**
   * @description \u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20
   * @default false
   */
  destroyOnClose?: boolean
  /**
   * @description \u8BBE\u7F6E Modal \u7684 z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * @description \u6253\u5F00\u548C\u5173\u95ED Modal \u65F6\u52A8\u753B\u7ED3\u675F\u540E\u7684\u56DE\u8C03
   * @default
   */
  afterOpenChange?: (open: boolean) => void;
  onDestroy?: () => void;

}

export const PopupModal: FC<PropsWithChildren<PopupModalProps>> = ({
                                                                     children,
                                                                     styles,
                                                                     afterClose,
                                                                     open,
                                                                     position = 'bottom',
                                                                     closable = false,
                                                                     maskClosable = true,
                                                                     destroyOnClose = false,
                                                                     zIndex = 1000,
                                                                     afterOpenChange,
                                                                     onDestroy
                                                                   }) => {
  const safeAreaPosition = useMemo(() => {
    if (position === 'bottom') {
      return 'bottom'
    } else if (position === 'top') {
      return 'top'
    }
    return undefined
  }, [position])
  const [internalOpen, setInternalOpen] = React.useState<boolean>(open || false);
  const handleClose = () => {
    setInternalOpen(false);
    afterClose?.()
  }

  useEffect(() => {
    afterOpenChange?.(internalOpen!);
    if (!internalOpen) {
      if (destroyOnClose) {
        onDestroy?.()
      }
    }
  }, [internalOpen]);

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open === internalOpen) {
      return;
    }
    setInternalOpen(open);
  }, [open]);

  return (<div className={classNames(popupCls)} style={{zIndex, display: internalOpen ? 'block' : 'none'}}>
    <div className={classNames(\`\${popupCls}-mask\`)} onClick={() => {
      if (maskClosable) {
        handleClose();
      }
    }}></div>
    <div className={classNames(\`\${popupCls}-body\`, \`\${popupCls}-\${position}\`)} style={styles?.body}>
      {closable && <>
        <CloseOutline className={classNames(\`\${popupCls}-close\`)} onClick={() => {
          handleClose()
        }}/>
      </>}
      <SafeArea position={safeAreaPosition}>
        {children}
      </SafeArea>
    </div>
  </div>)

}
`},56639:function(e,n){n.Z=`import React, {FC, PropsWithChildren, useEffect} from "react";
import {createPortal} from "react-dom";
import {PopupModal, PopupModalProps} from "./popup-modal";


export type PopupProps = Omit<PopupModalProps, 'onDestroy'> & {
  /**
   * @description \u83B7\u53D6\u5BB9\u5668
   * @default null
   */
  getContainer?: () => HTMLElement,
}
export const Popup: FC<PropsWithChildren<PopupProps>> = ({
                                                           children,
                                                           getContainer,
                                                           open = false,
                                                           ...rest
                                                         }) => {
  const [renderEnable, setRenderEnable] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const rootContainer = getContainer?.() || containerRef.current!;

  const Portal = () => {
    if (!mountRef.current) {
      mountRef.current = document.createElement("div");
      rootContainer.appendChild(mountRef.current);
    }

    const destroy = () => {
      if (rootContainer && mountRef.current) {
        rootContainer.removeChild(mountRef.current);
      }
      mountRef.current = null;
      setRenderEnable(false);
    }

    return <>{createPortal(<PopupModal {...rest} onDestroy={destroy}
                                       open={open}>{children}</PopupModal>, mountRef.current!)}</>

  }

  useEffect(() => {
    if (open && !renderEnable) {
      setRenderEnable(true);
    }
  }, [open]);


  return <>
    {!getContainer?.() && <div ref={containerRef}></div>}
    {renderEnable && <Portal/>}</>;
}
`},75848:function(e,n){n.Z=`import { SafeArea } from './safe-area';
import './style.scss';

export type { SafeAreaProps } from './safe-area';

export default SafeArea;
`},46451:function(e,n){n.Z=`import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  /**
   * @description \u5B89\u5168\u533A\u4F4D\u7F6E
   * @default top
   */
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = ({ position = 'top', ...props }) => {
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, \`\${classPrefix}-position-\${position}\`)}
    >
      {props.children}
    </div>,
  );
};
`},55379:function(e,n){n.Z=`import {createContext} from "react";
import {TabItemProps} from "./tab";

type TabsContextType = {
  activeKey?: string
  setActiveKey?: (activeKey?: string) => void
  items: TabItemProps[]
  setItems?: (tabItems: TabItemProps[]) => void
  addItem?: (tabItem: TabItemProps) => void
}
export const TabsContext = createContext<TabsContextType>({
  items: []
})
`},12043:function(e,n){n.Z=`import {Tabs as InternalTabs,TabsProps} from "./tabs"
import {Tab} from "./tab";

type InternalTabsType = typeof InternalTabs
type CompoundedComponent = InternalTabsType & {
  Tab: typeof Tab
}


export type {
  TabsProps
}
const Tabs = InternalTabs as CompoundedComponent
Tabs.Tab = Tab
export default Tabs;
`},52057:function(e,n){n.Z=`import React, {FC, MouseEvent, useEffect, useRef} from "react";
import classNames from "classnames";

const tabsCls = \`triones-antm-tabs\`

type TabNavProps = {
  label?: React.ReactNode;
  active?: boolean;
  stretch?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
export const TabNav: FC<TabNavProps> = ({label, active, stretch, onClick}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavInnerRef = useRef<HTMLDivElement>(null);

  return <div ref={tabNavRef} className={classNames(\`\${tabsCls}-tab\`, {
    [\`\${tabsCls}-tab-active\`]: active,
    [\`\${tabsCls}-tab-stretch\`]: stretch
  })}
              onClick={(e) => {
                onClick?.(e)
              }}
  >
    <div ref={tabNavInnerRef} className={classNames(\`\${tabsCls}-tab-inner\`)}>{label}</div>
  </div>
}
`},19529:function(e,n){n.Z=`import classNames from "classnames";
import React, {FC, useContext} from "react";
import {TabsContext} from "./context";

const tabsCls = \`triones-antm-tabs\`

type  TabPaneProps = {
  children: React.ReactNode,
  tabKey: string
}
export const TabPane: FC<TabPaneProps> = ({children, tabKey}) => {
  const {activeKey} = useContext(TabsContext)
  return <div className={classNames(\`\${tabsCls}-tab-pane\`, {[\`\${tabsCls}-tab-pane-active\`]: activeKey == tabKey})}>
    {children}
  </div>
}
`},33735:function(e,n){n.Z=`import React, {FC} from "react"

export type TabItemProps = {
  children?: React.ReactNode
  key: string
  label?: React.ReactNode
}
export const Tab: FC<TabItemProps> = ({children, key, label}) => {
  return null
}
`},57699:function(e,n){n.Z=`import classNames from 'classnames';
import _ from 'lodash';
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
   * @description \u662F\u5426\u62C9\u4F38
   * @default true
   */
  stretch?: boolean;
  items?: TabItemProps[];
  /**
   * @description Tab \u70B9\u51FB\u56DE\u8C03
   */
  onTabClick?: (key: string, e: MouseEvent) => void;
  /**
   * @description \u6FC0\u6D3Bkey\u53D8\u5316\u56DE\u8C03
   */
  onChange?: (activeKey?: string) => void;
};

const tabsCls = \`triones-antm-tabs\`;

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
    if (_.isEqual(items, internalItems)) {
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
      if (_.isArray(children)) {
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
        <div className={classNames(\`\${tabsCls}-nav\`)}>
          <div className={classNames(\`\${tabsCls}-nav-wrap\`)}>
            <div ref={tabNavRef} className={classNames(\`\${tabsCls}-nav-list\`)}>
              {!_.isEmpty(internalItems) &&
                internalItems?.map((item: any, index: number) => {
                  return (
                    <TabNav
                      active={internalActiveKey === item.key}
                      stretch={stretch}
                      label={item.label}
                      key={\`tab-nav-\${index}\`}
                      onClick={(e) => {
                        handleTabClick(item.key, e);
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className={classNames(\`\${tabsCls}-content-holder\`)}>
          <div className={classNames(\`\${tabsCls}-content\`)}>
            {!_.isEmpty(internalItems) &&
              internalItems?.map((item: any, index: number) => {
                return (
                  <TabPane key={\`tab-panel-\${item.key}\`} tabKey={item.key}>
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
`}}]);
