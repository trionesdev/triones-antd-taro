import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "../Icon";
import classNames from "classnames";

export const TravelOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}TravelOutline`, className])}
          style={style}
    />
  );
};
