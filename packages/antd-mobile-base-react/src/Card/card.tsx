import classNames from 'classnames';
import type { CSSProperties, FC, ReactNode } from 'react';
import React from 'react';
import { NativeProps, withNativeProps } from './native-props';

const classPrefix = `triones-antm-card`;

export type CardProps = {
  styles?:{
    header?: CSSProperties;
    body?: CSSProperties;
    footer?: CSSProperties;
  }
  title?: ReactNode;
  icon?: ReactNode;
  extra?: ReactNode;
  footer?: ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
} & NativeProps;

export const Card: FC<CardProps> = (props) => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null;
    }
    return (
      <div
        className={classNames(`${classPrefix}-header`, props.headerClassName)}
        style={props?.styles?.header}
        onClick={props.onHeaderClick}
      >
        {props.icon && (
          <div className={`${classPrefix}-header-icon`}>{props.icon}</div>
        )}
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        {props.extra && (
          <div className={`${classPrefix}-header-extra`}>{props.extra}</div>
        )}
      </div>
    );
  };

  const renderBody = () => {
    if (!props.children) {
      return null;
    }
    return (
      <div
        className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        style={props?.styles?.body}
        onClick={props.onBodyClick}
      >
        {props.children}
      </div>
    );
  };

  const renderFooter = () => {
    if (!props.footer){
      return null;
    }
    return <div className={classNames(`${classPrefix}-footer`)} style={props?.styles?.footer}>
      {props.footer}
    </div>
  }

  return withNativeProps(
    props,
    <div className={classPrefix} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </div>,
  );
};
