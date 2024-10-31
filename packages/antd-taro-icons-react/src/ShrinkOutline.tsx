import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const ShrinkOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}ShrinkOutline ${className}`} style={style}/>
}
