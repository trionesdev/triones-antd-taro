import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const CheckCircleOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}CheckCircleOutline ${className}`} style={style}/>
}
