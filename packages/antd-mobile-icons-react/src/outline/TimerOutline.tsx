import {Icon, IconClsPrefix, IconProps} from "../Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const TimerOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}TimerOutline`,className])} style={style}/>
}
  