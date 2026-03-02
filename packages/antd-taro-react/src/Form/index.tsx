import {Form as InternalForm,FormProps} from "@trionesdev/antd-mobile-base-react";
import FormItem, { FormItemProps } from "./FormItem";
import "./style.scss"

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  Item: typeof FormItem;
}

const Form = InternalForm as CompoundedComponent;
Form.Item = FormItem;

export type {
  FormProps,
  FormItemProps
}
export default Form;
