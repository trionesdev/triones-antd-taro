import "./style/global.scss"
import React, {FC} from "react";
import classNames from "classnames";

export const IconClsPrefix = "antm-icon-";

export type IconProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export const Icon: FC<IconProps> = ({className, style,...rest}) => {
  return <i {...rest} className={classNames([`triones-antm-icon`,className])} style={style} />
}
