import {Toast as InternalToast, ToastProps} from "./toast"

type InternalToastType = typeof InternalToast;

type CompoundedComponent = InternalToastType & {

}

const Toast = InternalToast as CompoundedComponent
export type {ToastProps};
export default Toast
