import React from "react";
import FieldForm, {Field, useForm} from "rc-field-form";
import type {FormProps as RcFormProps} from 'rc-field-form/lib/Form';
import type {FormRef, InternalNamePath, ValidateErrorEntity} from 'rc-field-form/lib/interface';
import {FormInstance} from "./interface";
import {FormContext} from "@trionesdev/antd-taro-react/Form/context";


export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  form: FormInstance<Values>
}

export const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
  return <FormContext.Provider value={{}}>
    <FieldForm {...props} ref={ref}>{props.children}</FieldForm>
  </FormContext.Provider>
}

export default InternalForm;
