import classNames from 'classnames';
import React, {FC, PropsWithChildren} from 'react';
import './style.scss';

export type ButtonProps = {
  /**
   * @description block 按钮宽高自适应
   */
  block?: boolean;
  /**
   * @description 颜色
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string;
  /**
   * @description 是否危险按钮，会使用 danger 的颜色
   */
  danger?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 幽灵按钮
   */
  ghost?: boolean;
  /**
   * @description 按钮类型
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 图标位置
   */
  iconPosition?: 'start' | 'end';
  /**
   * @description 加载中
   */
  loading?: boolean;
  /**
   * @description 按钮样式
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  /**
   * @description 点击事件
   */
  onClick?: (e: any) => void;
  [key: string]: any;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                          children,
                                          block = false,
                                          type = 'default',
                                          color,
                                          danger = false,
                                          disabled,
                                          className,
                                          style,
                                          icon,
                                          iconPosition = 'start',
                                          loading,
                                          variant,
                                          size = 'middle',
                                          onClick,
                                          ...props
                                        }) => {
  const clsPrefix = 'triones-antm-button';
  let finalColor = color;
  let finalVariant = variant;
  if (type) {
    if (!color) {
      if (type === 'primary' || type === 'link') {
        finalColor = 'primary';
      } else if (type === 'default') {
        finalColor = 'default';
      }
    }
    if (!variant) {
      if (type === 'primary') {
        finalVariant = 'solid';
      } else if (type === 'default') {
        finalVariant = 'outlined';
      } else if (type === 'dashed' || type === 'link' || type === 'text') {
        finalVariant = type;
      }
    }
  }
  if (danger) {
    finalColor = 'danger';
  }

  return <button
    {...{...props}}
    type={'button'}
    onClick={onClick}
    className={classNames(clsPrefix, `${clsPrefix}-${size}`, className, {
      [`${clsPrefix}-block`]: block,
      [`${clsPrefix}-type-${type}`]: type,
      [`${clsPrefix}-color-${finalColor}`]: finalColor,
      [`${clsPrefix}-variant-${finalVariant}`]: finalVariant,
    })}
    style={style}
    disabled={disabled}
  >
    {iconPosition === 'start' && icon}
    {children}
    {iconPosition === 'end' && icon}
  </button>
};
