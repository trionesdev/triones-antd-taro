import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const InformationCircleOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}InformationCircleOutline`,className])} style={style}/>
}
