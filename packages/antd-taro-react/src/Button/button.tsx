import {
  Button as TaroButton,
  ButtonProps as TaroButtonProps,
} from '@tarojs/components';
import {ButtonProps as MobileButtonProps} from "@trionesdev/antd-mobile-react/dist/Button"
import classNames from 'classnames';
import React, {FC, MouseEventHandler, PropsWithChildren} from 'react';
import './style.scss';
import {CommonEventFunction} from '@tarojs/components/types/common';

export type ButtonProps = MobileButtonProps & {
  openType?: TaroButtonProps.OpenType;
  onGetPhoneNumber?: CommonEventFunction<TaroButtonProps.onGetPhoneNumberEventDetail>;
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
                                                             openType,
                                                             onGetPhoneNumber,
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
};
