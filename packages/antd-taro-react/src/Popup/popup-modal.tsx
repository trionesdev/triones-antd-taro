import React, {CSSProperties, FC, PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import "./style.scss"
import {CloseOutline} from "@trionesdev/antd-taro-icons-react/src";

const popupCls = "triones-antm-popup";

export type Position = "top" | "bottom" | "left" | "right";


export type PopupModalProps = {
  /**
   * @description 样式
   * @default horizontal
   */
  styles?: {
    body?: CSSProperties;
  }
  /**
   * @description Modal 完全关闭后的回调
   * @default
   */
  afterClose?: () => void;
  /**
   * @description 是否打开
   * @default false
   */
  open?: boolean,
  /**
   * @description 打开位置
   * @default bottom
   */
  position?: Position
  /**
   * @description 是否可以关闭(显示关闭按钮)
   * @default false
   */
  closable?: boolean
  /**
   * @description 是否蒙层关闭
   * @default true
   */
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
                                                                     position = 'bottom',
                                                                     closable = false,
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

  useEffect(() => {
    if (open == undefined) {
      return
    }
    if (open == internalOpen) {
      return;
    }
    setInternalOpen(open);
  }, [open]);

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
