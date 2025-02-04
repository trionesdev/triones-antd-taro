import React, {FC, MouseEvent, useEffect, useReducer, useRef, useState} from "react"
import {Tab, TabItemProps} from "./tab";
import classNames from "classnames";
import {TabsContext} from "./context";
import "./style.scss"
import {TabNav} from "./tab-nav";
import {TabPane} from "./tab-pane";
import _ from "lodash";

export type TabsProps = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  activeKey?: string
  defaultActiveKey?: string
  stretch?: boolean
  items?: TabItemProps[]
  onTabClick?: (key: string, e: MouseEvent) => void
  onChange?: (activeKey?: string) => void

}

const tabsCls = `triones-antm-tabs`

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
                                      onChange
                                    }) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState<{ left: number, width: number } | undefined>()
  const [internalActiveKey, setInternalActiveKey] = useState<string | undefined>(activeKey || defaultActiveKey || items?.[0]?.key)
  const [internalItems, dispatch] = useReducer((prevState: TabItemProps[], action: any) => {
    switch (action.type) {
      case ITEMS_ACTION.SET_ITEMS:
        return action.payload;
      case ITEMS_ACTION.ADD_ITEM:
        return [...prevState, action.payload];
    }
    return prevState
  }, (items || []))

  const handleTabClick = (key: string, e: MouseEvent<any>) => {
    onTabClick?.(key, e)
    setInternalActiveKey(key)
  }

  const handleSetItems = (items: any) => {
    dispatch({type: ITEMS_ACTION.SET_ITEMS, payload: items})
  }

  const handleAddItem = (item: any) => {
    dispatch({type: ITEMS_ACTION.ADD_ITEM, payload: item})
  }

  const handleChange = (activeKey?:any) => {
    onChange?.(activeKey)
  }

  useEffect(() => {
    if (activeKey == undefined) {
      return
    }
    if (activeKey == internalActiveKey) {
      return;
    }
    setInternalActiveKey(activeKey)
  }, [activeKey])


  useEffect(() => {
    if (items == undefined) {
      return;
    }
    if (_.isEqual(items, internalItems)) {
      return;
    }
    handleSetItems(items)
  }, [items]);

  useEffect(() => {
    if (internalActiveKey){
      if (!items?.map(item => item.key).includes(internalActiveKey)){
        setInternalActiveKey(items?.[0]?.key)
        handleChange(items?.[0]?.key)
      }
    }else {
      setInternalActiveKey(items?.[0]?.key)
      handleChange(items?.[0]?.key)
    }
  }, [internalActiveKey,internalItems]);

  useEffect(() => {
    if (children) {
      if (_.isArray(children)) {
        const tabItems = children.filter(tab => {
          return tab.type == Tab
        }).map((tab) => {
          return {
            key: tab.key,
            label: tab.props.label,
            children: tab.props.children,
          }
        })
        handleSetItems(tabItems)
        setInternalActiveKey(activeKey || defaultActiveKey || tabItems?.[0].key)
      }
    }
  }, [children]);

  return <TabsContext.Provider
    value={{
      activeKey: internalActiveKey,
      setActiveKey: setInternalActiveKey,
      items: internalItems || [],
      setItems: handleSetItems,
      addItem: handleAddItem,
    }}>
    <div className={classNames(tabsCls, className)} style={style}>
      <div className={classNames(`${tabsCls}-nav`)}>
        <div className={classNames(`${tabsCls}-nav-wrap`)}>
          <div ref={tabNavRef} className={classNames(`${tabsCls}-nav-list`)}>
            <div className={classNames(`${tabsCls}-ink-bar`, `${tabsCls}-ink-bar-animated`)}
                 style={{left: line?.left, width: line?.width}}/>
            {!_.isEmpty(internalItems) && internalItems?.map((item: any, index: number) => {
              return <TabNav active={internalActiveKey == item.key} stretch={stretch} label={item.label} key={index}
                             onClick={(e) => {
                               handleTabClick(item.key, e)
                             }}
              />
            })}
          </div>
        </div>
      </div>
      <div className={classNames(`${tabsCls}-content-holder`)}>
        <div className={classNames(`${tabsCls}-content`)}>
          {!_.isEmpty(internalItems) && internalItems?.map((item: any, index: number) => {
            return <TabPane key={item.key} tabKey={item.key} children={item.children}/>
          })}
        </div>
      </div>
    </div>
  </TabsContext.Provider>
}
