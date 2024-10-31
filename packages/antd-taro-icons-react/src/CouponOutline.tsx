import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const CouponOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}CouponOutline ${className}`} style={style}/>
}
