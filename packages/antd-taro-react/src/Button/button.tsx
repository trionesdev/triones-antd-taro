import {
  Button as TaroButton,
  ButtonProps as TaroButtonProps,
} from '@tarojs/components';
import classNames from 'classnames';
import React, {FC, MouseEventHandler} from 'react';
import {useTaro} from '../utils/taro-utils';
import './style.scss';
import {CommonEventFunction} from '@tarojs/components/types/common';

export type ButtonProps = {
  children?: React.ReactNode;
  /**
   * @description block 按钮宽高自适应
   */
  block?: boolean;
  /**
   * @description 颜色
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'|string;
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
  openType?: TaroButtonProps.OpenType;

  onGetPhoneNumber?: CommonEventFunction<TaroButtonProps.onGetPhoneNumberEventDetail>;
  [key: string]: any;
};

export const Button: FC<ButtonProps> = ({
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
                                          openType,
                                          onGetPhoneNumber,
                                          ...props
                                        }) => {
  const {isTaro} = useTaro();
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

  if (isTaro) {
    return (
      <TaroButton
        className={classNames(clsPrefix, `${clsPrefix}-${size}`, className, {
          [`${clsPrefix}-block`]: block,
          [`${clsPrefix}-type-${type}`]: type,
          [`${clsPrefix}-color-${finalColor}`]: finalColor,
          [`${clsPrefix}-variant-${finalVariant}`]: finalVariant,
        })}
        style={style}
        disabled={disabled}
        openType={openType}
        onGetPhoneNumber={onGetPhoneNumber}
        onClick={onClick}
      >
        {iconPosition === 'start' && icon}
        {children}
        {iconPosition === 'end' && icon}
      </TaroButton>
    );
  } else {
    return (
      <button
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
    );
  }
};
