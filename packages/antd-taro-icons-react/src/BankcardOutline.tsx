import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const BankcardOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}BankcardOutline ${className}`} style={style}/>
}
