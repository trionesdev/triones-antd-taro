import React, { ReactNode } from 'react';
import { RadioValue } from './radio';

export const classPrefix = `triones-antm-radio`;

export type RadioProps = {
  className?: string;
  /**
   * @description 是否选中
   */
  checked?: boolean;
  /**
   * @description 默认是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 选中变化
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description 值
   */
  value?: RadioValue;
  /**
   * @description 块级样式
   */
  block?: boolean;
  /**
   * @description 图标
   */
  icon?: (checked: boolean) => ReactNode;
  /**
   * @description 子元素
   */
  children?: ReactNode;
  /**
   * @description 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
};

export interface RadioGroupProps {
  children?: ReactNode;
  className?: string;
  value?: any;
  onChange?: (val: any) => void;
  defaultValue?: any;
  disabled?: boolean;

  shape?: 'button' | 'round';
  items?: {
    label: React.ReactNode;
    value: any;
  }[];
}
