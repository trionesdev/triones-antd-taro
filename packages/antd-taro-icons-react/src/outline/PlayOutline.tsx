import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const PlayOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}PlayOutline`,className])} style={style}/>
}
