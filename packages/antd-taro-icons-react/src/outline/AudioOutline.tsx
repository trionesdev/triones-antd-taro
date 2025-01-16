import React, {FC} from "react";
import {Icon, IconClsPrefix, IconProps} from "@trionesdev/antd-taro-icons-react/Icon";
import classNames from "classnames";

export const AudioOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
          className={classNames([`${IconClsPrefix}AudioOutline`, className])}
          style={style}
    />
  );
};
