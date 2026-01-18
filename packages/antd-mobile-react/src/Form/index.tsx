import {Form as InternalForm, FormProps, FormItemProps} from "@trionesdev/antd-mobile-base-react";
import FormItem from "./FormItem";

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
