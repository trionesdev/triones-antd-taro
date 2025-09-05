import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  /**
   * @description 安全区位置
   * @default top
   */
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = ({ position = 'top', ...props }) => {
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, `${classPrefix}-position-${position}`)}
    >
      {props.children}
    </div>,
  );
};
