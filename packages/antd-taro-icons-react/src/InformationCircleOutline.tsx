import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const InformationCircleOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}InformationCircleOutline ${className}`} style={style}/>
}
