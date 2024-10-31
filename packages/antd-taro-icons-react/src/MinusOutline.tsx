import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React from "react";
import {FC} from "react";

export const MinusOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}MinusCircleOutline ${className}`} style={style}/>
}
