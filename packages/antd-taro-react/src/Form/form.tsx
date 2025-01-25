import React from "react";
import FieldForm from "rc-field-form";
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef} from 'rc-field-form/lib/interface';
import {FormInstance} from "./interface";
import {FormContext} from "./context";
import "./style.scss"

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';
export type FormLayoutAlign = 'left' | 'right';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  layout?: FormLayout
  form: FormInstance<Values>
  labelAlign?: FormLayoutAlign
  labelWidth?: number
  requiredMark?: RequiredMark
}

export const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = ({
                                                                                   children,
                                                                                   layout,
                                                                                   labelAlign,
                                                                                   labelWidth,
  requiredMark,
                                                                                   ...props
                                                                                 }, ref) => {
  return <FormContext.Provider value={{
    layout: layout || 'horizontal',
    labelAlign: labelAlign || 'left',
    labelWidth: labelWidth,
    requiredMark: requiredMark || true
  }}>
    <FieldForm {...props} onFinishFailed={(errorInfo) => {
      console.log(errorInfo)
    }} >{children}</FieldForm>
  </FormContext.Provider>
}

export default InternalForm;
