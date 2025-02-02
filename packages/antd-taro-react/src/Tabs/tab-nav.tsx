import React, {FC, MouseEvent, useRef} from "react";
import classNames from "classnames";

const tabsCls = `triones-antm-tabs`

type TabNavProps = {
  label?: React.ReactNode;
  active?: boolean;
  stretch?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>, rect: DOMRect) => void;
}
export const TabNav: FC<TabNavProps> = ({label, active, stretch, onClick}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  return <div ref={tabNavRef} className={classNames(`${tabsCls}-tab`, {
    [`${tabsCls}-tab-active`]: active,
    [`${tabsCls}-tab-stretch`]: stretch
  })}
  >
    <div onClick={(e) => {
      const rect = tabNavRef.current?.getBoundingClientRect()
      console.log(rect)
      console.log(e)
      onClick?.(e, rect!)
    }}>{label}</div>
  </div>
}
