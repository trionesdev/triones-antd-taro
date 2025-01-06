import { TabBar as InternalTabBar, TabBarItem } from "./tab-bar"

type CompoundedComponent = typeof InternalTabBar & {
  Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent

export { TabBar }
