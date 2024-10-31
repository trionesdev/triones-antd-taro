import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";

export const QuestionCircleOutline: FC<IconProps> = ({className, style}) => {
  return <Icon className={`${IconClsPrefix}QuestionCircleOutline ${className}`} style={style}/>
}
