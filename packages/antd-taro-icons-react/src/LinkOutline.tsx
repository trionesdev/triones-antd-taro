import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const LinkOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}LinkOutline ${className}`} style={style}/>
}
