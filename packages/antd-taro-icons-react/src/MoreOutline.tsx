import { Icon, IconClsPrefix, IconProps } from "@trionesdev/antd-taro-icons-react/Icon";
import React, { FC } from "react";

export const MoreOutline: FC<IconProps> = ({ className, style }) => {
  return <Icon className={`${IconClsPrefix}MoreOutline ${className}`} style={style} />
}
