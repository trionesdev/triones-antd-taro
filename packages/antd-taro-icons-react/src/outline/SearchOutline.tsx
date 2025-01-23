import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "../Icon";
import classNames from "classnames";

export const SearchOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}SearchOutline`, className])}
          style={style}
    />
  );
};
