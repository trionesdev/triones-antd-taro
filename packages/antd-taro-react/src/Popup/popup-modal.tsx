import React from "react";
import {FC, PropsWithChildren} from "react";
import classNames from "classnames";
import "./style.scss"
import {Position} from "./popup";

const popupCls = "triones-antm-popup";
export type PopupModalProps = {
  open?: boolean,
  position?: Position
  onDestroy?: () => void;
}

export const PopupModal: FC<PropsWithChildren<PopupModalProps>> = ({
                                                                     children,
                                                                     position = 'top',
                                                                   }) => {
  return <div className={classNames(popupCls)}>
    <div className={classNames(`${popupCls}-mask`)}></div>
    <div className={classNames(`${popupCls}-content`, `${popupCls}-${position}`)}>{children}</div>
  </div>
}
