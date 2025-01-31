import React, {FC, PropsWithChildren, useEffect} from "react";
import classNames from "classnames";
import "./style.scss"

const popupCls = "triones-antm-popup";

export type Position = "top" | "bottom" | "left" | "right";


export type PopupModalProps = {
  /**
   * @description Modal 完全关闭后的回调
   * @default
   */
  afterClose?: () => void;
  open?: boolean,
  position?: Position
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
                                                                     afterClose,
                                                                     open,
                                                                     position = 'top',
                                                                     maskClosable = true,
                                                                     destroyOnClose = false,
                                                                     zIndex = 1000,
                                                                     afterOpenChange,
                                                                     onDestroy
                                                                   }) => {
  // const {open,setOpen} = useContext(PopupContext);
  const [internalOpen, setInternalOpen] = React.useState<boolean>(open || false);
  const handleClose = () => {
    setInternalOpen(false);
    // setOpen?.(false);
    afterClose?.()
    if (destroyOnClose) {
      onDestroy?.()
    }
  }

  useEffect(() => {
    afterOpenChange?.(internalOpen!);
  }, [internalOpen]);

  return <div className={classNames(popupCls)} style={{zIndex, display: internalOpen ? 'block' : 'none'}}>
    <div className={classNames(`${popupCls}-mask`)} onClick={() => {
      if (maskClosable) {
        handleClose();
      }
    }}></div>
    <div className={classNames(`${popupCls}-content`, `${popupCls}-${position}`)}>{children}</div>
  </div>
}
