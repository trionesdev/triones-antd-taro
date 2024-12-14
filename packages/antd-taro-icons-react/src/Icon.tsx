import "./style/global.scss"
import React, {FC} from "react";

export const IconClsPrefix = "triones-antm-icon-";

export type IconProps = {
  className?: string
  style?: React.CSSProperties
}

export const Icon: FC<IconProps> = ({className, style}) => {
  return <span className={`triones-antm-icon ${className}`} style={style}/>
}
