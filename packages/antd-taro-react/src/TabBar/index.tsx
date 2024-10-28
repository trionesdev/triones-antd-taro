import {TabBar as InternalTabBar, TabBarItem} from "./tab-bar.tsx"

type CompoundedComponent = typeof InternalTabBar & {
    Item: typeof TabBarItem
}

const TabBar = InternalTabBar as CompoundedComponent

export default TabBar