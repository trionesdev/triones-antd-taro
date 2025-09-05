import { StarFill } from '../../../antd-mobile-icons-react';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { mergeProps } from '../utils/with-default-props';
import './style.scss';

export type RateProps = {
  /**
   * 评分值
   */
  value?: number;
  /**
   * 默认评分值
   */
  defaultValue?: number;
  /**
   * 评分总数
   */
  count?: number;
  /**
   * 是否允许半星
   */
  allowHalf?: boolean;
  /**
   * 是否允许清除
   */
  allowClear?: boolean;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 评分改变时的回调
   */
  onChange?: (value: number) => void;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 星星大小
   */
  size?: number;
  /**
   * 自定义字符
   */
  character?: React.ReactNode;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
} & NativeProps<'--active-color' | '--inactive-color'>;

const defaultProps = {
  count: 5,
  defaultValue: 0,
  allowHalf: false,
  readonly: false,
  allowClear: true,
  size: 20,
};

export const Rate: FC<RateProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const {
    value,
    defaultValue,
    count,
    allowHalf,
    readonly,
    allowClear,
    size,
    character,
    onChange,
  } = props;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const clsPrefix = 'triones-antm-rate';

  const currentValue = value ?? internalValue;

  const handleClick = (index: number, isHalf: boolean) => {
    if (readonly) return;
    const newValue = isHalf ? index + 0.5 : index + 1;

    if (allowClear) {
      if (
        (!allowHalf && currentValue === newValue) ||
        (allowHalf &&
          currentValue === newValue &&
          currentValue === index + (isHalf ? 0.5 : 1))
      ) {
        if (!value) {
          setInternalValue(0);
        }
        onChange?.(0);
        return;
      }
    }

    if (!value) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return withNativeProps(
    props,
    <div
      className={classNames(clsPrefix, {
        [`${clsPrefix}-readonly`]: readonly,
      })}
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={`${clsPrefix}-star-wrapper`}
          onClick={(e) => {
            if (!allowHalf) {
              handleClick(index, false);
              return;
            }

            const rect = e.currentTarget.getBoundingClientRect();
            const isHalf = e.clientX - rect.left < rect.width / 2;
            handleClick(index, isHalf);
          }}
        >
          {character ? (
            <>
              <div
                className={classNames(`${clsPrefix}-star`, {
                  [`${clsPrefix}-star-active`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              >
                {character}
              </div>
              {allowHalf && (
                <div
                  className={classNames(
                    `${clsPrefix}-star`,
                    `${clsPrefix}-star-half-item`,
                    {
                      [`${clsPrefix}-star-active`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                >
                  {character}
                </div>
              )}
            </>
          ) : (
            <>
              <StarFill
                className={classNames(`${clsPrefix}-star`, {
                  [`${clsPrefix}-star-active`]: index + 1 <= currentValue,
                })}
                style={{
                  fontSize: size,
                }}
              />
              {allowHalf && (
                <StarFill
                  className={classNames(
                    `${clsPrefix}-star`,
                    `${clsPrefix}-star-half-item`,
                    {
                      [`${clsPrefix}-star-active`]: index + 0.5 <= currentValue,
                    },
                  )}
                  style={{
                    fontSize: size,
                  }}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
