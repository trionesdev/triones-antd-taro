import "./index.scss"
import React, {FC, ReactNode, useContext, useEffect} from "react";
import classNames from "classnames";
import {TabBarContext} from "./TabBarContext";
import {isEmpty} from "lodash";

type TabBarItemType = {
  key: string
  /**
   * @description 文本
   */
  label?: React.ReactNode
  /**
   * @description 图标
   */
  icon?: React.ReactNode
  /**
   * @description 激活状态图标
   */
  activeIcon?: React.ReactNode
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @description 点击回调
   * @param antKey tab的key
   */
  onClick?: (antKey: string) => void
}

type TabBarItemProps = Omit<TabBarItemType, 'key'> & {
  className?: string,
  /**
   * @description 唯一标识，与key一样,避免于key的使用冲突
   */
  antKey: string,
  /**
   * @description 自定义渲染
   */
  render?: (active: boolean) => React.ReactNode
}


const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps> = ({
                                                  className,
                                                  antKey,
                                                  label,
                                                  icon,
                                                  activeIcon,
                                                  disabled = false,
                                                  onClick,
                                                  render,
                                                  ...props
                                                }) => {
  const {activeKey, setActiveKey, onTabClick} = useContext(TabBarContext)
  const active = antKey === activeKey
  const displayIcon = active ? (activeIcon ?? icon) : icon

  return <div className={classNames(`${tabBarCls}-item`, className, {
    [`${tabBarCls}-item-active`]: active
  })} onClick={() => {
    setActiveKey?.(antKey)
    onClick?.(antKey)
    onTabClick?.({antKey})
  }}>
    {render?.(active) || <>
      <div className={classNames(`${tabBarCls}-item-icon`)}>{displayIcon}</div>
      <div className={classNames(`${tabBarCls}-item-label`)}>{label}</div>
    </>}
  </div>
}

export type TabBarProps = {
  className?: string
  style?: React.CSSProperties
  /**
   * @description 默认激活key
   */
  defaultActiveKey?: string
  /**
   * @description 激活key
   */
  activeKey?: string
  /**
   * @description 子项配置
   */
  items: TabBarItemType[]
  onClick?: (e: { antKey: string }) => void
  children?: ReactNode
}

export const TabBar: FC<TabBarProps> = ({className, style, activeKey, defaultActiveKey, items, children, onClick}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string | undefined>(activeKey ?? defaultActiveKey)

  useEffect(() => {
    setInnerActiveKey(activeKey)
  }, [activeKey]);

  return <TabBarContext.Provider
    value={{activeKey: innerActiveKey, setActiveKey: setInnerActiveKey, onTabClick: onClick}}>
    <div className={classNames(tabBarCls, className)} style={style}>
      <div className={classNames(`${tabBarCls}-wrap`)}>
        {!isEmpty(items) && items.map(item => <TabBarItem {...item} key={item.key} antKey={item.key}
                                                            onClick={item.onClick}/>)}
        {isEmpty(items) && children}
      </div>
    </div>
  </TabBarContext.Provider>
}
