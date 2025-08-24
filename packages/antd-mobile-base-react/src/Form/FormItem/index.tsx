import {FormItemProps, FormItem as InternalFromItem} from "./form-item";

type InternalFormItemType = typeof InternalFromItem
type CompoundedComponent = InternalFormItemType
const FormItem = InternalFromItem as CompoundedComponent

export type {
  FormItemProps
}
export default FormItem
