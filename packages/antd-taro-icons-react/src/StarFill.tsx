import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const StarFill: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}StarFill ${className}`} style={style}/>
} 