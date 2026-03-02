import { TabBar as InternalTabBar, TabBarItem,TabBarProps } from "./tab-bar"

type CompoundedComponent = typeof InternalTabBar & {
  Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent
TabBar.Item = TabBarItem

export type { TabBarProps }
export default TabBar
