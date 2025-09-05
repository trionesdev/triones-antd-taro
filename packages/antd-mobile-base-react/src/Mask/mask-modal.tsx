import React, {CSSProperties, FC, PropsWithChildren} from "react";
import {Position} from "../Popup/popup-modal";
import classNames from "classnames";

const maskCls = "triones-antm-mask2";

export type MaskModalProps = {
  className?: string
  style?: CSSProperties
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
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onDestroy?: () => void;

}

export const MaskModal: FC<PropsWithChildren<MaskModalProps>> = ({className, style, children, zIndex,open, onMaskClick}) => {
  return <div className={classNames(maskCls, {[`${maskCls}-open`]: open})} style={{...style, zIndex}}
              onClick={onMaskClick}>
    <div className={classNames(`${maskCls}-inner`, className)}>
      {children}
    </div>
  </div>
}
