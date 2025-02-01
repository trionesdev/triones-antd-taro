import React, {CSSProperties, FC, PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react/src";

const popupCls = "triones-antm-popup";

export type Position = "top" | "bottom" | "left" | "right";


export type PopupModalProps = {
  styles?: {
    body?: CSSProperties;
  }
  /**
   * @description Modal 完全关闭后的回调
   * @default
   */
  afterClose?: () => void;
  open?: boolean,
  position?: Position
  closable?: boolean
  maskClosable?: boolean
  /**
   * @description 关闭时销毁 Modal 里的子元素
   * @default false
   */
  destroyOnClose?: boolean
  /**
   * @description 设置 Modal 的 z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * @description 打开和关闭 Modal 时动画结束后的回调
   * @default
   */
  afterOpenChange?: (open: boolean) => void;
  onDestroy?: () => void;

}

export const PopupModal: FC<PropsWithChildren<PopupModalProps>> = ({
                                                                     children,
                                                                     styles,
                                                                     afterClose,
                                                                     open,
                                                                     position = 'top',
                                                                     closable = true,
                                                                     maskClosable = true,
                                                                     destroyOnClose = false,
                                                                     zIndex = 1000,
                                                                     afterOpenChange,
                                                                     onDestroy
                                                                   }) => {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(open || false);
  const handleClose = () => {
    setInternalOpen(false);
    afterClose?.()
  }

  useEffect(() => {
    afterOpenChange?.(internalOpen!);
    if (!internalOpen) {
      if (destroyOnClose) {
        onDestroy?.()
      }
    }
  }, [internalOpen]);

  return <div className={classNames(popupCls)} style={{zIndex, display: internalOpen ? 'block' : 'none'}}>
    <div className={classNames(`${popupCls}-mask`)} onClick={() => {
      if (maskClosable) {
        handleClose();
      }
    }}></div>
    <div className={classNames(`${popupCls}-body`, `${popupCls}-${position}`)} style={styles?.body}>
      {closable && <>
        <CloseOutline className={classNames(`${popupCls}-close`)} onClick={() => {
          handleClose()
        }}/>
      </>}
      {children}
    </div>
  </div>
}
