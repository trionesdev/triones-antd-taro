import FieldForm from 'rc-field-form';
import InternalForm, { FormProps, useWatch } from "./form";
import FormItem, { FormItemProps } from "./FormItem";
import useForm from "./hooks/useForm";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  Item: typeof FormItem;
  List: typeof FieldForm.List;
  useWatch: typeof useWatch;
}

const Form = InternalForm as CompoundedComponent;
Form.List = FieldForm.List;
Form.useForm = useForm;
Form.Item = FormItem;
Form.useWatch = useWatch;

export type {
  FormProps,
  FormItemProps
}
export default Form;
