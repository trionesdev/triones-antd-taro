import React from 'react';

export const cls = 'triones-antm-cell';

export type CellProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 右侧内容
   * @default
   */
  extra?: React.ReactNode;
  /**
   * @description 是否显示箭头
   * @default true
   */
  arrow?: boolean;
  /**
   * @description 点击事件
   */
  onClick?: () => void;
};

export type CellGroupProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 分组标题
   */
  title?: React.ReactNode;
  /**
   * @description 分组右侧内容
   */
  extra?: React.ReactNode;
  /**
   * @description 是否显示分割线
   * @default false
   */
  divider?: boolean | React.ReactNode;
};
