import {Tabs as InternalTabs,TabsProps} from "./tabs"
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
