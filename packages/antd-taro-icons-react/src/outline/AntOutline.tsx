import {
  Icon,
  IconClsPrefix,
  IconProps,
} from '@trionesdev/antd-taro-icons-react/Icon';
import classNames from 'classnames';
import React, { FC } from 'react';

export const AntOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
      className={classNames([`${IconClsPrefix}AntOutline`, className])}
      style={style}
    />
  );
};
