import classNames from "classnames";
import React, {FC} from "react";
import "./style.scss"

const maskCls = "triones-antm-mask2";
export type MaskProps = {
  children?: React.ReactNode
  className?: string
  zIndex?: number
  open?: boolean
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const Mask: FC<MaskProps> = ({children, className, zIndex = 1000, open, onMaskClick}) => {
  return <div className={classNames(maskCls, {[`${maskCls}-open`]: open})} style={{zIndex}} onClick={onMaskClick}>
    <div className={classNames(`${maskCls}-inner`, className)}>
      {children}
    </div>
  </div>
}
