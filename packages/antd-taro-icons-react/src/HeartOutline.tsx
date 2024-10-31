import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const HeartOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}HeartOutline ${className}`} style={style}/>
}
