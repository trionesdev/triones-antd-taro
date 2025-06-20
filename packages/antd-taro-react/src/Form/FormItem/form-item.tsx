import React, {CSSProperties, FC, ReactElement, ReactNode} from "react"
import {FormItemLabel} from "./form-item-label";
import {FormItemInput} from "./form-item-input";
import {NamePath, Rule} from "rc-field-form/lib/interface";
import classNames from "classnames";
import {useFormContext} from "../hooks/useFormContext";
import {FormItemLayout, FormLayoutAlign} from "../form";

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
  rules?: Rule[]
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
                                              rules,
                                              errorRender,
                                              ...props
                                            }) => {
  const {layout: formLayout, labelAlign: formLayoutAlign, labelWidth: formLabelWidth,hiddenError} = useFormContext()
  const formItemLayout = layout ? layout : (formLayout === 'inline' ? 'horizontal' : formLayout)
  const formItemAlign = labelAlign ? labelAlign : formLayoutAlign || 'left'
  const formItemLabelWidth = labelWidth ? labelWidth : formLabelWidth
  const clsPrefix = "triones-antm-form-item"
  return <div className={classNames(clsPrefix, `${clsPrefix}-${formItemLayout}`, className)} style={style}>
    {label && <FormItemLabel className={classNames(`${clsPrefix}-label`, `${clsPrefix}-label-${formItemAlign}`)}
                             style={{width: formItemLabelWidth}} label={label} required={required}/>}
    <FormItemInput className={`${clsPrefix}-input`} {...props} name={name} rules={rules}
                   errorRender={errorRender} hiddenError={hiddenError}>{children}</FormItemInput>
  </div>
}
