import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import classNames from "classnames";

export const AAOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}AAOutline`, className])}
          style={style}
    />
  );
};
