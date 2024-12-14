import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const DeleteOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}DeleteOutline ${className}`} style={style}/>
}
