import classNames from 'classnames';
import React, { FC } from 'react';
import './style.scss';

export type TagProps = {
  children?: React.ReactNode;
  /**
   * 标签色
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string;
  /**
   * 填充模式
   */
  fill?: 'solid' | 'outline';
  /**
   * 点击时的回调
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * 是否圆角
   */
  round?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
};

export const Tag: FC<TagProps> = ({
  children,
  color = 'default',
  fill = 'solid',
  onClick,
  className,
  style,
  round = false,
  ...props
}) => {
  const clsPrefix = 'triones-antm-tag';

  // 是否是预设颜色
  const isPresetColor = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
  ].includes(color);

  const customStyle = !isPresetColor
    ? {
        ...(fill === 'solid'
          ? {
              backgroundColor: color,
              color: '#fff',
            }
          : {
              color: color,
              borderColor: color,
              backgroundColor: 'transparent',
            }),
        ...style,
      }
    : style;

  return (
    <div
      className={classNames(
        clsPrefix,
        {
          [`${clsPrefix}-${color}`]: isPresetColor,
          [`${clsPrefix}-${fill}`]: fill,
          [`${clsPrefix}-${round ? 'round' : 'square'}`]: round,
        },
        className,
      )}
      style={customStyle}
      {...props}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
