import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const UserCircleOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}UserCircleOutline ${className}`} style={style}/>
}
