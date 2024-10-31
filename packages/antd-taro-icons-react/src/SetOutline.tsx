import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const SetOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}SetOutline ${className}`} style={style}/>
}
