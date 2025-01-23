import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "../Icon";
import classNames from "classnames";

export const ScanningFaceOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}ScanningFaceOutline`, className])}
          style={style}
    />
  );
};
