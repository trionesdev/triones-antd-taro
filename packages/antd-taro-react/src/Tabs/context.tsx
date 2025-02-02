import {createContext} from "react";

type TabsContextType = {
  activeKey?: string
}
export const TabsContext = createContext<TabsContextType>({})
