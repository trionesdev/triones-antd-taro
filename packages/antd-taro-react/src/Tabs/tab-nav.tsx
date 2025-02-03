import React, {FC, MouseEvent, useEffect, useRef} from "react";
import classNames from "classnames";

const tabsCls = `triones-antm-tabs`

type TabNavProps = {
  label?: React.ReactNode;
  active?: boolean;
  stretch?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>, rect: DOMRect) => void;
  onActive?: (rect: DOMRect) => void;
}
export const TabNav: FC<TabNavProps> = ({label, active, stretch, onClick, onActive}) => {
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabNavInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && tabNavInnerRef.current) {
      const rect = tabNavInnerRef.current?.getBoundingClientRect()
      onActive?.(rect);
    }
  }, [active]);

  return <div ref={tabNavRef} className={classNames(`${tabsCls}-tab`, {
    [`${tabsCls}-tab-active`]: active,
    [`${tabsCls}-tab-stretch`]: stretch
  })}
              onClick={(e) => {
                const rect = tabNavInnerRef.current?.getBoundingClientRect()
                onClick?.(e, rect!)
              }}
  >
    <div ref={tabNavInnerRef} className={classNames(`${tabsCls}-tab-inner`)}>{label}</div>
  </div>
}
