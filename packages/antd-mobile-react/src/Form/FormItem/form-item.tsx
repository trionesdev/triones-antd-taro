import {
  FormItemLayout,
  FormHorizontalAlign,
  FormItemVerticalAlign,
  useFormContext,
} from '@trionesdev/antd-mobile-base-react';
import classNames from 'classnames';
import { Field } from 'rc-field-form';
import { NamePath, Rule } from 'rc-field-form/lib/interface';
import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import { FormItemInput } from './form-item-input';
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
  wrapperAlign?: FormHorizontalAlign;
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
  verticalAlign?: FormItemVerticalAlign;
};

export const FormItem: FC<FormItemProps> = ({
  className,
  style,
  children,
  layout,
  label,
  labelAlign,
  labelWidth,
  wrapperAlign,
  name,
  required,
  hidden = false,
  noStyle = false,
  rules,
  initialValue,
  valuePropName,
  errorRender,
  extra,
  verticalAlign,
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
  const formItemWrapperAlign = wrapperAlign ? wrapperAlign : ctx.wrapperAlign;
  const formItemVerticalAlign = verticalAlign
    ? verticalAlign
    : ctx.verticalAlign || 'center';
  const clsPrefix = 'triones-antm-form-item';

  if (noStyle) {
    return (
      <Field
        name={name}
        rules={rules}
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
          [`${clsPrefix}-${formItemVerticalAlign}`]:
            formItemLayout === 'horizontal',
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
      <FormItemInput
        className={classNames(`${clsPrefix}-input`, {
          [`${clsPrefix}-input-${formItemWrapperAlign}`]: formItemWrapperAlign,
        })}
        {...props}
        name={name}
        rules={rules}
        errorRender={errorRender}
        initialValue={initialValue}
        hiddenError={ctx.hiddenError}
      >
        {children}
      </FormItemInput>
      {formItemExtra}
    </div>
  );
};
