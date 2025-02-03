import {Tabs as InternalTabs} from "./tabs"
import {Tab} from "./tab";

type InternalTabsType = typeof InternalTabs
type CompoundedComponent = InternalTabsType & {
  Tab: typeof Tab
}

const Tabs = InternalTabs as CompoundedComponent
Tabs.Tab = Tab
export default Tabs;
