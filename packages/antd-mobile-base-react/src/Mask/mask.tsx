import React, {FC, PropsWithChildren} from "react";
import "./style.scss"

import {MaskModal, MaskModalProps} from "./mask-modal";


export type MaskProps = Omit<MaskModalProps, 'onDestroy'>
export const Mask: FC<PropsWithChildren<MaskProps>> = ({
                                                         children,
                                                         open = false,
                                                         ...rest
                                                       }) => {

  if (!open) {
    return null;
  }

  return <MaskModal {...rest} open={open}>{children}</MaskModal>;
}
