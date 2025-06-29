import React, { PropsWithChildren } from 'react';

export const cls = `triones-antm-descriptions`;

export type DescriptionsProps = {
  /**
   * @description 是否显示行标题冒号
   * @default false
   */
  colon?: boolean;
  /**
   * @description 列数
   * @default 1
   */
  columns?: number;
  /**
   * @description 布局方式
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * @description 尺寸
   * @default middle
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * @description 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * @description label的宽度
   * @default
   */
  labelWidth?: number;
  /**
   * @description 描述项
   * @default []
   */
  items: DescriptionItemProps[];
  /**
   * @description 自定义样式
   */
  styles?:{
    item?: React.CSSProperties;
    label?: React.CSSProperties;
    content?: React.CSSProperties;
  }
};

export type DescriptionItemProps = PropsWithChildren<{
  /**
   * @description 标签
   */
  label?: React.ReactNode;
  /**
   * @description label的宽度
   */
  labelWidth?: number;
  /**
   * @description label的样式
   */
  styles?:{
    label?: React.CSSProperties;
    content?: React.CSSProperties;
  }
  /**
   * @description 内容的样式
   */
  style?: React.CSSProperties;
  /**
   * @description 跨度
   * @default 1
   */
  span?: number;
  /**
   * @description 是否显示冒号
   * @default false
   */
  colon?: boolean;
}>;

export type DescriptionItemLabelProps = PropsWithChildren<{
  label?: React.ReactNode;
  labelWidth?: number;
  style?: React.CSSProperties;
  span?: number;
  colon?: boolean;
}>;

export type DescriptionItemContentProps = PropsWithChildren<{
  style?: React.CSSProperties;
  span?: number;
}>;
