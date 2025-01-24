import InternalForm, {FormProps} from "./form";
import {FormItem, FormItemProps} from "./FormItem/form-item";
import useForm from "./hooks/useForm";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  Item: typeof FormItem;
}

const Form = InternalForm as CompoundedComponent;
Form.useForm = useForm;
Form.Item = FormItem;

export type {
  FormProps,
  FormItemProps
}
export default Form;
