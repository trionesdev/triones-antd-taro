import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const StarOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}StarOutline ${className}`} style={style}/>
}
