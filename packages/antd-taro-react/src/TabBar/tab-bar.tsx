import "./index.scss"
import React, {FC} from "react";
import classNames from "classnames";

type TabBarItemProps = {
  key: React.Key
  label?: React.ReactNode
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  disabled?: boolean
  activeKey?: string
  onClick?: (key: string) => void
}
export type TabBarProps = {
  items: TabBarItemProps[]
}
const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps & {itemKey: string}> = ({itemKey,label, icon, activeIcon, activeKey, onClick,...props}) => {
  console.log(props)
  const active = Boolean(activeKey) && props.key === activeKey
  console.log(active)
  const displayIcon = active ? (activeIcon ?? icon) : icon
  return <div className={classNames(`${tabBarCls}-item`, {
    [`${tabBarCls}-item-active`]: active
  })} onClick={() => {
    onClick?.(props.key.toString())
  }}>
    <div>{displayIcon}</div>
    <div className={classNames(`${tabBarCls}-item-label`)}>{label}</div>
  </div>
}


export const TabBar: FC<TabBarProps> = ({items}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string>()


  return <div className={classNames(tabBarCls)}>
    <div className={classNames(`${tabBarCls}-wrap`)}>
      {items.map(item => <TabBarItem {...item} key={item.key} activeKey={innerActiveKey}
                                     onClick={key => {
                                       console.log(key)
                                       setInnerActiveKey(key)
                                     }}/>)}
    </div>
  </div>
}
