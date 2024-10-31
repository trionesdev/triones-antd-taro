import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const GlobalOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}GlobalOutline ${className}`} style={style}/>
}
