import FieldForm from 'rc-field-form';
import InternalForm, {FormProps, useWatch} from "./form";
import {ErrorList} from "./ErrorList"
import useForm from "./hooks/useForm";
import {FormItemLayout, FormLayout, FormHorizontalAlign, FormItemVerticalAlign} from "./types";

export {useFormContext} from "./hooks/useFormContext";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  // Item: typeof FormItem;
  List: typeof FieldForm.List;
  ErrorList: typeof ErrorList;
  useWatch: typeof useWatch;
}

const Form = InternalForm as CompoundedComponent;
Form.List = FieldForm.List;
Form.ErrorList = ErrorList;
Form.useForm = useForm;
// Form.Item = FormItem;
Form.useWatch = useWatch;

export type {
  FormProps,
  FormLayout,
  FormItemLayout,
  FormHorizontalAlign,
  FormItemVerticalAlign,
}

export default Form;
