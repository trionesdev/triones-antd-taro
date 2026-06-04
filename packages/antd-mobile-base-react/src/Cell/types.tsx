import React, {ReactNode} from 'react';
import {AntSize, Col} from "../types";

export const cls = 'triones-antm-cell';

export type align = 'start' | 'center' | 'end';

export type CellProps = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string
  children?: React.ReactNode;
  /**
   * @description 左侧内容
   */
  label?: React.ReactNode;
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
  labelCol?: Col;
  labelAlign?: align;
  contentAlign?: align;
  size?:AntSize
  styles?: {
    label?: React.CSSProperties;
    content?: React.CSSProperties;
    extra?: React.CSSProperties;
  }
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
  arrow?: boolean;
  labelCol?: Col;
  labelAlign?: align;
  contentAlign?: align;
  divider?: ReactNode;
  size?:AntSize
  styles?: {
    container?: React.CSSProperties;
    title?: React.CSSProperties;
    cell?: React.CSSProperties;
    label?: React.CSSProperties;
    content?: React.CSSProperties;
    extra?: React.CSSProperties;
  }
};
