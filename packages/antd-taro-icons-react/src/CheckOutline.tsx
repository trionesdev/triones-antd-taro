import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const CheckOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}CheckOutline ${className}`} style={style}/>
}
