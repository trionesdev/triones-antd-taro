import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";

export const EyeOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}EyeInvisibleOutline ${className}`} style={style}/>
}
