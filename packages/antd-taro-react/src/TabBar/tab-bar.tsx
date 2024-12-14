import "./index.scss"
import React, {FC} from "react";
import classNames from "classnames";

type TabBarItemType = {
  key: string
  label?: React.ReactNode
  icon?: React.ReactNode
  activeIcon?: React.ReactNode
  disabled?: boolean
  active?: boolean
  activeKey?: string
  onClick?: () => void
}

type TabBarItemProps = Omit<TabBarItemType, 'key'> & {}

export type TabBarProps = {
  items: TabBarItemType[]
  onClick?: (e: { item?: TabBarItemType }) => void
}
const tabBarCls = 'triones-tab-bar'
export const TabBarItem: FC<TabBarItemProps> = ({
                                                  label,
                                                  icon,
                                                  activeIcon,
                                                  activeKey,
                                                  active,
                                                  onClick,
                                                  ...props
                                                }) => {
  console.log(props)

  const displayIcon = active ? (activeIcon ?? icon) : icon
  return <div className={classNames(`${tabBarCls}-item`, {
    [`${tabBarCls}-item-active`]: active
  })} onClick={() => onClick?.()}>
    <div>{displayIcon}</div>
    <div className={classNames(`${tabBarCls}-item-label`)}>{label}</div>
  </div>
}


export const TabBar: FC<TabBarProps> = ({items, onClick}) => {
  const [innerActiveKey, setInnerActiveKey] = React.useState<string | undefined>()


  return <div className={classNames(tabBarCls)}>
    <div className={classNames(`${tabBarCls}-wrap`)}>
      {items.map(item => <TabBarItem {...item} activeKey={innerActiveKey} active={item.key === innerActiveKey}
                                     onClick={() => {
                                       onClick?.({item})
                                       setInnerActiveKey(item.key)
                                       console.log()
                                       console.log(item)
                                     }}/>)}
    </div>
  </div>
}
