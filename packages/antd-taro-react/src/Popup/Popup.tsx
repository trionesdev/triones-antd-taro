import React, {PropsWithChildren, useEffect, useState} from "react";
import {RootPortal, View} from "@tarojs/components";
import classNames from "classnames";
import {CloseOutline, LeftOutline} from "@trionesdev/antd-mobile-icons-react";

const cls = 'triones-antm-popup'

export type PopupProps = {
  open?: boolean;
  title?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  /**
   * @description 弹窗高度,当position 为 `top`或`bottom` 时生效
   * @default null
   */
  height?: number | string;
  /**
   * @description 弹窗最大高度,当position 为 `top`或`bottom` 时生效
   * @default null
   */
  maxHeight?: number | string;
  /**
   * @description 弹窗最小高度,当position 为 `top`或`bottom` 时生效
   * @default null
   */
  minHeight?: number | string;
  /**
   * @description 弹窗宽度,当position 为 `left`或`right` 时生效
   * @default null
   */
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  backable?: boolean;
  backIcon?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  /**
   * @description 点击遮罩层是否关闭
   * @default true
   */
  showOverlay?: boolean;
  overlayClosable?: boolean;
  /**
   * @description 关闭的时候销毁组件
   * @default false
   */
  destroyOnHidden?: boolean;
  onClose?: () => void;
  onBack?: () => void;
  afterClose?: () => void;
  afterOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  round?: boolean;

  zIndex?: number;
  duration?: number;
  styles?: {
    overlay?: React.CSSProperties;
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
  };
}

export const Popup: React.FC<PropsWithChildren<PopupProps>> = ({
                                                                 children,
                                                                 open = false,
                                                                 title,
                                                                 position = 'bottom',
                                                                 height,
                                                                 maxHeight,
                                                                 minHeight,
                                                                 width,
                                                                 maxWidth,
                                                                 minWidth,
                                                                 backable = false,
                                                                 backIcon,
                                                                 closable = false,
                                                                 closeIcon,
                                                                 showOverlay = true,
                                                                 overlayClosable = true,
                                                                 destroyOnHidden = false,
                                                                 onClose,
                                                                 onBack,
                                                                 afterClose,
                                                                 afterOpenChange,
                                                                 className,
                                                                 style,
                                                                 round = false,
                                                                 zIndex = 998,
                                                                 duration = 300,

                                                                 styles
                                                               }) => {
  const [render, setRender] = useState(open);
  const [internalOpen, setInternalOpen] = useState(open || false);

  const handleBack = () => {
    setInternalOpen(false);
    onBack?.();
  };

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  useEffect(() => {
    if (internalOpen) {
      setRender(true);
      afterOpenChange?.(true);
      const timer = setTimeout(() => {

      }, 50);
      return () => clearTimeout(timer);
    } else {

      afterOpenChange?.(false);
      const timer = setTimeout(() => {
        setRender(false);
        afterClose?.();
      }, duration);
      if (destroyOnHidden) {
        setRender(false);
      }
      return () => clearTimeout(timer);
    }
  }, [internalOpen])

  useEffect(() => {
    if (open === undefined) {
      return
    }
    if (open !== internalOpen) {
      setInternalOpen(open);
    }
  }, [open]);

  if (!render) return null;
  return (
    <RootPortal>
      <View catchMove={true} className={classNames(`${cls}`, {[`${cls}-open`]: internalOpen}, className)}
            style={{...style, zIndex, transitionDuration: `${duration}ms`}}>
        {showOverlay && <View className={classNames(`${cls}-overlay`)} onClick={(e) => {
          if (e.target === e.currentTarget) {
            if (overlayClosable) {
              handleClose()
            }
          }
        }}/>}
        <View className={classNames(`${cls}-container`, `${cls}-${position}`, {[`${cls}-round`]: round})}
              style={{
                ...styles?.container,
                width: width,
                maxWidth: maxWidth,
                minWidth: minWidth,
                height: height,
                maxHeight: maxHeight,
                minHeight: minHeight
              }}>

          {(title || backable || closable) &&
            <div className={`${cls}-header`} style={styles?.header}>
              {backable &&
                <div className={`${cls}-header-back`} onClick={handleBack}>{backIcon || <LeftOutline/>}</div>}
              {title && <div className={`${cls}-header-title`} style={styles?.title}>{title}</div>}
              {closable &&
                <div className={`${cls}-header-close`} onClick={handleClose}>{closeIcon || <CloseOutline/>}</div>}
            </div>}
          <div className={`${cls}-body`} style={styles?.body}>
            {children}
          </div>
        </View>
      </View>
    </RootPortal>
  );
}
