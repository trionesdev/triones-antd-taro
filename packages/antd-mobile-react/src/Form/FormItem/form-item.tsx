import {
  FormHorizontalAlign,
  FormItemLayout,
  useFormContext,
} from '@trionesdev/antd-mobile-base-react';
import classNames from 'classnames';
import { Field } from 'rc-field-form';
import { NamePath, Rule } from 'rc-field-form/lib/interface';
import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import { FormItemContent } from './form-item-content';
import { FormItemLabel } from './form-item-label';

export type FormItemProps = {
  /**
   * @description 类
   * @default
   */
  className?: string;
  style?: CSSProperties;
  children?: ReactElement;
  /**
   * @description 布局
   * @default
   */
  layout?: FormItemLayout;
  /**
   * @description 标签
   * @default
   */
  label?: ReactNode;
  /**
   * @description 标签对齐方式
   * @default left
   */
  labelAlign?: FormHorizontalAlign;
  /**
   * @description 标签宽度
   * @default
   */
  labelWidth?: number;
  /**
   * @description 输入框对齐方式
   * @default
   */
  contentAlign?: FormHorizontalAlign;
  /**
   * @description 字段名
   * @default
   */
  name?: NamePath;
  required?: boolean;
  hidden?: boolean;
  noStyle?: boolean;
  rules?: Rule[];
  initialValue?: any;
  valuePropName?: string;
  errorRender?: (errors?: any[]) => React.ReactNode;
  extra?: ReactNode;
};

export const FormItem: FC<FormItemProps> = ({
  className,
  style,
  children,
  layout,
  label,
  labelAlign,
  labelWidth,
  contentAlign,
  name,
  required,
  hidden = false,
  noStyle = false,
  rules,
  initialValue,
  valuePropName,
  errorRender,
  extra,
  ...props
}) => {
  // const { layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth, hiddenError, extra: formExtra } = useFormContext()
  const ctx = useFormContext();
  const formItemLayout = layout
    ? layout
    : ctx.layout === 'inline'
      ? 'horizontal'
      : ctx.layout;
  const formItemAlign = labelAlign ? labelAlign : ctx.labelAlign || 'left';
  const formItemLabelWidth = labelWidth ? labelWidth : ctx.labelWidth;
  const formItemExtra = extra !== undefined ? extra : ctx.extra;
  const formItemWrapperAlign = contentAlign ? contentAlign : ctx.contentAlign;
  const clsPrefix = 'triones-antm-form-item';

  if (noStyle) {
    return (
      <Field
        name={name}
        rules={rules}
        valuePropName={valuePropName}
        trigger={'onChange'}
        initialValue={initialValue}
      >
        {children}
      </Field>
    );
  }

  return (
    <div
      className={classNames(
        clsPrefix,
        `${clsPrefix}-${formItemLayout}`,
        className,
        {
          [`${clsPrefix}-hidden`]: hidden,
        },
      )}
      style={style}
    >
      {label && (
        <FormItemLabel
          className={classNames(
            `${clsPrefix}-label`,
            `${clsPrefix}-label-${formItemAlign}`,
          )}
          style={{ width: formItemLabelWidth }}
          layout={formItemLayout}
          label={label}
          required={required}
        />
      )}
      <FormItemContent
        className={classNames(`${clsPrefix}-content`, {
          [`${clsPrefix}-content-${formItemWrapperAlign}`]:
            formItemWrapperAlign,
        })}
        {...props}
        name={name}
        rules={rules}
        errorRender={errorRender}
        initialValue={initialValue}
        valuePropName={valuePropName}
        hiddenError={ctx.hiddenError}
      >
        {children}
      </FormItemContent>
      {formItemExtra}
    </div>
  );
};
