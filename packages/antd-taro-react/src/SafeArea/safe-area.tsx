import type { FC } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';

import classNames from 'classnames';

const classPrefix = 'triones-antm-safe-area';

export type SafeAreaProps = {
  children?: React.ReactNode;
  position?: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = (props) => {
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`,
      )}
    >{props.children}</div>,
  );
};
