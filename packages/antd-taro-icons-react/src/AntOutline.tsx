import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React from "react";
import {FC} from "react";

export const AntOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}AntOutline ${className}`} style={style}/>
}
