import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import classNames from "classnames";

export const ArrowDownCircleOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}ArrowDownCircleOutline`, className])}
          style={style}
    />
  );
};
