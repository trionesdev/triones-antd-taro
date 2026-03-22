import React from "react";
import { FC } from "react";
import "./style.scss"
import classNames from "classnames";

type SegmentedItemType={
    /**
     * @description 分段项的显示文本
     */
    label?: React.ReactNode;
    /**
     * @description 分段项的值
     * @required
     */
    value?: string | number;
    /**
     * @description 分段项的图标
     */
    icon?: React.ReactNode;
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 自定义样式类名
     */
    className?: string;
}

export type SegmentedProps = {
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description 将宽度调整为父元素宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 默认选中的值
   * @default undefined
   */
  defaultValue?: string | number;
  /**
   * @description 选项列表
   * @required
   */
  options: SegmentedItemType[];
  /**
   * @description 当前选中的值
   */
  value?: string | number;
  onChange?: (value: string | number) => void;
}

const clsPrefix = 'triones-antm-segmented';

export const Segmented: FC<SegmentedProps> = ({className, style, block, defaultValue, options, value, onChange }) => {
  return <div className={classNames(clsPrefix, className)} style={style}  >
 
  </div>
}