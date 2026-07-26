import {Icon, IconClsPrefix, IconProps} from "../Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const LandmarkOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}LandmarkOutline`,className])} style={style}/>
}
  