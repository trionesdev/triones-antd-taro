import {Toast as ToastInst,InternalToast , ToastProps} from "./toast"

type InternalToastType = typeof InternalToast;

type CompoundedComponent = InternalToastType & {
  show: typeof ToastInst.show
}

const Toast = InternalToast as CompoundedComponent
Toast.show = ToastInst.show
export type {ToastProps};
export default Toast
