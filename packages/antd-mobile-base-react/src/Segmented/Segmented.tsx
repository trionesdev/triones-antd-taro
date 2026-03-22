import React, { FC, useEffect, useState } from 'react';
import './style.scss';
import classNames from 'classnames';

type SegmentedItemType = {
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
};

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
};

const clsPrefix = 'triones-antm-segmented';

function firstEnabledValue(options: SegmentedItemType[]): string | number | undefined {
  return options.find((o) => !o.disabled)?.value;
}

export const Segmented: FC<SegmentedProps> = ({
  className,
  style,
  block,
  defaultValue,
  options,
  value,
  onChange,
  disabled: rootDisabled,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | number | undefined>(() => {
    if (defaultValue !== undefined) return defaultValue;
    return firstEnabledValue(options);
  });

  useEffect(() => {
    if (!isControlled) {
      setInternalValue((prev) => {
        if (defaultValue !== undefined) return defaultValue;
        if (prev !== undefined && options.some((o) => o.value === prev && !o.disabled)) {
          return prev;
        }
        return firstEnabledValue(options);
      });
    }
  }, [defaultValue, isControlled, options]);

  const selectedValue = isControlled ? value : internalValue;

  const handleSelect = (
    itemValue: string | number | undefined,
    itemDisabled?: boolean,
  ) => {
    if (rootDisabled || itemDisabled || itemValue === undefined) return;
    if (!isControlled) {
      setInternalValue(itemValue);
    }
    onChange?.(itemValue);
  };

  return (
    <div
      className={classNames(clsPrefix, className, {
        [`${clsPrefix}-block`]: block,
        [`${clsPrefix}-disabled`]: rootDisabled,
      })}
      style={style}
      role="radiogroup"
    >
      {options.map((item, index) => {
        const itemDisabled = !!(rootDisabled || item.disabled);
        const active = item.value !== undefined && selectedValue === item.value;
        return (
          <div
            key={item.value ?? index}
            role="radio"
            aria-checked={active}
            aria-disabled={itemDisabled}
            className={classNames(`${clsPrefix}-item`, item.className, {
              [`${clsPrefix}-item-active`]: active,
              [`${clsPrefix}-item-disabled`]: itemDisabled,
            })}
            onClick={() => handleSelect(item.value, itemDisabled)}
          >
            {item.icon != null && (
              <span className={`${clsPrefix}-item-icon`}>{item.icon}</span>
            )}
            {item.label != null && (
              <span className={`${clsPrefix}-item-label`}>{item.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
