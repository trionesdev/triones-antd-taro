import React, {CSSProperties, FC, ReactElement, ReactNode} from "react"
import {FormItemLabel} from "./form-item-label";
import {FormItemInput} from "./form-item-input";
import {NamePath, Rule} from "rc-field-form/lib/interface";
import classNames from "classnames";
import {useFormContext} from "../hooks/useFormContext";
import {FormItemLayout, FormLayoutAlign} from "../form";
import {Field} from "rc-field-form";

export type FormItemProps = {
  className?: string;
  style?: CSSProperties
  children?: ReactElement;
  layout?: FormItemLayout;
  label?: ReactNode;
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  name?: NamePath;
  required?: boolean
  hidden?: boolean
  noStyle?: boolean
  rules?: Rule[]
  initialValue?: any
  valuePropName?: string
  errorRender?: (errors?: any[]) => React.ReactNode;
}

export const FormItem: FC<FormItemProps> = ({
                                              className,
                                              style,
                                              children,
                                              layout,
                                              label,
                                              labelAlign,
                                              labelWidth,
                                              name,
                                              required,
                                              hidden = false,
                                              noStyle = false,
                                              rules,
                                              initialValue,
                                              valuePropName,
                                              errorRender,
                                              ...props
                                            }) => {
  const {layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth, hiddenError} = useFormContext()
  const formItemLayout = layout ? layout : (formLayout === 'inline' ? 'horizontal' : formLayout)
  const formItemAlign = labelAlign ? labelAlign : formLayoutAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : formLabelWidth
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
                             style={{width: formItemLabelWidth}} label={label} required={required}/>}
    <FormItemInput className={`${clsPrefix}-input`} {...props} name={name} rules={rules}
                   errorRender={errorRender} initialValue={initialValue} hiddenError={hiddenError}>{children}</FormItemInput>
  </div>
}
