import {Icon, IconClsPrefix, IconProps} from "./Icon";
import React from "react";
import {FC} from "react";
import classNames from "classnames";

export const MinusOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}MinusCircleOutline`,className])} style={style}/>
}
