import classNames from 'classnames';
import React, { FC } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import './style.scss';

 export type ProgressBarProps = {
  /**
   * 进度百分比
   */
  percent: number;
  /**
   * 是否为圆角
   */
  rounded?: boolean;
  /**
   * 进度文本
   */
  text?: boolean | React.ReactNode | ((percent: number) => React.ReactNode);
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
} & NativeProps<
  '--fill-color' | '--track-color' | '--track-width' | '--text-width'
>;

const defaultProps = {
  rounded: true,
};

export const ProgressBar: FC<ProgressBarProps> = (p) => {
  const props = mergeProps(defaultProps, p) as ProgressBarProps;
  const { percent, rounded, className, style, text } = props;

  return withNativeProps(
    props,
    <div className={classNames('triones-antm-progress-bar', className)}>
      <div
        className="triones-antm-progress-bar-track"
        style={{
          ...style,
          borderRadius: rounded ? `var(--track-width)` : '0',
        }}
      >
        <div
          className="triones-antm-progress-bar-fill"
          style={{
            width: `${percent}%`,
            borderRadius: rounded ? `var(--track-width)` : '0',
          }}
        />
      </div>
      {text && (
        <div className="triones-antm-progress-bar-text">
          {typeof text === 'function'
            ? text(percent)
            : text === true
              ? `${percent}%`
              : text}
        </div>
      )}
    </div>,
  );
};
