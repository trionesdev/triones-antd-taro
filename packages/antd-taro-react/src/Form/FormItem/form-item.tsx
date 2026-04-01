import React, { CSSProperties, FC, ReactElement, ReactNode } from "react"
import { FormItemLabel } from "./form-item-label";
import { FormItemInput } from "./form-item-input";
import { NamePath, Rule } from "rc-field-form/lib/interface";
import classNames from "classnames";

import { Field } from "rc-field-form";
import {FormItemLayout, FormLayoutAlign, useFormContext} from "@trionesdev/antd-mobile-base-react";

export type FormItemProps = {
  className?: string;
  style?: CSSProperties
  children?: ReactElement;
  layout?: FormItemLayout;
  label?: ReactNode;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  wrapperAlign?: FormLayoutAlign
  name?: NamePath;
  required?: boolean
  hidden?: boolean
  noStyle?: boolean
  rules?: Rule[]
  initialValue?: any
  valuePropName?: string
  errorRender?: (errors?: any[]) => React.ReactNode;
  extra?: ReactNode;
}

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
  ...props
}) => {
  // const { layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth, hiddenError, extra: formExtra } = useFormContext()
  const ctx = useFormContext()
  const formItemLayout = layout ? layout : (ctx.layout === 'inline' ? 'horizontal' : ctx.layout)
  const formItemAlign = labelAlign ? labelAlign : ctx.labelAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : ctx.labelWidth
  const formItemExtra = extra !== undefined ? extra : ctx.extra
  const formItemWrapperAlign = wrapperAlign ? wrapperAlign : ctx.wrapperAlign
  const clsPrefix = "triones-antm-form-item"

  if (noStyle) {
    return <Field
      name={name}
      rules={rules}
      trigger={'onChange'}
      initialValue={initialValue}
    >
      {children}
    </Field>
  }

  return <div className={classNames(clsPrefix, `${clsPrefix}-${formItemLayout}`, className, {
    [`${clsPrefix}-hidden`]: hidden
  })} style={style}>
    {label && <FormItemLabel className={classNames(`${clsPrefix}-label`, `${clsPrefix}-label-${formItemAlign}`)}
      style={{ width: formItemLabelWidth }} layout={formItemLayout} label={label} required={required} />}
    <FormItemInput className={classNames(`${clsPrefix}-input`, {
      [`${clsPrefix}-input-${formItemWrapperAlign}`]: formItemWrapperAlign
    })} {...props} name={name} rules={rules}
      errorRender={errorRender} initialValue={initialValue} hiddenError={ctx.hiddenError}>{children}</FormItemInput>
    {formItemExtra}
  </div>
}
