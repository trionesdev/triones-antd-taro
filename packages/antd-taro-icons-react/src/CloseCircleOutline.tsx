import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const CloseCircleOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}CloseCircleOutline ${className}`} style={style}/>
}
