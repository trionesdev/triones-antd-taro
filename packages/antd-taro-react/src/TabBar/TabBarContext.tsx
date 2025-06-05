import {createContext} from "react";

type TabBarContextType = {
  activeKey?: string,
  setActiveKey?: (activeKey: string) => void,
  onTabClick?: (e: { antKey:string }) => void
}

export const TabBarContext = createContext<TabBarContextType>({})
