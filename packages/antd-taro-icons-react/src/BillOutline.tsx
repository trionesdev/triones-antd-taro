import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const BillOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}BillOutline ${className}`} style={style}/>
}
