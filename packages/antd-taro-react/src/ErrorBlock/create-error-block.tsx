import type { FC, ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';
import type { ErrorBlockStatus, ImageRecord } from '.';
import './style.scss';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import { useConfig } from '../ConfigProvider';

const classPrefix = `triones-antm-error-block`;

export type ErrorBlockProps = {
  status?: ErrorBlockStatus;
  title?: ReactNode;
  image?: string;
  description?: ReactNode;
  fullPage?: boolean;
  children?: ReactNode;
} & NativeProps<
  | '--image-height'
  | '--image-height-full-page'
  | '--image-width'
  | '--image-width-full-page'
>;

const defaultProps = {
  status: 'default',
};

export function createErrorBlock(imageRecord: ImageRecord) {
  const ErrorBlock: FC<ErrorBlockProps> = (p) => {
    const props = mergeProps(defaultProps, p);
    const { locale } = useConfig();
    const contentPack = locale.ErrorBlock[props.status];
    const desc =
      'description' in props ? props.description : contentPack.description;
    const title = 'title' in props ? props.title : contentPack.title;

    const image = props.image ?? imageRecord[props.status];
    const imageNode =
      typeof image === 'string' ? (
        <img src={image} alt="error block image" />
      ) : (
        image
      );

    debugger
    return withNativeProps(
      props,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-full-page`]: props.fullPage,
        })}
      >
        <div className={`${classPrefix}-image`}>{imageNode}</div>
        <div className={`${classPrefix}-description`}>
          {![undefined, null].includes(title as null) && (
            <div className={`${classPrefix}-description-title`}>{title}</div>
          )}

          {![undefined, null].includes(desc as null) && (
            <div className={`${classPrefix}-description-subtitle`}>{desc}</div>
          )}
        </div>

        {props.children && (
          <div className={`${classPrefix}-content`}>{props.children}</div>
        )}
      </div>,
    );
  };
  return ErrorBlock;
}
