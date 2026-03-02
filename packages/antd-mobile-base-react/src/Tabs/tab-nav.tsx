import React, {FC, MouseEvent, useRef} from "react";
import classNames from "classnames";

const tabsCls = `triones-antm-tabs`

type TabNavProps = {
  label?: React.ReactNode;
  active?: boolean;
  stretch?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
export const TabNav: FC<TabNavProps> = ({label, active, stretch, onClick}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavInnerRef = useRef<HTMLDivElement>(null);

  return <div ref={tabNavRef} className={classNames(`${tabsCls}-tab`, {
    [`${tabsCls}-tab-active`]: active,
    [`${tabsCls}-tab-stretch`]: stretch
  })}
              onClick={(e) => {
                onClick?.(e)
              }}
  >
    <div ref={tabNavInnerRef} className={classNames(`${tabsCls}-tab-inner`)}>{label}</div>
  </div>
}
