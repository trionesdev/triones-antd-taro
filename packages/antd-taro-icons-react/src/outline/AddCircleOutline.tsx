import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import classNames from "classnames";

export const AddCircleOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}AddCircleOutline`, className])}
          style={style}
    />
  );
};
