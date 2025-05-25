import classNames from "classnames";
import React, {FC, useContext} from "react";
import {TabsContext} from "./context";

const tabsCls = `triones-antm-tabs`

type  TabPaneProps = {
  children: React.ReactNode,
  tabKey: string
}
export const TabPane: FC<TabPaneProps> = ({children, tabKey}) => {
  const {activeKey} = useContext(TabsContext)
  return <div className={classNames(`${tabsCls}-tab-pane`, {[`${tabsCls}-tab-pane-active`]: activeKey == tabKey})}>
    {children}
  </div>
}
