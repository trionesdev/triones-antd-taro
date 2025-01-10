import {
  Icon,
  IconClsPrefix,
  IconProps,
} from '@trionesdev/antd-taro-icons-react/Icon';
import classNames from 'classnames';
import React, { FC } from 'react';

export const CheckCircleOutline: FC<IconProps> = ({ className, style,...rest }) => {
  return (
    <Icon {...rest}
      className={classNames([`${IconClsPrefix}CheckCircleOutline`, className])}
      style={style}
    />
  );
};
