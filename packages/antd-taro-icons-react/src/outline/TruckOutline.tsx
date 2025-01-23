import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "../Icon";
import classNames from "classnames";

export const TruckOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}TruckOutline`, className])}
          style={style}
    />
  );
};
