import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const VideoOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}VideoOutline ${className}`} style={style}/>
}
