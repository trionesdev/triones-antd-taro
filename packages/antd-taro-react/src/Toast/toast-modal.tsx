import {FC} from "react";
import classNames from "classnames";
import React from "react";

const toastCls = "triones-antm-toast";

export type ToastModalProps = {
  open?: boolean,
  maskClosable?: boolean
  onDestroy?: () => void;
}
export const ToastModal: FC<ToastModalProps> = ({
                                                  open,
                                                  maskClosable
                                                }) => {
  return <div className={classNames(toastCls)}>

  </div>
}
