import "./index.scss"
import React, {FC} from "react";
import classNames from "classnames";

type TabBarItem = {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
}
export type TabBarProps = {
  items: TabBarItem[]
}
const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItem> = ({label}) => {
  return <div className={classNames(`${tabBarCls}-item`)}>
    <div className={classNames(`${tabBarCls}-item-label`)}>{label}</div>
  </div>
}

export const TabBar: FC<TabBarProps> = ({items}) => {

  return <div className={classNames(tabBarCls)}>
    <div className={classNames(`${tabBarCls}-wrap`)}>
      {items.map(item => <TabBarItem {...item} key={item.key}/>)}
    </div>
  </div>
}
