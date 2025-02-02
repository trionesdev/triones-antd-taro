import React, {FC, MouseEvent, useEffect, useMemo, useRef, useState} from "react"
import {TabItemProps} from "./tab-item";
import classNames from "classnames";
import {TabsContext} from "./context";
import "./style.scss"
import {TabNav} from "./tab-nav";

export type TabsSize = "small" | "medium" | "large";

export type TabsProps = {
  activeKey?: string
  defaultActiveKey?: string
  centered?: boolean
  size?: TabsSize
  stretch?: boolean
  items?: TabItemProps[]
  onTabClick?: (key: string, e: MouseEvent) => void
  onChange?: (activeKey: string) => void
}

const tabsCls = `triones-antm-tabs`

export const Tabs: FC<TabsProps> = ({
                                      activeKey,
                                      defaultActiveKey,
                                      centered,
                                      size,
                                      stretch = true,
                                      items,
                                      onTabClick,
                                      onChange
                                    }) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [internalActiveKey, setInternalActiveKey] = useState<string | undefined>(activeKey || defaultActiveKey || items?.[0].key)

  const handleTabClick = (key: string, e: MouseEvent<any>) => {
    onTabClick?.(key, e)
    setInternalActiveKey(key)
  }

  useEffect(() => {
    if (activeKey == undefined) {
      return
    }
    if (activeKey == internalActiveKey) {
      return;
    }
    setInternalActiveKey(activeKey)
  }, [activeKey])

  useEffect(() => {
    if (internalActiveKey) {
      onChange?.(internalActiveKey)
    }
  }, [internalActiveKey])

  return <TabsContext.Provider value={{}}>
    <div className={classNames(tabsCls)}>
      <div className={classNames(`${tabsCls}-nav`)}>
        <div className={classNames(`${tabsCls}-nav-wrap`)}>
          <div ref={tabNavRef} className={classNames(`${tabsCls}-nav-list`)}>
            <div className={classNames(`${tabsCls}-ink-bar`, `${tabsCls}-ink-bar-animated`)}/>
            {items?.map((item, index) => {
              return <TabNav active={internalActiveKey == item.key} stretch={stretch} label={item.label} key={index}
                             onClick={(e,rect) => {
                               const navRect = tabNavRef.current?.getBoundingClientRect()
                               console.log(navRect)
                               e.target
                               handleTabClick(item.key, e)
                             }}/>
            })}
          </div>
        </div>
      </div>
      <div className={classNames(`${tabsCls}-content-holder`)}>
        <div className={classNames(`${tabsCls}-content`)}>
          {items?.map((item, index) => {
            return <div key={`tab-pane-${index}`}
                        className={classNames(`${tabsCls}-tab-pane`, {[`${tabsCls}-tab-pane-active`]: internalActiveKey == item.key})}>
              {item.children}
            </div>
          })}
        </div>

      </div>
    </div>
  </TabsContext.Provider>
}
