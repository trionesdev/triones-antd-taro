import React, {FC, PropsWithChildren} from "react";

type DescriptionsItemProps = {
  label?: React.ReactNode
}
export const DescriptionsItem: FC<PropsWithChildren<DescriptionsItemProps>> = ({children, label}) => {
  return <div className={`${cls}-item`}>
    <div className={`${cls}-item-label`}>
      {label}
    </div>
    <div className={`${cls}-item-content`}>
      {children}
    </div>
  </div>
}
