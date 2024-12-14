import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const ReceiptOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}ReceiptOutline ${className}`} style={style}/>
}
