import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const PlayOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}PlayOutline ${className}`} style={style}/>
}
