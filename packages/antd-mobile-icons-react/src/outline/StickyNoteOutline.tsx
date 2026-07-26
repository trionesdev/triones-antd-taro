import {Icon, IconClsPrefix, IconProps} from "../Icon";
import React, {FC} from "react";
import classNames from "classnames";

export const StickyNoteOutline: FC<IconProps> = ({className, style,...rest}) => {
  return <Icon {...rest} className={classNames([`${IconClsPrefix}StickyNoteOutline`,className])} style={style}/>
}
  