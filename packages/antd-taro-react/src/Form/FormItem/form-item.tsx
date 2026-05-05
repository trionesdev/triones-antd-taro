import React, {CSSProperties, FC, ReactElement, ReactNode} from "react"
import {FormItemLabel} from "./form-item-label";
import {FormItemContent} from "./form-item-content";
import {NamePath, Rule} from "rc-field-form/lib/interface";
import classNames from "classnames";

import {Field} from "rc-field-form";
import {
  FormItemLayout,
  FormHorizontalAlign,
  useFormContext,
  Form
} from "@trionesdev/antd-mobile-base-react";
import {useTaro} from "../../hooks";

export type FormItemProps = {
  className?: string;
  style?: CSSProperties
  children?: ReactElement;
  layout?: FormItemLayout;
  label?: ReactNode;
  labelAlign?: FormHorizontalAlign
  labelWidth?: number
  contentAlign?: FormHorizontalAlign
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
  const {isTaroWeApp, isTaroWeb} = useTaro()
  // const { layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth, hiddenError, extra: formExtra } = useFormContext()
  const ctx = useFormContext()
  const formItemLayout = layout ? layout : (ctx.layout === 'inline' ? 'horizontal' : ctx.layout)
  const formItemAlign = labelAlign ? labelAlign : ctx.labelAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : ctx.labelWidth
  const formItemExtra = extra !== undefined ? extra : ctx.extra
  const formItemWrapperAlign = contentAlign ? contentAlign : ctx.contentAlign
  const clsPrefix = "triones-antm-form-item"

  if (noStyle) {
    return <Field
      name={name}
      rules={rules}
      valuePropName={valuePropName}
      trigger={'onChange'}
      initialValue={initialValue}
    >
      {children}
    </Field>
  }

  return <div className={classNames(clsPrefix, `${clsPrefix}-${formItemLayout}`, className, {
    [`${clsPrefix}-hidden`]: hidden,
    [`h5`]: isTaroWeb,
    [`wx`]: isTaroWeApp
  })} style={style}>
    {label && <FormItemLabel className={classNames(`${clsPrefix}-label`, `${clsPrefix}-label-${formItemAlign}`)}
                             style={{width: formItemLabelWidth}} layout={formItemLayout} label={label}
                             required={required}/>}
    <FormItemContent
      className={classNames(`${clsPrefix}-content`, `${clsPrefix}-content-${formItemWrapperAlign}`)} {...props}
      name={name} rules={rules}
      errorRender={errorRender} initialValue={initialValue} valuePropName={valuePropName}
      hiddenError={ctx.hiddenError}>{children}</FormItemContent>
    {formItemExtra}
  </div>
}
